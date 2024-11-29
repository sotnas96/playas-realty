import { useSelector } from "react-redux";
import "./service.css"
import { getServices } from "../../store/serviceSlice";
const Services = () => {
    const services = useSelector(getServices);
    return (
        <div className="p-4 m-2">
            <div className="p-4 m-auto">
                <div className='style-div m-auto'>

                </div>
                <div className="">
                    <h2 className="fs-3 fw-semibold">20 años de <span className="text-decoration-underline" style={{color:'#ffac12'}}>experiencia</span></h2>
                </div>
                <div className="logo-service-md m-auto">
                    <h1 className="fs-5">Consulta todos nuestros servicios jurídicos inmobiliarios en tijuana</h1>
                </div>
            </div>
            <div className="p-4">
                <div className="w-100 p-2 d-flex flex-wrap justify-content-around">
                    { services.map( (e, index) => (
                        <div className="service-card border" key={index + Date.now()}>
                            <div className="img-container">
                                <img src={e.photo} alt="" className="card-img"/>
                            </div>
                            <div className="text-start p-3">
                                <div className="fw-semibold fs-3">
                                    <h2>{e.name}</h2>
                                </div>
                                <div className="fw-lighter">
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    
                </div>
            </div>
        </div>
    )
};
export default Services