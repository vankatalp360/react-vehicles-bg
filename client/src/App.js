import logo from './logo.svg';

import { Route, Switch } from 'react-router-dom';

import Header from "./Components/Header/Header"
import Vehicles from "./Components/Vehicles/Vehicles"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Vehicles} />
      </Switch>
    </div>
  );
}

export default App;
