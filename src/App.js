import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import CardBox from './components/Card/Card.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
        <div className='ItemListContainer'>
          <CardBox/>
          <CardBox/>
          <CardBox/>
          <CardBox/>
          <CardBox/>
          <CardBox/>
          <CardBox/>
          <CardBox/>
        </div>
      </ItemListContainer>
    </div>
  );
}

export default App;
