import fs from 'fs'
import os from 'os'
import path from 'path'
import yaml from 'js-yaml'
import { MessageStatus } from './midi'
import {
  regHandler,
  startListener,
} from './readMIDI'
import { genNoteHandler } from './noteHandler'
import {
  RawFileConfig,
  loadMidkConfig,
} from './configParser'

import packageJson from '../package.json'
import signale from './signale'


export const loadRawConfigFile = (configPath: string): RawFileConfig | null => {
  try {
    const rawConfig: RawFileConfig = yaml.safeLoad(
      fs.readFileSync(configPath, 'utf8'),
    )
    signale.info('[Portal yaml]', rawConfig)

    return rawConfig
  } catch (e) {
    signale.error('[Portal yaml]', e)
    return null
  }
}


export const configFilePath = path.join(
  os.homedir(),
  `.${packageJson.name}`,
  'midk.yml',
)

export const midkConfig = loadMidkConfig(loadRawConfigFile(configFilePath))
export const { noteHandler } = genNoteHandler(midkConfig)

regHandler(MessageStatus.noteOnEvent, noteHandler)
regHandler(MessageStatus.noteOffEvent, noteHandler)

export const run = startListener

export default {
  run,
}
