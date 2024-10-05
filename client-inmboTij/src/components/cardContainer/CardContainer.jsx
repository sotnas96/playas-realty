import Card from "./Card";
import "./card.css";
import { getLoadingState, getProperties, getPropertiesAsync } from "../../store/properties";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const cardContainer = ({ filter }) => {
    const token = localStorage.getItem('token')
    const filterProperties = (properties, type, category) => {
        if (!type && !category ) {
            return properties
        };
        return properties.filter(element => {
            const matchedType = type ? element.type == type : true;
            const matchedCat = category ? element.category == category : true;
            return matchedCat && matchedType;
        })
    }
    const {type, category} = filter
    const dispatch = useDispatch();
    const [filterProp , setFilterProp] = useState([])
    const { properties, hasFetched}= useSelector(state => state.properties);
    useEffect(()=> {
        if (!hasFetched) dispatch(getPropertiesAsync());
    }, [dispatch, hasFetched]);
    useEffect(()=> {
        setFilterProp(filterProperties(properties, type, category));

    }, [filter, properties])
    return (
        <div className="w-100 my-2 py-2">
            <div className="cardContainer">
            {
                filterProp.length > 0 ?
            
                 ( filterProp.map((property, index) => (
                    !token ? 
                    (property.available && <Card key={property._id} props={property}/>)
                     : 
                    (<Card key={property._id} props={property}/>)
                     
                 ))
                ) 
                 :
                 (<p>No properties</p>)
            }
            </div>

        </div>
    )
};
export default cardContainer;