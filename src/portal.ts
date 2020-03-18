import { NoteCode as Note, NoteNameKey } from './midi'
import { NamedKey as Key } from './keyboard'

export type PortalMap = Partial<Record<Note, Key>>
export type FnPortalMaps = Partial<Record<Note, PortalMap>>

// template for copy and rewrite
export const TemplatePortal: PortalMap = {
  [Note.C1]: Key.NULL,
  [Note.CSharp1]: Key.NULL,
  [Note.D1]: Key.NULL,
  [Note.DSharp1]: Key.NULL,
  [Note.E1]: Key.NULL,
  [Note.F1]: Key.NULL,
  [Note.FSharp1]: Key.NULL,
  [Note.G1]: Key.NULL,
  [Note.GSharp1]: Key.NULL,
  [Note.A1]: Key.NULL,
  [Note.ASharp1]: Key.NULL,
  [Note.B1]: Key.NULL,
}


export interface PlayMode {
  enable: boolean,
  toggle: Note[],
}

export interface PortalConfig {
  playMode: PlayMode,
  portal: PortalMap,
  fnPortal: FnPortalMaps,
}

export const playMode: PlayMode = {
  enable: false,
  toggle: [
    Note.CSharp2,
    Note.DSharp2,
    Note.ASharp5,
  ],
}

export const portal: PortalMap = {
  [Note.C2]: Key.NULL,
  [Note.CSharp2]: Key.escape,
  [Note.D2]: Key.home,
  [Note.DSharp2]: Key.NULL,
  [Note.E2]: Key.end,
  [Note.F2]: Key.tilde,
  [Note.FSharp2]: Key.tab,
  [Note.G2]: Key.control,
  [Note.GSharp2]: Key.capsLock,
  [Note.A2]: Key.alt,
  [Note.ASharp2]: Key.shift,
  [Note.B2]: Key.command,

  [Note.C3]: Key.a,
  [Note.CSharp3]: Key.q,
  [Note.D3]: Key.z,
  [Note.DSharp3]: Key.w,
  [Note.E3]: Key.s,
  [Note.F3]: Key.x,
  [Note.FSharp3]: Key.e,
  [Note.G3]: Key.c,
  [Note.GSharp3]: Key.d,
  [Note.A3]: Key.f,
  [Note.ASharp3]: Key.r,
  [Note.B3]: Key.v,

  [Note.C4]: Key.space,
  [Note.CSharp4]: Key.t,
  [Note.D4]: Key.b,
  [Note.DSharp4]: Key.g,
  [Note.E4]: Key.h,
  [Note.F4]: Key.n,
  [Note.FSharp4]: Key.y,
  [Note.G4]: Key.j,
  [Note.GSharp4]: Key.u,
  [Note.A4]: Key.k,
  [Note.ASharp4]: Key.i,
  [Note.B4]: Key.m,

  [Note.C5]: Key.l,
  [Note.CSharp5]: Key.o,
  [Note.D5]: Key.comma,
  [Note.DSharp5]: Key.p,
  [Note.E5]: Key.dot,
  [Note.F5]: Key.slash,
  [Note.FSharp5]: Key.openBracket,
  [Note.G5]: Key.semicolon,
  [Note.GSharp5]: Key.closeBracket,
  [Note.A5]: Key.quotes,
  [Note.ASharp5]: Key.enter,
  [Note.B5]: Key.backslash,

  [Note.C6]: Key.left,
  [Note.CSharp6]: Key.backspace,
  [Note.D6]: Key.down,
  [Note.DSharp6]: Key.up,
  [Note.E6]: Key.right,
  [Note.F6]: Key.delete,
  [Note.FSharp6]: Key.backspace,
  [Note.G6]: Key.audioVolDown,
  [Note.GSharp6]: Key.audioVolUp,
  [Note.A6]: Key.lightsMonDown,
  [Note.ASharp6]: Key.lightsMonUp,
  [Note.B6]: Key.dash,

  [Note.C7]: Key.equal,
}

export const fnPortal: FnPortalMaps = {
  [Note.C2]: {
    [Note.D2]: Key.audioPrev,
    [Note.DSharp2]: Key.audioPlay,
    [Note.E2]: Key.audioNext,

    [Note.CSharp3]: Key.f1,
    [Note.D3]: Key.f2,
    [Note.DSharp3]: Key.f3,
    [Note.E3]: Key.f4,
    [Note.F3]: Key.f5,
    [Note.FSharp3]: Key.f6,
    [Note.G3]: Key.f7,
    [Note.GSharp3]: Key.f8,
    [Note.A3]: Key.f9,
    [Note.ASharp3]: Key.f10,
    [Note.B3]: Key.f11,

    [Note.C4]: Key.f12,

    [Note.C6]: Key.tilde,
    [Note.CSharp6]: Key.num1,
    [Note.D6]: Key.num2,
    [Note.DSharp6]: Key.num3,
    [Note.E6]: Key.num4,
    [Note.F6]: Key.num5,
    [Note.FSharp6]: Key.num6,
    [Note.G6]: Key.num7,
    [Note.GSharp6]: Key.num8,
    [Note.A6]: Key.num9,
    [Note.ASharp6]: Key.num0,
    [Note.B6]: Key.pageDown,

    [Note.C7]: Key.pageUp,
  },

  [Note.CSharp2]: {
    [Note.ASharp5]: Key.NULL,
  },
}

export const mergePortalFn = (
  portal: PortalMap,
  fnPortals: PortalMap[],
): PortalMap => ({
  ...portal,
  ...fnPortals.reduce(
    (prev, next) => Object.assign(prev, next),
    {},
  ),
})

export const buildNameToPortal = (portal: PortalMap): PortalMap => (
  Object.fromEntries(
    Object.entries(portal).map(
      ([noteName, keyName]) => [Note[noteName], Key[keyName]],
    ),
  )
)

export const buildNameToFnPortal = (fnPortal: FnPortalMaps): FnPortalMaps => (
  Object.fromEntries(
    Object.entries(fnPortal).map(
      ([noteName, portal]) => [Note[noteName], buildNameToPortal(portal)],
    ),
  )
)

export const transformConfigNoteNameToCode = (config: PortalConfig): PortalConfig => {
  const portal = buildNameToPortal(config.portal)
  const fnPortal = buildNameToFnPortal(config.fnPortal)

  const toggle = config.playMode.toggle as any as NoteNameKey[]

  return {
    playMode: {
      ...config.playMode,
      toggle: toggle.map(note => Note[note]),
    },
    portal,
    fnPortal,
  }
}
