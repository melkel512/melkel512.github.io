import Deposit from './deposit';
import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata';

function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="primary" margin='0' 
      padding='30px' borderRadius='10px' 
      header="Log In"
      txtcolor="warning"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LoginMsg(){
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
    </div>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handle(){
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    })
    .finally(
      <>
        <Deposit/>
        <Withdraw/>
        <Balance/>
        <AllData/>
      </>
    );
  }

  return (<>
    Email<br/>
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
    <button type="submit" className="btn btn-light" onClick={handle}>
      Login
    </button>   
  </>);
}
