import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
               <div className="Header--title"><NavLink to = '/'>Meet Pixel</NavLink></div>
                 <div className="Header--imglink"><NavLink to ='/photos'>Photos</NavLink> </div>
            </header>
        );
    }
}

export default Header