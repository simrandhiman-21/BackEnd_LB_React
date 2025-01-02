import React, { useEffect, useState } from 'react'
import UserCards from './components/userCards'
import LoggedIn from './components/loggedIn';
import LoggedOut from './components/LoggedOut';
import EvenHandling from './components/EvenHandling';
import LoggerComp from './components/LoggerComp';
import TimerComp from './components/TimerComp';
import ResizerComp from './components/ResizerComp';
import DataFecherComp from './components/DataFecherComp';
import MutliEffectComp from './components/MutliEffectComp';


const App = () => {

  //const[islogedin,setisloggedin]=useState(true);
  
  // return (
  //   <>
    
  // <UserCards name="hii" desc="good" style={{ color: "red" }} />
  // <UserCards name="namaste" desc="badhiya" style={{color: "blue"}}/>
  // <UserCards name="Annyeooseoo" desc="kinchana-kinchana" style={{color: "green"}}/>

  //   </>
  // )
 

  // condentional rendering
  //1 if else
  //2 trenary 
  //3 logical operator
  //4 early call 
  
  // if(islogedin){
  //   return(
  //     <div>
  //       <loggedIn/>
  //     </div>
  //   )
  // }
  //   else{
  //     return(
  //       <div> 
  //       <LoggedOut/>
  //       </div>
  //     )
  //   }

    // return(
    //   <>
    //   {islogedin?<LoggedIn/>:<LoggedOut/>}
    //   </>
    // )

    // if(!islogedin){
    //     return(
    //       <LoggedIn/>
    //     )
    //   }
    // return(
    //   <div>{islogedin && <LoggedOut/>}</div>
    // )

    // return(
    //   <>
    //     <EvenHandling/>      
    //   </>
    // )

    return(
          //Hooks UseEffect 4 files
          <>
          {/* <LoggerComp/> */}
          {/* unmount interval */}
          {/* <TimerComp/>   */}

        {/* <DataFecherComp/> */}
        {/* <ResizerComp/>    */}
        <MutliEffectComp/>         

          </> 
    )   
}
export default App