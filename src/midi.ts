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

// 88 keys: [A2 ... c5]
// 61 keys: [C ... c4]
export enum NoteCode {
  A2 = 21,
  A2Sharp,
  B2,

  C1,
  C1Sharp,
  D1,
  D1Sharp,
  E1,
  F1,
  F1Sharp,
  G1,
  G1Sharp,
  A1,
  A1Sharp,
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
  c1Sharp,
  d1,
  d1Sharp,
  e1,
  f1,
  f1Sharp,
  g1,
  g1Sharp,
  a1,
  a1Sharp,
  b1,

  c2,
  c2Sharp,
  d2,
  d2Sharp,
  e2,
  f2,
  f2Sharp,
  g2,
  g2Sharp,
  a2,
  a2Sharp,
  b2,

  c3,
  c3Sharp,
  d3,
  d3Sharp,
  e3,
  f3,
  f3Sharp,
  g3,
  g3Sharp,
  a3,
  a3Sharp,
  b3,

  c4,
  c4Sharp,
  d4,
  d4Sharp,
  e4,
  f4,
  f4Sharp,
  g4,
  g4Sharp,
  a4,
  a4Sharp,
  b4,

  c5,
}

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
