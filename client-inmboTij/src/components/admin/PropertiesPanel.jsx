import CreateProperty from "../../components/admin/createProperty/CreateProperty";
import './adminPanel.css'
import { Route, Routes, NavLink, Navigate} from "react-router-dom";
import AdminProperties from "./adminProperties/AdminProperties";
const PropertiesPanel = () => {
    return (
        <div className="p-2 bg-light">
            <div className="d-flex justify-content-end">
                <div className="mx-2">
                    <NavLink to="/admin/properties/create">
                        <button className="admin-panel-button" >
                            <p className="m-0">Create New</p>
                        </button>
                    </NavLink>
                </div>
                <div className="mx-2">
                    <NavLink to="/admin/properties">
                        <button className="admin-panel-button">
                            <p className="m-0">All properties</p>
                        </button>
                    </NavLink>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Navigate to='all'/>}/>
                <Route path="all" element={<AdminProperties/>}/>
                <Route path="create" element={<CreateProperty/>} />
            </Routes>
        </div>
    )
};
export default PropertiesPanel;