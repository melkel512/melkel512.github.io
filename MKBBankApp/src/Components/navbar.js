import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Home from './home';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import '../Styles/App.css'

function NavBar(){
  return(
    <Nav variant="pills" defaultActiveKey='/home'>
      <Nav.Item>
        <Nav.Link eventKey={Home} href="/#/">BadBank Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={CreateAccount} href='/#/createaccount/'>Create Account</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={Deposit} href='/#/deposit/'>Deposit</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={Withdraw} href='/#/withdraw/'>Withdrawal</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={AllData} href='/#/alldata/'>All Data</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar