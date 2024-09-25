import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProperties, updatePropertyAsync } from "../../../store/properties";
import { useRef, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";


const EditProperty = () => {
    const { id } = useParams()
    const token = localStorage.getItem('token')
    const property = useSelector(getProperties).filter(e => e._id == id);
    const extraInput = useRef()
    const [values, setValues] = useState({_id: id});
    const [extras, setExtras] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);
    const [houseImages, setHouseImages]= useState([])
    const [existFiles, setExistFiles] = useState(false)
    const [updateSuccess, setUpdateSuccess] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleForm = (e) => {
        e.preventDefault();
        setUpdateSuccess(false)
        try{
            const formData = new FormData();
            for (const key in values) {
                formData.append(key, values[key]);
            }
            if (existFiles) imageFiles.forEach((file) => formData.append('houseImg', file))
                console.log(formData)
            const reponse = dispatch(updatePropertyAsync({property: formData, token}));
            if (! reponse.payload?.error){
                setUpdateSuccess(true);
                setTimeout(()=> {
                    navigate("/admin/properties");
                }, 1000)
            }
        } catch(error) {
            console.log(error);
        }
    };
    const handleImgInput = (e) => {
        const files = Array.from(e.target.files);
        const imgUrls = files.map(file => URL.createObjectURL(file));
        setImageFiles(files);
        setExistFiles(true)
        setHouseImages(imgUrls);
    };
    const handleInput = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };
    const addExtra = () => {
        if (!extraInput.current.value == '') {
            setExtras([...extras, extraInput.current.value])
        }
        extraInput.current.value = ''
    }
    const removeExtras = () => {
        setExtras([]);
    }
    const handleInputUtilities = () => {
        const { checked, name, value} = event.target
        checked ? setUtilitiesList([...utilitiesList, value]) :  setUtilitiesList(utilitiesList.filter(option => option != value))
        setValues({...property, [name]: utilitiesList });
    };

    return (
        <div>
            <div className="p-2 m-3 text-start">
                <p className="fs-4 fw-semibold">Edit property</p>

            </div>
            { property && 
            <div>
                <form className="row g-3 text-start p-2 m-2" onSubmit={handleForm} >
                        <div className=" mb-3 col-md-6">
                            <label for="input" className="form-label">Name: <span className="fw-bolder">{property[0].property}</span></label>
                            <div className="input-group mb-3">
                                <input name="property"  type="text" className="form-control"  onChange={handleInput}/>
                            </div>
                        </div>

                        <div className="col-md-6">
                              <label for="input" className="form-label">Address: <span className="fw-bolder">{property[0].address}</span></label>
                            <div className="input-group mb-3">
                                <input name="address"  type="text" className="form-control"  onChange={handleInput}/>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <label for="input" className="form-label">City: <span className="fw-bolder">{property[0].city}</span></label>
                            <div className="input-group mb-3">
                                <input name="city"  type="text" className="form-control"  onChange={handleInput}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <label for="input" className="form-label">State: <span className="fw-bolder">{property[0].state}</span></label>
                            <div className="input-group mb-3">
                                <input name="state"  type="text" className="form-control"  onChange={handleInput}/>
                            </div>
                        </div>
                        <div className=" col-md-2">
                            <label for="input" className="form-label">Zip: <span className="fw-bolder">{property[0].zip}</span></label>
                            <div className="input-group mb-3">
                                <input name="zip"  type="text" className="form-control"  onChange={handleInput}/>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="" className="form-label">Type: <span className="fw-bolder">{property[0].type}</span></label>
                            <select name="type" className="form-select" aria-label="Default select example" onChange={handleInput}>
                                <option value=""selected disable>Choose..</option>
                                <option value="casa" >Casa</option>
                                <option value="apartamento" >Apartamento</option>
                                <option value="terreno">terreno</option>
                            </select>
                        </div>
                        <div className='col-md-4'>
                            <label for="input" className="form-label">Price: <span className="fw-bolder">${property[0].price}</span> </label>
                            <div className="input-group mb-3">
                                <span className="input-group-text">$</span>
                                <input name="price" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={handleInput}/>
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <label for="input" className="form-label">Sqrft:  <span className="fw-bolder">{property[0].sqrft} m2</span></label>
                            <div className="input-group mb-3">
                                <input name="sqrft" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={handleInput}/>
                                <span className="input-group-text">m2</span>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <label for="input" className="form-label">Year: <span className="fw-bolder">{property[0].year}</span></label>
                            <div className="input-group mb-3">
                                <input name="year"  type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={handleInput}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label for="inputCity" className="form-label">Beds: <span className="fw-bolder">{property[0].beds}</span></label>
                            <input name="beds" type="number" className="form-control" id="inputCity" onChange={handleInput}/>
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">Bath: <span className="fw-bolder">{property[0].baths}</span></label>
                            <input name="baths" type="number" className="form-control" id="inputState" onChange={handleInput}/>
                            
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="" className="form-label">Parking: <span className="fw-bolder">{property[0].parking}</span></label>
                            <select name="parking" className="form-select" aria-label="Default select example" onChange={handleInput}>
                                <option value=""selected disable>Choose..</option>
                                <option value="indoor">Indoor</option>
                                <option value="outdoor">Outdoor</option>
                            </select>
                        </div>
                        
                        <div className='col-md-4'>
                            <label htmlFor="" className="form-label">Pets: <span className="fw-bolder">{property[0].pets ? 'yes' : 'no'}</span></label>
                            <select name="pets" className="form-select" aria-label="Default select example" onChange={handleInput}>
                                <option value="true" selected>Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="" className="form-label">Category: <span className="fw-bolder">{property[0].category}</span></label>
                            <select name="category" className="form-select" aria-label="Default select example" onChange={handleInput}>
                                <option value=""selected disable>Choose..</option>
                                <option value="rent" >Rent</option>
                                <option value="sale">Sale</option>
                            </select>
                        </div>
                        <div className="mb-3 col-md-6">
                            <div>
                                <label htmlFor="">Utilities: <span className="fw-bolder">{property[0].utilities}</span></label> 
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
                            <label htmlFor="" className="form-label">Available now: <span className="fw-bolder">{property[0].avaialable ? 'yes' : 'no'}</span></label>
                            <select name="available" className="form-select" aria-label="Default select example" onChange={handleInput}>
                                <option value=""selected disable>Elegir..</option>
                                <option value="true">SI</option>
                                <option value="false" >NO</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Description: </label>
                            <p className="fw-semibold">{property[0].description}</p> 
                            <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInput}></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Extras</label>
                            <input name="extras" className="form-control" id="exampleFormControlTextarea1" rows="3"  require ref={extraInput}></input>
                            <div className="d-flex">
                                <button className="btn-primary btn mt-2 " onClick={addExtra} type="button"> add </button>
                                <button className="btn-danger btn mt-2 mx-2" onClick={removeExtras} type="button">remove</button>
                                <div className="d-flex align-items-center">
                                    { extras.length > 0 ?  extras.map((item, index) => (
                                        <p key={index} className="fw-semibold m-0 mt-2 border p-2 mx-2"> <CiCircleCheck style={{color: 'green'}}/> {item}</p>
                                    )) : ''}
                                </div>
                            </div>
                        </div>

                        <div className="col-mb-3">
                            <label for="formFileMultiple" className="form-label">Nuevas imagenes, las anteriores seran reemplazadas</label>
                            <input name='houseImg' className="form-control" type="file" id="formFileMultiple" multiple onChange={handleImgInput}/>
                            {houseImages.map((img, index) => (
                                <img src={img} key={index} alt={`house img n ${index+1}`} className="small-img-form"/>
                            ))}
                        </div>
                        <div className="col-12 text-end">
                            <button className="btn btn-primary" type="submit">Aplicar</button>
                             { updateSuccess && <p className="text-success">Property Updated!</p>}
                        </div>
                    
                </form>
            </div>
            }

        </div>
    )
};
export default EditProperty;