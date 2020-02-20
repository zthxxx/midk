import signale from './signale'
import {
  MessageStatus,
  NoteCode,
} from './midi'
import { KeypressHandler, regHandler, startListener } from './readMIDI'
import { portal, fnPortal, mergePortalFn } from './portal'
import { noteToSendKey } from './sendKey'

export const isSetEqual = (set1: Set<NoteCode>, set2: Set<NoteCode>) => (
  set1.size === set2.size && set1.size === new Set([...set1, ...set2]).size
)

export const pressedNotes = new Set<NoteCode>()
export const playMode = {
  enable: false,
}

export const playModeToggleKeys = new Set([
  NoteCode.CSharp,
  NoteCode.DSharp,
  NoteCode.aSharp2,
])

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

    if (isSetEqual(pressedNotes, playModeToggleKeys)) {
      playMode.enable = !playMode.enable

      signale.warn('[MIDI] playMode', playMode)
    }
  } else {
    pressedNotes.delete(noteCode)
  }

  // playMode, skip keyboard control
  if (playMode.enable) {
    return
  }

  const fnPressed = [...pressedNotes].filter(note => note in fnPortal)

  if (fnPressed.length > 0) {
    signale.info('[MIDI] Fn note pressed:', fnPressed.map(note => NoteCode[note]))
  }

  noteToSendKey({
    noteCode,
    pressed,
    portal: mergePortalFn(portal, fnPressed.map(note => fnPortal[note])),
  })
}


regHandler(MessageStatus.noteOnEvent, noteHander)
regHandler(MessageStatus.noteOffEvent, noteHander)

export const run = startListener

export default {
  run,
}
