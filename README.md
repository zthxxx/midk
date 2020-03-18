<h1 align="center">🎹 MIDK </h1>

<p align="center">
  <a href="https://travis-ci.org/zthxxx/midk" target="_blank" rel="noopener noreferrer"><img src="https://travis-ci.org/zthxxx/midk.svg" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/midk" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/midk" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/midk" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/dt/midk" alt="NPM Downloads" /></a>
  <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/node/midk" alt="Node.js" /></a>
  <a href="https://github.com/zthxxx/midk/blob/master/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/zthxxx/midk" alt="License" /></a>
</p>


Mapping MIDI keypress to PC keyboard, that you can work or code with your MIDI kerboard 🎉

(e.g. this project is code in midk)

[![midk-portal](./images/midk-portal-2580x600.png)](https://midk.zthxxx.me)


## Install & Usage

```bash
npm i -g midk

midk
```

## Dev & Debug

launch midk portal and watching files change

```bash
npm start
```

visual the keys-mapping like the above preview image, preview in https://midk.zthxxx.me

```bash
npm run cheatsheet
```

## Customization

you can customize keys-mapping in config file `~/.midk/portal.yml` (created after install).

the default config is stored in [`src/portal.ts`](./src/portal.ts)

```yaml
# choose a pitch notation which is used for note names in config
# https://en.wikipedia.org/wiki/Helmholtz_pitch_notation
# https://en.wikipedia.org/wiki/Scientific_pitch_notation
pitchNotation: Scientific  # Scientific | Helmholtz

# if enable playMode, stop to control keyboard
playMode:
  # default enable when start
  enable: false
  # composite keys to toggle enable/disable playMode
  toggle:
    - CSharp2
    - DSharp2
    - ASharp5

# all supported key names are written in `keyboard.ts`
# https://github.com/zthxxx/midk/blob/master/src/keyboard.ts
#
# interface Portal {
#   [NoteName]: KeyName
# }
portal:
  CSharp2: escape
  FSharp2: tab
  G2: control
  GSharp2: capsLock
  A2: alt
  ASharp2: shift
  B2: command

  C3: a
  CSharp3: q
  D3: z
  DSharp3: w
  E3: s
  F3: x

  ...

# when press the Fn-key, alter some keys mapping
#
# interface FnPortal {
#   [NoteName]: Portal
# }
fnPortal:
  C2:
    CSharp3: f1
    D3: f2
    DSharp3: f3
    E3: f4
    F3: f5

    ...
```

## License

[MIT LICENSE](./LICENSE)


## Author

**midk** © [zthxxx](https://github.com/zthxxx), Released under the **[MIT](./LICENSE)** License.<br>

> Blog [@zthxxx](https://blog.zthxxx.me) · GitHub [@zthxxx](https://github.com/zthxxx)
