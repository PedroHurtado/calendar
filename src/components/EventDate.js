import './EventDate.css'

import { useState, useEffect ,useContext } from "react"
import { CHANELS } from "../services/chanels";
import CalendarContex from "../services/calendarcontex";
import { FormatService } from "../services/formatservice";
export default function EventDate(){
    const [date,setDate] = useState(new Date());
    const pubSubCalenddar = useContext(CalendarContex);
    
    useEffect(()=>{
        const dispose = pubSubCalenddar.on(CHANELS.SELECT_DAY,(date)=>{
            setDate(date)
        })
        return ()=>dispose && dispose();
    })

    return (
        <div className='date'>{FormatService.getSelectedDate(date)}</div>
    )
}