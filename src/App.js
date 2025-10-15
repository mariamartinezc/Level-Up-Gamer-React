import logo from './logo.svg';
import './App.css';

//importar componentes
import Banner from './components/banner';
import FooterPrincipal from './components/footer';
import BannerPrincipal from './components/banner';
import NavbarPrincipal from './components/navbar';
import InformacionProducto from './components/informacion';



function App() {
  return (
    <div className="App" style={{ backgroundColor: '#000000ff' }}>
      <div className="App">
        <div className='container'>
          <NavbarPrincipal />
          <BannerPrincipal />
          <InformacionProducto />
        </div>
        <FooterPrincipal />
      </div>
    </div>
  );
}

export default App;
