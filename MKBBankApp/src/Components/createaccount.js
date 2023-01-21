import React, {useContext} from 'react';
import Card, { UserContext } from '../Context/card';

function CreateAccount(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
    if (!field) { 
      setStatus('Required ' + label); 
      return false; 
    } 
    else if (password.length < 8) { 
      setStatus('Password invalid. Must be longer than 8 characters.'); 
      return false; 
    } 
    return true; 
  }

  function handleCreate(){ 
    console.log(name,email,password); 
    if (!validate(name, 'name')) 
      return; 
    if (!validate(email, 'email')) 
      return;  
    if (!validate(password, 'password')) 
      return; 
    ctx.users.push({name, email, password, balance:100}); 
    setShow(false); 
  }    

  function clearForm(){ 
    setName('');  
    setEmail('');  
    setPassword('');  
    setShow(true); 
  }

  return (
    <Card 
      bgcolor="secondary" margin="10%" 
      padding="10px" borderRadius="10px" 
      header="Create Account" txtcolor="warning" 
      status={status} body={show ? (  
        <>
        <h5>Name</h5>
          <input type="text" 
            className="form-control" 
            placeholder="Enter name" 
            value={name} 
            onChange={e => setName(e.currentTarget.value)} 
            required />
        <br/>
        <h5>Email</h5>
          <input type="text" 
            className="form-control" 
            placeholder="Enter email" 
            value={email} 
            onChange={e => setEmail(e.currentTarget.value)} 
            required />
        <br/>
        <h5>Password</h5>
          <input type="text" 
            className="form-control" 
            placeholder="Enter password" 
            value={password} 
            onChange={e => setPassword(e.currentTarget.value)} />
        <br/>
          <button type="submit" 
            className="btn btn-light" 
            onClick={handleCreate} > 
          Create Account 
          </button>
        </>
      ):(
        <>
          <h5>Success</h5>
          <button type="submit" 
            className="btn btn-light" 
            onClick={clearForm}> 
          Add another account 
          </button>
        </>
      )}
    />
  )
};

export default CreateAccount
