import { useEffect, useState, useContext } from "react"
import {CHANELS} from '../../services/chanels'
import TimerContext from '../../services/timercontext'
import { getDate } from "../../services/getdate";

export function useTime(){

    const pubSub = useContext(TimerContext);
    const [date,setDate] = useState(getDate()); 
    useEffect(()=>{        
        const dispose = pubSub.on(CHANELS.CHANGE_DATE,(date)=>{
            setDate(date)
        })    
        return ()=>{
            dispose && dispose()
        }
    });
    return date;

}
