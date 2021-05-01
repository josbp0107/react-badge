import React from 'react';

import './styles/NavBar.css'
import logo from '../images/logo.svg';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__img-logo" src={logo} alt="Logo" />
                        <span className="font-weight-light">Tech</span>
                        <span className="font-weight-bold" >Conference</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;