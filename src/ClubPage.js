import React from 'react';
import "./styles.css";

function ClubPage({club, addPerClub}) {
    function handleClick(){
        return addPerClub(club);
    }
    return(
        <div>
            <div>
            <div id="ctit">
                <h1>
                    {club.title}
                </h1>
            </div>
            <hr/>
            <div id="cpage">
                <div>
                <div>
                    <img src={club.img} alt="" srcset="" className="photo"/>
                </div>
                <div id="detail">
                    <button onClick={handleClick}>Join</button>
                </div>
                </div>
                <div>
                    <p>
                        {club.explain}
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ClubPage;