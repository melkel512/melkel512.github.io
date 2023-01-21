import React, {useState, useContext} from 'react'; 
import { UserContext } from '../Context/card';

export function Data(){
  const ctx = React.useContext(UserContext);
    return (
          JSON.stringify(ctx)
    )
}; 
