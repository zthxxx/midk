// https://robotjs.io/docs/syntax#keys
import robot from 'robotjs'
import signale from './signale'
import { NoteCode } from './midi'
import { Portals } from './keyboard'
import { KeyType } from './midi'

export enum PressState {
  down = 'down',
  up = 'up',
}

export const PressStateMap = {
  [KeyType.noteKeyDown]: PressState.down,
  [KeyType.noteKeyUp]: PressState.up,
}

export const sendKey = (noteCode: NoteCode, pressed: PressState) => {
  const key = Portals[noteCode]
  if (!key) {
    signale.warn('Cant find key map for code:', noteCode)
    return
  }
  signale.info('KBD sendKey', {
    noteCode,
    pressed,
    key,
  })
  robot.keyToggle(key, pressed)
}
