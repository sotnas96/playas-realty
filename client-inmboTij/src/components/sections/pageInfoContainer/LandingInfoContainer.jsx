import './landingSect1.css'
import { FaArrowRightLong } from "react-icons/fa6";
import PropertiesContainer from '../propertiesContainer/PropertiesContainer';
import scrollIntoForm from '../../scrollIntoForm/scrollIntoForm';

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
                                    <h2 className='fs-1 fw-semibold' style={{letterSpacing:'-0.05em'}}>Estás en buenas manos</h2>
                                </div>
                                <div className='w-75 mb-4'>
                                    <h3 className='fw-lighter lh-sm m-0 fs-6'>Somos una agencia inmobiliaria en Tijuana con más de 20 años de experiencia en la compra-venta de propiedades y en la elaboración de proyectos inmobiliarios.</h3>
                                </div>
                                <div className='my-4'>
                                    <button className="contact-button  section-button ">
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
                                    <h2 className='fs-1 fw-semibold' style={{letterSpacing:'-0.05em'}}>20 años de experiencia</h2>
                                </div>
                                <div className='text-div mb-4 text-landing'>
                                    <h3 className='fw-lighter lh-sm m-0 fs-6' >Llevando de la mano a nuestros clientes en la compra-venta de propiedades, casas, terrenos y departamentos.</h3>
                                </div>
                                <div className='my-4'>
                                    <button className="contact-button section-button " onClick={scrollIntoForm}>
                                        <p className='d-inline p-2'> Contáctanos </p>
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