import { FaArrowRightLong } from "react-icons/fa6";
import "./contact.css"
import scrollIntoForm from "../scrollIntoForm/scrollIntoForm";
const ContactCard = ({ name }) => {
    
    return (
        <div className="contact-card p-4 my-4">
            <div className="contact-img-container">
                    <img className='contact-img' src="https://www.zillowstatic.com/bedrock/app/uploads/sites/47/how-to-choose-real-estate-agent-shutterstock_642415924-81bbd4.jpg" alt="" />
            </div>
            <div className="text-start p-4 align-content-center info-contact">
                <div className="">
                    <div className='style-div m-0'>

                    </div>
                    <div>
                        <p className="fw-semibold fs-4">{ name }</p>
                    </div>
                    <div className="info-contact">
                        <p className="fw-lighter">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repudiandae quis dignissimos expedita magnam doloremque veritatis, mollitia officiis atque, temporibus accusantium, consectetur voluptate omnis dolorem culpa. Tempora quibusdam ipsam deleniti.</p>
                    </div>
                    <div>
                            <button className="w-50 contact-button section-button" onClick={scrollIntoForm}>
                                <p className='d-inline p-2'> Contactanos </p>
                                <span className="mx-2 arrow-button"> <FaArrowRightLong /> </span>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ContactCard;