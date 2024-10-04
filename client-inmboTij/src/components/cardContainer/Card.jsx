
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Card = ({ props }) => {
    return (
        <div className="card">
            <div className="img-container">
                <NavLink to={`/properties/detail/${props._id}`}>
                    <img src={props.images[0]} alt="" className="card-img"/>
                </NavLink>
            </div>
            <div className="text-start px-4">
                <div>
                    <p className="fw-semibold fs-5 my-2">{props.property.toUpperCase()}</p>
                    <p className="my-2">{props.type}</p>

                </div>
            </div>
            <div className="border-top d-flex flex-direction-row text-center ">
                { props.type !== 'terreno' &&
                (
                    <>
                <div className="border-end rounded-0 icon-div">
                    <div className="icon-div-child " >
                        <span className=""><IoBed /></span>
                        <p className="m-0">{props.beds}</p>
                    </div>
                </div>
                <div className="border-end rounded-0 icon-div">
                    <div className="icon-div-child ">
                        <span><GiBathtub/></span>
                        <p className="m-0">{props.baths}</p>
                    </div>
                </div>
                <div className=" icon-div">
                    <div className="icon-div-child">
                        <span><FaCar /></span>
                        <p className="m-0">{props.parking}</p>
                    </div>
                </div>
                </>

                )
                }

            </div>  
        </div>
    )
};
export default Card;