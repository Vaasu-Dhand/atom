import arg from "arg";
import chalk from 'chalk'

import { displayDesign } from "../utils/displayDesign";

export function cli(args) {
  displayDesign('#')

}

// function parseArgumentsIntoOptions(rawArgs) {
//   const args = arg(
//     {
//       '--git': Boolean,
//       '--yes': Boolean,
//       '--install': Boolean,
//       '-g': '--git',
//       '-y': '--yes',
//       '-i': '--install',
//     },
//     {
//       argv: rawArgs.slice(2)
//     }
//   )


// }