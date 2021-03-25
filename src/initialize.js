import inquirer from "inquirer"

export const initialize = async () => {
  const questions = []
  
  // * Create Questions
  questions.push({
    type: 'list',
    name: 'adventure',  // * Key
    message: 'Choose your own adventure',
    choices: ['Indexify', 'Create-Project', 'Undo'] // * Add Feature Names Here
  })

  const answers = await inquirer.prompt(questions)
  return answers
}
