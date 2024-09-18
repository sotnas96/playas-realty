import LoginForm from "../components/loginForm/LoginForm";

const Login = () => {
    return (
        <div className="bg-white p-4 my-4">
            <div className="my-4">
                <div>
                    <p className="fw-bolder fs-2">Playas Realty</p>
                </div>
                <LoginForm/>

            </div>
        </div>
    )
};
export default Login;