import React from 'react';
import Card from './context';
// import {ctx, UserContext} from './context';

function Withdraw(){
  const [balance, setBalance] = React.useState('');
  const [currentBalance, setCurrentBalance] = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const [currentWithdraw, setCurrentWithdraw] = React.useState('');
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
    if(isNaN(currentWithdraw)){
      setStatus('Error: Withdrawal amount entered was not a number');
      setTimeout(() => setStatus(''), 2000); 
      return false;
      } 
    if(withdraw.isInteger(currentWithdraw) && currentWithdraw > 0){
      setStatus('Error: Amount to withdraw must be less than $0');
      setTimeout(() => setStatus(''), 2000); 
      return false;
      }
    return true;
  }
  function handleChange(){
    console.log(balance, withdraw);
    if(!validate(balance, currentBalance, 'balance')) return; 
    if(!validate(withdraw, currentWithdraw,'withdraw')) return;
    if(withdraw.isInteger(currentWithdraw) && currentWithdraw > 0) return; 
 //   createContext.Withdrawal.push({currentWithdraw, currentBalance});
    setShow(false);
  }
  function clearForm(){
    setBalance(currentBalance);
    setWithdraw('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="salmon" txtcolor="offwhite" margin='0' padding='30px' borderRadius='10px' color='lightblue' header="Make A Withdrawal" status={status} body={show ? (  
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
              <div className='withdraw status'>
                <h5>Total Withdrawn</h5>
                <h2>$<span id='currentWithdraw'>00</span></h2>
              </div>
            </div>
          </div>
        </div>
    <br/>
        <div id='account-area'>
          <div className='container'>
            <div className='col-lg-6'>
              <div className='submit-area'>
                <h5>Amount to Withdraw</h5>
                <input type='text' className='form-control' id='withdraw-amount' placeholder='Enter withdrawal amount' value={currentWithdraw} onChange={e => setCurrentWithdraw(e.target.value)}/><br/>
                <button type='submit' id='withdraw-btn' className='btn btn-success' onClick={handleChange}>Withdraw</button>
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

export default Withdraw
