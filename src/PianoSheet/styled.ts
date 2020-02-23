import styled from '@emotion/styled'
import { Piano as ReactPiano } from 'react-piano'

export const NoteName = styled.div`
  text-align: left;
  font-size: 14px;
  padding: 0 0 2px 4px;
`

export const KeyName = styled.div`
  margin-bottom: 14px;
  text-align: center;
  font-size: 14px;
`

export const Kbd = styled.kbd`
  display: inline-block;
  margin-top: 14px;
  padding: 3px 5px;
  min-width: 12px;
  line-height: 16px;
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
    /* border: 1px solid var(--global-background); */
  }

  .ReactPiano__Key--accidental {
    background: var(--sharp-note-color);
    border: none;
  }

  .ReactPiano__Key--active {
    background: var(--active-note-color);
    border: none;

    &.ReactPiano__Key--natural, &.ReactPiano__Key--accidental {
      .ReactPiano__NoteLabelContainer kbd {
        color: transparent;
        text-shadow: 0 0 0 var(--sharp-note-text-color);
        border: 1px solid var(--kbd-border-color);
        box-shadow: 0 1.5px 0 var(--kbd-border-color);
      }
    }
  }

  .ReactPiano__Key {
    border-top: 10px solid var(--active-note-color);
  }
`
