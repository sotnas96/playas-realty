import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const Anonymous = () => {
    const { isAuth } = useSelector(state => state.auth);
    return !isAuth ? <Outlet/> : <Navigate to='/'/>
};
export default Anonymous;