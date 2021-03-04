import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Content = (props) => {
    const [ hidden, setHidden] = useState(false)
    const [sidebar, setSidebar] = useState("sb-nav-fixed")
    useEffect(() => {
        (hidden)? setSidebar("sb-nav-fixed sb-sidenav-toggled"):setSidebar("sb-nav-fixed")
    }, [hidden])
    return (
        <div className={sidebar}>
            <Navbar setHidden={setHidden} hidden={hidden}/>
            <div id="layoutSidenav">
                <Sidebar isActive={hidden}/>
                <div id="layoutSidenav_content">
                    <main>
                    {props.children}
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2020</div>
                            <div>
                                <a href="#nn">Privacy Policy</a>
                                &middot;
                                <a href="#mm">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
                </div>
            </div>
        </div>
    )
}

export default Content
