import { FaArrowRightLong } from "react-icons/fa6";
import "./contact.css"
import scrollIntoForm from "../scrollIntoForm/scrollIntoForm";
const ContactCard = ({card}) => {
    return (
        <div className="contact-card my-4">
            <div className="contact-img-container">
                    <img className='contact-img' src={card.avatar} alt="" />
            </div>
            <div className="text-start p-4 align-content-center info-contact">
                <div className="">
                    <div className='style-div m-0'>

                    </div>
                    <div>
                        <h2 className="fw-bolder fs-4">{card.name}</h2>
                    </div>
                    <div>
                        <h3 className="fs-5 fw-semibold">{card.role}</h3>
                        <p className="fs-6 fw-bold">{card.phoneNumber}</p>
                    </div>
                    <div className="">
                        <p className="">{card.experience}</p>
                    </div>
                    <div>
                        <p>{card.year}</p>
                    </div>
                    <div>

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