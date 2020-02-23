// https://github.com/kevinsqi/react-piano
// https://github.com/lillydinhle/react-piano-component

import React from 'react'
import styled from '@emotion/styled'
import { MidiNumbers } from 'react-piano'
import { PortalMap, FnPortalMaps } from './keyMapping'
import { NoteKey, countNotesWithoutChromatic } from './PianoSheet'
import { Piano } from './PianoSheet/styled'
import 'react-piano/dist/styles.css'

import portalConfig from './portal.yml'


export const noteKeyWidth = 70
export const notekeyWidthHeightRatio = 1 / 4.8

const { portal, fnPortal } = portalConfig as {
  portal: PortalMap,
  fnPortal: FnPortalMaps,
}

export const noteRange = {
  first: MidiNumbers.fromNote('C2'),
  last: MidiNumbers.fromNote('C7'),
}


export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BodyContainer = styled.div`
  width: 100%;
  overflow: visible;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
`

export const App = () => (
  <Background>
    <BodyContainer>
      <Piano
        noteRange={noteRange}
        width={countNotesWithoutChromatic(noteRange.first, noteRange.last) * noteKeyWidth}
        playNote={(...playProps) => console.log('[Piano] playProps', playProps)}
        stopNote={(...playProps) => console.log('[Piano] stopNote', playProps)}
        disabled={false}
        keyWidthToHeight={notekeyWidthHeightRatio}
        renderNoteLabel={({ midiNumber, isAccidental }) => {
          return (
            <NoteKey
              noteCode={midiNumber}
              isAccidental={isAccidental}
              portal={portal}
              fnPortal={fnPortal}
            />
          )
        }}
      />
    </BodyContainer>
  </Background>
)




