import "./detail.css"
import Card from "../cardContainer/Card";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesAsync, selectPropertyById } from "../../store/properties";
import ImageGallery from "react-image-gallery";
import { useEffect } from "react";
import Form from "../formContainer/Form";

const DetailContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const property = useSelector(state => selectPropertyById(state, id));
    let utilities = property ? property.utilities[0].split(',') : [];
    const images = property? property.images.map(element => {
        return {original: element,
                thumbnail: element
        }
    }) : [];
    console.log(images)
    
    useEffect(()=> {
        if (!property) dispatch(getPropertiesAsync())
        
    }, [id, property])
    if (!property) return <p className="bg-white">Loading</p>
    return (

                <div className="detailContainer">
                    {/* sub banner */}
                    <div className="w-100 bg-black text-white">
                        <div className="text-start p-4 d-flex justify-content-between m-auto" style={{width:'80%'}}>
                            
                            <div>
                                <p className="fs-2 fw-semibold my-1">{property.property}</p>
                                <p>{property.address}</p>
                            </div>
                            <div className="text-end">
                                <p className="fs-2 fw-semibold my-1">usd$ {property.price}</p>
                                <p>{property.sqrft}sqrft</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-100">
                        {/* Main page */}
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
                                    <div className="d-flex justify-content-between border-top">
                                        <div className=" border-end detail-box">
                                            <p className="m-0">bed{property.beds}</p>
                                        </div>
                                        <div  className="border-end detail-box">
                                            <p className="m-0">bath#{property.baths}</p>
                                        </div>
                                        <div  className="border-end detail-box">
                                            <p className="m-0">year {property.year}</p>
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
                                    <div className="d-flex justify-content-between border-top p-4 flex-wrap" style={{gap:'4vh 1px'}}>
                                        {utilities.length > 0 && 
                                            utilities.map((element, index) => (
                                                <div  className="text-start w-33" key={index}>
                                                    <span><FaCheckCircle style={{color:'#ffac12'}} /></span>
                                                    <p className="d-inline m-2">{element}</p>
                                                </div>
                                            ))
                                        }
                                        {
                                            property.pets && 
                                            <div  className="text-start w-33" >
                                                    <span><FaCheckCircle style={{color:'#ffac12'}} /></span>
                                                    <p className="d-inline m-2">pet friendly</p>
                                            </div>
                                        }
                                        {
                                            <div  className="text-start w-33" >
                                                <span><FaCheckCircle style={{color:'#ffac12'}} /></span>
                                                <p className="d-inline m-2">parking: {property.parking}</p>
                                            </div>
                                        }

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