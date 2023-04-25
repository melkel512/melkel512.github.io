function Home(){
  return (
    <Card
      bgcolor="secondary"
      margin="10%" padding="10px" borderRadius="10px"
      header="Bad Bank Home" 
      txtcolor="warning" 
      title="Welcome to the bank"
      text="Please Sign Up or Sign In to Continue" 
      body={(<img src="bank.png" width="100%" className="img fluid" alt="Bank"/>)}
    />
  );  
}
