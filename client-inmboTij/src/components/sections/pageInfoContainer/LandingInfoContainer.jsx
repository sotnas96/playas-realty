import './landingSect1.css'
import { FaArrowRightLong } from "react-icons/fa6";
import PropertiesContainer from '../propertiesContainer/PropertiesContainer';

const LandignInfoContainer = () => {
    return (
        <section className="land-sect1">
            <div className=''>
                <div className='position-relative no-show'>
                    <div className='w-50'>
                            <img className='img-landing' src="https://www.zillowstatic.com/bedrock/app/uploads/sites/47/how-to-choose-real-estate-agent-shutterstock_642415924-81bbd4.jpg" alt="" />
                    </div>
                    <div className='w-50  p-4'>
                        <div className='m-4 text-start'>
                                <div className='style-div'>

                                </div>
                                <div>
                                    <p className='fs-1 fw-semibold' style={{letterSpacing:'-0.05em'}}>Estás en buenas manos</p>
                                </div>
                                <div className='w-75 mb-4'>
                                    <p className='fw-lighter lh-sm m-0 fs-6'>Somos una agencia inmobiliaria en Tijuana con más de 20 años de experiencia en la compra-venta de propiedades y en la elaboración de proyectos inmobiliarios.</p>
                                </div>
                                <div className='my-4'>
                                    <button className="contact-button fw-semihold section-button ">
                                        <p className='d-inline p-2 fs-6'> Contáctanos </p>
                                        <span className="mx-2 arrow-button"> <FaArrowRightLong /> </span>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
                <PropertiesContainer/>
                <div className='position-relative d-flex'>
                    <div className='p-4'>
                        <div className='m-4 text-landing'>
                                <div className='style-div center-div'>

                                </div>
                                <div className='text-landing'>
                                    <p className='fs-1 fw-semibold' style={{letterSpacing:'-0.05em'}}>20 años de experiencia</p>
                                </div>
                                <div className='w-50 mb-4 text-landing'>
                                    <p className='fw-lighter lh-sm m-0 fs-6' >Llevando de la mano a nuestros clientes en la compra-venta de propiedades, casas, terrenos y departamentos.</p>
                                </div>
                                <div className='my-4'>
                                    <button className="contact-button fw-semihold section-button ">
                                        <p className='d-inline p-2 fs-6'> Contáctanos </p>
                                        <span className="mx-2 arrow-button"> <FaArrowRightLong /> </span>
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className=''>
                            <img className='img-landing img-landing2 ' src="https://www.zillowstatic.com/bedrock/app/uploads/sites/47/how-to-choose-real-estate-agent-shutterstock_642415924-81bbd4.jpg" alt="" />
                    </div>
                </div>
            
            </div>
        </section>

    )
};
export default LandignInfoContainer;