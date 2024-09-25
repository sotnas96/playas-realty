import MapShow from "./Map";
import "./map.css"
const MapContainer =  () => {
    return (
        <section>
            <div className="p-2 m-2 text-center">
                <div>
                    <p className="fw-bolder fs-5 color-amarillo">Encuéntranos</p>
                    <p className="fw-bold fs-2" style={{}}>Nuestro perfil de negocios de Google</p>
                    <p className="text-div m-auto fw-light">Descubre la ubicación de Playas Realty Agencia Inmobiliaria en Google Maps y quédate atento a las actualizaciones al explorar nuestro perfil de Google Business.</p>
                </div>
                <MapShow/>
            </div>
        </section>
    )
};
export default MapContainer;