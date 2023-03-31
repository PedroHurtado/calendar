import './SystemDate.css';
import { useEffect, useState, useContext } from "react"
import {CHANELS} from '../services/chanels'
import TimerContext from '../services/timercontext'
import {FormatService} from '../services/formatservice'
import { CalendarService } from '../services/calendarservice';


export default function SystemDate(){
    const pubSub = useContext(TimerContext);
    let [date,setDate] = useState(new Date());   
    useEffect(()=>{
        const dispose = pubSub.on(CHANELS.CHANGE_DATE,(_date)=>{
            if(!CalendarService.isToday(date)){
                setDate(_date)
            }            
        })    
        return ()=>{
            dispose()
        }
    });

    return (<div className="systemdate">
        {FormatService.getDate(date.getTime())}
    </div>)
}