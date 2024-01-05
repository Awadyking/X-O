'use client';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Cell from '../items/cells';
import { type } from "os";
import { RefObject } from "react";
export default Game;


function Game() {

 const wining = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
 ]
 

useEffect(() => {
wining.forEach((Combo) => {
const Xwin = Combo.every((cell) => value[cell] === "X")
const Owin = Combo.every((cell) => value[cell] === "O")

if(Xwin){
setWinMes('Player(X) Won!');
}else if (Owin){
  setWinMes('Player(O) Won!');
}

})

})

useEffect(() => {
  if (value.every((cell) => cell !== "") && !WinMes){
    setWinMes("Draw!")
  }
})



const [value , setValue] = useState(["","","","","","","","",""]);
  
  const [Round , setRound] = useState('X');

const [WinMes , setWinMes] = useState("");




  return (
    <>
 
    
    <div className="Board">

    {value.map(
      (cell, index) => (
      <Cell Round={Round}
       setRound={setRound}
        key={index} 
        id={index} 
        value={value} 
        setValue={setValue}
        cell={cell}
        WinMes={WinMes}/>
       
    )
    )
    }
    </div>
    <div className='Mes'>{WinMes}</div>
   {!WinMes && <div className='Mes'>{`Now! It,s (${Round}) Turn`}</div>}
  
    </>
  )
}
