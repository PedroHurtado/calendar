import './Calendar.css'
import SystemTime from './SystemTime'
import SystemDate from './SystemDate'
import DateMonth from './DateMonth'
import GridCalendar from './GridCalendar'
import ButtonCanlendar from './ButtonCanlendar'
import DaysWeeks from './DaysWeek'
import EventDate from './EventDate'
import {PubSub} from '../services/pubsub'
import CalendarContext from '../services/calendarcontex'
import { ACTIONS } from '../services/actions'

export default function Calendar(){
    const pubsub = new PubSub()
    return (
        <div className='calendar'>
            <CalendarContext.Provider value={pubsub}>                                             
                <SystemTime/>
                <SystemDate/>                
                <div className='separator'>
                    <div className='header'>
                        <div className='datemonth'>
                            <DateMonth/>
                        </div>                    
                        <ButtonCanlendar action = {ACTIONS.UP}/>
                        <ButtonCanlendar action = {ACTIONS.DOWN}/>
                    </div>
                    <DaysWeeks/>
                    <GridCalendar/>                   
                </div>
                <EventDate />
               
            </CalendarContext.Provider>
        </div>
    )
}