import './App.css';
import './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ProductPicker from './components/product/ProductPicker';

function App() {
  // HOOK
  const item1 = 'Home';
  const item2 = 'Products';
  const item3 = 'About';
  const item4 = 'Contact';
  return (
    <>
      <Navbar item1={item1} item2={item2} item3={item3} item4={item4}/>
      <ProductPicker greeting={'la tienda'}/>
    </>
  );
}

export default App;


