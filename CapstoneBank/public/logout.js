import Login from './login';

function Logout(){
  const [show, setShow]           = React.useState(true);
  const [status, setStatus]       = React.useState('');    
  const [logoutMsg, setLogoutMsg] = React.useState('');
  
  return (
    <Card
      bgcolor="primary" margin='0' 
      padding='30px' borderRadius='10px' 
      header="Log Out"
      txtcolor="warning"
      status={status}
      body={ <LogoutForm setShow={setShow} setStatus={setStatus}/> }
    />
  ); 

  function LogoutForm(){
    function handle(){
      fetch(`/account/logout`)
      .then(response => response.text())
      .then(() => {
          try {
              setStatus('');
              setShow(false);
              <LoginForm/>
          } catch(err) {
              setStatus("Error logging out")
              console.log('log out error');
          }
      });
    }

  return (
    <div className="container">
      <p>
        <a href="#/login/" className="btn btn-secondary btn-lg">
          <span className="glyphicon glyphicon-log-out"></span> Log out
        </a>
      </p>  
    </div>
    )
  };
}
