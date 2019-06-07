import {Hook} from '@oclif/config'
import * as fs from 'fs-extra'
import * as path from 'path'
import { config } from './config/config'

export const hook: Hook<'init'> = async function (options) {
  console.log(`example init hook running before ${options.id}`)
  const userConfig = await fs.readJSON(path.join(this.config.configDir, 'config.json'))
  this.log('User config:')
  console.dir(userConfig)
}