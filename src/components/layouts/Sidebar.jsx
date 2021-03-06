import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaTachometerAlt, FaArrowDown, FaWhatsapp } from 'react-icons/fa'

const Sidebar = () => {
    const [subMenu, setSubMenu] = useState({
        a: 'nav-link collapsed',
        div: 'collapse'
    })
    const [hiddenSubMenu, sethiddenSubMenu] = useState(true)

    const handleSubMenu = () => {
        sethiddenSubMenu(!hiddenSubMenu)
        console.log(hiddenSubMenu)
    }
    useEffect(() => {
        (hiddenSubMenu) ? setSubMenu({
            a: 'nav-link collapsed',
            div: 'collapse'
        }) : setSubMenu({
            a: 'nav-link',
            div: 'collapse show'
        })

    }, [hiddenSubMenu])
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <Link to="/home" className="nav-link">
                            <div className="sb-nav-link-icon"><FaTachometerAlt className="fas fa-tachometer-alt"/></div>
                                Dashboard
                        </Link>
                        <div className="sb-sidenav-menu-heading">Interface</div>
                        <a className={subMenu.a} href="#nn" onClick={handleSubMenu} data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><FaWhatsapp className="fas fa-columns" /></div>
                                WhatsApps
                                <div className="sb-sidenav-collapse-arrow"><FaArrowDown className="fas fa-angle-down" /></div>
                        </a>
                        <div className={subMenu.div} id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="/WhatsApp/927939458">
                                    TECOLO
                                </Link>
                            </nav>
                        </div>
                        <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                <a className="nav-link collapsed" href="#nn" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                    Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="login.html">Login</a>
                                        <a className="nav-link" href="register.html">Register</a>
                                        <a className="nav-link" href="password.html">Forgot Password</a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="#mm" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                    Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="401.html">401 Page</a>
                                        <a className="nav-link" href="404.html">404 Page</a>
                                        <a className="nav-link" href="500.html">500 Page</a>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                        TECOLO
                    </div>
            </nav>
        </div>
    )
}

export default Sidebar
