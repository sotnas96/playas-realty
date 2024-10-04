import "./detail.css"
import Card from "../cardContainer/Card";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoBed } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { GiBathtub } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { deletePropertyAsync, getPropertiesAsync, selectPropertyById } from "../../store/properties";
import ImageGallery from "react-image-gallery";
import { useEffect, useRef, useState } from "react";
import Form from "../formContainer/Form";
import Loading from "../Loading/Loading";

const DetailContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    const { id } = useParams();
    const { isAuth } = useSelector(state => state.auth)
    const [authdelete, setauthDelete] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false)
    const property = useSelector(state => selectPropertyById(state, id));
    let utilities = property ? property.utilities[0].split(',') : [];
    const images = property? property.images.map(element => {
        return {original: element,
                thumbnail: element
        }
    }) : [];
    const deleteProperty = () => {
        setauthDelete(true)
    }
    const confirmDeletion = () => {
        dispatch(deletePropertyAsync({propertyId: property._id, token}));
        setConfirmDelete(true)        
        setTimeout(()=> {
            setauthDelete(false);
            setConfirmDelete(false)
            navigate("/admin/properties")
        }, 1000)
    }
    const cancelDeletion = () => {
        setauthDelete(false)
    }
    useEffect(()=> {

        if (!property) dispatch(getPropertiesAsync())
        
    }, [id, property])
    if (!property) return <Loading/>
    return (

                <div className="detailContainer">
                    {/* sub banner */}
                    <div className="w-100 bg-black text-white">
                        <div className="main-descriptions" style={{width:'80%'}}>
                            
                            <div className="home-name">
                                <p className="fs-2 fw-semibold my-1">{property.property}</p>
                            </div>
                            <div>
                                <p className="fs-2 fw-semibold my-1">{property.currency} {property.price.toLocaleString("de-DE")}</p>

                            </div>
                            <div className="home-name">
                                <p className="fs-5 fw-lighter">{property.address}</p>
                            </div>
                            <div className="">
                                <p className="fs-5">{parseInt(property.sqrft).toLocaleString('de-DE')} m2</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-100">
                        {/* Main page */}
                        {
                            isAuth && 
                            
                            <div className="admin-crud-buttons">
                                <div className="show-crud-buttons fs-5 p-2 bg-white">
                                    <Link to={`/admin/properties/edit/${property._id}`}>
                                        <button className="crud-button">Editar <FaRegEdit /></button>    
                                    </Link>
                                    <button className="crud-button" onClick={deleteProperty}>Eliminar <MdDelete /></button>
                                    {authdelete && 
                                    <div>
                                        <p>Seguro desea eliminar?</p>
                                        <button className="btn border-primary m-1" onClick={confirmDeletion}>yes</button>
                                        <button className="btn border-danger m-1" onClick={cancelDeletion}>no</button>
                                        {confirmDelete && <p className="text-success">Property deleted!</p>}
                                    </div>
                                    }

                                </div>
                            </div>       
                        }
                        <div className="p-4 main-page">
                            {/* Main descriptions */}
                            <div className="detail-main">
                                <div className="border image-gallery-container">
                                    <ImageGallery items={images} showNav={false} showThumbnails={false}/>
                                </div>
                                <div className=" bg-white d-flex flex-column rounded-4">
                                    <div className="text-start p-4 fw-bold fs-5">
                                        <p>Detalles</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-top fs-5">
                                        <div className=" border-end detail-box">
                                            <p className="m-0">
                                            <span className=""><IoBed /> </span>
                                                {property.beds}
                                            </p>
                                        </div>
                                        <div  className="border-end detail-box">
                                            <p className="m-0">
                                            <span><GiBathtub/> </span>
                                                {property.baths}</p>
                                        </div>
                                        <div  className="border-end detail-box">
                                            <p className="m-0">
                                            <span><FaCar /> </span>
                                                {property.parking}</p>
                                        </div>
                                        <div  className="border-end detail-box">
                                            <p className="m-0">#</p>
                                        </div>
                                        <div  className=" detail-box">
                                            <p className="m-0">#</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" bg-white d-flex flex-column rounded-4">
                                    <div className="text-start p-4 fw-bold fs-5">
                                        <p >Descripcion</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-top">
                                        <div  className="p-4 text-start">
                                            <p className="m-0">{property.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" bg-white d-flex flex-column rounded-4">
                                    <div className="text-start p-4 fw-bold fs-5">
                                        <p >Dispone de </p>
                                    </div>
                                    <div className="d-flex justify-content-between border-top p-4 flex-wrap fs-5" style={{gap:'4vh 1px'}}>
                                        {utilities.length > 0 && 
                                            utilities.map((element, index) => (
                                                <div  className=" w-33" key={index}>
                                                    <p className="d-inline m-2">{element}</p>
                                                    <span className="text-success"><FaCheckCircle /></span>
                                                </div>
                                            ))
                                        }
                                            <div  className=" w-33" >
                                                    
                                                    <p className="d-inline m-2">pets {property.pets ? (<span className="text-success"><FaCheckCircle /></span>) : (<span className="text-danger fw-bold fs-4"><RiErrorWarningFill/></span>)}</p>
                                            </div>

                                    </div>
                                </div>
                                
                            </div>
                            {/* Form */}
                            <div className="bg-white p-2 rounded-4 form-cont" >
                                <div className="p-2">
                                    <div className="text-start">
                                        <p className="fw-semibold">Ponte en contacto</p>
                                    </div>
                                    <Form/>
                                </div>
                            </div>
                        </div>
                        {/* similar houses */}
                        <div className="p-4 m-auto  text-start similar-carousel">
                            <div className='text-end'>
                                <div className='style-div'>
                                </div>
                            </div>
                            <div className="text-md-start text-center">
                                <p className='fw-semibold fs-2' style={{letterSpacing:'-0.05em'}}>Similares</p>
                            </div>
                            <div className="card-container">                     
                                {/* <Card/> */}
                            </div>

                        </div>
                    </div>
                </div>
    )
};
export default DetailContainer;
