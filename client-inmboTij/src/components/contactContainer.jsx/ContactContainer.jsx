import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";
import { getOwners } from "../../store/ownerSlice";
const ContactContainer = () => {
    const info = useSelector(getOwners);
    return (
        <div className="bg-white p-md-4">
            <div className="p-2">
                {info.map((card, index)=> (
                    <ContactCard card={card} key={index}/>
                ))}
            </div> 
        </div>
    )
};
export default ContactContainer;