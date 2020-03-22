import { NamedKey as Key } from './keyboard'
import {
  PitchNotation,
  NoteNameKey,
  NoteCode as Note,
} from './midi'
import {
  FnPortalConfigMap,
  FnPortalMap,
  PlayMode,
  PortalConfigMap,
  PortalMap,
  playMode as defaultPlayMode,
  portal as defaultPortal,
  fnPortal as defaultFnPortal,
} from './portal'


export interface RawFileConfig {
  pitchNotation: PitchNotation,
  playMode: {
    enable: boolean,
    toggle: NoteNameKey[],
  },
  portal: PortalConfigMap,
  fnPortal: FnPortalConfigMap,
}

export interface MidkConfig {
  pitchNotation: PitchNotation,
  playMode: PlayMode,
  portal: PortalMap,
  fnPortal: FnPortalMap,
}

export const defaultMidkConfig: MidkConfig = {
  pitchNotation: PitchNotation.Scientific,
  playMode: defaultPlayMode,
  portal: defaultPortal,
  fnPortal: defaultFnPortal,
}

export const mergeMidkConfig = (prevConfig: MidkConfig, nextConfig: MidkConfig) => {
  return {
    pitchNotation: nextConfig.pitchNotation,
    playMode: {
      ...prevConfig.playMode,
      ...nextConfig.playMode,
    },
    portal: {
      ...prevConfig.portal,
      ...nextConfig.portal,
    },
    fnPortal: {
      ...prevConfig.fnPortal,
      ...nextConfig.fnPortal,
    },
  }
}


export const transformPortal = (rawPortal: PortalConfigMap): PortalMap => (
  Object.fromEntries(
    Object.entries(rawPortal).map(
      ([noteName, keyName]) => [
        Note[noteName],
        Key[keyName],
      ],
    ),
  )
)

export const transformFnPortal = (rawFnPortal: FnPortalConfigMap): FnPortalMap => (
  Object.fromEntries(
    Object.entries(rawFnPortal).map(
      ([noteName, rawPortal]) => [
        Note[noteName],
        transformPortal(rawPortal),
      ],
    ),
  )
)

export const buildRawToMidkConfig = (rawConfig?: RawFileConfig): MidkConfig => {
  return {
    pitchNotation: rawConfig.pitchNotation,
    playMode: {
      enable: rawConfig.playMode.enable,
      toggle: rawConfig.playMode.toggle.map(noteName => Note[noteName]),
    },
    portal: transformPortal(rawConfig.portal),
    fnPortal: transformFnPortal(rawConfig.fnPortal),
  }
}

export const loadMidkConfig = (rawConfig?: RawFileConfig): MidkConfig => {
  if (!rawConfig) {
    return defaultMidkConfig
  }

  const midkConfig = buildRawToMidkConfig(rawConfig)

  return mergeMidkConfig(defaultMidkConfig, midkConfig)
}
