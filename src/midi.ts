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

// Helmholtz pitch notation
// https://en.wikipedia.org/wiki/Helmholtz_pitch_notation
// 88 keys: [A2 ... c5]
// 61 keys: [C ... c4]
export enum NoteCode {
  C2 = 12,
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

  C,
  CSharp,
  D,
  DSharp,
  E,
  F,
  FSharp,
  G,
  GSharp,
  A,
  ASharp,
  B,

  c,
  cSharp,
  d,
  dSharp,
  e,
  f,
  fSharp,
  g,
  gSharp,
  a,
  aSharp,
  b,

  c1,
  cSharp1,
  d1,
  dSharp1,
  e1,
  f1,
  fSharp1,
  g1,
  gSharp1,
  a1,
  aSharp1,
  b1,

  c2,
  cSharp2,
  d2,
  dSharp2,
  e2,
  f2,
  fSharp2,
  g2,
  gSharp2,
  a2,
  aSharp2,
  b2,

  c3,
  cSharp3,
  d3,
  dSharp3,
  e3,
  f3,
  fSharp3,
  g3,
  gSharp3,
  a3,
  aSharp3,
  b3,

  c4,
  cSharp4,
  d4,
  dSharp4,
  e4,
  f4,
  fSharp4,
  g4,
  gSharp4,
  a4,
  aSharp4,
  b4,

  c5,
  cSharp5,
  d5,
  dSharp5,
  e5,
  f5,
  fSharp5,
  g5,
  gSharp5,
  a5,
  aSharp5,
  b5,

  c6,
}

export type NoteNameKey = (keyof typeof NoteCode)

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
