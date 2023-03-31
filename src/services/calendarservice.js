export class CalendarService {
   
    static isToday(date) {
        const today = new Date();
        return (date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear());
    }
    static  isInMonth(date,dateMonth) {      
        return (date.getMonth() === dateMonth.getMonth() &&
            date.getFullYear() === dateMonth.getFullYear());
    }
    static  getFirstDayOfMonth(date) {
        const weekDay = date.getDate(); // 0 sunday 1 monday ...
        const diff = date.getDate() - weekDay + 1;
        return new Date(date.setDate(diff));
    }
    static  getFirstDayOfCalendar(d) {
        let date = this.getFirstDayOfMonth(d);
        date.setDate(date.getDate() - 1);
        var day = date.getDay(), diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
        return new Date(date.setDate(diff));
    }
    static  getNextDay(date) {
        const next = new Date(date);
        next.setDate(date.getDate() + 1);
        return next;
    }
    static getDays(d) {
        const days = [];
        let date = this.getFirstDayOfCalendar(d);
        for (let i = 0; i < 42; i++) {
            days.push({
                date,
                isInMonth: this.isInMonth(date,d),
                isToday: this.isToday(date),
            });
            date = this.getNextDay(date);
        }
        return days;
    }
}
