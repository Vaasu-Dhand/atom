import { Command } from 'commander';
import indexify from './indexify'
import createProject from './create-project'
import undo from './undo'
import { welcome } from "../utils/welcome";
import { initialize } from "./initialize";

export async function cli(args) {

  // * Flags Code
  const program = new Command();
  program
    .version(require('../package.json').dependencies['@vaasudhand/atom'])
  program.parse(process.argv);

  // * Outputs the options available
  // const options = program.opts();
  // console.log(options);

  welcome()
  // * 1) Use Inquirer to propmt the user what he wants to do
  const { adventure } = await initialize()

  // * 2) Switch Statement for running the appropriate Function according to the chosen Adventure
  switch (adventure) {
    case 'Indexify':
      indexify()
      break;
    case 'Create-Project':
      createProject()
      break;
    case 'Undo':
      undo()
      break;
    default:
      break;
  }
}
