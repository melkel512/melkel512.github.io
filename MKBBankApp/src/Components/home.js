import React from 'react';
import Card from '../Context/card';

function Home(){
  return (
    <Card
      bgcolor="secondary"
      margin="10%" padding="10px" borderRadius="10px" 
      header="Home of the Bad Bank"
      txtcolor='info'
      title="Don't trust us with your money."
      text="You can move around anywhere you'd like using the navigation bar, but once you leave a page we can't really tell you where you're money went...or we'd have to kill you ;)"
      body={(<img src="bank.png" width="100%" className="img fluid" alt="Bank"/>)}
    />    
  );  
};

export default Home;