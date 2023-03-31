import './ButtonCalendar.css'
import { ACTIONS } from "../services/actions"
import CalendarContext from '../services/calendarcontex'
import { useContext } from 'react'
import { CHANELS } from '../services/chanels'

export default function ButtonCalendar({action}){

    const pubSub = useContext(CalendarContext);
    function getClass(action){
        return `arrow ${action === ACTIONS.UP? 'up':'down'}`
    }

    function handlerClick(ev){
        ev.stopPropagation();
        pubSub.emit(CHANELS.CHANGE_MONTH,action)
    }

    return (
       
            <button className='button' onClick={handlerClick}>
                <i className={getClass(action)}></i>
            </button>
       
    )
}