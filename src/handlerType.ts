
import {
  NoteCode,
} from './midi'


export type ToggleKeys = Set<NoteCode>
export type PressedNotes = Set<NoteCode>

export const isSetEqual = (set1: Set<NoteCode>, set2: Set<NoteCode>) => (
  set1.size === set2.size && set1.size === new Set([...set1, ...set2]).size
)
