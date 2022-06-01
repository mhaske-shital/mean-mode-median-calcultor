import {BrowserRouter,Route} from 'react-router-dom' 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route path="/login" exact component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/home" component={Home}/>
       
    </BrowserRouter>
  );
}

export default App;
