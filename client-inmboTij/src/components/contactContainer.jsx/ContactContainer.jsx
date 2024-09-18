import ContactCard from "./ContactCard";

const ContactContainer = () => {
    return (
        <div className="bg-white p-4">
            <div className="p-2">
                <ContactCard/>
                <ContactCard/>
            </div> 
        </div>
    )
};
export default ContactContainer;