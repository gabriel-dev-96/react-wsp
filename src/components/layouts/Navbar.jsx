import React from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = (props) => {
    const {setHidden, hidden} = props

    const sidebarToggle=()=>{
        setHidden(!hidden)
        console.log(hidden)
    }
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">TECOLO</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0" onClick={sidebarToggle}><FaBars className="fas fa-bars" size='20px'/></button>
            
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
            
            <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="userDropdown" href="#s" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#s">Settings</a>
                        <a className="dropdown-item" href="#s">Activity Log</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="login.html">Logout</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
