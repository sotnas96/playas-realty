import Form from "./Form";
import "./form.css"
const FormContainer = () => {
    return (
        <div className="border-top border-bottom d-md-flex flex-row text-start" id="contactForm2">
            <div className=" contact-info">
                <div className=" p-md-4 m-md-4" >
                    <div>
                        <p className="fw-semibold">Información de contacto</p>
                    </div>
                    <div>
                        <p className="fw-light">Gracias por considerarnos para ser tu agencia inmobiliaria. Nos pondremos en contacto con usted durante nuestro horario comercial.</p>
                    </div>
                    <div>
                        <p>+52 1 664 386 9950</p>
                    </div>
                    <div>
                        <p>bmendez33@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className=" p-md-4 m-md-4 formFields">
                <p className="fw-semibold m-2 ">Envianos un mensaje</p>
                <Form/>
            </div>
        </div>
    )
};
export default FormContainer;