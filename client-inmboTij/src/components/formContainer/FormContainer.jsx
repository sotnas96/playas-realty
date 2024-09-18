import Form from "./Form";
import "./form.css"
const FormContainer = () => {
    return (
        <div className="border-top border-bottom d-md-flex flex-row text-start">
            <div className=" contact-info">
                <div className=" p-md-4 m-md-4" >
                    <div>
                        <p className="fw-semibold">Informacion de contacto</p>
                    </div>
                    <div>
                        <p className="fw-light">Gracias por considerarnos para ser tu agencia inmobiliaria. Nos pondremos en contacto con usted durante nuestro horario comercial.</p>
                    </div>
                    <div>
                        <p>+54 3513748894</p>
                    </div>
                    <div>
                        <p>example@gmail.com</p>
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