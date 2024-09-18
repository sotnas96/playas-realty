import { useRef, useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { signInAsync } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
const userInfo = {
    user_id:'',
    user_pass:''
}
const LoginForm = () => {
    const dispatch = useDispatch();

    const [userCredentials, setUserCredentials] = useState(userInfo)
    const navigate = useNavigate();
    const errorDisplay = useRef();
    const handleCredentials = e => {
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
    }
    const loginAction = async (e) => {
        e.preventDefault();
        let errorsExists = false;
        Object.entries(userCredentials).forEach( ([key , value]) => {
            if (!value) {
                errorDisplay.current.innerHTML = `<p>Please complete the fieds</p>`
                errorsExists = true;
            }
        })
        if (errorsExists) return;
        const adminAuth = await dispatch(signInAsync(userCredentials));
        return (adminAuth.payload.success) ? navigate('/admin') : errorDisplay.current.innerHTML = `<p>${adminAuth.payload.error}</p>`;
        // if (!adminAuth.payload.success) {
        //     errorDisplay.current.innerHTML = `<p>${adminAuth.payload.error}</p>`;
        // }
        // console.log(adminAuth);
        // console.log('desde componente')
    }
    return (
                <div className="p-2 m-auto login-form-box border">
                    <div className="text-start p-2">
                        <p className="fw-semibold fs-3">Sign In</p>
                    </div>
                    <form action="" className="m-auto p-2 text-start" onSubmit={loginAction}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label fw-semibold">Email</label>
                            <input name="user_id" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleCredentials}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label fw-semibold">Password</label>
                            <input type="password" name="user_pass" class="form-control" id="" placeholder="" onChange={handleCredentials}/>
                        </div>
                        <div className="mb-3">
                            <button type="sumbit" className="w-100 sign-in-button" >Continue</button>
                        </div>
                        <div className="text-end text-danger" ref = {errorDisplay}>
                        </div>
                    </form>
                </div>
            )
};
export default LoginForm;