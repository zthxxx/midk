// https://robotjs.io/docs/syntax#keys
import robot from 'robotjs'
import signale from './signale'
import { NoteCode } from './midi'
import { PortalMap, TemplatePortal } from './keyMapping'
import { NamedKey, modifiers } from './keyboard'

export enum PressState {
  down = 'down',
  up = 'up',
}

export const modifieds = new Set<NamedKey>()

export const sendKey = (key: NamedKey, pressed: boolean) => {
  if (key === null || key === NamedKey.NULL) {
    signale.warn('[KBD] null key, skip')
    return
  }

  const isModifier = modifiers.has(key)

  if (isModifier) {
    signale.info('[KBD] Key is modifier', {
      key,
      pressed,
    })

    if (pressed) {
      modifieds.add(key)
    } else {
      modifieds.delete(key)
    }
  }

  signale.info('[KBD] press key', {
    key,
    pressed,
    modifieds: [...modifieds],
  })

  // release a pressed not need modifier
  robot.keyToggle(
    key,
    pressed ? PressState.down : PressState.up,
    [...modifieds],
  )
}

export const noteToSendKey = ({ noteCode, pressed, portal = TemplatePortal }: {
  noteCode: NoteCode,
  pressed: boolean,
  portal?: PortalMap,
}) => {
  const key = portal[noteCode]
  if (key === undefined) {
    signale.info('[KBD] Cant find key portal map for note:', {
      note: NoteCode[noteCode],
      noteCode,
    })
    return
  }

  signale.info('[KBD] KBD sendKey', {
    noteCode,
    key,
    pressed,
  })

  sendKey(key, pressed)
}
