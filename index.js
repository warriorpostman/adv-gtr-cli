const { Mode, Scale, Interval } = require('@tonaljs/tonal');
const _ = require('lodash');

// Mode.all().forEach(mode => console.log(mode.name, mode.modeNum));

function randomMode() {
}

function randomString() {
}
// TODO: Split the function, one for string and one for mode
function pickStringAndMode() {
  const randomStringSeed = Math.random();
  const strings = ['Low E', 'A', 'D', 'G', 'B', 'High E']

  const stringIndex = Math.round(randomStringSeed * 6);
  // console.log(randomStringSeed, stringIndex);
  const randomModeSeed = Math.random();
  const modeIndex = Math.round(randomStringSeed * 7);
  const selectedMode = Mode.all()[modeIndex];

  // console.log(modeIndex, Mode.all()[modeIndex - 1]);
  // console.log(randomStringSeed, stringIndex);
  return { 
    string: strings[stringIndex], 
    mode: selectedMode.name
  };
  // console.log(`Now play:
  //   string=${strings[stringIndex]} 
  //   mode=${selectedMode.name} (${selectedMode.modeNum})
  // `);
}

// kick it off!
const thingie = pickStringAndMode();
console.log("THINGIE: ", thingie);

const scale = Scale.get("D dorian"); // =>["C", "D", "E", "F", "G", "A", "B"];
// console.log(scale);
 
const notes = scale.notes;

const noteIndexes = _.range(0, 6);
const intervals = noteIndexes
  .map(idx => ({ a: notes[idx], b: notes[idx + 1] }))
  .map(obj => Interval.distance(obj.a, obj.b))
  .map(interval => interval === '2M' ? 'whole step' : 'half step');

console.log('Intervals: ', intervals);
const vizuel = intervals.map(step => step === 'whole step' ? " * |   |" : " *  |");
console.log(vizuel.join(''));

// TODO: Consolidate to a function (one that takes an optional param to do it side-ways?
intervals.forEach(i => {
  if (i === 'whole step') {
    console.log("o");
    console.log("|");
  } else {
    console.log("o");
  }
});
console.log('o');

// console.log(Interval.distance('C', 'D'));
// console.log(Interval.distance('D', 'E'));
// console.log(Interval.distance('E', 'F'));
// console.log(Interval.distance('F', 'G'));

// setInterval(pickStringAndMode, 5000);

process.exit(0);
