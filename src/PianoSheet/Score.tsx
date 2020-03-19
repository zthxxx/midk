// https://github.com/0xfe/vexflow/wiki/The-VexFlow-Tutorial
// http://public.vexflow.com/build/docs/

import React, { useEffect, useRef } from 'react'
import Vex, { Flow } from 'vexflow'
import { NoteCode } from '../midi'
import * as S from './styled'

const { Formatter, Renderer, Stave, StaveNote, Beam } = Vex.Flow

// Cannot access ambient const enums when the '--isolatedModules' flag is provided
// https://github.com/0xfe/vexflow/issues/749
// https://github.com/0xfe/vexflow/blob/1.2.93/src/renderer.js#L14
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/vexflow/index.d.ts#L797
enum Backends {
  CANVAS = 1,
  RAPHAEL,
  SVG,
  VML,
}

export enum Clef {
  treble = 'treble',
  bass = 'bass',
}

export interface ScoreProps {
  className?: string,
  width?: number,
  noteRange: {
    first: NoteCode,
    last: NoteCode,
  },
  noteKeyWidth: number,

  [key: string]: any,
}

export const transformToVexNote = (noteCode: NoteCode): string => {
  const noteName = NoteCode[noteCode]

  /**
   * CSharp4  -> C/4
   * D3       -> D/3
   */
  return noteName.replace(/(Sharp)?(\d)/, '/$2')
}

export const genVexNotes = (start: NoteCode, end: NoteCode): Flow.StaveNote[] =>
  Array.from({ length: end - start + 1 })
    .map((_, index) => index + start)
    .filter((noteCode: NoteCode) => !NoteCode[noteCode].includes('Sharp'))
    .map((noteCode: NoteCode) =>
      new StaveNote({
        clef: noteCode < NoteCode.C4 ? Clef.bass : Clef.treble,
        keys: [transformToVexNote(noteCode)],
        duration: '4q',
      }),
    )

export const Score = (props: ScoreProps) => {
  const {
    className,
    width,
    noteRange: {
      first,
      last,
    },
    noteKeyWidth,
  } = props

  const container = useRef<HTMLObjectElement>()

  const trebleNotes: Flow.StaveNote[] = genVexNotes(NoteCode.C4, last)
  const bassNotes: Flow.StaveNote[] = genVexNotes(first, NoteCode.B3)

  useEffect(() => {
    const renderer = new Renderer(
      container.current,
      Backends.SVG as any as Flow.Renderer.Backends,
    )
    render(renderer)
  }, [])

  const render = (renderer: Flow.Renderer) => {
    renderer.resize(width, 150)
    const context = renderer.getContext()

    const bassStave = new Stave(10, 20, bassNotes.length * noteKeyWidth - 10)
      .addClef(Clef.bass)
      .setContext(context)
    bassStave.draw()

    const bassBeams = Beam.generateBeams(bassNotes)
    Formatter.FormatAndDraw(context, bassStave, bassNotes)
    bassBeams.forEach(beam => beam.setContext(context).draw())

    const trebleStave = new Stave(
      bassNotes.length * noteKeyWidth + 10,
      20,
      trebleNotes.length * noteKeyWidth - 10,
    )
      .addClef(Clef.treble)
      .setContext(context)
    trebleStave.draw()

    const trebleBeams = Beam.generateBeams(trebleNotes)
    Formatter.FormatAndDraw(context, trebleStave, trebleNotes)
    trebleBeams.forEach(beam => beam.setContext(context).draw())
  }

  return (
    <S.StaveContainer>
      <div
        className={className}
        ref={container}
      />
    </S.StaveContainer>
  )
}
