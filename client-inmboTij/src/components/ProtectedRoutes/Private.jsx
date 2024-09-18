import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
    const { isAuth } = useSelector(state => state.auth);
    return isAuth ? <Outlet/> : <Navigate to= "/"/>;
}
export default Private;