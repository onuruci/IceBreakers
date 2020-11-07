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
        <div class="pgita">
            <div id="pgtit">
                <div id="pogit">
                    <h1>{item.title}</h1>
                </div>
                <div>
                    <div id="blob">
                        <div>
                            <h2>Görevi: {item.mission}</h2>
                        </div>
                        <div id="kah">
                            <h2>Üyelik Süresi: {item.year} yıl</h2>
                        </div>
                    </div>
                    <div id="exprs">
                        <p>
                            {item.shortexp}
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <div>
                <img src={item.img} alt="" srcset="" className="phot"/>
            </div>
            <div id="pdetails">
                <Link style={linkStyle} to="/topluluk" onClick={handleClick}>Details</Link>
            </div>
            </div>
        </div>
    );
}

export default PageItem;