import Deposit from './deposit';
import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata';
import Logout from './logout';

function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="secondary" margin="10%"
      padding="10px" borderRadius="10px"
      header="Join the Bank" txtcolor="warning"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow} setStatus={setStatus}/> : 
        <CreateMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function CreateMsg(){
  return(<>
    <h5>Success</h5>
    <div className="container">
      <a href="#/deposit/" className="btn btn-light">
        Make Deposit
      </a>
      <a href="#/withdraw/" className="btn btn-light">
        Make Withdrawal
      </a> 
      <a href="#/balance/" className="btn btn-light">
        Check Balance
      </a>
      <a href="#/alldata/" className="btn btn-light">
        View All Data
      </a>
      <a href="#/logout/" className="btn btn-light">
        Log Out
      </a>  
    </div>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handle(){
    console.log(name,email,password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();    
        console.log(data);        
    })();
    props.setShow(false);
    fetch(
      <>
        <Deposit/>
        <Withdraw/>
        <Balance/>
        <AllData/>
	      <Logout/>
      </>
    )

  }    

  return (<>
    Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>
    Email address<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>
    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>
    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Account</button>
  </>);
}