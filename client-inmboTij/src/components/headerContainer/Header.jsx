import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation , NavLink} from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { ScrollInto } from 'react-scroll-into-view';
import { useSelector } from 'react-redux';
import { isPending } from '@reduxjs/toolkit';

const Header = () => {
    const { isAuth } = useSelector(state => state.auth);
    const location = useLocation();
    const position = location.pathname == '/' ? 'fixed' : 'sticky'
    const [headerBGC, setHeaderBGC] = useState("transparent")
    const [isVisible, setIsVisible] = useState(false)
    const showSideMenu = () => {
        setIsVisible(true)
    }
    const closeSideBar = () => {
        setIsVisible(false)
    }
    useEffect (() => {
        if (location.pathname == '/'){

        window.onscroll = () => {
            const scrollTop = window.scrollY;
            const navBarHeight = 50;
            scrollTop > navBarHeight ? setHeaderBGC("rgba(0, 0, 0, .9)") : setHeaderBGC("transparent");

        };
        return () => window.onscroll = null;
    } else {
        setHeaderBGC('black')
    }
    }, [])
    return (
        <div className="header " style={{backgroundColor: headerBGC,transition: 'background-color 1s', zIndex:'5', position: position}}>
            <div className="container">
                <nav className="navbar navbar-expand-lg  d-flex justify-content-between ">
                    <div className="">
                        {/* <img src={logo} alt="" className="logo" /> */}
                        <Link to={"/"}>
                            <p className='m-0'>LOGO</p>
                        </Link>
                    </div>
                    <div className="w-75 hide-menu">
                        <ul className="list-group list-group-horizontal header-list justify-content-around p-2 fs-5">
                            <li>
                                <div className="">
                                    <NavLink to={"/"} className={({ isActive, isPending }) => isActive ? 'header-nav active' : `header-nav` }>
                                        Inicio
                                    </NavLink>
                                </div>    
                            </li>
                            <li>
                                <div className="">
                                    <NavLink to={"/aboutUs"} className={({ isActive, isPending }) => isActive ? 'header-nav active' : `header-nav` }>
                                        Sobre Nosotros 
                                    </NavLink>
                                </div> 
                            </li>
                            <li>
                                <div className="">
                                    <NavLink to={"/services"} className={({ isActive, isPending }) => isActive ? 'header-nav active' : `header-nav` }>
                                        Servicios
                                    </NavLink>
                                </div> 
                            </li>
                            <li>
                                <div className="">
                                    <NavLink to={"/properties"} className={({ isActive, isPending }) => isActive ? 'header-nav active' : `header-nav` }>
                                        Propiedades
                                    </NavLink>
                                </div> 
                            </li>
                            {
                                isAuth && 
                                                <li>
                                                    <div className="">
                                                        <NavLink to={"/admin"} className={({ isActive, isPending }) => isActive ? 'header-nav active' : `header-nav` }>
                                                            <p className="">Admin</p>    
                                                        </NavLink>
                                                    </div> 
                                                </li>
                            }
                            {/* <li>
                                <div className="">
                                    <ScrollInto selector="#contactForm" smooth='true'>
                                      <p className="">Contacto</p>
                                    </ScrollInto>
                                </div> 
                            </li> */}
                        </ul>
                    </div>

                    <div className="d-md-none m-2">
                        <div className="">
                            <button className="hamb-button" onClick={showSideMenu}>
                                <GiHamburgerMenu  className="ham-icon" />
                            </button>
                        </div>                           
                    </div>
                </nav>
            </div>
            <div className={ `p-2 side-bar-menu ${isVisible ? 'show' : 'hide'}`}>
                <div className='text-end close-button' onClick={closeSideBar}>
                    <IoMdClose />
                </div>
                <div className='my-4 text-start p-2'>
                    <div>
                            <div className='my-2'>
                                <NavLink to={"/"} className={({isActive, isPending}) => isActive ? "header-nav active-mobile" : "header-nav"}>
                                    Inicio
                                </NavLink>
                            </div>

                            <div className='my-2'>
                                <NavLink to={"/aboutUs"} className={({isActive, isPending}) => isActive ? "header-nav active-mobile" : "header-nav"}>
                                    Sobre nosotros
                                </NavLink>
                            </div>

                            <div className='my-2'>
                                <NavLink to={"/services"}className={({isActive, isPending}) => isActive ? "header-nav active-mobile" : "header-nav"}>
                                    Servicios
                                </NavLink>
                            </div>

                            <div className='my-2'>
                                <NavLink to={"/properties"}className={({isActive, isPending}) => isActive ? "header-nav active-mobile" : "header-nav"}>
                                        Propiedades  
                                </NavLink>
                            </div>
                            { isAuth &&
                                <div className='my-2'>
                                    <NavLink to={"/admin"}className={({isActive, isPending}) => isActive ? "header-nav active-mobile" : "header-nav"}>
                                            Admin 
                                    </NavLink>
                                </div>
                            }
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Header;