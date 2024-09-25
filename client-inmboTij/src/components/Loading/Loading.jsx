import "./loading.css"
import { RingLoader } from "react-spinners";

const Loading = () => {
    return (
        
        <div className="bg-white loading">
            <div className="d-flex justify-content-center">
                <RingLoader/>
            </div>
            <p className="my-4 fw-semibold fs-5">Cargando... porfavor espere</p>

        </div>
    )
};
export default Loading;