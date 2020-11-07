import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

import c1 from './images/club.png';
import c2 from './images/club1.png';

let C = [c1,c2];
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function ClubItem({item, changeCurrClub}) {
    function handleClick() {
        return changeCurrClub(item);
    }

    let c = C[getRandomInt(2)];

    const linkStyle = {
        color: 'white',
        listStyle: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        size: '100px',
      };

    const clubStyle = {
        backgroundImage: `url(${c})`
    };
    return(
        <div style={clubStyle} class="club">
            <div id="tit">
                <h1>{item.title}</h1>
            </div>
            <div>
                <img src={item.img} alt="" srcset="" className="photo"/>
            </div>
            <div id="details">
                <Link style={linkStyle} to="/topluluk" onClick={handleClick}>Detaylar</Link>
            </div>
        </div>
    );
}

export default ClubItem;