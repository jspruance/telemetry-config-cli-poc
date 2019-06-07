import {Command} from '@oclif/command'
import * as fs from 'fs-extra'
import cli from 'cli-ux'

export class Init extends Command {
  async run() {
    const userConfig = await fs.readJSON('./config/config.json')
    const telemetryEnabled = userConfig.telemetry.enabled;
    this.log(`telemetry status: ${userConfig.telemetry.enabled}`)
    if(telemetryEnabled) {
      const disableTelemetry = await cli.prompt('Telemetry is enabled. Would you like to opt out? (Y/N)')
      if (disableTelemetry === 'Y' || disableTelemetry === 'y') {
        try {
          const newUserConfig = Object.assign({}, userConfig);
          newUserConfig.telemetry.enabled = false;
          await fs.writeFile('./config/config.json', JSON.stringify(userConfig))
          this.log(`Telemetry has been disabled.`)
        } catch (err) {
          this.error(err)
        }
      }else {
        this.log(`ok, telemetry will remain enabled`)
      }
    }else {
      const enableTelemetry = await cli.prompt('Telemetry is disabled. Would you like to opt in? (Y/N)')
      if (enableTelemetry === 'Y' || enableTelemetry === 'y') {
        try {
          const newUserConfig = Object.assign({}, userConfig);
          newUserConfig.telemetry.enabled = true;
          await fs.writeFile('./config/config.json', JSON.stringify(userConfig))
          this.log(`Telemetry has been enabled.`)
        } catch (err) {
          this.error(err)
        }
      }else {
        this.log(`ok, telemetry will remain disabled`)
      }
    }
    this.exit()
  }
}



