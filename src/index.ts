import signale from './signale'
import {
  KeyType,
  NoteCode,
} from './midi'
import { regReader } from './readMIDI'
import { PressStateMap, sendKey } from './sendKey'

regReader((keyType, keyCode) => {
  if (!KeyType[keyType] || !NoteCode[keyCode]) {
    signale.warn('unknow key-type or key-code', {
      keyType,
      keyCode,
    })
  }
  sendKey(keyCode, PressStateMap[keyType])
})

signale.info('MIDI init')
