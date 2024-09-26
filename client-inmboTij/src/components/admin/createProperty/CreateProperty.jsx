import { useEffect, useRef, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { createPropertyAsync } from "../../../store/properties";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
const propertyData = {
    property: '',
    address:'',
    price:'',
    sqrft:'',
    year:'',
    beds:'',
    baths:'',
    parking:'',
    pets:'',
    category:'',
    type:'',
    available:'',
    utilities:[],
    description:'',
    houseImg:[]

};
const CreateProperty = (props) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const errorDisplay = useRef();
    const dispatch = useDispatch()
    const [property, setProperty] = useState(propertyData)
    const [utilitiesList, setUtilitiesList] = useState([])
    const [errors, setErrors] = useState(propertyData)
    const [houseImages, setHouseImages]= useState([])
    const [imageFiles, setImageFiles] = useState([]);
    const [loadingProperty, setLoadingProperty] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const handleInput = event => {
        setProperty({...property, [event.target.name]: event.target.value})
    }
    useEffect ((e)=> {
        setProperty({...property, utilities: utilitiesList})
    }, [utilitiesList])

    useEffect (()=> {
        
        setProperty({...property, houseImg: imageFiles})
    }, [imageFiles])
    const handleInputUtilities = event => {
        const { checked, name, value} = event.target
        checked ? setUtilitiesList([...utilitiesList, value]) :  setUtilitiesList(utilitiesList.filter(option => option != value))
        setProperty({...property, [name]: utilitiesList });
    }
    
    const handleImgInput = (e) => {
        const files = Array.from(e.target.files);
        const imgUrls = files.map(file => URL.createObjectURL(file));
        setImageFiles(files);
        setHouseImages(imgUrls);
 
    }  
    const handleForm = async(event)=> {
        setSuccessMsg(false)
        setLoadingProperty(true)
        event.preventDefault();
        let errorExist = false
        errorDisplay.current.innerHTML =  `<p className=""><p/>`;
        Object.entries(property).forEach(([key, value]) => {
            if(!value){
                setLoadingProperty(false)
                errorDisplay.current.innerHTML = `<p>Please complete the empty fields</p>`;
                errorExist = true
            }
        });
        if (property.houseImg.length == 0 ) errorDisplay.current.innerHTML = `<p>Please upload images</p>`;
        if (errorExist) return 
        setProperty({...propertyData});
        try {
            const formData = new FormData();
            for (const key in property) {
                formData.append(key, property[key]);
            }
            imageFiles.forEach((file, index) => {
                formData.append('houseImg', file);
            })
            const response = await dispatch(createPropertyAsync({property: formData, token}));
            if (! response.payload?.error) {
                setSuccessMsg(true);
                setTimeout(()=> {
                    setLoadingProperty(false);
                    navigate("/admin/properties")
                },1000)
            }

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="p-2 w-100">
        { 
            !loadingProperty ? 
            (
                <div className="bg-white">
                <div className="m-2 p-2">
                    <p className="fw-semibold fs-4">Create new house</p>
                </div>
                <form className="row g-3 text-start p-2 m-2" onSubmit={handleForm} >
                    <div className="form-floating mb-3 col-md-6">
                        <input type="text" name="property" className="form-control" id="floatingInput validationCustom01" placeholder="name@example.com" onChange={handleInput}/>
                        <label for="floatingInput">Name</label>
                    </div>

                    <div className="form-floating col-md-6">
                        <input name="address" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handleInput}/>
                        <label for="inputAddress" className="form-label">Address</label>
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="" className="form-label">Type</label>
                        <select name="type" className="form-select" aria-label="Default select example" onChange={handleInput}>
                            <option value=""selected disable>Choose..</option>
                            <option value="casa" >Casa</option>
                            <option value="apartamento" >Apartamento</option>
                            <option value="terreno">terreno</option>
                        </select>
                    </div>
                    <div className='col-md-4'>
                        <label for="input" className="form-label">Price</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input name="price" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={handleInput}/>
                            <span className="input-group-text">.00</span>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <label for="input" className="form-label">Sqrft</label>
                        <div className="input-group mb-3">
                            <input name="sqrft" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={handleInput}/>
                            <span className="input-group-text">m2</span>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <label for="input" className="form-label">Year</label>
                        <div className="input-group mb-3">
                            <input name="year" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={handleInput}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="inputCity" className="form-label">Beds</label>
                        <input name="beds" type="number" className="form-control" id="inputCity" onChange={handleInput}/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Bath</label>
                        <input name="baths" type="number" className="form-control" id="inputState" onChange={handleInput}/>
                        
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="" className="form-label">Parking</label>
                        <select name="parking" className="form-select" aria-label="Default select example" onChange={handleInput}>
                            <option value=""selected disable>Choose..</option>
                            <option value="indoor">Indoor</option>
                            <option value="outdoor">Outdoor</option>
                        </select>
                    </div>
                    
                    <div className='col-md-4'>
                        <label htmlFor="" className="form-label">Pets</label>
                        <select name="pets" className="form-select" aria-label="Default select example" onChange={handleInput}>
                            <option value="true" selected>Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="" className="form-label">Category</label>
                        <select name="category" className="form-select" aria-label="Default select example" onChange={handleInput}>
                            <option value=""selected disable>Choose..</option>
                            <option value="rent">Rent</option>
                            <option value="sale">Sale</option>
                        </select>
                    </div>
                    <div className="mb-3 col-md-6">
                        <div>
                            <label htmlFor="">Utilities</label> 
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="utilities" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="electricity" onChange={handleInputUtilities}/>
                            <label className="form-check-label" for="inlineCheckbox1">Electricity</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="utilities" className="form-check-input" type="checkbox" id="inlineCheckbox2" value="water" onChange={handleInputUtilities}/>
                            <label className="form-check-label" for="inlineCheckbox2">Water</label>
                        </div>
                            <div className="form-check form-check-inline">
                            <input name="utilities" className="form-check-input" type="checkbox" id="inlineCheckbox3" value="gas" onChange={handleInputUtilities}/>
                            <label className="form-check-label" for="inlineCheckbox3">Gas</label>
                        </div>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="" className="form-label">Available now</label>
                        <select name="available" className="form-select" aria-label="Default select example" onChange={handleInput}>
                            <option value=""selected disable>Elegir..</option>
                            <option value="true" >SI</option>
                            <option value="false" >NO</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInput}></textarea>
                    </div>

                    <div className="col-mb-3">
                        <label for="formFileMultiple" className="form-label">Multiple files input example</label>
                        <input name='houseImg' className="form-control" type="file" id="formFileMultiple" multiple onChange={handleImgInput}/>
                        {houseImages.map((img, index) => (
                            <img src={img} key={index} alt={`house img n ${index+1}`} className="small-img-form"/>
                        ))}
                    </div>
                    <div className="col-12 text-end">
                        <button className="btn btn-primary" type="submit">Create</button>
                        <div className='text-danger' ref={errorDisplay}>

                        </div>
                        {/* <p className="my-2 " style={{color:'red'}}>Please complete all the fields</p> */}
                    </div>
                </form>
            </div>
            ) 
            : 
            (
                <div className="bg-white loading-box align-content-center">
                    { successMsg ?
                        (<p className="text-success fw-bold my-2">Property loaded!</p>)
                      : 
                        (<p>Loading new property...</p>)
                     }
                    <div className="d-flex justify-content-center">
                        <RingLoader color='#ffd814'/>
                    </div>
                </div>
            )
            }
            
        </div>
        
        
    )
};
export default CreateProperty;