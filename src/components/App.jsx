import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import '../styles/custom.scss';
import LinkList from './LinkList.jsx';
import CreateLink from './CreateLink.jsx';
import Header from './Header'
import Login from './Login'
import Search from './Search'
import FlightControllerList from './FlightControllers/FlightControllerList'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {

  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/new/1' />} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/top' component={LinkList} />
          <Route exact path='/new/:page' component={LinkList} />
          <Route exact path='/products/flight-controller/:page' component={FlightControllerList } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
