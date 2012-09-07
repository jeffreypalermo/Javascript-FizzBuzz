function ApplicationBus() {
    this.listeners = [];
    this.Add = function(listener) {
        this.listeners.push(listener);
    };

    this.Send = function (event) {
        for (var item in this.listeners) {
            var handler = this.listeners[item];

            console.log(handler.constructor.name + 
                ": testing for handlability of " + event.constructor.name);
            
            if (handler.CanHandle(event)) {
                console.log(handler.constructor.name + ": sending event, " + event.constructor.name);
                handler.Handle(event);
            }
        }
    };
}

var GlobalApplicationBus = new ApplicationBus();

var eventLogger = new Handler();
eventLogger.CanHandle = function(event){
    return true;
};
eventLogger.Handle = function(event) {
    console.log(event);
};

GlobalApplicationBus.Add(eventLogger);