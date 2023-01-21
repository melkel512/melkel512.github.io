import React, {useState, useContext} from 'react';
import Card, {ctx, UserContext} from '../Context/card';

function Deposit(){
  const [balance, setBalance] = React.useState(100);
  const [deposit, setDeposit] = React.useState([]);
  const [status, setStatus] = React.useState('');
  const [show, setShow] = React.useState(true);
  const ctx = React.useContext(UserContext);  


  function validate(deposit){
    if(!deposit) { 
      setStatus('Error: Must enter amount to deposit'); 
      setTimeout(() => setStatus(''), 2000);  
      return false; }
    
    if(isNaN(deposit)){ 
      setStatus('Error: Deposit amount entered was not a number'); 
      setTimeout(() => setStatus(''), 2000); 
      return false; } 
    
    if(deposit < 0){ 
      setStatus('Error: Deposit amount must be greater than $0'); 
      setTimeout(() => setStatus(''), 2000);  
      return false; }
   
    return true; 
  }
  
  function handleChange(){ 
    console.log(balance, +deposit); 
    if(!validate(deposit)) return; 
    parseInt(deposit); 
    if(isNaN(balance)){setBalance(0); return}; 
    parseInt(balance); 
    setDeposit([...deposit]); 
    setBalance(Number(deposit) + Number(balance)); 
    setShow(false);  
    ctx.users.push({deposit:deposit, balance:(Number(deposit)+Number(balance))}); 
  }
  
  function clearForm(){ 
    setDeposit('');
    setShow(true); 
  }

  return (
    <Card 
      bgcolor="success"  margin='0' 
      padding='30px' borderRadius='10px'  
      header="Make A Deposit"  txtcolor="light"  
      status={status}  body={show ? (  
      <>
    
    <br/>
      <div id='account-area'> 
        <div className='container'> 
          <div className='col-lg mb-3'>
            <div className='balance status'>
              <h2>Balance</h2>
              <h2>${balance}</h2>  
            </div> 
            <div value={balance} 
              onChange={e => setBalance(e.target.value)} /> 
              <br/> <br/> <br/>
            <div className='submit-area'>
              <h5>Amount to Deposit</h5>
              <input type='text' 
                className='form-control' 
                placeholder='Enter deposit amount' 
                value={deposit} 
                onChange={e => setDeposit(e.target.value)}/>
        <br/>
            <button 
              type='submit' 
              className='btn' 
              onClick={handleChange}> 
            Deposit 
            </button>              
            </div> 
          </div> 
        </div> 
      </div> 
    </>  
  ):(  
  <>
  <h5> Success!! You deposited ${deposit} in your account! </h5>
    <button type="submit" 
      className="btn" 
      onClick={clearForm}> 
    Submit Another Deposit 
    </button>  
  </>  
  )}  
  />  
  ) 
};

export default Deposit
