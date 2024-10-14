import {useState } from "react";
import { RingLoader } from "react-spinners";
import FormProperty from "./FormProperty";
import usePropertyForm from "../../../hooks/usePropertyForm";
import ImagesForm from "./ImagesForm";
import useImagesForm from "../../../hooks/useImagesForm";
const propertyData = {
    property: '',
    address:'',
    price:'',
    currency:'',
    sqrft:'',
    pets: true,
    category:'',
    type:'',
    baths:'',
    beds: '',
    parking: '',
    available:'',
    utilities:[],
    description:'',

};
const CreateProperty = (props) => {

    const { propertyValid, errors, allowImagesForm, propertyId, backendValidationErrors, handleInput, handleInputUtilities, handleForm } = usePropertyForm(propertyData);
    const { houseImages, imgError, loadingUpload, progress, isSuccessfull, handleImgInput, handleImagesForm } = useImagesForm(propertyId);
    return (
        <div className="p-2 w-100">
        { 
            !loadingUpload ? 
            (
                    !allowImagesForm ? 
                    (<FormProperty
                        property={propertyValid}
                        handleInput={handleInput}
                        handleInputUtilities={handleInputUtilities}
                        handleForm={handleForm}
                        errors={errors}
                        backendValidationErrors={backendValidationErrors}
                    />
                    ) :
                    (  <ImagesForm
                            houseImages={houseImages}
                            imgError={imgError}
                            handleImgInput={handleImgInput}
                            handleImagesForm={handleImagesForm}

                        />
                    )
            ) : 
            (
                <div className="bg-white loading-box align-content-center">
                    { isSuccessfull ?
                        (<p className="text-success fw-bold my-2">Property loaded!</p>)
                      : 
                        (<div>
                            <p className="m-2">Cargando imagenes porfavor espere... {progress}</p>
                            {/* <p className="fs-3 fw-bold">{progress}%</p> */}
                        </div>
                        )
                     }
                    <div className="d-flex justify-content-center">
                        <RingLoader color='#ffd814'/>
                    </div>
                </div>
            )}
        </div>
    )
};
export default CreateProperty;