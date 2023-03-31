import './DayCalendar.css'
export default function DayCalendar({
    date,
    isInMonth,
    isToday
}){
    
    function getClass(){
        return `day ${isInMonth? 'is-in-month':''} ${isToday?'is-today':''}`.trim()
    }
    
    return (<div className={getClass()} data-id={date.getTime()}>
        {date.getDate()}
    </div>)
}