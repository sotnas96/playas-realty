import "./footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
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
                        <ul className="d-flex list-footer">
                            <li>Principal</li>
                            <li>Servicios</li>
                            <li>Propiedades</li>
                            <li>Contactos</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="p-2  footer text-start">
                <p>Av ejercito argentino 7520</p>
            </div>
        </div>
    )
};
export default Footer;