import React from 'react'
import styled from '@emotion/styled'
import { NamedKey } from '../keyboard'
import { NoteCode, NoteNameKey } from '../midi'
import { FnPortalConfigMap, PortalConfigMap } from '../portal'
import { KeyDisplay } from './keySheet'
import * as S from './styled'
import 'react-piano/dist/styles.css'


export const countWholeTones = (start: NoteCode, end: NoteCode): number => {
  let count = 0
  for (let code = start; code <= end; code++) {
    if (!NoteCode[code].includes('Sharp')) {
      count += 1
    }
  }
  return count
}

export const NoteLabel = (props: {
  noteCode: NoteCode,
}) => {
  const { noteCode } = props

  const noteName = NoteCode[noteCode].replace('Sharp', '#')

  return (
    <S.NoteName>
      <span>
        {noteName}
      </span>
    </S.NoteName>
  )
}

export const SharpNote = styled.div`
  padding-bottom: 8px;
  color: var(--sharp-note-text-color);
  text-shadow: 0 0 0 var(--sharp-note-text-color);
`

export const BaseNote = styled.div`
  color: var(--base-note-text-color);
  text-shadow: 0 0 0 var(--base-note-text-color);
`

export const NamedKeyLabel = (props: {
  noteCode: NoteCode,
  portal: PortalConfigMap,
  fnPortal: FnPortalConfigMap,
}) => {
  const { noteCode, portal, fnPortal } = props
  const noteName = NoteCode[noteCode] as NoteNameKey
  const key = KeyDisplay[portal[noteName]]

  // notes which are used in fnPortal
  const alterKeyMap = new Map(
    Object.values(fnPortal)
      .map(portal => Object.entries(portal))
      .reduce((prev, curr) => [...prev, ...curr], [])
      .filter(([, key]) => key),
  ) as Map<NoteNameKey, keyof typeof NamedKey>

  const alterKey = KeyDisplay[alterKeyMap.get(noteName)]

  if (alterKey) {
    return (
      <S.KeyName>
        <div>
          <S.FnKbd>{alterKey}</S.FnKbd>
        </div>
        {key
          ? <S.Kbd>{key}</S.Kbd>
          : null
        }
      </S.KeyName>
    )
  }

  if (!key) return null

  const isFnNoteToggle = fnPortal[noteName]
    && Object.values(fnPortal[noteName]).filter(Boolean).length > 0

  if (isFnNoteToggle) {
    return (
      <S.KeyName>
        <S.FnKbd>{key}</S.FnKbd>
      </S.KeyName>
    )
  }

  return (
    <S.KeyName>
      <S.Kbd>{key}</S.Kbd>
    </S.KeyName>
  )
}

export const NoteKey = (props: {
  noteCode: NoteCode,
  isAccidental: boolean,
  portal: PortalConfigMap,
  fnPortal: FnPortalConfigMap,
}) => {
  const { noteCode, isAccidental, portal, fnPortal } = props

  const noteLabel = <NoteLabel noteCode={noteCode} />
  const NoteWrapper = isAccidental ? SharpNote : BaseNote

  return (
    <NoteWrapper>
      <NamedKeyLabel
        noteCode={noteCode}
        portal={portal}
        fnPortal={fnPortal}
      />
      {isAccidental ? null : noteLabel}
    </NoteWrapper>
  )
}
