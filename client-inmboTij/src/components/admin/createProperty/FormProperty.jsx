const FormProperty = ({property, errors, handleInput, handleInputUtilities, handleForm, backendValidationErrors}) => {
    return (
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
                        <label htmlFor="" className="form-label">Tipo</label>
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
                            <select name="currency" className="form-select input-group-text" aria-label="Default select example" onChange={handleInput} >
                                <option value="" selected disabled>$</option>
                                <option value="us$">us $</option>
                                <option value="mx$">mx $</option>
                            </select>

                            <input name="price" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={handleInput}/>
                            <span className="input-group-text">.00</span>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <label for="input" className="form-label">Superficie</label>
                        <div className="input-group mb-3">
                            <input name="sqrft" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={handleInput}/>
                            <span className="input-group-text">m2</span>
                        </div>
                    </div>
                    {
                    
                        property.type !== 'terreno' && (
                    <div className="row">

                            <div className="col-md-4">
                                <label for="inputCity" className="form-label">Habitaciones</label>
                                <input name="beds" min='1' type="number" className="form-control" id="inputCity" onChange={handleInput}/>
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">Baños</label>
                                <input name="baths" min='1' type="number" className="form-control" id="inputState" onChange={handleInput}/>
                                
                            </div>
                            <div className='col-md-4'>
                                <label htmlFor="" className="form-label">N° Carros</label>
                                <input name="parking" min='1' type="number" className="form-control" id="inputState" onChange={handleInput}/>
                            </div>
                            
                            <div className='col-md-4'>
                                <label htmlFor="" className="form-label">Mascotas</label>
                                <select name="pets" className="form-select" aria-label="Default select example" onChange={handleInput}>
                                    <option value="" selected disabled>Elige..</option>
                                    <option value="true">SI</option>
                                    <option value="false">NO</option>
                                </select>
                            </div>
                    </div>

                        )
                    
                    }

                    <div className='col-md-4'>
                        <label htmlFor="" className="form-label">Categoria</label>
                        <select name="category" className="form-select" aria-label="Default select example" onChange={handleInput}>
                            <option value=""selected disable>Elige..</option>
                            <option value="rent">Rent</option>
                            <option value="sale">Sale</option>
                        </select>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="" className="form-label">Disponible Ahora</label>
                        <select name="available" className="form-select" aria-label="Default select example" onChange={handleInput}>
                            <option value=""selected disable>Elegir..</option>
                            <option value="true" >SI</option>
                            <option value="false" >NO</option>
                        </select>
                    </div>
                    <div className="mb-3 col-md-6">
                        <div>
                            <label htmlFor="">Utilities</label> 
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="utilities" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="electricidad" onChange={handleInputUtilities}/>
                            <label className="form-check-label" for="inlineCheckbox1">Electricidad</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="utilities" className="form-check-input" type="checkbox" id="inlineCheckbox2" value="agua" onChange={handleInputUtilities}/>
                            <label className="form-check-label" for="inlineCheckbox2">Agua</label>
                        </div>
                            <div className="form-check form-check-inline">
                            <input name="utilities" className="form-check-input" type="checkbox" id="inlineCheckbox3" value="gas" onChange={handleInputUtilities}/>
                            <label className="form-check-label" for="inlineCheckbox3">Gas</label>
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInput}></textarea>
                    </div>

                    
                    <div className="col-12 text-end">
                        <button className="btn btn-primary" type="submit">Siguiente</button>
                        {
                            errors && 
                            <div className='text-danger'>
                                <p className="my-2 ">Please complete all the fields</p>
                            </div>
                        }
                        {
                            backendValidationErrors.length > 0 && 
                            <div className='text-danger'>
                                <p className="my-2 ">{backendValidationErrors[0].msg}</p>
                            </div>
                        }
                        {/* {
                            errors.length > 0 && <p className="text-danger">{errors[0].msg}</p>
                        } */}
                    </div>
            </form>
         </div>
    )
};
export default FormProperty;