import React, {useState, useContext} from 'react';
import Card, {UserContext} from '../Context/card';

function Withdraw(){
  const [balance, setBalance] = React.useState(100);
  const [withdraw, setWithdraw] = React.useState([]);
  const [status, setStatus] = React.useState('');
  const [show, setShow] = React.useState(true);
  const ctx = React.useContext(UserContext);  

  function validate(withdraw){
    if(!withdraw) { 
      setStatus('Error: Must enter amount to withdraw'); 
      setTimeout(() => setStatus(''), 2000); 
      return false; }
    
    if(isNaN(withdraw)){ 
      setStatus('Error: Withdrawal amount entered was not a number'); 
      setTimeout(() => setStatus(''), 2000); 
      return false; } 
    
    if(withdraw > 0){ 
      setStatus('Error: Withdrawal amount must be less than $0'); 
      setTimeout(() => setStatus(''), 2000); 
      return false; }

    if((parseInt(balance) + parseInt(withdraw)) < 0 ){ 
      setStatus('Error: Withdrawal amount must be less than remaining balance.'); 
      setTimeout(() => setStatus(''), 2000); 
      return false; }
    
    return true; }
  
  function handleChange(){
    console.log(balance, +withdraw)
    if(!validate(withdraw)) return; 
    parseInt(withdraw); 
    if(isNaN(balance)){setBalance(''); return}; 
    parseInt(balance); 
    setWithdraw([...withdraw]); 
    setBalance(parseInt(withdraw) + parseInt(balance)); 
    setShow(false); 
    ctx.users.push({balance:balance, withdraw:withdraw}); }
  
  function clearForm(){ setWithdraw(''); setShow(true); }

  return (
    <Card
      bgcolor="danger"  
      margin='0' 
      padding='30px' 
      borderRadius='10px' 
      header="Make A Withdrawal" 
      txtcolor="light"  
      status={status}  
      body={show ? (  
      <>
    <br/>
      <div id='account-area'> 
        <div className='container'> 
          <div className='col-lg mb-3'>
            <div className='balance status'>
              <h5>Balance</h5>
              <h2>${balance}</h2>  
            </div> 
            <div 
              value={balance} 
              onChange={e => setBalance(e.target.value)} /> 
              <br/> <br/>
            <div className='submit-area'>
                <h5>Amount to Withdraw</h5>
                <input 
                  type='text'
                  className='form-control' 
                  placeholder='Enter withdrawal amount' 
                  value={withdraw} 
                  onChange={e => setWithdraw(e.target.value)}/>
                  <br/>
                <button 
                  type='submit' 
                  className='btn btn-danger' 
                  onClick={handleChange}> 
                Withdraw 
                </button>
            </div> 
          </div> 
        </div> 
      </div>
    </>
    ):(
    <>
      <h5>Success!! You withdrew ${withdraw} from your account!</h5>
      <button 
        type="submit" 
        className="btn btn-light" 
        onClick={clearForm}> 
      Submit Another Withdraw 
      </button>
    </>
    )}
  />
  )
};

export default Withdraw