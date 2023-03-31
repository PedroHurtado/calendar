import './SystemTime.css';
import {FormatService} from '../../services/formatservice'
import { useTime } from './useTime';


export default function SystemTime(){
    
    const date = useTime();
            
    return (<div className="timer">
        {FormatService.getTime(date.getTime())}
    </div>)
}