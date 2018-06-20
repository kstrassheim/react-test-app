import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        return (
            <div className="Header"> 
                <nav className="navbar navbar-light bg-faded navbar-expand-sm">
                    <a className="navbar-brand" href="#">{this.state.title}</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;