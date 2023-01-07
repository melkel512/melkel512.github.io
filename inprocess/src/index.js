import {React, UserContext} from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, Link} from 'react-router-dom';
import NavBar from './Components/navbar';
import AllData from './Components/alldata';
import Home from './Components/home';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import Balance from './Components/balance';
import Login from './Components/login';
import CreateAccount from './Components/createaccount';

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'Buddy',email:'buddy@vet.zoo',password:'cats123',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
