function Program(configuration, appender) {

    this.appender = appender;
    this.Main = function() {
        var runner = new Runner(configuration.replacementRules);
        runner.Run(configuration.lowerBound, configuration.upperBound, appender);
    };
}
