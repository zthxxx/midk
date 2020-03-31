// https://github.com/kevinsqi/react-piano

import React, { useEffect, useState, useRef, useCallback } from 'react'
import GithubCorner from 'react-github-corners'
import { SwitchProps } from 'antd/es/switch'
import { RawFileConfig } from '../configParser'
import { NoteCode } from '../midi'

import { ToggleKeys, PressedNotes, isSetEqual } from '../handlerType'
import { initReceiveMIDI } from './midi'
import { NoteKey, countWholeTones } from './PianoSheet'
import { StaveSheet, StaveProps } from './Stave'
import * as S from './styled'

import midkConfig from '../midk.yml'
import 'react-piano/dist/styles.css'
import 'react-github-corners/dist/GithubCorner.css'
import 'antd/es/switch/style/index.css'
import './index.css'


const projectRepo = process.env.REACT_APP_PROJECT_REPO

const { playMode, portal, fnPortal } = midkConfig as RawFileConfig
const toggles: ToggleKeys = new Set(playMode.toggle.map(codeName => NoteCode[codeName]))

const portalNotes = Object.keys(portal).map(name => NoteCode[name])

export const noteRange: StaveProps['noteRange'] = {
  first: Math.min(...portalNotes),
  last: Math.max(...portalNotes),
}

const { noteKeyWidth, noteKeyWidthHeightRatio } = S
const notesWholeWidth = countWholeTones(noteRange.first, noteRange.last) * noteKeyWidth
const noop = () => { }


export const PlayModeSwitch = (props: SwitchProps) => (
  <S.SwitchContainer>
    <S.SwitchLabel activated={!props.checked}>
      {`Control Mode`}
    </S.SwitchLabel>
    <S.Switch {...props} />
    <S.SwitchLabel activated={props.checked}>
      {`Play Mode`}
    </S.SwitchLabel>
  </S.SwitchContainer>
)

export const App = () => {
  const isPlayMode = useRef<boolean>(playMode.enable)
  const [pressedNotes, setPressedNotes] = useState<PressedNotes>(new Set())

  useEffect(() => {
    const onPressedNotes = (notes: PressedNotes, isPress: boolean) => {
      if (isPress && isSetEqual(notes, toggles)) {
        isPlayMode.current = !isPlayMode.current
      }
      setPressedNotes(new Set([...notes]))
    }

    initReceiveMIDI(onPressedNotes)
  }, [])

  const renderNoteLabel = useCallback(
    ({ midiNumber, isAccidental }) => (
      <NoteKey
        noteCode={midiNumber}
        isAccidental={isAccidental}
        portal={portal}
        fnPortal={fnPortal}
        isPlayMode={isPlayMode.current}
      />
    ),
    [isPlayMode.current],
  )

  return (
    <S.Background>
      {projectRepo && (
        <GithubCorner
          url={projectRepo}
          backgroundColor={`white`}
          color={`var(--global-background)`}
          svgStyle={{
            position: 'fixed',
          }}
        />
      )}
      <PlayModeSwitch
        checked={isPlayMode.current}
        onChange={(checked) => {
          isPlayMode.current = checked
          setPressedNotes(new Set())
        }}
      />
      <S.BodyContainer>
        <S.Piano
          noteRange={noteRange}
          width={notesWholeWidth}
          activeNotes={[...pressedNotes]}
          playNote={noop}
          stopNote={noop}
          disabled={false}
          keyWidthToHeight={noteKeyWidthHeightRatio}
          renderNoteLabel={renderNoteLabel}
        />
        {isPlayMode.current && (
          <StaveSheet
            width={notesWholeWidth}
            noteRange={noteRange}
            noteKeyWidth={noteKeyWidth}
          />
        )}
      </S.BodyContainer>
    </S.Background>
  )
}




