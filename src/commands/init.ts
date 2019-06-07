import {Command} from '@oclif/command'

export class Init extends Command {
  async run() {
    console.log('hello init command user')
    console.log(this.config.home);
  }
}



