import './App.css';
import './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ItemCount from './components/product/ItemCount';

function App() {
  // HOOK
  const item1 = 'Home';
  const item2 = 'Products';
  const item3 = 'About';
  const item4 = 'Contact';
  return (
    <>
      <Navbar item1={item1} item2={item2} item3={item3} item4={item4}/>
      <ItemCount stock={10} initial={1} />
    </>
  );
}

export default App;


