import Event from './Event';

function Events({events, changeCurrEvent}) {
    return(
        <div>
            <div id="clubtit">
                <h1>Etkinlikler</h1>   
            </div>
            <div id="clubs">
                {events.map(element => {
                    return <Event
                    id={element.id} 
                    item={element}
                    changeCurrEvent={changeCurrEvent}/>;
                })}
            </div>
        </div>
    );
}

export default Events;