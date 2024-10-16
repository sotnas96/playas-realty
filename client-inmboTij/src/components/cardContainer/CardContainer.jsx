import Card from "./Card";
import "./card.css";
import { getLoadingState, getProperties, getPropertiesAsync } from "../../store/properties";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const cardContainer = ({ filter }) => {
    const path = useLocation();
    const isDetailPage = path.pathname.includes('detail')
    const token = localStorage.getItem('token')
    const [showMore, setShowMore] = useState(8);
    const showMoreProperties = () => {
        setShowMore(prevShowMore => prevShowMore + 4);
    }
    const filterProperties = (properties, type, category) => {
        const propertiesArray = Object.values(properties);
        if (!type && !category ) {
            return propertiesArray
        };
        return propertiesArray.filter(element => {
            const matchedType = type ? element.type == type : true;
            const matchedCat = category ? element.category == category : true;
            return matchedCat && matchedType;
        })
    }
    const {type, category} = filter
    const dispatch = useDispatch();
    const [filterProp , setFilterProp] = useState([])
    const {hasFetched, test }= useSelector(state => state.properties);
    useEffect(()=> {
        if (!hasFetched) dispatch(getPropertiesAsync());
    }, [dispatch, hasFetched]);
    useEffect(()=> {
        setFilterProp(filterProperties(test, type, category));

    }, [filter, test])
    return (
        <div className="w-100 my-2 py-2">
            <div className={`${isDetailPage ? ('cardContainer2') : ('cardContainer')}`}>
            {
                filterProp.length > 0 ?
            
                 ( filterProp.slice(0, showMore).map((property, index) => (
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
            {
                filterProp.length > showMore && 
                (
                    <div className="text-center">
                        <button className="show-more" onClick={showMoreProperties}>
                            <p className="m-0">VER MAS <span className="but">▼</span></p>
                            
                        </button>
                    </div>
                )  
            }
            

        </div>
    )
};
export default cardContainer;