import React from 'react';
import ClubItem from "./ClubItem";
import "./styles.css";

function Clubs({clubs, changeCurrClub}) {
    return(
        <div>
            <div id="clubtit">
                <h1>Topluluklar</h1>
            </div>
            <div id="clubs">
                {clubs.map(element => {
                    return <ClubItem
                    key={element.id}
                    item={element}
                    changeCurrClub={changeCurrClub}/>;
                })}
            </div>
        </div>
    );
}

export default Clubs;