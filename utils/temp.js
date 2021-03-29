import { read } from 'readcommand';
import {shellHistory, shellHistoryPath} from 'shell-history';
// import chalk from "chalk";
const history = []

read({'history': ['cd', 'ls']}, function(err, args) {
  console.log('Arguments: %s', JSON.stringify(args))
  console.log(args[0]);
  history.push(args[0])
  console.log(shellHistory, shellHistoryPath);
  
});

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

// read(function(err, args) {
//   console.log('Arguments: %s', JSON.stringify(args))
// });