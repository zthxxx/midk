// https://github.com/kevinsqi/react-piano
// https://github.com/lillydinhle/react-piano-component

import React from 'react'
import { MidiNumbers } from 'react-piano'
import GithubCorner from 'react-github-corners'
import { PortalMap, FnPortalMaps } from '../portal'
import { NoteKey, countNotesWithoutChromatic } from './PianoSheet'
import * as S from './styled'

import portalConfig from '../portal.yml'
import 'react-piano/dist/styles.css'
import 'react-github-corners/dist/GithubCorner.css'


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


export const App = () => (
  <S.Background>
    <GithubCorner
      url={process.env.REACT_APP_PROJECT_REPO}
      backgroundColor={'white'}
      color={'var(--global-background)'}
      svgStyle={{
        position: 'fixed',
      }}
    />
    <S.BodyContainer>
      <S.Piano
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
    </S.BodyContainer>
  </S.Background>
)




