import React,{useState,useEffect} from 'react'

const TimerComp = () => {
    const[seconds,setseconds]=useState(0);

    useEffect(() => {
      // first
      const interval=setInterval(()=>{
        console.log("SetInteval excuted");
        setseconds(prevsec=>prevsec+1);
      },1000)
    
      return () => { //unmount 
        // second clean-UP
        console.log("Time To Stop");
        clearInterval(interval);
      }
    }, []); //Empty dependecy list ..it will run only on first render 

  return (
    <>
      <h1>Seconds:{seconds}</h1>   
    </>
  )
}

export default TimerComp