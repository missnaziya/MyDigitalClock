
import React,{useState} from 'react';
import './MyDigitalClock.css';



const MyDigitalClock = () =>{


    let  time = new Date ().toLocaleTimeString();

    const [timer,setTimer] = useState(time);

const UpdateTime = () =>{
    time = new Date ().toLocaleTimeString();
  setTimer(time)
}

setInterval(
    UpdateTime
, 1000);



    return <div id='container'>

      <div id='clock' >{timer}</div>


    </div>


}

export default MyDigitalClock;