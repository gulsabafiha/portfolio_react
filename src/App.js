import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Index from './components/Index/Index';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className='app'>
     <BrowserRouter>
     <Switch>
       <Route exact path='/'>
       <Index></Index>
       </Route>
       <Route exact path='/user'>
       <Home></Home>
       </Route>
       <Route exact path='/contact'>
       <Home></Home>
       </Route>
       <Route exact path='/portfolio'>
       <Portfolio></Portfolio>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
