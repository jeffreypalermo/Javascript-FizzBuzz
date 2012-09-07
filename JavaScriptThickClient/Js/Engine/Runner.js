function Runner(replacements)
{
    this.replacements = replacements;

    this.Run = function(start, end, appender) {
        for (var i = start; i <= end; i++) {
            appender.Append(this.GetLine(i));
        }
    };

    this.GetLine = function(value) {
        var line = this.GetReplacements(value);

        return line == "" ? value : line;
    };

    this.GetReplacements = function(value) {
        var replacedValue = "";
        for (var key in this.replacements) {
            if (value % key === 0) replacedValue += this.replacements[key];
        }

        return replacedValue;
    };
}
