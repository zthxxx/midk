// https://github.com/justinlatimer/node-midi
import midi from 'midi'
import { Message, MessageData, MessageStatus, Timestamp } from './midi'
import signale from './signale'

export interface KeypressParams {
  status: MessageStatus,
  channel: MessageData,
  value?: MessageData,
  timestamp?: Timestamp,
}

// return true to stop processing
export type KeypressHandler = (keypress: KeypressParams) => void | boolean

export const retryTimes = 20
export const retryInterval = 3000

export const sleep = (ms = 1000) => new Promise<void>(
  (resolve) => setTimeout(() => resolve(), ms),
)

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

export const startListener = async () => {
  const input = new midi.Input()

  for (let i = 1; i <= retryTimes; i++) {
    // Count the available input ports.
    if (input.getPortCount() > 0) {
      break
    }
    signale.warn(`Cannot find MIDI input device, waiting for retry. (${i}/${retryTimes})`)
    await sleep(retryInterval)
  }

  if (input.getPortCount() < 1) {
    signale.error('Failed to find MIDI input device')
    process.exit(1)
  }

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
