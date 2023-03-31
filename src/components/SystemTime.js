import './SystemTime.css';
import { useEffect, useState, useContext } from "react"
import {CHANELS} from '../services/chanels'
import TimerContext from '../services/timercontext'
import {FormatService} from '../services/formatservice'


export default function SystemTime(){
    const pubSub = useContext(TimerContext);
    const [date,setDate] = useState(new Date());   
    useEffect(()=>{        
       const dispose =  pubSub.on(CHANELS.CHANGE_DATE,(date)=>{
            setDate(date)
        })    
        return ()=>{
            dispose && dispose()
        }
    });

    return (<div className="timer">
        {FormatService.getTime(date.getTime())}
    </div>)
}