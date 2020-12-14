class QuickTextColor {
  Reset = "\x1b[0m"

  Bright = "\x1b[1m"
  Dim = "\x1b[2m"

  Underscore = "\x1b[4m"
  Blink = "\x1b[5m"
  Reverse = "\x1b[7m"
  Hidden = "\x1b[8m"

  FgBlack = "\x1b[30m"
  FgRed = "\x1b[31m"
  FgGreen = "\x1b[32m"
  FgYellow = "\x1b[33m"
  FgBlue = "\x1b[34m"
  FgMagenta = "\x1b[35m"
  FgCyan = "\x1b[36m"
  FgWhite = "\x1b[37m"

  BgBlack = "\x1b[40m"
  BgRed = "\x1b[41m"
  BgGreen = "\x1b[42m"
  BgYellow = "\x1b[43m"
  BgBlue = "\x1b[44m"
  BgMagenta = "\x1b[45m"
  BgCyan = "\x1b[46m"
  BgWhite = "\x1b[47m"

  constructor() {

  }

  insertColors(encString) {
    let resultString = '';
    let strLen = encString.length;
    let start = -1;
    let end = -1;

    if (encString) {
      start = this.findDot(0, encString);
      if ((start >= 0) && (start < strLen)) {
        end = this.findDot(start + 1, encString);
        if ((end >= start) && (end <= strLen)) {
          // let encVal = encString.substring(start + 1, end - 1);

          // string-----.cString.-------
          //            ^ start ^
          //                    | end

          resultString = encString.substring(0, start);
          switch (encString[start + 1]) {
            case 'y':
              resultString += this.FgYellow;
              break;
            case 'b':
              resultString += this.FgBlue;
              break;
            default:
            case 'y':
              resultString += this.FgWhite;
          }
          resultString += encString.substring(start + 2, end); //skip . and code
          resultString += this.Reset;
          resultString += encString.substring(end + 1, strLen)
        }
      }
    }

    return resultString;
  };

  findDot(startPos, encString) {
    let result = -1;
    let strLen = encString.length;

    for (let i = startPos; i < strLen; i++) {
      if (encString[i] === '.') {
        result = i;
        break;
      }
    }

    return result
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = QuickTextColor;
}