import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function PageItem({item, changeCurrClub}) {
    function handleClick() {
        return changeCurrClub(item);
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
                <h1>{item.title}</h1>
                </div>
                <div>
                    <h5>{item.mission}</h5>
                </div>
                <div>
                    <h5>{item.year}</h5>
                </div>
                <div>
                    <p>
                        {item.shortexp}
                    </p>
                </div>
            </div>
            <div>
            <div>
                <img src={item.img} alt="" srcset="" className="photo"/>
            </div>
            <div id="pdetails">
                <Link style={linkStyle} to="/topluluk" onClick={handleClick}>Details</Link>
            </div>
            </div>
        </div>
    );
}

export default PageItem;