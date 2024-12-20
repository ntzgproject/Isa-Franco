import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


function NavBar () {

    return (
        <>
            <nav id="navbar-container">

                                {/* Logo */}

                <Link to="/">
                    <img src="/logos/Isa Franco Logo.png" alt="logo-isafranco" className='logo' />
                </Link>

                        {/* Navegaciones */}

                <div className='dropdown'>
                    <button className='dropbtn link'>Motos</button>
                    <div className='dropdown-content'>
                        <Link className='link-drpdwn' to="/voge">VOGE</Link>
                        <Link className='link-drpdwn' to="/hero">HERO</Link>
                        <Link className='link-drpdwn' to="/gilera">GILERA</Link>
                        <Link className='link-drpdwn' to="/honda">USADAS SELECCIONADAS</Link>
                    </div>
                </div>
                
                <Link to="/accesorios" className='link'>ACCESORIOS</Link>
                <Link to="/servicio-tecnico" className='link'>SERVICIO TECNICO</Link>
                <Link to="/eventos" className='link'>EVENTOS</Link>
                <Link to="/historia" className='link'>NUESTRA HISTORIA</Link>
            </nav>
        </>
    )
}

export default NavBar
