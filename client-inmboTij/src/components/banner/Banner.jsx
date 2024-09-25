import ScrollInto from "react-scroll-into-view";
import "./banner.css"
import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className='banner'>
            <img src="https://s1.abcstatics.com/media/MM/2018/07/04/Gated%20Shawnee%20Estate%201-kfj--1350x900@abc.jpg" alt="" className='w-100 banner-img' />
            <div className='banner-tittle m-4 p-4 w-100  mx-auto'>
                <div className="m-4 p-sm-4 ">
                    <h1 className = "fw-bold h1-tittle">La agencia inmobiliaria en Tijuana más confiable</h1>
                    <p className="fw-light p-tittle">Encuentra la casa de tus sueños con Playas realty. Somos una agencia inmobiliaria en Tijuana con más de 20 años de experiencia. </p>
                </div>
                <div className="mx-4 px-4">
                        <button onClick={() => {
                            const form = document.querySelector("#contactForm")
                            form.scrollIntoView({ behavior: "smooth"})
                        }} className="contact-button fw-bolder ">
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