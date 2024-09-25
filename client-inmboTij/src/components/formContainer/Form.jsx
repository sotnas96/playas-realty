import { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { createInquerieAsync } from "../../store/contactSlice";
const inquerie = {
    name:'',
    surname:'',
    email:'',
    message:'',
    number:''

}
const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Form = () => {
    const dispatch = useDispatch();
    const errorMsg = useRef();
    const [userInfo, setUserInfo] = useState(inquerie)
    const [successMsg, setSuccessMsg] = useState(false)
    const [badEmail, setBadEmail] = useState(false)
    const handleInput = (e) => {
        const {name , value} = e.target;
        
        if (name == 'email') setBadEmail(!regEx.test(value));
        setUserInfo({...userInfo, [name]: value});
    } 
    const handleForm = async (e) => {
        errorMsg.current.innerHTML = ``
        let errorExist = false;
        e.preventDefault();
        Object.entries(userInfo).forEach(([key, value]) => {
            if (!value){
                errorMsg.current.innerHTML = `<p>Please complete all the fields</p>`
               errorExist = true;     
            }
        })
        if (errorExist || badEmail) return 
        try {
            setUserInfo(inquerie);
            setSuccessMsg(true)

            const response = await dispatch(createInquerieAsync(userInfo))
            if (! response.payload?.error){
                setTimeout(()=> {
                    setSuccessMsg(false)
                }, 1000)
            }

        }catch(error) {
            console.log(error);
        }
    }

    return (
            <form action="" className="w-100 p-2" onSubmit={handleForm}>
                <div className="d-flex flex-column justify-content-around" style={{gap:'1vh'}}> 
                    <div>
                        <input value={userInfo.name} name="name" type="text" placeholder="Nombre" className="w-100 border p-2 rounded-4" onChange={handleInput}/>
                    </div>
                    <div>
                        <input value={userInfo.surname} type="text" placeholder="Apellido" className="w-100 border p-2 rounded-4"  onChange={handleInput} name="surname"/>
                    </div>
                    <div>
                        <input value={userInfo.email} type="text" placeholder="Email" className="border w-100 p-2 rounded-4" onChange={handleInput} name="email"/>
                        {badEmail && <p className="p-2 text-danger">Please enter a valid email</p>}
                    </div>
                    <div>
                        <input  value={userInfo.number} type="text" placeholder="Number" className="border w-100 p-2 rounded-4" onChange={handleInput} name="number"/>
                    </div>
                    <div>
                        <textarea value={userInfo.message} name="message" id="" placeholder="Leave us a comment" className="border w-100 p-2 rounded-4" onChange={handleInput}></textarea>
                    </div>
                    <div>
                        <button className="w-100 contact-button section-button" type="sumbit">
                            <p className='d-inline p-2 fs-6'> Contáctanos </p>
                            <span className="mx-2 arrow-button"> <FaArrowRightLong /> </span>
                        </button>
                    </div>
                    <div ref={errorMsg} className="text-danger">
                    </div>
                    {
                        successMsg && 
                        <div className="text-success">
                            <p>Contact info send! We will be in contact as soon as possible</p>
                        </div>
                    }
                </div>

            </form>
    )
};
export default Form;