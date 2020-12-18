import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'; 
import SignInUpPage from './pages/sign-in-up/sign-in-up.component.jsx' 
import {auth} from './firebase/firebase.util';

import {Route ,Switch} from "react-router-dom";




class App extends React.Component {
  constructor(){
    super();
    
    this.state={
      currentUser : null
    }
  }

  unsubsribeFromAuth = null;

  componentDidMount(){
    this.unsubsribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState ({currentUser : user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render (){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
