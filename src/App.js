
import './App.css';
import Home from './pages/Home';
import Survey from './pages/Survey';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'



function App () {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Survey" component={ Survey } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
