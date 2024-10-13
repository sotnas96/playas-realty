import { useEffect, useState } from "react"
import { createPropertyAsync, uploadNewProperty } from "../store/properties";
import { useDispatch, useSelector } from 'react-redux';

const usePropertyForm = (initialValues) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const [propertyValid, setProperty] = useState(initialValues);
    const [propertyId, setPropertyId] = useState(null);
    const [errors, setErrors] = useState(false);
    const [utilitiesList, setUtilitiesList] = useState([])
    const [allowImagesForm, setAllowImagesForm] = useState(false);
    const [backendValidationErrors, setBackendValidationErrors] = useState([])

    useEffect ((e)=> {
        setProperty({...propertyValid, utilities: utilitiesList})
    }, [utilitiesList])
    const handleInput = (e) => {
        setProperty({...propertyValid, [e.target.name]: e.target.value})
    };
    const handleInputUtilities = event => {
        const { checked, name, value} = event.target
        checked ? setUtilitiesList([...utilitiesList, value]) :  setUtilitiesList(utilitiesList.filter(option => option != value))
        setProperty({...propertyValid, [name]: utilitiesList });
    }
    const validateInputs = () => {
        let errorExist = false
        let propertyData = {...propertyValid}
        if (propertyData.type == 'terreno') {
            const {beds, baths, parking, ...rest} = propertyData
            propertyData = rest;
        }
        Object.entries(propertyData).forEach(([key, value]) => {
                if(!value){
                    errorExist = true
                }
            return;
        });
        return { errorExist, propertyData };
    };
    const handleForm = async (e)=> {
        setErrors(false)
        setBackendValidationErrors([])
        e.preventDefault()
        const {errorExist, propertyData} = validateInputs();
        if (errorExist) {
            return setErrors(true);
        }
        try {
            const newProperty = await dispatch(createPropertyAsync({propertyData, token}))
            if (!newProperty.payload.success) return setBackendValidationErrors(newProperty.payload.errors);
            setPropertyId({id:newProperty.payload.data._id, type:newProperty.payload.data.type, property:newProperty.payload.data.property});
            setAllowImagesForm(true);
            return
        } catch (error) {
            console.log(error);
        }
    }
    return {
        propertyValid,
        errors,
        allowImagesForm,
        propertyId,
        backendValidationErrors,
        handleInput,
        handleInputUtilities,
        handleForm,
    }
};
export default usePropertyForm;
