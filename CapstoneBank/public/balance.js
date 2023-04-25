import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import Logout from './logout';

function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="dark" margin='0' 
      padding='30px' borderRadius='10px' 
      header="Check Your Balance"
      txtcolor="primary"  
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function BalanceMsg(){
  return(<>
    <h5>Success</h5>
    <div className="container">
      <a href="#/deposit/" className="btn btn-light">
        Make Deposit
      </a>
      <a href="#/withdraw/" className="btn btn-light">
        Make Withdrawal
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

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(text);
            props.setShow(false);
            setBalance(user.balance);
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
        <AllData/>
	      <Logout/>
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
    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>
  </>);
}