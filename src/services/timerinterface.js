const TimerInterface = (function getTimerInteface(scope){
    return {
        setInterval : scope.setInterval.bind(scope),
        clearInterval : scope.clearInterval.bind(scope)
    }
}(window || global));

export {TimerInterface};

