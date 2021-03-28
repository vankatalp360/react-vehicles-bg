import logo from './logo.svg';

import { Route, Switch } from 'react-router-dom';

import Navigation from "./Components/Navigation/Navigation"
import Dashboard from "./Components/Dashboard/Dashboard"

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
