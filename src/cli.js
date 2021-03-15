
import indexify from './indexify'
import undo from './undo'
import { displayDesign } from "../utils/displayDesign";
import { initialize } from "./initialize";

export async function cli(args) {
  // displayDesign() // # Rename this function to welcome
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
