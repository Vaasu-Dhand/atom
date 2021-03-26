import execa from "execa";
import inquirer, { prompt } from "inquirer";
import Listr from "listr";

export default async () => {
  console.log("create-project Function Ran");
  try {
    const data = await execa('npm init @vitejs/app', {
      shell: true,
      stdio: 'inherit',
      
    })
    // console.log(data);
  } catch (error) { // * Need to handle Error's better, if something goes wrong need to prompt the user back
    console.log(error);
  }
}