import './App.css';
import Navbar from './components/Navbar';
import {Route,Switch} from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <div className="App">

    <Navbar/>
      <Route path='/' component={Home}/>
  
    </div>
  );
}

export default App;
