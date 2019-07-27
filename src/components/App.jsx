import React from 'react';
import '../styles/App.css';
import '../styles/custom.scss';
import LinkList from './LinkList.jsx';
import CreateLink from './CreateLink.jsx';
import Login from './Login'
import Search from './Search'
import FlightControllerList from './FlightControllers/FlightControllerList'
import { Switch, Route, Redirect } from 'react-router-dom'
import AddFlightController from './AddFlightController.jsx';
import EditFlightController from './EditFlightController.jsx';
import AddMerchant from "./Merchant/AddMerchant";
import ViewMerchants from "./Merchant/ViewMerchants";
import EditMerchant from "./Merchant/EditMerchant";
import ViewFlightController from './FlightControllers/FlightControllerPage.js'
import UsersPage from './Pages/Users/UsersPage.jsx';
import UserPage from './Pages/Users/UserPage.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';

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
          <ProtectedRoute exact path='/add-flight-controller' component={AddFlightController } />
          <ProtectedRoute exact path='/edit-flight-controller/:fc' component={EditFlightController } />
          <Route exact path='/flight-controller/:fc' component={ViewFlightController } />
          <Route exact path='/merchants' component={ViewMerchants } />
          <ProtectedRoute exact path='/add-merchant' component={AddMerchant } />
          <ProtectedRoute exact path='/edit-merchant/:merchant' component={EditMerchant } />
          <ProtectedRoute exact path='/users' component={UsersPage}/>
          <ProtectedRoute exact path='/user/:userId' component={UserPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
