import ContactContainer from "../components/contactContainer.jsx/ContactContainer";
import FormContainer from "../components/formContainer/FormContainer"
const Contact = () =>{
    return (
        <>
            <ContactContainer/>
            <div className="bg-white" id="contactPageForm">
                <FormContainer/>
            </div>
        </>
    )
};
export default Contact;