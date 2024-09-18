
import Header from "./Header";
import "./header.css"

const HeaderContainer = (props) => {
    return (
        <>
        <Header/>
        <div>
            {props.children}
        </div>
        </>
    )
};
export default HeaderContainer;