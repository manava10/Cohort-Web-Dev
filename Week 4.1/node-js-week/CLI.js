const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI for file-based tasks')
  .version('0.9.0');

// Count command
program
  .command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'File to count')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
      }
      const words = data.trim().split(/\s+/);
      const total = words.length;
      console.log(`There are ${total} words in ${file}`);
    });
  });
// North command
program
  .command('north')
  .description('For fun')
  .action(() => {
    console.log('Hello, this is Manav');
  });
program.parse();
