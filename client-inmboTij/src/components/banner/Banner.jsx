import scrollIntoForm from "../scrollIntoForm/scrollIntoForm";
import "./banner.css"
import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {

    return (
        <div className='banner'>
            {/* <img src={bannerImg} alt="" className='banner-img' /> */}
            <div className='banner-tittle p-4 w-100  mx-auto'>
                <div className="m-4 p-sm-4 div-tittle">
                    <h1 className = "fw-bold h1-tittle">La agencia inmobiliaria en Tijuana más confiable</h1>
                    <h2 className="fw-light p-tittle">Encuentra la casa de tus sueños con Playas realty. Somos una agencia inmobiliaria en Tijuana con más de 20 años de experiencia. </h2>
                </div>

                <div className="mx-4 px-4">
                        <button onClick={scrollIntoForm} className="contact-button fw-bolder ">
                            <p className="m-0 text-black">
                                 Contáctanos <span className="mx-2 text-white"><FaArrowRightLong /></span>
                            </p>
                        </button>
                </div>
    
            </div>

        </div>
    )
};
export default Banner;