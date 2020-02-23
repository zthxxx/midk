import fs from 'fs'
import yaml from 'js-yaml'
import { NoteCode as Note, NoteNameKey } from './midi'
import { NamedKey as Key } from './keyboard'
import { PortalMap, FnPortalMaps } from './keyMapping'
import signale from './signale'


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
    Note.CSharp,
    Note.DSharp,
    Note.aSharp2,
  ],
}

export const portal: PortalMap = {
  [Note.C]: Key.NULL,
  [Note.CSharp]: Key.escape,
  [Note.D]: Key.home,
  [Note.DSharp]: Key.NULL,
  [Note.E]: Key.end,
  [Note.F]: Key.tilde,
  [Note.FSharp]: Key.tab,
  [Note.G]: Key.control,
  [Note.GSharp]: Key.capsLock,
  [Note.A]: Key.alt,
  [Note.ASharp]: Key.shift,
  [Note.B]: Key.command,

  [Note.c]: Key.a,
  [Note.cSharp]: Key.q,
  [Note.d]: Key.z,
  [Note.dSharp]: Key.w,
  [Note.e]: Key.s,
  [Note.f]: Key.x,
  [Note.fSharp]: Key.e,
  [Note.g]: Key.c,
  [Note.gSharp]: Key.d,
  [Note.a]: Key.f,
  [Note.aSharp]: Key.r,
  [Note.b]: Key.v,

  [Note.c1]: Key.space,
  [Note.cSharp1]: Key.t,
  [Note.d1]: Key.b,
  [Note.dSharp1]: Key.g,
  [Note.e1]: Key.h,
  [Note.f1]: Key.n,
  [Note.fSharp1]: Key.y,
  [Note.g1]: Key.j,
  [Note.gSharp1]: Key.u,
  [Note.a1]: Key.m,
  [Note.aSharp1]: Key.i,
  [Note.b1]: Key.k,

  [Note.c2]: Key.l,
  [Note.cSharp2]: Key.o,
  [Note.d2]: Key.comma,
  [Note.dSharp2]: Key.p,
  [Note.e2]: Key.dot,
  [Note.f2]: Key.slash,
  [Note.fSharp2]: Key.openBracket,
  [Note.g2]: Key.semicolon,
  [Note.gSharp2]: Key.closeBracket,
  [Note.a2]: Key.quotes,
  [Note.aSharp2]: Key.enter,
  [Note.b2]: Key.backslash,

  [Note.c3]: Key.left,
  [Note.cSharp3]: Key.up,
  [Note.d3]: Key.down,
  [Note.dSharp3]: Key.up,
  [Note.e3]: Key.right,
  [Note.f3]: Key.delete,
  [Note.fSharp3]: Key.backspace,
  [Note.g3]: Key.audioVolDown,
  [Note.gSharp3]: Key.audioVolUp,
  [Note.a3]: Key.lightsMonDown,
  [Note.aSharp3]: Key.lightsMonUp,
  [Note.b3]: Key.dash,

  [Note.c4]: Key.equal,
}

export const fnPortal: FnPortalMaps = {
  [Note.C]: {
    [Note.D]: Key.audioPrev,
    [Note.DSharp]: Key.audioPlay,
    [Note.E]: Key.audioNext,

    [Note.cSharp]: Key.f1,
    [Note.d]: Key.f2,
    [Note.dSharp]: Key.f3,
    [Note.e]: Key.f4,
    [Note.f]: Key.f5,
    [Note.fSharp]: Key.f6,
    [Note.g]: Key.f7,
    [Note.gSharp]: Key.f8,
    [Note.a]: Key.f9,
    [Note.aSharp]: Key.f10,
    [Note.b]: Key.f11,

    [Note.c1]: Key.f12,

    [Note.c3]: Key.tilde,
    [Note.cSharp3]: Key.num1,
    [Note.d3]: Key.num2,
    [Note.dSharp3]: Key.num3,
    [Note.e3]: Key.num4,
    [Note.f3]: Key.num5,
    [Note.fSharp3]: Key.num6,
    [Note.g3]: Key.num7,
    [Note.gSharp3]: Key.num8,
    [Note.a3]: Key.num9,
    [Note.aSharp3]: Key.num0,
    [Note.b3]: Key.pageDown,

    [Note.c4]: Key.pageUp,
  },

  [Note.CSharp]: {
    [Note.aSharp2]: Key.NULL,
  },
}

export const mergePortalFn = (
  portal: PortalMap,
  fnPortals: PortalMap[]
): PortalMap => ({
  ...portal,
  ...fnPortals.reduce(
    (prev, next) => Object.assign(prev, next),
    {},
  )
})

export const buildNameToPortal = (portal: PortalMap): PortalMap => (
  Object.fromEntries(
    Object.entries(portal).map(
      ([noteName, keyName]) => [Note[noteName], Key[keyName]]
    )
  )
)

export const buildNameToFnPortal = (fnPortal: FnPortalMaps): FnPortalMaps => (
  Object.fromEntries(
    Object.entries(fnPortal).map(
      ([noteName, portal]) => [Note[noteName], buildNameToPortal(portal)]
    )
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

export const loadPortalConfig = (configPath: string): PortalConfig => {
  try {
    const rawConfig: PortalConfig = yaml.safeLoad(
      fs.readFileSync(configPath, 'utf8')
    )
    signale.info('[Portal yaml]', rawConfig);

    const config = transformConfigNoteNameToCode(rawConfig)

    return {
      playMode: {
        ...playMode,
        ...config.playMode,
      },
      portal: {
        ...portal,
        ...config.portal,
      },
      fnPortal: {
        ...fnPortal,
        ...config.fnPortal,
      },
    }
  } catch (e) {
    signale.error('[Portal yaml]', e)

    return {
      playMode,
      portal,
      fnPortal,
    }
  }
}
