import React from 'react'
import styled from '@emotion/styled'
import { NoteCode } from '../midi'
import { PortalMap, FnPortalMaps } from '../portal'
import { KeyDisplay } from './keySheet'
import * as S from './styled'
import 'react-piano/dist/styles.css'


export const caleNoteName = (noteCode: NoteCode): [string, number] => {
  const isLower = noteCode >= NoteCode.c
  const pivot: NoteCode  = isLower ? NoteCode.c : NoteCode.B
  const group = Math.floor(Math.abs(noteCode - pivot) / 12)
  const offset = Math.abs(noteCode - pivot) % 12
  const baseNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

  const notes = isLower
    ? baseNotes.map(note => note.toLowerCase())
    : baseNotes.reverse()

  return [notes[offset], group]
}

export const countNotesWithoutChromatic = (start: NoteCode, end: NoteCode): number => {
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

  const [baseName, group] = caleNoteName(noteCode)

  return (
    <S.NoteName>
      <span>
        {baseName}
        {group ? <sub>{group}</sub> : null}
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
  portal: PortalMap,
  fnPortal: FnPortalMaps,
}) => {
  const { noteCode, portal, fnPortal } = props
  const note = NoteCode[noteCode]
  const key = KeyDisplay[portal[note]]
  const alterKeyMap = new Map(
    Object.values(fnPortal)
      .map(portal => Object.entries(portal))
      .reduce((prev, curr) => [...prev, ...curr], [])
      .filter(([, key]) => key)
  )

  const alterKey = KeyDisplay[alterKeyMap.get(note)]

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

  if (fnPortal[note] && Object.values(fnPortal[note]).filter(Boolean).length > 0) {
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
  portal: PortalMap,
  fnPortal: FnPortalMaps,
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
