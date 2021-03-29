import execa from "execa";
import inquirer from "inquirer";
import Listr from "listr";
import { createJSIndex, createTSIndex } from './config'

export default async () => {
  // * Propt user for JS/TS template
  const questions = []
  questions.push({
    type: 'list',
    name: 'template',  // * Key
    message: 'Please choose which project template to use',
    choices: ['JavaScript [JS/JSX]', 'TypeScript [TS/TSX]'], // * Add Feature Names Here
    default: 'JavaScript'
  });
  questions.push({
    type: 'input',
    name: 'path',  // * Key
    message: 'Please enter path of the directory',
    default: './'
  });
  // ? Add a Question for Flags (But, its not needed)

  // * Variables
  const { template, path } = await inquirer.prompt(questions)
  let templateData;

  // * Set TemplateData accordingly
  if (template === 'JavaScript [JS/JSX]') {
    templateData = {...createJSIndex, path}
    // console.log(templateData);

  } else if (template === 'TypeScript [TS/TSX]') {
    console.log("TS Template");
    templateData = {...createTSIndex, path}
    // console.log(templateData);

  } else {  // Probably Useless
    console.log("Weird!!! Else Ran");
  }

  // * Listr Code
  const tasks = new Listr([
    {
      title: `Create index.${templateData.extension}`,
      task: () => createIndexFile(templateData)
    }
  ])
  await tasks.run()

  async function createIndexFile({ cmd, path, flags }) {
    try {
      // console.log("CMD:", cmd, [path, ...flags]);
      await execa(cmd, [path, ...flags], { // The path has to be the first value in the options array
        cwd: process.cwd(), // ? Not Sure if this is Correct
      })
    } catch (error) { // * Need to handle Error's better, if something goes wrong need to prompt the user back
      console.log(error);
    }
  }
}