/* eslint-disable jsx-a11y/accessible-emoji*/
import React from 'react'
import styled from '@emotion/styled'
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  StepForwardOutlined,
  ForwardOutlined,
  BackwardOutlined,
} from '@ant-design/icons'
import { NamedKey } from '../keyboard'

export const EmojiIcon = styled.span`
  color: transparent;
  letter-spacing: -5px;
`

export const KeyDisplay: Record<keyof typeof NamedKey, React.ReactNode> = {
  backspace: '⌫',
  delete: '⌦',
  enter: '↩︎',
  tab: '⇥',
  escape: 'Esc',
  up: <ArrowUpOutlined />,
  down: <ArrowDownOutlined />,
  right: <ArrowRightOutlined />,
  left: <ArrowLeftOutlined />,
  home: 'Home',
  end: 'End',
  pageUp: 'Page⇞',
  pageDown: 'Page⇟',

  f1: 'F1',
  f2: 'F2',
  f3: 'F3',
  f4: 'F4',
  f5: 'F5',
  f6: 'F6',
  f7: 'F7',
  f8: 'F8',
  f9: 'F9',
  f10: 'F10',
  f11: 'F11',
  f12: 'F12',
  f13: 'F13',
  f14: 'F14',
  f15: 'F15',
  f16: 'F16',
  f17: 'F17',
  f18: 'F18',
  f19: 'F19',
  f20: 'F20',
  f21: 'F21',
  f22: 'F22',
  f23: 'F23',
  f24: 'F24',

  capsLock: '⇪',
  command: '⌘',
  alt: '⌥',
  rightAlt: '⌥',
  control: '⌃',
  leftControl: '⌃',
  rightControl: '⌃',
  shift: '⇧',
  rightShift: '⇧',
  space: 'Space',
  printScreen: 'Screen',
  insert: 'Insert',
  menu: 'Menu',

  audioMute: <EmojiIcon role="img">🔊</EmojiIcon>,
  audioVolDown: <><EmojiIcon role="img">🔊</EmojiIcon>-</>,
  audioVolUp: <><EmojiIcon role="img">🔊</EmojiIcon>+</>,
  audioPlay: <StepForwardOutlined />,
  audioStop: <StepForwardOutlined />,
  audioPause: <StepForwardOutlined />,
  audioPrev: <BackwardOutlined />,
  audioNext: <ForwardOutlined />,
  audioRewind: 'Rewind',
  audioForward: 'Forward',
  audioRepeat: '⎔',
  audioRandom: 'Random',
  numpadLock: 'NumLock',

  num1: '1',
  num2: '2',
  num3: '3',
  num4: '4',
  num5: '5',
  num6: '6',
  num7: '7',
  num8: '8',
  num9: '9',
  num0: '0',

  numpad0: '0',
  numpad1: '1',
  numpad2: '2',
  numpad3: '3',
  numpad4: '4',
  numpad5: '5',
  numpad6: '6',
  numpad7: '7',
  numpad8: '8',
  numpad9: '9',
  numpadPlus: '+',
  numpadSub: '-',
  numpadMulti: '*',
  numpadDiv: '/',
  numpadDot: '.',
  lightsMonUp: <EmojiIcon role="img">🔆</EmojiIcon>,
  lightsMonDown: <EmojiIcon role="img">🔅</EmojiIcon>,
  lightsKbdToggle: 'Toggle',
  lightsKbdUp: <EmojiIcon role="img">⌨️🔆</EmojiIcon>,
  lightsKbdDown: <EmojiIcon role="img">⌨️🔅</EmojiIcon>,

  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  h: 'H',
  i: 'I',
  j: 'J',
  k: 'K',
  l: 'L',
  m: 'M',
  n: 'N',
  o: 'O',
  p: 'P',
  q: 'Q',
  r: 'R',
  s: 'S',
  t: 'T',
  u: 'U',
  v: 'V',
  w: 'W',
  x: 'X',
  y: 'Y',
  z: 'Z',

  tilde: '`',

  dash: '-',
  equal: '=',

  comma: ',',
  dot: '.',
  slash: '/',

  semicolon: ';',
  quotes: '\'',

  openBracket: '[',
  closeBracket: ']',
  backslash: '\\',

  fn: 'Fn',
  NULL: '',
}
