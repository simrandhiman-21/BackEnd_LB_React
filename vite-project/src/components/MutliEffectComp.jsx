import React,{useState,useEffect} from 'react'

const MutliEffectComp = () => {
    const [count,setcount]=useState(0);
    const[seconds,setseconds]=useState(0);

    useEffect(()=>{
        console.log("component rendered or count changed",count);
    },[count]);

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
      }, []); 

  return (
    <>
    <div>
            <h1>count:{count}</h1>
            <button onClick={()=>setcount(count+1)}>button</button>
        </div>
    <div>
       <h1>Seconds:{seconds}</h1>
    </div>
    </>
  )
}

export default MutliEffectComp
