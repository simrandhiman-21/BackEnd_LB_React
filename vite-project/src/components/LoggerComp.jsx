import React ,{useState,useEffect}  from 'react'

const LoggerComp = () => {
    const [count,setcount]=useState(0);
    useEffect(()=>{
        console.log("component rendered or count changed",count);
    })
    return (
      <>
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>setcount(count+1)}>button</button>
        </div>
        </>    
  )
}
export default LoggerComp;
