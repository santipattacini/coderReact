import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="./img/logo.png" className="header__logo" alt="logo" />
        <div className='header__nav'>
          <h3>Home</h3>
          <h3>Shorts</h3>
          <h3>Gorras</h3>
        </div>
        <div className='header_buttons'>Comprar</div>
      </header>
    </div>
  );
}

export default App;
