export enum PitchNotation {
  Scientific = 'Scientific',
  Helmholtz = 'Helmholtz',
}

// https://www.midi.org/specifications/item/table-1-summary-of-midi-message
export enum MessageStatus {
  noteOffEvent = 0b1000 << 4,
  noteOnEvent = 0b1001 << 4,
  polyphonicPressure = 0b1010 << 4,
  controlChange = 0b1011 << 4,
  programChange = 0b1100 << 4,
  channelPressure = 0b1101 << 4,
  pitchBendChange = 0b1110 << 4,
}

export type MessageData = number

export type Message = [
  MessageStatus,
  MessageData,
  MessageData,
]

// Scientific pitch notation
// https://en.wikipedia.org/wiki/Scientific_pitch_notation
// 88 keys: [A0 ... C8]
// 61 keys: [C2 ... C7]
export enum NoteCode {
  C0 = 12,
  CSharp0,
  D0,
  DSharp0,
  E0,
  F0,
  FSharp0,
  G0,
  GSharp0,
  A0,
  ASharp0,
  B0,

  C1,
  CSharp1,
  D1,
  DSharp1,
  E1,
  F1,
  FSharp1,
  G1,
  GSharp1,
  A1,
  ASharp1,
  B1,

  C2,
  CSharp2,
  D2,
  DSharp2,
  E2,
  F2,
  FSharp2,
  G2,
  GSharp2,
  A2,
  ASharp2,
  B2,

  C3,
  CSharp3,
  D3,
  DSharp3,
  E3,
  F3,
  FSharp3,
  G3,
  GSharp3,
  A3,
  ASharp3,
  B3,

  C4,
  CSharp4,
  D4,
  DSharp4,
  E4,
  F4,
  FSharp4,
  G4,
  GSharp4,
  A4,
  ASharp4,
  B4,

  C5,
  CSharp5,
  D5,
  DSharp5,
  E5,
  F5,
  FSharp5,
  G5,
  GSharp5,
  A5,
  ASharp5,
  B5,

  C6,
  CSharp6,
  D6,
  DSharp6,
  E6,
  F6,
  FSharp6,
  G6,
  GSharp6,
  A6,
  ASharp6,
  B6,

  C7,
  CSharp7,
  D7,
  DSharp7,
  E7,
  F7,
  FSharp7,
  G7,
  GSharp7,
  A7,
  ASharp7,
  B7,

  C8,
  CSharp8,
  D8,
  DSharp8,
  E8,
  F8,
  FSharp8,
  G8,
  GSharp8,
  A8,
  ASharp8,
  B8,

  C9,
}

export type NoteNameKey = keyof typeof NoteCode

export type NoteVelocity = number

export type NoteEvent = Extract<
  MessageStatus,
  typeof MessageStatus.noteOnEvent | typeof MessageStatus.noteOffEvent
>

export type NoteMessage = [
  NoteEvent,
  NoteCode,
  NoteVelocity,
]

export type Timestamp = number
