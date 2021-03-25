import execa from "execa";
import inquirer, { prompt } from "inquirer";
import Listr from "listr";

export default async () => {
  console.log("create-project Function Ran");
  try {
    await execa('npm init @vitejs/app', {
      cwd: process.cwd(),
      
    })
    console.log(data);
  } catch (error) { // * Need to handle Error's better, if something goes wrong need to prompt the user back
    console.log(error);
  }
}