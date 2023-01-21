/* eslint-disable no-unused-vars */
import React from 'react';
import {Route, HashRouter, Link } from 'react-router-dom';
export const UserContext = React.createContext(null);

export default function Card(props){
  const ctx = React.useContext(UserContext);
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor : 'text-white';
      const margin = props.margin ? ' margin-' + props.margin : '5%';
      const padding = props.padding ? 'padding-' + props.padding : '10px';
      const borderRadius = props.borderRadius ? 'border-radius-' + props.borderRadius : '15px'; 
      const color = props.color ? 'color-' + props.color : ' ';
      return 'card mb-3 ' + bg + txt + margin + padding + borderRadius + color;
    }
    return (
      <div className={classes()} style={{maxWidth: "auto"}}>
        <div style-="textAlign: center" className="card-header"><h1>{props.header}</h1></div>
        <div className="card-body">
          {props.title && (<h4 className="card-title">{props.title}</h4>)}
          {props.text && (<h5 className="card-text">{props.text}</h5>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );
  }

export function UserBalance(props){
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState('');

  return (
    <div style={{paddingBottom:".75rem"}}>
      {ctx.setAmount && (
        <h1 style={{textAlign: "center"}}>Your Current Balance is:<br /> ${props.currentBalance}</h1>
    
      )}
    </div>
  )
};
