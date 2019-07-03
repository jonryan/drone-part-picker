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
import AddFlightController from './AddFlightController.jsx';
import EditFlightController from './EditFlightController.jsx';
import AddMerchant from "./Merchant/AddMerchant";
import ViewMerchants from "./Merchant/ViewMerchants";

function App() {

  return (
    <div>
      <div>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/products/flight-controller/1' />} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/top' component={LinkList} />
          <Route exact path='/new/:page' component={LinkList} />
          <Route exact path='/products/flight-controller/:page' component={FlightControllerList } />
          <Route exact path='/add-flight-controller' component={AddFlightController } />
          <Route exact path='/edit-flight-controller/:fc' component={EditFlightController } />
          <Route exact path='/add-merchant' component={AddMerchant } />
          <Route exact path='/merchants' component={ViewMerchants } />
          {/*<Route exact path='/edit-merchant/:merchant' component={EditMerchant } />*/}
        </Switch>
      </div>
    </div>
  );
}

export default App;
