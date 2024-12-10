import "./index.css";
import cloudOne from "./assets/cloudOne.jpg";
import cloudTwo from "./assets/CloudTwo.jpg";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <header>
          <h3>A</h3>
          <h3>B</h3>
        </header>
        <main>
          <div className="background">
            <h2>AZURES</h2>
            <h2>10.DEC</h2>
          </div>
          <div className="textOne">
            <h3>ACT . 1</h3>
            <p>
              It doesn’t matter how you get to Seoul, as long as you arrive.
            </p>
          </div>
          <div className="textTwo">모로 가도 서울만 가면 된다</div>
        </main>
        <footer>
          <h3>C</h3>
          <h3>D</h3>
        </footer>
      </div>
    </div>
  );
}

export default App;
