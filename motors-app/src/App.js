import './App.css';
import About from './components/ViewCars';
import Nav from './components/Nav';
import Register from './components/RegistrationForm';
import main from './components/main';
import {BrowserRouter as Router , Switch ,Link , Route} from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Paypal from './components/Paypal';







function App() {
  
     
  
  return (
    <Router >
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/main" component={main} />
      <Route path="/loginForm"  component={LoginForm}/>
      <Route path="/register" component={Register} />
      <Route path="/paypal" component={Paypal} />
      </Switch>
    </div>
    </Router>
  );
}


  
  


  




export default App;
