import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { Dispatch, SetStateAction } from 'react';

type cellP = {
    id: number;
    Round : string ;
    setRound: Dispatch<SetStateAction<string>>;
    value: string[];
   setValue : Dispatch<SetStateAction<string[]>>;
   cell : string;
   WinMes :string;
}




const Cell = ({Round , setRound , id , setValue ,value , cell ,WinMes} : cellP) => {



  
    const ChangeCell = (changeRuselt: string) => {

        value[id] =  changeRuselt;
        setValue(value);
    }

    const Clicks = () => {

        if(WinMes){
            return;
        }
       
        let taken = !!value[id];


if(!taken){
        if(Round === 'X'){
            ChangeCell('X');
            setRound('O');
        }else if (Round === 'O'){
            ChangeCell('O')
            setRound('X');
        }
    }
      console.log(value)
       

        }

  return (
    <div className="Sqaure" onClick={Clicks}>
        <div className={cell}>{cell ?(cell === "X" ? "X" : "O") : ""}</div>
    </div>



  )
};

export default Cell ;