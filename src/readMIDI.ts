// https://github.com/justinlatimer/node-midi
import midi from 'midi'
import signale from './signale'
import {
  MessageStatus,
  MessageData,
  Message,
  Timestamp,
} from './midi'

export const input = new midi.Input()

// Count the available input ports.
const portCount = input.getPortCount()
if (portCount < 1) {
  // signale.error('Failed to find MIDI device', { portCount })
  signale.error('Failed to find MIDI device', { portCount })
  process.exit(1)
}


export interface KeypressParams {
  status: MessageStatus,
  channel: MessageData,
  value?: MessageData,
  timestamp?: Timestamp,
}

// return true to stop processing
export type KeypressHandler = (keypress: KeypressParams) => void | boolean

export const handlersMap = new Map<MessageStatus, Set<KeypressHandler>>()

export const regHandler = (status: MessageStatus, handler: KeypressHandler) => {
  const handlers = handlersMap.get(status)
  if (handlers) {
    handlers.add(handler)
    return
  }
  handlersMap.set(status, new Set([handler]))
}

export const removeHandler = (status: MessageStatus, handler: KeypressHandler) => {
  const handlers = handlersMap.get(status)
  handlers.delete(handler)
}

export const cleanHandlers = (status: MessageStatus) => {
  handlersMap.set(status, new Set())
}

export const startListener = () => {
  // Get the name of a specified input port.
  // 0: first device
  input.getPortName(0)

  input.on('message', (timestamp: Timestamp, message: Message) => {
    const [status, channel, value] = message
    signale.info('[MIDI]', {
      message,
      timestamp,
    })
    const handlers = handlersMap.get(status) ?? new Set()
    signale.info('[MIDI] find handlers', [...handlers].map(fun => fun.name))
    for (let handler of handlers) {
      if (handler({ status, channel, value, timestamp })) break
    }
  })

  // Open the first available input port.
  input.openPort(0)

  signale.info('[MIDI] started listening')
}
