import React from 'react';
import './App.css';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx';

import {Route ,Switch} from "react-router-dom";




function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
