import React from 'react';
import Card from './context';
// import {ctx, UserContext} from './context';

function Deposit(){
  const [balance, setBalance] = React.useState('');
  const [currentBalance, setCurrentBalance] = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const [currentDeposit, setCurrentDeposit] = React.useState('');
  // const [amount, setAmount] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [show, setShow] = React.useState(true);
 // const ctx = React.useContext(UserContext);  

  function validate(field, label){
    if(!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 2000); 
      return false;
      }
    if(isNaN(currentDeposit)){
      setStatus('Error: Deposit amount entered was not a number');
      setTimeout(() => setStatus(''), 2000); 
      return false;
      } 
    if(deposit.isInteger(currentDeposit) && currentDeposit < 0){
      setStatus('Error: Deposit amount must be greater than $0');
      setTimeout(() => setStatus(''), 2000); 
      return false;
      }
    return true;
  }
  function handleChange(){
    console.log(balance, deposit);
    if(!validate(balance, currentBalance, 'balance')) return; 
    if(!validate(deposit, currentDeposit,'deposit')) return;
    if(deposit.isInteger(currentDeposit) && currentDeposit > 0) return; 
 //   createContext.Depositer.push({currentDeposit, currentBalance});
    setShow(false);
  }
  function clearForm(){
    setBalance(currentBalance);
    setDeposit('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="salmon" txtcolor="offwhite" margin='0' padding='30px' borderRadius='10px' color='lightblue' header="Make A Deposit" status={status} body={show ? (  
        <>
    <br/>
        <div id='account-area'>
          <div className='container'>
            <div className='col-lg-4 mb-3'>
              <div className='balance status'>
                <h5>Current Balance</h5>
                <h2>$<span id='currentBalance'>100</span></h2>
              </div>
            </div>
          </div>
        </div>
       <div id="balance" value={currentBalance} onChange={e => setCurrentBalance(e.target.value)} /><br/>
    <br/>
        <div id='account-area'>
          <div className='container'>
            <div className='col-lg-4 mb-3'>
              <div className='deposit status'>
                <h5>Total Deposited</h5>
                <h2>$<span id='currentDeposit'>00</span></h2>
              </div>
            </div>
          </div>
        </div>
    <br/>
        <div id='account-area'>
          <div className='container'>
            <div className='col-lg-6'>
              <div className='submit-area'>
                <h5>Amount to Deposit</h5>
                <input type='text' className='form-control' id='deposit-amount' placeholder='Enter deposit amount' value={currentDeposit} onChange={e => setCurrentDeposit(e.target.value)}/><br/>
                <button type='submit' id='deposit-btn' className='btn btn-success' onClick={handleChange}>Deposit</button>
              </div>
            </div>
          </div>
        </div>
        </>
      ):(
        <>

        <h5>Success!!</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm} />
        </>
      )}
    />
  )
};

export default Deposit
