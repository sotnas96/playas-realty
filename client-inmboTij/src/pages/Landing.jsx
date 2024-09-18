import Banner from "../components/banner/Banner";
import CarouselContainer from "../components/CarouselContainer/CarouselContainer";
import FormContainer from "../components/formContainer/FormContainer";
import MapContainer from "../components/mapContainer/MapContainer";
import LandignInfoContainer from "../components/sections/pageInfoContainer/LandingInfoContainer";

const Landing = () => {
    return (
        <>  
        <Banner/>
        <div className="main-section py-4">
            <LandignInfoContainer/>
            <CarouselContainer/>
            <FormContainer/>
            <MapContainer/>
        </div>

        </>

    )
};
export default Landing;