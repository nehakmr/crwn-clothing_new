import logo from './logo.svg';
import './App.css';

import {HomePage} from './Pages/HomePage/homePage.component' ;
import { Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>

)


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/> 
      <Route exact path='/shop/hats' component={HatsPage}/>    
    </div>
  );
}

export default App;
