
import indexify from './indexify'
import undo from './undo'
import { displayDesign } from "../utils/displayDesign";
import { initialize } from "./initialize";
import { exec } from 'child_process'
import execa from 'execa';
import Listr from 'listr';

export async function cli(args) {
  // displayDesign()
  // * 1) Use Inquirer to propmt the user what he wants to do
  const { adventure } = await initialize()
  console.log(adventure);

  // * 2) Switch Statement for running the appropriate Function according to the chosen Advemture
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
  // ! TEST CODE

  
  // ! TEST CODE
  
  
  
  

}
