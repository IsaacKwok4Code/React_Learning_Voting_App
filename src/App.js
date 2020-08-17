import React from 'react';
import './App.css';

import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className="App">
        <div className="main ui text container">
          <h1 className="main ui text centered header">Popular Products</h1>
          <hr />
          <div id="content" >
            <ProductList />
          </div>
        </div>
      </div>
  );
}

export default App;
