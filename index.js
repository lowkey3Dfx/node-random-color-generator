import chalk from 'chalk';
import randomColor from 'randomcolor';

const lum = process.argv[3];
const col = process.argv[2];

const userColor = randomColor({
  luminosity: lum,
  hue: col,
});
function colorAndLog(str) {
  console.log(chalk.hex(userColor).bold(str));
}

colorAndLog(`##############################
##############################
##############################
########              ########
########   ${userColor}    ########
########              ########
##############################
##############################
##############################`);
