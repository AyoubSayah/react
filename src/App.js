import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import Ajoutarticle from './pages/ajoutarticles';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />{' '}
        </Route>
        <Route path='/search' exact>
          <Search />{' '}
        </Route>
        <Route path='/ajoutarticle' exact>
          <Ajoutarticle />{' '}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
