(this.webpackJsonpmidk=this.webpackJsonpmidk||[]).push([[0],{19:function(a,n){a.exports={playMode:{enable:!1,toggle:["CSharp","DSharp","aSharp2"]},portal:{C:"fn",CSharp:"escape",D:"home",DSharp:null,E:"end",F:"tilde",FSharp:"tab",G:"control",GSharp:"capsLock",A:"alt",ASharp:"shift",B:"command",c:"a",cSharp:"q",d:"z",dSharp:"w",e:"s",f:"x",fSharp:"e",g:"c",gSharp:"d",a:"f",aSharp:"r",b:"v",c1:"space",cSharp1:"t",d1:"b",dSharp1:"g",e1:"h",f1:"n",fSharp1:"y",g1:"j",gSharp1:"u",a1:"k",aSharp1:"i",b1:"m",c2:"l",cSharp2:"o",d2:"comma",dSharp2:"p",e2:"dot",f2:"slash",fSharp2:"openBracket",g2:"semicolon",gSharp2:"closeBracket",a2:"quotes",aSharp2:"enter",b2:"backslash",c3:"left",cSharp3:"backspace",d3:"down",dSharp3:"up",e3:"right",f3:"delete",fSharp3:"backspace",g3:"audioVolDown",gSharp3:"audioVolUp",a3:"lightsMonDown",aSharp3:"lightsMonUp",b3:"dash",c4:"equal"},fnPortal:{C:{D:"audioPrev",DSharp:"audioPlay",E:"audioNext",cSharp:"f1",d:"f2",dSharp:"f3",e:"f4",f:"f5",fSharp:"f6",g:"f7",gSharp:"f8",a:"f9",aSharp:"f10",b:"f11",c1:"f12",c3:"tilde",cSharp3:"num1",d3:"num2",dSharp3:"num3",e3:"num4",f3:"num5",fSharp3:"num6",g3:"num7",gSharp3:"num8",a3:"num9",aSharp3:"num0",b3:"pageDown",c4:"pageUp"},CSharp:{aSharp2:null}}}},20:function(a,n,e){a.exports=e(32)},31:function(a,n,e){},32:function(a,n,e){"use strict";e.r(n);var r,t,o=e(0),c=e.n(o),l=e(13),p=e.n(l),u=e(6),h=e(14),i=e.n(h),d=e(9),f=e(3),S=e(10),m=e(4);!function(a){a[a.noteOffEvent=128]="noteOffEvent",a[a.noteOnEvent=144]="noteOnEvent",a[a.polyphonicPressure=160]="polyphonicPressure",a[a.controlChange=176]="controlChange",a[a.programChange=192]="programChange",a[a.channelPressure=208]="channelPressure",a[a.pitchBendChange=224]="pitchBendChange"}(r||(r={})),function(a){a[a.C2=12]="C2",a[a.CSharp2=13]="CSharp2",a[a.D2=14]="D2",a[a.DSharp2=15]="DSharp2",a[a.E2=16]="E2",a[a.F2=17]="F2",a[a.FSharp2=18]="FSharp2",a[a.G2=19]="G2",a[a.GSharp2=20]="GSharp2",a[a.A2=21]="A2",a[a.ASharp2=22]="ASharp2",a[a.B2=23]="B2",a[a.C1=24]="C1",a[a.CSharp1=25]="CSharp1",a[a.D1=26]="D1",a[a.DSharp1=27]="DSharp1",a[a.E1=28]="E1",a[a.F1=29]="F1",a[a.FSharp1=30]="FSharp1",a[a.G1=31]="G1",a[a.GSharp1=32]="GSharp1",a[a.A1=33]="A1",a[a.ASharp1=34]="ASharp1",a[a.B1=35]="B1",a[a.C=36]="C",a[a.CSharp=37]="CSharp",a[a.D=38]="D",a[a.DSharp=39]="DSharp",a[a.E=40]="E",a[a.F=41]="F",a[a.FSharp=42]="FSharp",a[a.G=43]="G",a[a.GSharp=44]="GSharp",a[a.A=45]="A",a[a.ASharp=46]="ASharp",a[a.B=47]="B",a[a.c=48]="c",a[a.cSharp=49]="cSharp",a[a.d=50]="d",a[a.dSharp=51]="dSharp",a[a.e=52]="e",a[a.f=53]="f",a[a.fSharp=54]="fSharp",a[a.g=55]="g",a[a.gSharp=56]="gSharp",a[a.a=57]="a",a[a.aSharp=58]="aSharp",a[a.b=59]="b",a[a.c1=60]="c1",a[a.cSharp1=61]="cSharp1",a[a.d1=62]="d1",a[a.dSharp1=63]="dSharp1",a[a.e1=64]="e1",a[a.f1=65]="f1",a[a.fSharp1=66]="fSharp1",a[a.g1=67]="g1",a[a.gSharp1=68]="gSharp1",a[a.a1=69]="a1",a[a.aSharp1=70]="aSharp1",a[a.b1=71]="b1",a[a.c2=72]="c2",a[a.cSharp2=73]="cSharp2",a[a.d2=74]="d2",a[a.dSharp2=75]="dSharp2",a[a.e2=76]="e2",a[a.f2=77]="f2",a[a.fSharp2=78]="fSharp2",a[a.g2=79]="g2",a[a.gSharp2=80]="gSharp2",a[a.a2=81]="a2",a[a.aSharp2=82]="aSharp2",a[a.b2=83]="b2",a[a.c3=84]="c3",a[a.cSharp3=85]="cSharp3",a[a.d3=86]="d3",a[a.dSharp3=87]="dSharp3",a[a.e3=88]="e3",a[a.f3=89]="f3",a[a.fSharp3=90]="fSharp3",a[a.g3=91]="g3",a[a.gSharp3=92]="gSharp3",a[a.a3=93]="a3",a[a.aSharp3=94]="aSharp3",a[a.b3=95]="b3",a[a.c4=96]="c4",a[a.cSharp4=97]="cSharp4",a[a.d4=98]="d4",a[a.dSharp4=99]="dSharp4",a[a.e4=100]="e4",a[a.f4=101]="f4",a[a.fSharp4=102]="fSharp4",a[a.g4=103]="g4",a[a.gSharp4=104]="gSharp4",a[a.a4=105]="a4",a[a.aSharp4=106]="aSharp4",a[a.b4=107]="b4",a[a.c5=108]="c5",a[a.cSharp5=109]="cSharp5",a[a.d5=110]="d5",a[a.dSharp5=111]="dSharp5",a[a.e5=112]="e5",a[a.f5=113]="f5",a[a.fSharp5=114]="fSharp5",a[a.g5=115]="g5",a[a.gSharp5=116]="gSharp5",a[a.a5=117]="a5",a[a.aSharp5=118]="aSharp5",a[a.b5=119]="b5",a[a.c6=120]="c6"}(t||(t={}));var s=e(34),g=e(35),b=e(36),v=e(37),x=e(38),E=e(39),F=e(40);function C(){var a=Object(f.a)(["\n  margin: 0 10px;\n\n  .ReactPiano__Key--natural {\n    background: var(--base-note-color);\n    border: none;\n    box-shadow: 0 0 0 1px var(--global-background);\n  }\n\n  .ReactPiano__Key--accidental {\n    height: 64%;\n    border: none;\n    background: var(--sharp-note-color);\n  }\n\n  .ReactPiano__Key--active {\n    border: none;\n    background: var(--active-note-color);\n\n    &.ReactPiano__Key--natural {\n      height: unset;\n    }\n\n    &.ReactPiano__Key--natural, &.ReactPiano__Key--accidental {\n      .ReactPiano__NoteLabelContainer kbd {\n        color: var(--sharp-note-text-color);\n        text-shadow: 0 0 0 var(--sharp-note-text-color);\n        border: 1px solid var(--kbd-border-color);\n        box-shadow: 0 1.5px 0 var(--kbd-border-color);\n      }\n    }\n  }\n\n  .ReactPiano__Key {\n    border-top: 10px solid var(--piano-header-background);\n  }\n"]);return C=function(){return a},a}function k(){var a=Object(f.a)(["\n  color: transparent;\n  width: 14px;\n  overflow-x: hidden;\n"]);return k=function(){return a},a}function w(){var a=Object(f.a)(["\n  color: var(--active-note-color);\n  text-shadow: 0 0 0 var(--active-note-color);\n  border-color: var(--active-note-color);\n  box-shadow: 0 1.5px 0 var(--active-note-color);\n"]);return w=function(){return a},a}function P(){var a=Object(f.a)(['\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 20px;\n  margin-top: 14px;\n  padding: 1px 5px;\n  min-width: 12px;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  background-color: var(--kbd-background);\n  font-family: "SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace";\n  border-radius: 3px;\n  border: 1px solid var(--kbd-border-color);\n  box-shadow: 0 1.5px 0 var(--kbd-border-color);\n']);return P=function(){return a},a}function D(){var a=Object(f.a)(["\n  margin-bottom: 12px;\n  text-align: center;\n  font-size: 14px;\n  user-select: none;\n\n  .anticon svg {\n    font-size: 16px;\n  }\n"]);return D=function(){return a},a}function y(){var a=Object(f.a)(["\n  padding: 0 0 2px 4px;\n  text-align: left;\n  color: var(--base-note-name-color);\n  font-size: 14px;\n  user-select: none;\n\n  sub {\n    position: absolute;\n    bottom: 0;\n  }\n"]);return y=function(){return a},a}function j(){var a=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  justify-content: center;\n"]);return j=function(){return a},a}function O(){var a=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return O=function(){return a},a}var A=m.a.div(O()),B=m.a.div(j()),G=m.a.div(y()),M=m.a.div(D()),R=m.a.kbd(P()),_=Object(m.a)(R)(w()),N=m.a.span(k()),K=Object(m.a)(u.b)(C()),L={backspace:"\u232b",delete:"\u2326",enter:"\u21a9\ufe0e",tab:"\u21e5",escape:"Esc",up:c.a.createElement(s.a,null),down:c.a.createElement(g.a,null),right:c.a.createElement(b.a,null),left:c.a.createElement(v.a,null),home:"Home",end:"End",pageUp:"Page\u21de",pageDown:"Page\u21df",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",f13:"F13",f14:"F14",f15:"F15",f16:"F16",f17:"F17",f18:"F18",f19:"F19",f20:"F20",f21:"F21",f22:"F22",f23:"F23",f24:"F24",capsLock:"\u21ea",command:"\u2318",alt:"\u2325",rightAlt:"\u2325",control:"\u2303",leftControl:"\u2303",rightControl:"\u2303",shift:"\u21e7",rightShift:"\u21e7",space:"Space",printScreen:"Screen",insert:"Insert",menu:"Menu",audioMute:c.a.createElement(N,{role:"img"},"\ud83d\udd0a"),audioVolDown:c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{role:"img"},"\ud83d\udd0a"),"-"),audioVolUp:c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{role:"img"},"\ud83d\udd0a"),"+"),audioPlay:c.a.createElement(x.a,null),audioStop:c.a.createElement(x.a,null),audioPause:c.a.createElement(x.a,null),audioPrev:c.a.createElement(E.a,null),audioNext:c.a.createElement(F.a,null),audioRewind:"Rewind",audioForward:"Forward",audioRepeat:"\u2394",audioRandom:"Random",numpadLock:"NumLock",num1:"1",num2:"2",num3:"3",num4:"4",num5:"5",num6:"6",num7:"7",num8:"8",num9:"9",num0:"0",numpad0:"0",numpad1:"1",numpad2:"2",numpad3:"3",numpad4:"4",numpad5:"5",numpad6:"6",numpad7:"7",numpad8:"8",numpad9:"9",numpadPlus:"+",numpadSub:"-",numpadMulti:"*",numpadDiv:"/",numpadDot:".",lightsMonUp:c.a.createElement(N,{role:"img"},"\ud83d\udd06"),lightsMonDown:c.a.createElement(N,{role:"img"},"\ud83d\udd05"),lightsKbdToggle:"Toggle",lightsKbdUp:c.a.createElement(N,{role:"img"},"\u2328\ufe0f\ud83d\udd06"),lightsKbdDown:c.a.createElement(N,{role:"img"},"\u2328\ufe0f\ud83d\udd05"),a:"A",b:"B",c:"C",d:"D",e:"E",f:"F",g:"G",h:"H",i:"I",j:"J",k:"K",l:"L",m:"M",n:"N",o:"O",p:"P",q:"Q",r:"R",s:"S",t:"T",u:"U",v:"V",w:"W",x:"X",y:"Y",z:"Z",tilde:"`",dash:"-",equal:"=",comma:",",dot:".",slash:"/",semicolon:";",quotes:"'",openBracket:"[",closeBracket:"]",backslash:"\\",fn:"Fn",NULL:""};e(12);function U(){var a=Object(f.a)(["\n  color: var(--base-note-text-color);\n  text-shadow: 0 0 0 var(--base-note-text-color);\n"]);return U=function(){return a},a}function q(){var a=Object(f.a)(["\n  padding-bottom: 8px;\n  color: var(--sharp-note-text-color);\n  text-shadow: 0 0 0 var(--sharp-note-text-color);\n"]);return q=function(){return a},a}var z=function(a,n){for(var e=0,r=a;r<=n;r++)t[r].includes("Sharp")||(e+=1);return e},V=function(a){var n=function(a){var n=a>=t.c,e=n?t.c:t.B,r=Math.floor(Math.abs(a-e)/12),o=Math.abs(a-e)%12,c=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];return[(n?c.map((function(a){return a.toLowerCase()})):c.reverse())[o],r]}(a.noteCode),e=Object(S.a)(n,2),r=e[0],o=e[1];return c.a.createElement(G,null,c.a.createElement("span",null,r,o?c.a.createElement("sub",null,o):null))},T=m.a.div(q()),H=m.a.div(U()),I=function(a){var n=a.noteCode,e=a.portal,r=a.fnPortal,o=t[n],l=L[e[o]],p=new Map(Object.values(r).map((function(a){return Object.entries(a)})).reduce((function(a,n){return[].concat(Object(d.a)(a),Object(d.a)(n))}),[]).filter((function(a){return Object(S.a)(a,2)[1]}))),u=L[p.get(o)];return u?c.a.createElement(M,null,c.a.createElement("div",null,c.a.createElement(_,null,u)),l?c.a.createElement(R,null,l):null):l?r[o]&&Object.values(r[o]).filter(Boolean).length>0?c.a.createElement(M,null,c.a.createElement(_,null,l)):c.a.createElement(M,null,c.a.createElement(R,null,l)):null},J=function(a){var n=a.noteCode,e=a.isAccidental,r=a.portal,t=a.fnPortal,o=c.a.createElement(V,{noteCode:n}),l=e?T:H;return c.a.createElement(l,null,c.a.createElement(I,{noteCode:n,portal:r,fnPortal:t}),e?null:o)},W=e(19),Q=e.n(W),X=(e(30),Q.a),Y=X.portal,Z=X.fnPortal,$={first:u.a.fromNote("C2"),last:u.a.fromNote("C7")},aa=(e(31),document.getElementById("root"));p.a.render(c.a.createElement((function(){return c.a.createElement(A,null,c.a.createElement(i.a,{url:"https://github.com/zthxxx/midk",backgroundColor:"white",color:"var(--global-background)",svgStyle:{position:"fixed"}}),c.a.createElement(B,null,c.a.createElement(K,{noteRange:$,width:70*z($.first,$.last),playNote:function(){for(var a=arguments.length,n=new Array(a),e=0;e<a;e++)n[e]=arguments[e];return console.log("[Piano] playProps",n)},stopNote:function(){for(var a=arguments.length,n=new Array(a),e=0;e<a;e++)n[e]=arguments[e];return console.log("[Piano] stopNote",n)},disabled:!1,keyWidthToHeight:1/4.8,renderNoteLabel:function(a){var n=a.midiNumber,e=a.isAccidental;return c.a.createElement(J,{noteCode:n,isAccidental:e,portal:Y,fnPortal:Z})}})))})),aa)}},[[20,1,2]]]);
//# sourceMappingURL=main.d94cb6f9.chunk.js.map