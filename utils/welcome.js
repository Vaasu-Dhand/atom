import chalk from "chalk";
import config from '../config'

function log(string) {  
  console.log(chalk.bold.keyword(config.color)(string))
}

export const welcome = (c = config.char) => { // * Takes in the Character
  console.log("\n");
  log(`     ${c}     ${c} ${c} ${c} ${c} ${c}    ${c} ${c} ${c}        ${c}     ${c}`);
  log(`    ${c} ${c}        ${c}       ${c}     ${c}      ${c} ${c}   ${c} ${c}`);
  log(`   ${c}   ${c}       ${c}      ${c}       ${c}    ${c}   ${c} ${c}   ${c}`);
  log(`  ${c} ${c} ${c} ${c}      ${c}      ${c}       ${c}   ${c}     ${c}     ${c}`);
  log(` ${c}       ${c}     ${c}       ${c}     ${c}   ${c}             ${c}`);
  log(`${c}         ${c}    ${c}        ${c} ${c} ${c}   ${c}               ${c}`);
  console.log("\n");
}
