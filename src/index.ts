import signale from './signale'
import {
  MessageStatus,
  NoteCode,
} from './midi'
import { KeypressHandler, regHandler, startListener } from './readMIDI'
import portals from './portals'
import { noteToSendKey } from './sendKey'

export const noteHander: KeypressHandler = ({
  status: noteEvent,
  channel: noteCode,
}) => {
  if (!NoteCode[noteCode]) {
    signale.warn('unknow key-type or key-code', {
      status: MessageStatus[noteEvent],
      noteCode,
    })
  }
  noteToSendKey({
    noteCode,
    pressed: noteEvent === MessageStatus.noteOnEvent,
    portals,
  })
}


regHandler(MessageStatus.noteOnEvent, noteHander)
regHandler(MessageStatus.noteOffEvent, noteHander)

export default {
  run: startListener,
}
