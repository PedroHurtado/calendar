import './App.css';
import {useEffect} from 'react'
import { PubSub } from './services/pubsub';
import { TimerInterface } from './services/timerinterface'
import TimerContext from './services/timercontext'
import getTimer from './services/timerservice'
import Calendar from './components/Calendar';


const pubSub = new PubSub()
const timer = getTimer(TimerInterface, pubSub)



function App() {
   
   useEffect(()=>{    
    timer.init()    
    return ()=>timer.dispose()
   })

  return (
    <TimerContext.Provider value={pubSub}>    
      <div className='container'>
        <Calendar/>      
        <Calendar/>
        <Calendar/>
      </div>
    </TimerContext.Provider>
  );
}

export default App;
