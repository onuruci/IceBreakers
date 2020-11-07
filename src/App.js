import Routes from "./Routes";
import "./styles.css";
import back from "./images/back.jpg";

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { back } + ")"
};

function App() {
  return (
    <div id="app">
      <Routes />
    </div>
  );
}

export default App;
