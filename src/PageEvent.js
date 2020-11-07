import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function PageEvent({event, changeCurrEvent}) {
    function handleClick() {
        return changeCurrEvent(event);
    }

    const linkStyle = {
        color: 'white',
        listStyle: 'none',
        marginRight: 'auto',
        marginLeft: '44px',
        cursor: 'pointer',
        textDecoration: 'none',
        size: '100px',
      };

    return(
        <div class="pgit">
            <div id="pgtit">
                <div>
                <h1>{event.title}</h1>
                </div>
                <div>
                    <h5>{event.parent.title}</h5>
                </div>
                <div>
                    <h5>{event.date}</h5>
                </div>
                <div>
                    <p>
                        {event.exp}
                    </p>
                </div>
            </div>
            <div>
            <div>
                <img src={event.parent.img} alt="" srcset="" className="photo"/>
            </div>
            <div id="pdetails">
                <Link style={linkStyle} to="/event" onClick={handleClick}>Details</Link>
            </div>
            </div>
        </div>
    );
}

export default PageEvent;