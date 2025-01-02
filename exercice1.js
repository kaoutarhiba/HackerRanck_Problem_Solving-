import React, { useRef, useState } from 'react'
import Confetti from 'js-confetti'
import './style.css'

function NameList(prop) {
  return(<ul>{prop.map((nom,index)=>(<li key={index}>{prop[index]}</li>))}</ul>);
} 
export function App(props) {
  const Noms = ['ahxjhw', 'hjgsxj','fyygfyu'];

  return  NameList(Noms);
}


export default App
