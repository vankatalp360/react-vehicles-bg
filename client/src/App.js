import logo from './logo.svg';

import { Route, Switch } from 'react-router-dom';

import Navigation from "./Components/Navigation/Navigation"
import Dashboard from "./Components/Dashboard/Dashboard"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
      </Switch>
    </div>
  );
}

export default App;
