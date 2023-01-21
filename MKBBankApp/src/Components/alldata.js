import React, {useState, useContext} from 'react'; 
import Card, { UserContext } from '../Context/card';
import Table from 'react-bootstrap/Table';

export default function AllData(){
  const ctx = React.useContext(UserContext);
  const dataName = ctx.users.map((user) => {
    return (
      <ul>{user.name}</ul>
    )
  })
  const dataEmail = ctx.users.map((user) => {
    return (
      <ul>{user.email}</ul>
    )
  })
  const dataPassword = ctx.users.map((user) => {
    return (
      <ul>{user.password}</ul>
    )
  })
  const dataDeposit = ctx.users.map((user) => {
    return (
      <ul>{user.deposit}</ul>
    )
  })
  const dataBalance = ctx.users.map((user) => {
    return (
      <ul>{user.balance}</ul>
    )
  })
  const dataWithdraw = ctx.users.map((user) => {
    return (
      <ul>{user.withdraw}</ul>
    )
  })
    return (
      <>
      <Card bgcolor="secondary"  margin='0' 
      padding='10px' borderRadius='10px'  
      header="All Data"  txtcolor="info"    
      body={   <>
        <Table bordered >
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Balance</th>
          <th>Deposit Amount</th>
          <th>Withdrawal Amount</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{dataName}</td>
          <td>{dataEmail}</td>
          <td>{dataPassword}</td>
          <td>{dataBalance}</td>
          <td>{dataDeposit}</td>
          <td>{dataWithdraw}</td>
        </tr>
        </tbody>
        </Table>
      </> } /> </>
    )
}; 
