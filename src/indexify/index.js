import execa from "execa";
import inquirer from "inquirer";
import Listr from "listr";
import inquirerCommandPrompt from 'inquirer-command-prompt'
import { readdir } from 'fs/promises';
import { join } from 'path'
import { createJSIndex, createTSIndex } from './config'

export default async () => {
  
  // * Path History using 'inquirer-command-prompt'
  const nodeModulesDirectory = await execa('npm root')
  const pathHistory = join(nodeModulesDirectory.stdout, '@vaasudhand/atom', '.atom')
  inquirerCommandPrompt.setConfig({
    history: {
      save: true,
      folder: pathHistory,
      limit: 10,
      blacklist: ['exit']
    }
  })
  inquirer.registerPrompt('command', inquirerCommandPrompt)
  
  // * Propt user for JS/TS template
  const questions = []
  questions.push({
    type: 'command',
    name: 'path',  // * Key
    message: 'Please enter path of the directory',
    default: './src',
    // autoCompletion: ['./src', './utils', './libs', './public', './temp'],
  });
  // ? Add a Question for Flags (But, its not needed)

  const { path } = await inquirer.prompt(questions)
  let template;
  try { // * If someone runs indexify on a directory with other file extensions than .js,.jsx,.ts,.tsx
    template = await getTemplate(path)
    
  } catch (e) {
    console.error(e);
    // continue
    // throw new Error('Only .js,.jsx or .ts,.tsx extensions supported!')
  }
  
  let templateData;

  // * Set TemplateData accordingly
  if (template === 'JavaScript [JS/JSX]') {
    templateData = {...createJSIndex, path}
    // console.log(templateData);

  } else if (template === 'TypeScript [TS/TSX]') {
    templateData = {...createTSIndex, path}
    // console.log(templateData);

  } else {  // Probably Useless
    console.log("Weird! template not JS or TS");
  }

  // * Listr Code
  const tasks = new Listr([
    {
      title: `index.${templateData.extension} Generated`,
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

  async function getTemplate(directoryPath) {
    const files = await readdir(directoryPath);
    const extension = files[0].split(".").pop() // * Gives the extension of the first file in the directory
    let template;
    if (extension.startsWith('j')) {
      template = 'JavaScript [JS/JSX]'
    } else if (extension.startsWith('t')) {
      template = 'TypeScript [TS/TSX]'
    } else {  // * Some other extension than .js,.jsx or .ts,.tsx 
      console.log('Only .js,.jsx or .ts,.tsx extensions supported!')
    }
    return template
  }
}