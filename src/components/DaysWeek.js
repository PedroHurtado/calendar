import {daysweek} from '../services/daysweek'
import './DaysWeek.css'
export default function DaysWeeks(){
    return(        
        <div className='daysweeks'>
            {daysweek.map(d=><div className='dayweek' key={d}>{d}</div>)}
        </div>
          
    )
}