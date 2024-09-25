import "./footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="p-4">
            <div className="p-2  footer text-start">
                <p className="fs-5 fw-bolder">CONVIERTE TUS SUENOS EN <span className="foot-color">REALIDAD</span></p>
            </div>
            <div className="p-2  footer text-start container">
                <div className="row">
                    <div className="col-4">
                        <p className="text-white fw-light">LOGO IPSUM</p>
                        <FaFacebookF />
                    </div>
                    <div className="col-8">
                        <ul className="d-flex list-footer ">
                            <Link to={"/services"} >
                                <li>Servicios</li>
                            </Link>
                            <Link to={"/properties"} >
                                <li>Propiedades</li>
                            </Link>
                            <Link to={"/aboutUs"} >
                                <li>Contactos</li>
                            </Link>       
                        </ul>
                    </div>
                </div>

            </div>
            <div className="p-2  footer text-start">
                <p>P.º Estrella del Mar 1075-3-b, Playas de Tijuana, Playas Coronado, 22504 Tijuana, B.C., México</p>
            </div>
        </div>
    )
};
export default Footer;