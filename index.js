const { Mode } = require('@tonaljs/tonal');

Mode.all().forEach(mode => console.log(mode.name, mode.modeNum));

function pickStringAndMode() {
  const randomStringSeed = Math.random();
  const strings = ['Low E', 'A', 'D', 'G', 'B', 'High E']

  const stringIndex = Math.round(randomStringSeed * 6);
  // console.log(randomStringSeed, stringIndex);
  const randomModeSeed = Math.random();
  const modeIndex = Math.round(randomStringSeed * 7);
  const selectedMode = Mode.all()[modeIndex];

  console.log(modeIndex, Mode.all()[modeIndex - 1]);
  // console.log(randomStringSeed, stringIndex);
  console.log('Play ', strings[stringIndex], selectedMode.name, "(", selectedMode.modeNum, ")");
}

// kick it off!
pickStringAndMode();
setInterval(pickStringAndMode, 60000);

// process.exit(0);

