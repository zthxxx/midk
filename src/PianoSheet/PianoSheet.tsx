import React from 'react'
import styled from '@emotion/styled'
import { NoteCode } from '../midi'
import { KeyDisplay } from '../keyboard'
import { PortalMap, FnPortalMaps } from '../keyMapping'
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

export const NoteLabel = (props: {
  noteCode: NoteCode,
}) => {
  const { noteCode } = props

  const [baseName, group] = caleNoteName(noteCode)

  return (
    <S.NoteName>
      {baseName}
      {group ? <sub>{group}</sub> : null}
    </S.NoteName>
  )
}

export const SharpNote = styled.div`
  // transparent for color emoji
  color: transparent;
  text-shadow: 0 0 0 var(--sharp-note-text-color);
`

export const BaseNote = styled.div`
  // transparent for color emoji
  color: transparent;
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
