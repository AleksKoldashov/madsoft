import React, {useState, useEffect} from 'react';
import MyProgers from './Progres';

export const Timer=()=>{

    const num = parseInt(localStorage.getItem('timer') as string) 

    const [timerLeft, setTimerLeft]=useState( num||600)
    const minutes = Math.floor(timerLeft/60)
    const second = Math.floor(timerLeft - minutes*60)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimerLeft((timeLeft)=>(timeLeft > 1 ? timeLeft -1 : 0))
        },1000)
        return ()=>{
         
          clearInterval(interval)
        }
    },[])
    const min = minutes.toString().padStart(2,'0')
    const sec = second.toString().padStart(2,'0')
    
    localStorage.setItem('timer', `${timerLeft}`);
 
    return(
        <>
        <div className='timer'>
            <h2>{min} минут</h2>
            <h2>:</h2>
            <h2>{sec} секунд</h2>
        </div>
        <div className='res'>
            <MyProgers/>
        </div>  
           
        </>
       
  )
  }