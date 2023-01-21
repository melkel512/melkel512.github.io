/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import User, {UserContext} from './Context/card';
import {HashRouter, BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import NavBar from './Components/navbar';
import Home from './Components/home';
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import AllData from './Components/alldata';

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider 
        value={{users:[{name:'Buddy', email:'buddy@vet.zoo', password:'cats123',
                balance:100, deposit:0, withdraw:0}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createaccount/" component={CreateAccount} />
            <Route exact path="/deposit/" component={Deposit} />
            <Route exact path="/withdraw/" component={Withdraw} />
            <Route exact path="/alldata/" component={AllData} />
          </Switch>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>
);


