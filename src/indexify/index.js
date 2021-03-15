import execa from "execa";
import inquirer from "inquirer";
import Listr from "listr";

export default async () => {
  console.log("Indexify Function Ran");

  // * Propt user for JS/TS template
  const questions = []
  questions.push({
    type: 'list',
    name: 'template',  // * Key
    message: 'Please choose which project template to use',
    choices: ['JavaScript', 'TypeScript'], // * Add Feature Names Here
    default: 'JavaScript'
  });
  questions.push({
    type: 'input',
    name: 'path',  // * Key
    message: 'Please enter path of the directory',
    default: './'
  });

  // * Variables
  const { template, path } = await inquirer.prompt(questions)
  let extension = ""
  let templateData = {
    cmd: '',
    path: '',
    flags: []
  }
  
  // * Set TemplateData accordingly
  if (template === 'JavaScript') {

    console.log("JS Template");
    templateData.cmd = "npx create-index";
    extension = "js"

  } else if (template === 'TypeScript') {

    console.log("TS Template");
    templateData.cmd = "npx cti create";
    extension = "ts"

  } else {
    console.log("Weird!!! Else Ran");
  }

  // * Listr Code
  const tasks = new Listr([
    {
      title: `Create index.${extension}`,
      task: () => createIndexFile(templateData)
    }
  ])
  await tasks.run()

  async function createIndexFile({cmd, path}) {
    try {
      await execa(cmd, [path], { // The path has to be the first value in the options array
        cwd: process.cwd(), // ? Not Sure if this is Correct
      })
    } catch (error) { // * Need to handle Error's better, if something goes wrong need to prompt the user back
      console.log(error);
    }
  }
  
}
