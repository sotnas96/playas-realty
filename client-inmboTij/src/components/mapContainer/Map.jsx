import { APIProvider, Map, AdvancedMarker} from "@vis.gl/react-google-maps";

const MapShow = () => {
    const mapId = import.meta.env.VITE_API_GOOGLE_MAPS_ID
    const google_api_key = import.meta.env.VITE_API_GOOGLE_MAPS_KEY;
    const position = {lat: parseFloat( import.meta.env.VITE_API_GOOGLE_LAT) , lng: parseFloat(import.meta.env.VITE_API_GOOGLE_LONG)}
    return (
        <div className="my-4">
            <APIProvider apiKey={google_api_key}>
                <div className="map-div">
                    <Map 
                        defaultZoom={15}
                        defaultCenter={position}
                        mapId={mapId}
                    >
                        <AdvancedMarker position={position}/>
                    </Map>
                </div>
            </APIProvider>
          </div>
    )
};
export default MapShow;