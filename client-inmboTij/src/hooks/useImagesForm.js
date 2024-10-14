import { useEffect, useState } from "react";
import { uploadImagesAsync } from "../store/properties";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const useImagesForm = (propertyId) => {
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [houseImages, setHouseImages]= useState([])
    const [imageFiles, setImageFiles] = useState([]);
    const [imgError, setImgError] = useState(false)
    const [amountOfBatches, setAmountofBatches] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isSuccessfull, setIsSuccessfull] = useState(false);
    const [loadingUpload, setLoadingUpload] = useState(false);
    const concurrentLimit = 5;
    useEffect (()=> {
        setAmountofBatches(Math.ceil(imageFiles.length / concurrentLimit))
    }, [imageFiles])
    const handleImgInput = (e) => {
        const files = Array.from(e.target.files);
        const imgUrls = files.map(file => URL.createObjectURL(file));
        setImageFiles(files);
        setHouseImages(imgUrls);
        setImgError(false)
    } 
    const handleImagesForm = async(e) => {
        setLoadingUpload(true);
        e.preventDefault();
        if (imageFiles.length == 0) return setImgError(true)
        const uploadImageBatch = async (imageBatch, batchNumber) => {
            const batchFormData = new FormData();
            batchFormData.append('info', JSON.stringify(propertyId));
            imageBatch.forEach(file => {
                batchFormData.append('houseImg', file);
            })
            const response = await dispatch(uploadImagesAsync({imagesInfo: batchFormData, token}))
            console.log(`Bache: ${batchNumber} of ${amountOfBatches}`)

        };
        const imageBatches = [];
        for (let i=0; i < imageFiles.length; i+= concurrentLimit){
            imageBatches.push(imageFiles.slice(i, i+ concurrentLimit));
        }
        for (let i = 0; i < imageBatches.length; i++){
            await uploadImageBatch(imageBatches[i], i+1);
            setProgress((((i+1)/amountOfBatches)*100).toPrecision(3));
        }   
        setIsSuccessfull(true);
        setTimeout(() => {
            navigate('/admin/properties/all')    
            }, 1000)
        
}
    return {
        houseImages,
        imgError,
        progress,
        loadingUpload,
        isSuccessfull,
        handleImgInput,
        handleImagesForm
    }
};
export default useImagesForm;