import {CHANELS} from './chanels'

class TimerService{
    constructor(timerinterface,pubsub){
        this.timerinterface = timerinterface
        this.pubsub = pubsub;
        this._handler = null;
    }
    init(){
        this._handler = this.timerinterface.setInterval(()=>{
            this.pubsub.emit(CHANELS.CHANGE_DATE, new Date())
        },1000)        
    }
    dispose(){
        this._handler && this.timerinterface.clearInterval(this._handler) 
    }
}

export default function getTimer(timerinterface,pubsub){
    return new TimerService(timerinterface,pubsub)
}