import Card from "./Card";
import "./card.css";
import { getLoadingState, getProperties, getPropertiesAsync } from "../../store/properties";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const cardContainer = (props) => {
    const dispatch = useDispatch();
    const properties = useSelector(getProperties);
    const loading = useSelector(getLoadingState);
    useEffect(()=> {
        if (properties.length == 0) dispatch(getPropertiesAsync());
    }, [dispatch, properties]);
    
    return (
        <div className="w-100 my-5 py-2">
            <div className="cardContainer">

            {
                properties.length > 0 ?
            
                 ( properties.map((propertie, index) => (
                     <Card key={propertie._id} props={propertie}/>
                 ))
                ) 
                 :
                 (<p>No properties yet</p>)
            }
            </div>

        </div>
    )
};
export default cardContainer;