import os from 'os'
import path from 'path'
import { MessageStatus } from './midi'
import { regHandler, startListener } from './readMIDI'
import { loadPortalConfig, genNoteHandler } from './noteHandler'

import packageJson from '../package.json'

export const portalConfigFile = path.join(
  os.homedir(),
  `.${packageJson.name}`,
  'portal.yml',
)

export const portalConfig = loadPortalConfig(portalConfigFile)
export const { noteHandler } = genNoteHandler(portalConfig)

regHandler(MessageStatus.noteOnEvent, noteHandler)
regHandler(MessageStatus.noteOffEvent, noteHandler)

export const run = startListener

export default {
  run,
}
