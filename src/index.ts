import fs from 'fs'
import os from 'os'
import path from 'path'
import yaml from 'js-yaml'
import chokidar from 'chokidar'
import { MessageStatus } from './midi'
import {
  regHandler,
  cleanHandlers,
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

export const init = () => {
  signale.info('[MIDK] init ...')
  const midkConfig = loadMidkConfig(loadRawConfigFile(configFilePath))
  const { noteHandler } = genNoteHandler(midkConfig)

  regHandler(MessageStatus.noteOnEvent, noteHandler)
  regHandler(MessageStatus.noteOffEvent, noteHandler)
}

chokidar
  .watch(
    [configFilePath, 'index.ts'],
    {
      disableGlobbing: true,
      interval: 1000,
    },
  )
  .on('change', (path, stats) => {
    signale.info('[chokidar] path, stats', { path, stats })
    cleanHandlers(MessageStatus.noteOnEvent)
    cleanHandlers(MessageStatus.noteOffEvent)
    init()
  })

export const run = startListener
