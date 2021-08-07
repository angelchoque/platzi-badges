import React from 'react'
import {Link} from 'react-router-dom'
import './styles/navbar.css'
import logo from '../images/logo.svg'

class NavBar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link  to="/" className="Navbar__brand ">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        <span className="fw-light">Platzi</span>
                        <span className="fw-bold"> Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}
export default NavBar