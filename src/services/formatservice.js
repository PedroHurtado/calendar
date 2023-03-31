import {CalendarService} from './calendarservice'

export class FormatService {

    static getTime(date) {
        let options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
    }
    static getDate(date) {
        let options = { weekday: "long", year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
    }
    static getDateMonth(date) {
        let options = { year: 'numeric', month: 'long' };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
    }
    static getSelectedDate(date) {
        let options = { weekday: 'long', day: 'numeric' };
        return CalendarService.isToday(date,new Date()) ?
                "Hoy":  new Intl.DateTimeFormat('es-ES', options).format(date);
    }
    static getDay(date){
        let options ={day:'numeric'};
        return new Intl.DateTimeFormat('es-ES', options).format(date);
    }
}