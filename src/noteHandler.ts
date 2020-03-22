import signale from './signale'
import {
  MessageStatus,
  NoteCode,
} from './midi'
import { KeypressHandler } from './readMIDI'
import {
  mergePortalFn,
} from './portal'
import { MidkConfig } from './configParser'
import { noteToSendKey } from './sendKey'


export type ToggleKeys = Set<NoteCode>
export type PressedNotes = Set<NoteCode>

export const isSetEqual = (set1: Set<NoteCode>, set2: Set<NoteCode>) => (
  set1.size === set2.size && set1.size === new Set([...set1, ...set2]).size
)

export const genNoteHandler = (config: MidkConfig): {
  playModeToggleKeys: ToggleKeys,
  pressedNotes: PressedNotes,
  noteHandler: KeypressHandler,
} => {
  const { playMode, portal, fnPortal } = config


  const playModeToggleKeys: ToggleKeys = new Set<NoteCode>(playMode.toggle)

  const pressedNotes: PressedNotes = new Set<NoteCode>()

  const noteHandler: KeypressHandler = ({
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

  return {
    playModeToggleKeys,
    pressedNotes,
    noteHandler,
  }
}



