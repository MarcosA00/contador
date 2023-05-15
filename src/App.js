import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freeCodeCamp-logo-contenedor'>
        <img 
          className='freeCodeCamp-logo'
          src={freeCodeCampLogo} 
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>

      </div>
    </div>
  );
}

export default App;