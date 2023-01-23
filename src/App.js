
import './App.css';


function App() {


  return (
    <div className="App">
      <form action="" class="search-bar pokesearchform">
        <input id="searchPokemon" type="search" name="search" pattern=".*\S.*" placeholder="Search pokemon..." required/>
          <button class="search-btn" type="submit">
            <span>Search</span>
          </button>
      </form>

      <div className="pokeindex">
        <div className="pokeindex-left">
          <div className="pokeindex-left__top">
            <div className="circle-big"></div>
            <div className="circle-small"></div>
          </div>
          <div className="pokeindex-left__screen">
            <div className="dots">
              <span></span>
              <span></span>
            </div>
            <div className="screen">
              <img id="pokeimg" />
            </div>
            <div className="status">
              <div className="status-light"></div>
              <div className="status-sound">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="pokeindex-left__buttons">
            <div className="buttons">
              <div className="buttons-circle"></div>
              <div className="buttons-quad">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="controller">
              <div className="controller-touch"></div>
              <div className="controller-joystick"></div>
            </div>
          </div>
        </div>
        <div className="pokeindex-middle"></div>
        <div className="pokeindex-right">
          <div className="pokeindex-right__screen"></div>
          <div className="pokeindex-right__buttons">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="pokeindex-right__buttons-quadruple">
            <div className="dot">
              <span></span>
              <span></span>
            </div>
            <div className="button">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="pokeindex-right__buttons-triple">
            <div className="button">
              <span><img id="type1" /></span>
              <span><img id="type2" /></span>
            </div>
            <div className="light"></div>
          </div>
          <div className="pokeindex-right__buttons-double">
            <span id="heightfield"></span>
            <span id="weightfield"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
