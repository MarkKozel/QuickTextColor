# Quick Text Color

Simple JavaScript node package to create colorful terminal output

QuickTestColor contains standard ANSI terminal color codes for foreground, background, bright/dim, blink, reverse, blink, and hidden formats.  In addition, QuickTestColor defines a simple *dot notation* format that is parsed, returning a string with embedded ANSI codes begin/reset elements

## Requires:
- Node 12.x, maybe earlier

## Usage:

**Simple example, *hand-jamming* codes in a string**
```javascript
const QuickTextColor = require('../src/QuickTextColor');

let qtc = new QuickTextColor()

console.log(`This is a ${qtc.FgYellow}Yellow Test${qtc.Reset}. Test out`);
```

Results:

>This is a <span style="color:yellow">Yellow Test</span>. Test out

<br>

**Example using *dot-notation* in a string**
```javascript
const QuickTextColor = require('../src/QuickTextColor');

let qtc = new QuickTextColor()

console.log(qtc.insertColors('This is a .yYellow Test.. Test out'));

console.log(qtc.insertColors('This is a .bBlue Test.. Test out'));
```

Results:

>This is a <span style="color:yellow">Yellow Test</span>. Test out
>
>This is a <span style="color:blue">Blue Test</span>. Test out

## License:
[CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
Attribution-NonCommercial-ShareAlike 4.0 International

## Miscellany

### Near Future to-dos
Parse multiple color codes...only handle 1 dot-code per line and only FG color (yellow or blue)

Define *dot-code* for separate FG/BG/Other codes

### Version History
0.0.1 - Initial build to ensure dot-codes are doable

<a href="https://www.buymeacoffee.com/MarkKozel" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>

### Historical Context
US Presidential Election is over, but not everyone accepts the results. Thanksgiving was a time to share corona virus with loved-ones. Christmas is another *giving* opportunity fast approaching. Vaccine is, oh, so close