import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Events from "./Events";
import Clubs from "./Clubs";
import {clubItems, events} from "./AllClubs";
import ClubPage from "./ClubPage";
import Personal from "./Personal";
import EventPage from "./EventPage";

function Routes() {
    const [currClub, setCurrClub] = useState(clubItems[0]);
    const [perClubs, setPerClubs] = useState([]);
    const [currEvent, setCurrEvent] = useState([events[0]]);
    const [perEvents, setPerEvents] = useState([]);

    function changeCurrEvent(item){
        setCurrEvent(item);
    }

    function changeCurrClub(item){
        setCurrClub(item);
    }

    function addPerClub(item) {
        let L = [...perClubs];
        if(L.indexOf(item) === -1)
        {
            L.push(item);
            setPerClubs(L);
        }
    }

    function addPerEvent(item) {
        let L = [...perEvents];
        if(L.indexOf(item) === -1)
        {
            L.push(item);
            setPerEvents(L);
        }
    }

    return(
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Etkinlikler">
                    <Events
                    events={events}
                    changeCurrEvent={changeCurrEvent}/>
                </Route>
                <Route exact path="/Topluluklar">
                    <Clubs 
                    clubs={clubItems}
                    changeCurrClub={changeCurrClub}/>
                </Route>
                <Route exact path='/topluluk'>
                    <ClubPage 
                    club={currClub}
                    addPerClub={addPerClub}/>
                </Route>
                <Route exact path="/personal">
                    <Personal 
                    perClubs={perClubs}
                    perEvents={perEvents}
                    changeCurrClub={changeCurrClub}
                    changeCurrEvent={changeCurrEvent}/>
                </Route>
                <Route exact path="/event">
                    <EventPage 
                    event={currEvent}
                    addPerEvent={addPerEvent}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;