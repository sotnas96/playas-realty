import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
    const path = useLocation();
    
    useEffect(()=> {
        const timeoutId = setTimeout(()=> {
            window.scrollTo(0,0);
        }, 100)
        return ()=> clearTimeout(timeoutId);

    }, [path])
    return null;
}
export default ScrollToTop;