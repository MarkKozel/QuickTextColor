const QuickTextColor = require('../src/QuickTextColor');

let qtc = new QuickTextColor()

console.log(`This is a ${qtc.FgYellow}Yellow Test${qtc.Reset}. Test out`);

console.log(qtc.insertColors('This is a .yYellow Test.. Test out'));

console.log(qtc.insertColors('This is a .bBlue Test.. Test out'));