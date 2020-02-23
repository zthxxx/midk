import styled from '@emotion/styled'
import { Piano as ReactPiano } from 'react-piano'

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

export const KeyName = styled.div`
  margin-bottom: 12px;
  text-align: center;
  font-size: 14px;
  user-select: none;

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
`

export const FnKbd = styled(Kbd)`
  color: var(--active-note-color);
  text-shadow: 0 0 0 var(--active-note-color);
  border-color: var(--active-note-color);
  box-shadow: 0 1.5px 0 var(--active-note-color);
`

export const Piano = styled(ReactPiano)`
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
    background: var(--active-note-color);

    &.ReactPiano__Key--natural {
      height: unset;
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
