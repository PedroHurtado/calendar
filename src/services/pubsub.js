export class PubSub {
    constructor(){
        this.suscriptors = new Map();
    } 
    emit(channel, data){
        const channelSuscriptor = this.suscriptors.get(channel);
        if(channelSuscriptor){
            channelSuscriptor.forEach(f=>f(data));
        }
    }
    on(channel, handler){
        
        let channelSuscriptor = this.suscriptors.get(channel);
        
        if(!channelSuscriptor){
            channelSuscriptor = [handler];
            this.suscriptors.set(channel, channelSuscriptor);
        }else{
            channelSuscriptor.push(handler);
        }

        return ()=>{
            const index = channelSuscriptor.indexOf(handler);
            if(index >- 1){
                channelSuscriptor.splice(index, 1);
                if(channelSuscriptor.length === 0){
                    this.suscriptors.delete(channel);
                }
            }
        }
    }
}
export default new PubSub();