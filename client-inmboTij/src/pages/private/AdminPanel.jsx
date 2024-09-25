import { IoIosHome } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import ClientsTable from "../../components/admin/ClientsTable";
import { NavLink, Route, Routes, Navigate  } from "react-router-dom";
import PropertiesPanel from "../../components/admin/PropertiesPanel";
import './admin.css'
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
const AdminPanel = () => {
    const dispatch = useDispatch()
    const logoutFunction = () => {
        dispatch(logout());    
    }
    return (
        <div className="bg-white d-flex admin-container">
            <div className="sidebar-panel d-flex flex-column">
                <div className="p-1 d-flex flex-column h-100">
                    <div>
                        <div className="panel-button mt-4">
                            <NavLink to="/admin/properties" className={({ isActive, isPending }) => isActive ? "nlb active" : 'nlb' }>
                                <div className="p-2 active2">
                                    <p className="m-0"><IoIosHome /> Properties
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                        <div className="panel-button my-4">
                            <NavLink to="/admin/inqueries" className={({ isActive, isPending }) => isActive ? "nlb active" : 'nlb' }>
                                <div className="p-2 active2">
                                    <p className="m-0">
                                        <MdAddIcCall /> Inqueries
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                    <div className="panel-button mt-4">
                        <NavLink to="" className='nlb'>
                            <div className="p-2">
                                <p className="m-0" onClick={logoutFunction}>
                                    <MdLogout /> Log Out
                                </p>
                            </div>
                        </NavLink>
                    </div>
                </div>

            </div>
            <div className="w-100">
                <Routes>
                    <Route path="/" element={<Navigate to="properties" />} />
                    <Route path="properties/*" element={<PropertiesPanel/>}/>
                    <Route path="inqueries" element={<ClientsTable/>}/>
                </Routes>
            </div>
        </div>
    )
};
export default AdminPanel;