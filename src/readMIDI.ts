import midi from 'midi'
import signale from './signale'
import {
  KeyType,
  NoteCode,
  KeyVolume,
  NoteMessage,
  Timestamp,
} from './midi'

export const input = new midi.Input()

// Count the available input ports.
const portCount = input.getPortCount()
if (portCount < 1) {
  // signale.error('Failed to find MIDI device', { portCount })
  console.error('Failed to find MIDI device', { portCount })
  process.exit(1)
}

// Get the name of a specified input port.
// 0: first device
input.getPortName(0)

export default input

export type KeyHandler = (
  keyType: KeyType,
  key: NoteCode,
  value?: KeyVolume,
  timestamp?: Timestamp,
) => void

export const regReader= (handler: KeyHandler) => {
  input.on('message', (timestamp: Timestamp, message: NoteMessage) => {
    const [keyType, keyCode, value] = message
    signale.info('MIDI', {
      message,
      timestamp,
      note: NoteCode[keyCode],
      status: KeyType[keyType],
    })
    handler?.(keyType, keyCode, value, timestamp)
  })

  // Open the first available input port.
  input.openPort(0);
}

