// https://github.com/djipco/webmidi

import WebMidi, * as MIDI from 'webmidi'
import { NoteCode } from '../midi'
import { PressedNotes } from '../handlerType'


export const listenMIDI = (
  input: MIDI.Input,
  noteOn?: (noteCode: NoteCode) => void,
  noteOff?: (noteCode: NoteCode) => void,
) => {
  input?.addListener('noteon', 'all', e => noteOn?.(e.note.number))
  input?.addListener('noteoff', 'all', e => noteOff?.(e.note.number))
}


export const initReceiveMIDI = (
  onPressedNotes: (notes: PressedNotes, pressed: boolean) => void,
) => {
  const pressedNotes: PressedNotes = new Set()

  const noteOn = (noteCode: NoteCode) => {
    pressedNotes.add(noteCode)
    onPressedNotes(pressedNotes, true)
  }
  const noteOff = (noteCode: NoteCode) => {
    pressedNotes.delete(noteCode)
    onPressedNotes(pressedNotes, false)
  }

  const getInput = () => WebMidi.inputs[0]

  const connected = (event: MIDI.WebMidiEventConnected) => {
    console.log('WebMidi: connected()', 'event', event)
    if (event.port.type !== 'input') return
    listenMIDI(getInput(), noteOn, noteOff)
  }

  const disconnected = (event: MIDI.WebMidiEventDisconnected) => {
    console.log('WebMidi: disconnected()', 'event', event)
    if (event.port.type !== 'input') return
    const input = getInput()
    input?.removeListener('noteon')
    input?.removeListener('noteoff')
  }

  WebMidi.enable((err) => {
    if (err) {
      console.log('WebMidi could not be enabled.', err)
      return
    }

    const input = getInput()

    if (input) {
      console.log('WebMidi enabled.')
      listenMIDI(input, noteOn, noteOff)
    } else {
      console.log('WebMidi midi input not found')
      WebMidi.addListener('connected', connected)
    }

    WebMidi.addListener('disconnected', disconnected)
  })
}
