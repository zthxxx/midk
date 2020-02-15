import signale from './signale'
import {
  MessageStatus,
  NoteCode,
} from './midi'
import { KeypressHandler, regHandler, startListener } from './readMIDI'
import { PortalMap } from './keyMapping'
import { portal, fnPortal } from './portal'
import { noteToSendKey } from './sendKey'

export const pressedNotes = new Set<NoteCode>()

export const noteHander: KeypressHandler = ({
  status: noteEvent,
  channel: noteCode,
}) => {
  const noteName = NoteCode[noteCode]
  if (!noteName) {
    signale.warn('[MIDI] [note] unknow key-code', {
      status: MessageStatus[noteEvent],
      noteCode,
    })
    return
  }

  const pressed = noteEvent === MessageStatus.noteOnEvent

  signale.info('[MIDI] [note]', {
    noteName,
    pressed,
    noteCode,
    status: MessageStatus[noteEvent],
  })

  if (pressed) {
    pressedNotes.add(noteCode)
  } else {
    pressedNotes.delete(noteCode)
  }

  const fnPressed = Array.from(pressedNotes)
  .filter(note => note in fnPortal)

  if (fnPressed.length > 0) {
    signale.info('[MIDI] Fn note pressed:', fnPressed.map(note => NoteCode[noteCode]))
  }

  const mergedFnPortal: Partial<PortalMap> = fnPressed
    .map(note => fnPortal[note])
    .reduce(
      (prev, next) => Object.assign(prev, next),
      {},
    )

  noteToSendKey({
    noteCode,
    pressed,
    portal: {
      ...portal,
      ...mergedFnPortal,
    },
  })
}


regHandler(MessageStatus.noteOnEvent, noteHander)
regHandler(MessageStatus.noteOffEvent, noteHander)

export const run = startListener

export default {
  run,
}
