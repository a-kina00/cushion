import './App.css';

import Header from '../header/header';
import ProductCard from '../productCard/productCard';

import appStyles from './app.module.css'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <ProductCard />
      </div>
    </>
  );
}

export default App;
