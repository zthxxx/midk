import styled from '@emotion/styled'
import AntSwitch from 'antd/es/switch'
import { Piano as ReactPiano } from 'react-piano'


export const noteKeyWidth = 70
export const noteKeyWidthHeightRatio = 1 / 6
export const pianoHeight = noteKeyWidth / noteKeyWidthHeightRatio
export const pianoZoom = .8

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BodyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  zoom: ${pianoZoom};
`

export const NoteName = styled.div`
  padding: 0 0 2px 4px;
  text-align: left;
  color: var(--base-note-name-color);
  font-size: 14px;
  user-select: none;

  sub {
    position: absolute;
    bottom: 0;
  }
`

export const SharpNote = styled.div`
  padding-bottom: 8px;
  color: var(--sharp-note-text-color);
  text-shadow: 0 0 0 var(--sharp-note-text-color);
`

export const BaseNote = styled.div`
  color: var(--base-note-text-color);
  text-shadow: 0 0 0 var(--base-note-text-color);
`

export const KeyName = styled.div`
  margin-bottom: 12px;
  text-align: center;
  font-size: 14px;

  .anticon svg {
    font-size: 16px;
  }
`

export const Kbd = styled.kbd`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin-top: 14px;
  padding: 1px 5px;
  min-width: 12px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  background-color: var(--kbd-background);
  font-family: "SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace";
  border-radius: 3px;
  border: 1px solid var(--kbd-border-color);
  box-shadow: 0 1.5px 0 var(--kbd-border-color);

  ::selection {
    background: transparent;
  }
`

export const FnKbd = styled(Kbd)`
  color: var(--active-note-color);
  text-shadow: 0 0 0 var(--active-note-color);
  border-color: var(--active-note-color);
  box-shadow: 0 1.5px 0 var(--active-note-color);
`

export const EmojiIcon = styled.span`
  color: transparent;
  font-size: 12px;

  ::selection {
    background: transparent;
  }
`

export const Piano = styled(ReactPiano)`
  margin: 0 10px;

  .ReactPiano__Key--natural {
    background: var(--base-note-color);
    border: none;
    box-shadow: 0 0 0 1px var(--global-background);
  }

  .ReactPiano__Key--accidental {
    height: 64%;
    border: none;
    background: var(--sharp-note-color);
  }

  .ReactPiano__Key--active {
    border: none;
    
    &.ReactPiano__Key--natural {
      height: unset;
      background: var(--active-note-color);
    }
     
    &.ReactPiano__Key--accidental {
      background: var(--piano-header-background);
    }    

    &.ReactPiano__Key--natural, &.ReactPiano__Key--accidental {
      .ReactPiano__NoteLabelContainer kbd {
        color: var(--sharp-note-text-color);
        text-shadow: 0 0 0 var(--sharp-note-text-color);
        border: 1px solid var(--kbd-border-color);
        box-shadow: 0 1.5px 0 var(--kbd-border-color);
      }
    }
  }

  .ReactPiano__Key {
    border-top: 10px solid var(--piano-header-background);
  }
`

export const StaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 16px 10px auto;
  pointer-events: none;
`

export const SwitchContainer = styled.div`
  position: fixed;
  // piano is vertical center of view point, switch is 20px above it
  bottom: calc(50vh + ${pianoHeight * pianoZoom / 2}px);
  left: 0;
  padding: 16px 0;
  color: #fff;
`

export const Switch = styled(AntSwitch)`
  border-color: #fff;
  &.ant-switch-checked {
    background-color: var(--active-note-color);
  }
`

export const SwitchLabel = styled.span<{ activated?: boolean }>`
  margin: auto 12px;
  color: ${props => props.activated ? '#fff' : '#999'};
  transition: all .3s;
`
