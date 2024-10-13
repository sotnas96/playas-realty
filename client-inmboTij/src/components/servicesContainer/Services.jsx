import "./service.css"
const Services = () => {
    return (
        <div className="p-4 m-2">
            <div className="p-4 m-auto">
                <div className='style-div m-auto'>

                </div>
                <div className="">
                    <h2 className="fs-3 fw-semibold">20 años de <span className="text-decoration-underline" style={{color:'#ffac12'}}>experiencia</span></h2>
                </div>
                <div className="logo-service-md m-auto">
                </div>
            </div>
            <div className="p-4">
                <div className="w-100 p-2 d-flex flex-wrap justify-content-around">
                    <div className="service-card border">
                        <div className="img-container">
                            <img src="/images/service3.jpeg" alt="" className="card-img"/>
                        </div>
                        <div className="text-start p-3">
                            <div className="fw-semibold fs-3">
                                <h3>Compra-venta</h3>
                            </div>
                            <div className="fw-lighter">
                            </div>
                        </div>
                    </div>
                    <div className="service-card border">
                        <div className="img-container">
                            <img src="/images/service1.jpeg" alt="" className="card-img"/>
                        </div>
                        <div className="text-start p-3">
                            <div className="fw-semibold fs-3">
                                <h3>Alquiler</h3>
                            </div>
                            <div className="fw-lighter">
                            </div>
                        </div>
                    </div>
                    <div className="service-card border">
                        <div className="img-container">
                            <img src="/images/service2.jpeg" alt="" className="card-img"/>
                        </div>
                        <div className="text-start p-3">
                            <div className="fw-semibold fs-3">
                                <h3>Administración de propiedades</h3>
                            </div>
                            <div className="fw-lighter">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Services