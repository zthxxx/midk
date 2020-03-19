// https://github.com/kevinsqi/react-piano
// https://github.com/lillydinhle/react-piano-component

import React from 'react'
import GithubCorner from 'react-github-corners'
import { PortalMap, FnPortalMaps } from '../portal'
import { NoteCode } from '../midi'
import { NoteKey, countNotesWithoutChromatic } from './PianoSheet'
import { ScoreProps, Score } from './Score'
import * as S from './styled'

import portalConfig from '../portal.yml'
import 'react-piano/dist/styles.css'
import 'react-github-corners/dist/GithubCorner.css'
import './index.css'


export const noteKeyWidth = 70
export const noteKeyWidthHeightRatio = 1 / 4.8

const { portal, fnPortal } = portalConfig as {
  portal: PortalMap,
  fnPortal: FnPortalMaps,
}

export const noteRange: ScoreProps['noteRange'] = {
  first: NoteCode.C2,
  last: NoteCode.C7,
}

const notesWholeWidth = countNotesWithoutChromatic(noteRange.first, noteRange.last) * noteKeyWidth

export const App = () => (
  <S.Background>
    <GithubCorner
      url={process.env.REACT_APP_PROJECT_REPO}
      backgroundColor={`white`}
      color={`var(--global-background)`}
      svgStyle={{
        position: 'fixed',
      }}
    />
    <S.BodyContainer>
      <S.Piano
        noteRange={noteRange}
        width={notesWholeWidth}
        playNote={(...playProps) => console.log('[Piano] playProps', playProps)}
        stopNote={(...playProps) => console.log('[Piano] stopNote', playProps)}
        disabled={false}
        keyWidthToHeight={noteKeyWidthHeightRatio}
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

      <Score
        width={notesWholeWidth}
        noteRange={noteRange}
        noteKeyWidth={noteKeyWidth}
      />
    </S.BodyContainer>
  </S.Background>
)




