import { useEffect, useState, useContext } from "react"
import TimerContext from '../services/timercontext'
import CalendarContex from "../services/calendarcontex";
import DayCalendar from "./DayCalendar";
import { CalendarService } from "../services/calendarservice";
import { CHANELS } from "../services/chanels";
import './GridCalendar.css'
export default function GridCalendar() {

    const pubSub = useContext(TimerContext);
    const pubSubCalendar = useContext(CalendarContex)
    
    let [days,setDays] = useState(CalendarService.getDays(new Date()));   
    let [isInMonth,setisInMohth] = useState(true);

    const disposables = [];
    

    useEffect(()=>{
        const {date} = days.find(d=>d.isInMonth)
        //System Date
        let dispose = pubSub.on(CHANELS.CHANGE_DATE,(_date)=>{
            if(!CalendarService.isInMonth(_date,date) && isInMonth){ //ultimo dia del mes
                //etDate(_date)
                setDays(CalendarService.getDays(_date))
            }            
        }) 
        disposables.push(dispose) 
        //Change Month

        dispose = pubSubCalendar.on(CHANELS.CHANGE_MONTH,(action)=>{         
            
            const newDate = new Date(date.setMonth(date.getMonth() + action)) 
            if(!CalendarService.isInMonth(newDate,new Date())){
                 setisInMohth(false)   
            }              
            else{
                setisInMohth(true)   
            }
            setDays(CalendarService.getDays(newDate))
        }) 
        disposables.push(dispose)  


        return ()=>{
            disposables.forEach(d=>d())
        }
    });

    function handlerClick(ev){
        ev.stopPropagation();

        const node = ev.nativeEvent.composedPath().find(n=>n.dataset && 'id' in n.dataset);

        if(node){
            const {id} = node.dataset;
            if(id){
                const day = days.find(d=>d.date.getTime() === Number(id))
                day && pubSubCalendar.emit(CHANELS.SELECT_DAY, day.date)
             }
        }

        /*const {dataset} = ev.target;
        dataset && (function(){
            const {id} = dataset
            if(id){
               const day = days.find(d=>d.date.getTime() === Number(id))
               day && pubSubCalendar.emit(CHANELS.SELECT_DAY, day.date)
            }
        }())*/



        //console.log(ev.target)
        //console.log(ev.nativeEvent.composedPath())

    }

    return(
        <div className="grid" onClick={handlerClick}>
            {
                days.map(d=><DayCalendar key={d.date} {...d}/>)
            }
        </div>
    )
   
}