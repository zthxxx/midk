// https://robotjs.io/docs/syntax#keys
// https://github.com/octalmage/robotjs/blob/master/src/robotjs.cc key_names[]
export enum NamedKey {
  backspace = 'backspace',
  delete = 'delete',
  enter = 'enter',
  tab = 'tab',
  escape = 'escape',
  up = 'up',
  down = 'down',
  right = 'right',
  left = 'left',
  home = 'home',
  end = 'end',
  pageUp = 'pageup',
  pageDown = 'pagedown',

  f1 = 'f1',
  f2 = 'f2',
  f3 = 'f3',
  f4 = 'f4',
  f5 = 'f5',
  f6 = 'f6',
  f7 = 'f7',
  f8 = 'f8',
  f9 = 'f9',
  f10 = 'f10',
  f11 = 'f11',
  f12 = 'f12',
  f13 = 'f13',
  f14 = 'f14',
  f15 = 'f15',
  f16 = 'f16',
  f17 = 'f17',
  f18 = 'f18',
  f19 = 'f19',
  f20 = 'f20',
  f21 = 'f21',
  f22 = 'f22',
  f23 = 'f23',
  f24 = 'f24',

  capsLock = 'capslock',
  command = 'command',
  alt = 'alt',
  rightAlt = 'right_alt',
  control = 'control',
  leftControl = 'left_control',
  rightControl = 'right_control',
  shift = 'shift',
  rightShift = 'right_shift',
  space = 'space',
  printScreen = 'printscreen',
  insert = 'insert',
  menu = 'menu',

  audioMute = 'audio_mute',
  audioVolDown = 'audio_vol_down',
  audioVolUp = 'audio_vol_up',
  audioPlay = 'audio_play',
  audioStop = 'audio_stop',
  audioPause = 'audio_pause',
  audioPrev = 'audio_prev',
  audioNext = 'audio_next',
  audioRewind = 'audio_rewind',
  audioForward = 'audio_forward',
  audioRepeat = 'audio_repeat',
  audioRandom = 'audio_random',
  numpadLock = 'numpad_lock',

  num1 = '1',
  num2 = '2',
  num3 = '3',
  num4 = '4',
  num5 = '5',
  num6 = '6',
  num7 = '7',
  num8 = '8',
  num9 = '9',
  num0 = '0',

  numpad0 = 'numpad_0',
  numpad1 = 'numpad_1',
  numpad2 = 'numpad_2',
  numpad3 = 'numpad_3',
  numpad4 = 'numpad_4',
  numpad5 = 'numpad_5',
  numpad6 = 'numpad_6',
  numpad7 = 'numpad_7',
  numpad8 = 'numpad_8',
  numpad9 = 'numpad_9',
  numpadPlus = 'numpad_+',
  numpadSub = 'numpad_-',
  numpadMulti = 'numpad_*',
  numpadDiv = 'numpad_/',
  numpadDot = 'numpad_.',
  lightsMonUp = 'lights_mon_up',
  lightsMonDown = 'lights_mon_down',
  lightsKbdToggle = 'lights_kbd_toggle',
  lightsKbdUp = 'lights_kbd_up',
  lightsKbdDown = 'lights_kbd_down',

  a = 'a',
  b = 'b',
  c = 'c',
  d = 'd',
  e = 'e',
  f = 'f',
  g = 'g',
  h = 'h',
  i = 'i',
  j = 'j',
  k = 'k',
  l = 'l',
  m = 'm',
  n = 'n',
  o = 'o',
  p = 'p',
  q = 'q',
  r = 'r',
  s = 's',
  t = 't',
  u = 'u',
  v = 'v',
  w = 'w',
  x = 'x',
  y = 'y',
  z = 'z',

  tilde = '`',

  dash = '-',
  equal = '=',

  comma = ',',
  dot = '.',
  slash = '/',

  semicolon = ';',
  quotes = '\'',

  openBracket = '[',
  closeBracket = ']',
  backslash = '\\',

  fn = 'NULL',
  NULL = 'NULL',
}


export const modifiers = new Set<NamedKey>([
  NamedKey.command,
  NamedKey.alt,
  NamedKey.control,
  NamedKey.shift,
])

