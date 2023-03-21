import React from 'react';
import './App.css';
import './scss/app.scss';
import './components/Header';
import Header from './components/Header';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Cart from './components/Pages/Cart';
import { Routes, Route } from 'react-router-dom';

// import pizzas from './assets/pizzablock.json'
export const AppContext = React.createContext()

function App() {
  
  const [searchPizza, SetSearchPizza] = React.useState('')
  return (
    <div className="wrapper">
      <AppContext.Provider value={{searchPizza, SetSearchPizza}}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart/>}/> 
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
