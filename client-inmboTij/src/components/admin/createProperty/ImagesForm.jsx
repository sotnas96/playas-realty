const ImagesForm = ({houseImages, imgError, handleImgInput, handleImagesForm}) => {
    return (
    <div className="bg-white">
            <div className="m-2 p-2">
                <p className="fw-semibold fs-4">Cargue imagenes</p>
            </div>
            <form className="row g-3 text-start p-2 m-2" onSubmit={handleImagesForm} >
                    <div className="col-mb-3">
                        <label for="formFileMultiple" className="form-label">Suba hasta 40 imagenes</label>
                        <input name='houseImg' className="form-control" type="file" id="formFileMultiple" multiple onChange={handleImgInput} />
                        {houseImages.map((img, index) => (
                            <img src={img} key={index} alt={`house img n ${index+1}`} className="small-img-form"/>
                        ))}
                    </div>                    
                    <div className="col-12 text-end">
                        <button className="btn btn-primary" type="submit">Enviar</button>
                        {
                            imgError && 
                            <div className='text-danger'>
                                <p className="my-2 ">Porfavor, cargue al menos 1 imagen</p>
                            </div>
                        }
                    </div>
            </form>
     </div>
    )
};
export default ImagesForm;