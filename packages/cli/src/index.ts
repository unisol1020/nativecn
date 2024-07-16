import { Command } from 'commander';
import { init } from './commands/init';
import { add } from './commands/add';

function main() {
  const program = new Command();
  program
    .name('nativecn')
    .description('add components and dependencies to your expo project')
    .version('1.2.0');
  program.addCommand(init);
  program.addCommand(add);
  program.parse(process.argv);
}

main();
