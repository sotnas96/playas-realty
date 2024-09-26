import "./service.css"
const Services = () => {
    return (
        <div className="p-4 m-2">
            <div className="p-4 w-75 m-auto">
                <div className='style-div m-auto'>

                </div>
                <div className="fw-bolder fs-4">
                    <p>20 años de <span className="text-decoration-underline" style={{color:'#ffac12'}}>experiencia</span></p>
                </div>
                <div className="logo-service-md w-75 m-auto">
                    <p>Llevamos de la mano a nuestros clientes para la compra-venta de propiedades, alquileres y administración de propiedades</p>
                </div>
            </div>
            <div className="p-4">
                <div className="w-100 p-2 d-flex flex-wrap justify-content-around">
                    <div className="service-card border">
                        <div className="img-container">
                            <img src="https://asset.skoiy.com/9b80a6f781ff336f/yrwwqpnyb7ys.jpg?w=970&q=90" alt="" className="card-img"/>
                        </div>
                        <div className="text-start p-3">
                            <div className="fw-semibold">
                                <p>Compra-venta</p>
                            </div>
                            <div className="fw-lighter">
                                <p>2 Past more emotionless this along goodness this sad wow manatee mongos</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card border">
                        <div className="img-container">
                            <img src="https://asset.skoiy.com/9b80a6f781ff336f/yrwwqpnyb7ys.jpg?w=970&q=90" alt="" className="card-img"/>
                        </div>
                        <div className="text-start p-3">
                            <div className="fw-semibold">
                                <p>Alquiler</p>
                            </div>
                            <div className="fw-lighter">
                                <p>2 Past more emotionless this along goodness this sad wow manatee mongos</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card border">
                        <div className="img-container">
                            <img src="https://asset.skoiy.com/9b80a6f781ff336f/yrwwqpnyb7ys.jpg?w=970&q=90" alt="" className="card-img"/>
                        </div>
                        <div className="text-start p-3">
                            <div className="fw-semibold">
                                <p>Administración de propiedades</p>
                            </div>
                            <div className="fw-lighter">
                                <p>2 Past more emotionless this along goodness this sad wow manatee mongos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Services