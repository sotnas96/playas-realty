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
                        <h2 className='fw-semibold fs-2'>Encuentra tu próximo lugar para vivir</h2>
                    </div>
                    <FilterNprop/>
                </div>
            </div>
    )
};
export default PropertiesContainer;