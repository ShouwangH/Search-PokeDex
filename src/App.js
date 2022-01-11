import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Pokemon from './views/Pokemon';
import Authapi from './views/Authapi';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Pokemon Favorites</h1>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/pokemon' element= {<Pokemon/>}/>
        <Route path='/authapi' element= {<Authapi/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
