import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/log.png';
import user from './images/user.jpg';


function Nav() {
    const linkStyle = {
        color: 'green',
        listStyle: 'none',
        marginRight: '35px',
        cursor: 'pointer',
        textDecoration: 'none',
        size: '40px',
      };

    return(
        <div>
            <div id="navbar">
                <div class="link" id="log">
                    <Link to="/">
                        <img src={logo} alt="" srcset="" id="logo"/>
                    </Link>
                </div>
                <div class="link">
                    <Link style={linkStyle} to="/Etkinlikler" activeClassName="ac">Etkinlikler</Link>
                </div>
                <div class="link">
                    <Link style={linkStyle} to="/Topluluklar">Topluluklar</Link>
                </div>
                <div id="person">
                    <Link style={linkStyle} to="/personal">
                    <img src={user} alt="" srcset="" id="use"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;