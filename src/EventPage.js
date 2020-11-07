import React from 'react';
import "./styles.css";

function EventPage({event, addPerEvent}) {

    const handleClick = () =>{
        addPerEvent(event);
    };

    return(
        <div>
            <div>
            <div id="ctit">
                <h1>
                    {event.title}
                </h1>
            </div>
            <hr/>
            <div id="cpage">
                <div>
                <div>
                    <img src={event.parent.img} alt="" srcset="" className="photo"/>
                </div>
                <div id="detail">
                    <button onClick={handleClick}>Join</button>
                </div>
                </div>
                <div>
                    <p>
                        {event.exp}
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default EventPage;