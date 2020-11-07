import React from 'react';
import PageItem from './PageItem';
import PageEvent from './PageEvent';
import { useState } from 'react';


function Personal({perClubs, changeCurrClub, perEvents, changeCurrEvent}) {
    const [ce, setCe] = useState(<div id="clubs">
        {perClubs.map(element => {
        return <PageItem 
        key={element.id}
        item={element}
        changeCurrClub={changeCurrClub}/>
        })}
    </div>);

    const handleEvents = () => {
        setCe(<div>
            {perEvents.map(element => {
                return <PageEvent 
                key={element.id}
                event={element}
                changeCurrEvent={changeCurrEvent}/>
            })}
        </div>);
    };

    const handleClub = () => {
        setCe(<div id="clubs">
        {perClubs.map(element => {
            return <PageItem 
            key={element.id}
            item={element}
            changeCurrClub={changeCurrClub}/>
        })}
        </div>);
    }

    return(
        <div>
            <div id="perbar">
                <div>
                    <button onClick={handleEvents} className="perb"><h1>Katıldığı Etkinlikler</h1></button>
                </div>
                <div>
                    <button onClick={handleClub} className="perb"><h1>Katıldığı Topluluklar</h1></button>
                </div>
            </div>
            {ce}
        </div>
    );
}

export default Personal;