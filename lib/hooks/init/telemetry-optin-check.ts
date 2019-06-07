import {Hook} from '@oclif/config'
import * as fs from 'fs-extra'

export const hook: Hook<'init'> = async function () {
  // const userConfig = await fs.readJSON('./config/config.json')
  // this.log(`init hook`);
  // this.log(`telemetry enabled: ${userConfig.telemetry.enabled}`);
}