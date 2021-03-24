import indexify from './indexify'
import undo from './undo'
import { welcome } from "../utils/welcome";
import { initialize } from "./initialize";

export async function cli(args) {
  welcome() 
  // * 1) Use Inquirer to propmt the user what he wants to do
  const { adventure } = await initialize()

  // * 2) Switch Statement for running the appropriate Function according to the chosen Adventure
  switch (adventure) {
    case 'Indexify':
      indexify()
      break;
    case 'Undo':
      undo()
      break;
    default:
      break;
  }

}
