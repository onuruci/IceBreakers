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
        <div class="pgita">
            <div id="pgtit">
                <div id="pogit">
                    <h1>{event.title}</h1>
                </div>
                <div id="blob">
                    <div>
                        <div>
                            <h5>Organizasyon: {event.parent.title}</h5>
                        </div>
                        <div>
                            <img src={event.parent.img} alt="" srcset="" className="primg"/>
                        </div>                    
                    </div>
                    <div id="dato">
                        <h5>Tarih: {event.date}</h5>
                    </div>
                    <div id="expo">
                        <p>
                            {event.exp}
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <div>
                <img src={event.img} alt="" srcset="" className="phot"/>
            </div>
            <div id="pdetails">
                <Link style={linkStyle} to="/event" onClick={handleClick}>Details</Link>
            </div>
            </div>
        </div>
    );
}

export default PageEvent;