export enum KeyType {
  noteKeyDown = 144,
  noteKeyUp = 128
}

// MIDIPlus X8 88 keys
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

  c1 = 60,
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

export type KeyVolume = number

export type NoteMessage = [
  KeyType,
  NoteCode,
  KeyVolume,
]

export type Timestamp = number
