
  // updateIndexFile()

  // async function updateIndexFile() {
  //   console.log({ path });
  //   const pathArray = []

  //   // Chokidar Code
  //   const options = {
  //     ignored: /(^|[\/\\])\../, // ignore dotfiles
  //     persistent: true
  //   }

  //   // Initialize watcher.
  //   const watcher = chokidar.watch(path, options);

  //   watcher
  //     .on('add', async (path) => {
  //       console.log(`File ${path} has been added`)
  //       let answer = await prompt({
  //         type: 'list',
  //         name: 'adventure',  // * Key
  //         message: 'Choose your own adventure',
  //         choices: ['Indexify', 'Undo'] // * Add Feature Names Here
  //       })
  //       console.log(answer);        
  //     })  // Run indexify again on these files
  //     .on('change', path => console.log(`File ${path} has been changed`)) // Run indexify again on these files
  //     .on('unlink', path => console.log(`File ${path} has been removed`));  // Run indexify again on these files
  
  // fs.watch(path, (event, filename) => {
  //   console.log("Change Detected");
  // })
  // }