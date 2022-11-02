import './App.scss';
import {Navbar} from './components/Navbar'
import {ItemListContainer} from './components/ItemListContainer'
import {Footer} from './components/Footer' 

function App() {
  return (
    <div className="App">
      <main>
      <Navbar />
      <div className='item__container'>
        <ItemListContainer title="SHORT DE BAÑO LISO" detail="5 COLORES" price="$5.499"/>
        <ItemListContainer title="SHORT DE BAÑO TRICOLOR" detail="3 COMBINACIONES" price="$5.799"/>
        <ItemListContainer title="SHORT DE BAÑO ESTAMPADO" detail="3 DISEÑOS" price="$5.999"/>
        <ItemListContainer title="SHORT DE BAÑO PREMIUM" detail="3 COLORES" price="$6.499"/>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
