// https://github.com/kevinsqi/react-piano
// https://github.com/lillydinhle/react-piano-component

import React from 'react'
import styled from '@emotion/styled'
import Dimensions from 'react-dimensions'
import { MidiNumbers } from 'react-piano'
import { PortalMap, FnPortalMaps } from './keyMapping'
import { NoteKey } from './PianoSheet'
import { Piano } from './PianoSheet/styled'
import 'react-piano/dist/styles.css'

import portalConfig from './portal.yml'


const { portal, fnPortal } = portalConfig as {
  portal: PortalMap,
  fnPortal: FnPortalMaps,
}

export const DimensionsProvider = Dimensions()((props) => {
  const { containerWidth, containerHeight, children } = props
  return (
    <div>
      {children({
        width: containerWidth,
        height: containerHeight,
      })}
    </div>
  )
})

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
      <DimensionsProvider
        children={({ width }) => (
          <Piano
            noteRange={noteRange}
            width={width * 1.5}
            playNote={(...playProps) => console.log('[piano ] playProps', playProps)}
            stopNote={(...playProps) => console.log('[piano ] stopNote', playProps)}
            disabled={false}
            keyWidthToHeight={1 / 5}
            renderNoteLabel={({ keyboardShortcut, midiNumber, isActive, isAccidental }) => {
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
        )}
      />
    </BodyContainer>
  </Background>
)




