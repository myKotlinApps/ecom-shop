import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'; 
import SignInUpPage from './pages/sign-in-up/sign-in-up.component.jsx' 



import {Route ,Switch} from "react-router-dom";




function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInUpPage} />
      </Switch>
    </div>
  );
}

export default App;
