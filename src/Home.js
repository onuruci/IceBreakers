import hom from './images/hom.png';
import "./styles.css";

function Home() {
    return(
        <div id="home">
            <div>
                <h1 id="alto">Öğrencilik Kariyerini Zirveye Taşı</h1>
            </div>
            <div id="ahome">
            <div>
                <img src={hom} alt="" id="hom"/>
            </div>
            <div id="sidepar">
                <div>
                <h1 id="yen">YENİ</h1>
                </div>
                <div>
                <h1 id="tpl">TOPLULUKLAR</h1>
                </div>
                <div>
                <h1 id="tpl">KEŞFET</h1>
                </div>
                <div id="tsp">
                <p id="sp">
                    İstersen kariyerine göre istersen de yaşam tarzına göre
                    A'dan Z'ye istediğin topluluğa katıl ve sen de sadece
                    okumuş olma!
                </p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Home;