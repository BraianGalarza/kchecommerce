// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
// import CardBox from './components/Card/Card.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <div className='ItemListContainer'>
        <ItemListContainer greeting=""/>
        
      </div> */}
      <div>
        <ItemDetailsContainer/>
      </div>
    </div>
  );
}

export default App;
