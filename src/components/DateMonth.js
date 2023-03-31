import { useEffect, useState, useContext } from "react"
import {CHANELS} from '../services/chanels'
import TimerContext from '../services/timercontext'
import CalendarContex from "../services/calendarcontex";
import {FormatService} from '../services/formatservice'
import { CalendarService } from '../services/calendarservice';



export default function DateMohth(){
    const pubSub = useContext(TimerContext);
    const pubSubCalendar = useContext(CalendarContex)
    
    let [date,setDate] = useState(new Date());   
    let [isInMonth,setisInMohth] = useState(true);

    const disposables = [];
    useEffect(()=>{
        
        //System Date
        let dispose = pubSub.on(CHANELS.CHANGE_DATE,(_date)=>{
            if(!CalendarService.isInMonth(_date,new Date()) && isInMonth){ //ultimo dia del mes
                setDate(_date)
            }            
        }) 
        disposables.push(dispose) 
        //Change Month

        dispose = pubSubCalendar.on(CHANELS.CHANGE_MONTH,(action)=>{         
            const newDate = new Date(date.setMonth(date.getMonth() + action)) 
            if(!CalendarService.isInMonth(date,newDate)){
                 setisInMohth(false)   
            }              
            else{
                setisInMohth(true)   
            }
            setDate(newDate)
        }) 
        disposables.push(dispose)   


        return ()=>{
            disposables.forEach(d=>d())
        }
    });

    return (<div className="systemdate">
        {FormatService.getDateMonth(date.getTime())}
    </div>)
}