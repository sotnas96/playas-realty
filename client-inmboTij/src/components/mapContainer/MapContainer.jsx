import MapShow from "./Map";
import "./map.css"
const MapContainer =  () => {
    return (
        <section>
            <div className="p-2 m-2 text-center">
                <div>
                    <p className="fw-bolder fs-5 color-amarillo">Encuéntranos</p>
                    <h2 className="fw-bold fs-2" style={{}}>Nuestro perfil de negocios de Google</h2>
                    <h3 className="text-div m-auto fw-light fs-5">Descubre la ubicación de Playas Realty Agencia Inmobiliaria en Google Maps y quédate atento a las actualizaciones al explorar nuestro perfil de Google Business.</h3>
                </div>
                <MapShow/>
            </div>
        </section>
    )
};
export default MapContainer;