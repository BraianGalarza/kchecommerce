// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
// import CardBox from './components/Card/Card.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<div>
              <div className='ItemListContainer'>
                <ItemListContainer greeting=""/>
              </div>
            </div>
            }/>
            <Route path='/productos' element={
              <div className='ItemListContainer'>
                <ItemListContainer greeting=""/>
              </div>
            }/>
            <Route path='/productos/:categoryId' element={
              <div className='ItemListContainer'>
                <ItemListContainer greeting=""/>
              </div>
            }/>
            <Route path='/item/:itemId' element={
              <ItemDetailsContainer/>
            }/>
          </Routes>
          
          {/* <div className='ItemListContainer'>
            <ItemListContainer greeting=""/>
            
          </div> */}
          {/* <div>
            <ItemDetailsContainer/>
          </div> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
