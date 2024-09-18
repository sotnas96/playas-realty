import CardContainer from '../../cardContainer/CardContainer';
import "./propertiesSection.css"
const PropertiesContainer = () => {
    return (
        <div className='my-md-5 p-md-3 text-md-start'>
            <div className='m-4 p-4 '>
                <div className='text-end'>
                    <div className='style-div'>
                    </div>
                </div>
                <div className=''>
                    <p className='fw-semibold fs-2' style={{letterSpacing:'-0.05em'}}>Encuentra tu proximo lugar para vivir</p>
                </div>
                <div className>
                    <form action="bg-white">
                        <div  className='d-flex rounded-4 bg-white'>
                            <div className='div-form border-end'>
                                <select name="" id="" className='select-form' >
                                    <option value="" className=''>Compra</option>
                                    <option value="" className=''>Compra</option>

                                </select>
                            </div>
                            <div className='div-form'>
                                <select name="" id="" className='select-form'>
                                    <option value="">Tipo de propiedad</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <CardContainer/>
            </div>
        </div>
    )
};
export default PropertiesContainer;