import './App.css';
import Navbar from './components/Navbar';
import {Route,Switch} from 'react-router-dom';
import Home from './components/home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">

    <Navbar/>
      <Switch>  
      <Route path='/services' component={Services}/>
      <Route path='/products' component={Products}/>
      <Route path='/signUp' component={SignUp}/>
      <Route path='/' exact component={Home}/>
      </Switch>
  
    </div>
  );
}

export default App;
