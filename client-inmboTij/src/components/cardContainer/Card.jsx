import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Card = ({ props }) => {
    const { isAuth } = useSelector(state => state.auth)
    return (
        <div className="card">

            <div className="img-container">
                <NavLink to={`/properties/detail/${props._id}`}>
                    <img src={props.images[0]} alt="" className="card-img"/>
                </NavLink>
            </div>
            <div className="text-start px-4">
                <div>
                    <p className="fw-semibold fs-5">{props.property}</p>    
                </div>
            </div>
            <div className="border-top d-flex flex-direction-row text-center ">
                <div className="border-end rounded-0 icon-div">
                    <div className="icon-div-child" >
                        <span className=""><IoBed /></span>
                        <p className="m-0">{props.beds}</p>
                    </div>
                </div>
                <div className="border-end rounded-0 icon-div">
                    <div className="icon-div-child">
                        <span>
                            <FaBath /> 
                        </span>
                        <p className="m-0">{props.baths}</p>
                    </div>
                </div>
                <div className=" icon-div">
                    <div className="icon-div-child">
                        <p className="m-0">#</p>
                    </div>
                </div>
            </div>  
             {
                 isAuth && 
                
                <div className="admin-crud-buttons">
                    <div className="show-crud-buttons">
                        <button className="crud-button"><FaRegEdit /></button>    
                        <button className="crud-button"><MdDelete /></button>
                    </div>
                </div>       
            }
        </div>
    )
};
export default Card;