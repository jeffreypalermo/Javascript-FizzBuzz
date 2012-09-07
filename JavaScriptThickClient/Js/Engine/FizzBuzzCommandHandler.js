function FizzBuzzCommandHandler(appender) {
    this.appender = appender;
    
    this.CanHandle = function(event) {
        return event.configuration !== undefined;
    };
    
    this.Handle = function (event) {
        GlobalApplicationBus.Send("Clearing appender");
        this.appender.Clear();
        
        var runner = new Runner(event.configuration.replacementRules);

        GlobalApplicationBus.Send("Begin run");
        runner.Run(event.configuration.lowerBound, 
            event.configuration.upperBound, this.appender);
        GlobalApplicationBus.Send("End run");
    };
}