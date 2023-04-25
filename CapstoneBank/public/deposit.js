import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata';
import Logout from './logout';

function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="success" margin="0" 
      padding="30px" borderRadius="10px"
      header="Make a Deposit" txtcolor="dark"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <div className="container">
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}
      >
        Make Another Deposit
      </button>
      <a href="#/withdraw/" className="btn btn-light">
        Make Withdrawal
      </a> 
      <a href="#/alldata/" className="btn btn-light">
        View All Data
      </a>
      <a href="#/balance/" className="btn btn-light">
        Check Balance
      </a>
      <a href="#/logout/" className="btn btn-light">
        Log Out
      </a>  
    </div>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');

  function handle(){
    fetch(`/account/update/${email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(text);
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
      }
    )
    .finally(
      <>
        <Withdraw/>
        <Balance/>
        <AllData/>
        <Logout/>
      </>
    );
  }

  return(<>
    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>
    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
    Deposit
    </button>
  </>);
}
