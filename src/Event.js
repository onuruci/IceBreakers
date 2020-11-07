import { Link } from 'react-router-dom';
import c1 from './images/club.png';
import c2 from './images/club1.png';

let C = [c1,c2];
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



function Event({item, changeCurrEvent}) {

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

    const handleClick = () =>{
        changeCurrEvent(item);
    };

    return(
    <div>
        <div style={clubStyle} class="club">
            <div id="tito">
                <div id="evo">
                    <h1 id="evb">{item.title}</h1>
                </div>
                <h3 id="ds">{item.date}</h3>
                <h3 id="ds">{item.parent.title}</h3>
            </div>
            <div>
                <img src={item.parent.img} alt="" srcset="" className="photo"/>
            </div>
            <div id="details">
                <Link style={linkStyle} to="/event" onClick={handleClick}>Detaylar</Link>
            </div>
        </div>
    </div>);
};

export default Event;