import logo from './logo.svg';
import './App.css';
import ShopPage from './Pages/ShopPage/shopPage.component'

import {HomePage} from './Pages/HomePage/homePage.component' ;
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/> 
      <Route exact path='/shop' component={ShopPage}/>    
    </div>
  );
}

export default App;
