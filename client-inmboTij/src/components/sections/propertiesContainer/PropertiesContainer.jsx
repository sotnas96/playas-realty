import FilterNprop from "./FilterNprop";

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
                    <FilterNprop/>
                </div>
            </div>
    )
};
export default PropertiesContainer;