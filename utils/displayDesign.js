import chalk from "chalk";
import config from '../config'

// * Atom Design

function log(string) {  
  console.log(chalk.keyword(config.color)(string)) // * Change Color Here
}

export const displayDesign = () => {
  console.log("\n");
 
  log("     ⚛     ⚛ ⚛ ⚛ ⚛ ⚛    ⚛ ⚛ ⚛        ⚛     ⚛");
  log("    ⚛ ⚛        ⚛       ⚛     ⚛      ⚛ ⚛   ⚛ ⚛");
  log("   ⚛   ⚛       ⚛      ⚛       ⚛    ⚛   ⚛ ⚛   ⚛");
  log("  ⚛ ⚛ ⚛ ⚛      ⚛      ⚛       ⚛   ⚛     ⚛     ⚛");
  log(" ⚛       ⚛     ⚛       ⚛     ⚛   ⚛             ⚛");
  log("⚛         ⚛    ⚛        ⚛ ⚛ ⚛   ⚛               ⚛");

  console.log("\n");
}
