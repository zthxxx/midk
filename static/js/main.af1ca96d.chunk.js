(this.webpackJsonpmidk=this.webpackJsonpmidk||[]).push([[0],{19:function(n,e){n.exports={pitchNotation:"Scientific",playMode:{enable:!1,toggle:["CSharp2","DSharp2","ASharp5"]},portal:{C2:null,CSharp2:"escape",D2:"home",DSharp2:null,E2:"end",F2:"tilde",FSharp2:"tab",G2:"control",GSharp2:"capsLock",A2:"alt",ASharp2:"shift",B2:"command",C3:"a",CSharp3:"q",D3:"z",DSharp3:"w",E3:"s",F3:"x",FSharp3:"e",G3:"c",GSharp3:"d",A3:"f",ASharp3:"r",B3:"v",C4:"space",CSharp4:"t",D4:"b",DSharp4:"g",E4:"h",F4:"n",FSharp4:"y",G4:"j",GSharp4:"u",A4:"k",ASharp4:"i",B4:"m",C5:"l",CSharp5:"o",D5:"comma",DSharp5:"p",E5:"dot",F5:"slash",FSharp5:"openBracket",G5:"semicolon",GSharp5:"closeBracket",A5:"quotes",ASharp5:"enter",B5:"backslash",C6:"left",CSharp6:"backspace",D6:"down",DSharp6:"up",E6:"right",F6:"delete",FSharp6:"backspace",G6:"audioVolDown",GSharp6:"audioVolUp",A6:"lightsMonDown",ASharp6:"lightsMonUp",B6:"dash",C7:"equal"},fnPortal:{C2:{D2:"audioPrev",DSharp2:"audioPlay",E2:"audioNext",CSharp3:"f1",D3:"f2",DSharp3:"f3",E3:"f4",F3:"f5",FSharp3:"f6",G3:"f7",GSharp3:"f8",A3:"f9",ASharp3:"f10",B3:"f11",C4:"f12",C6:"tilde",CSharp6:"num1",D6:"num2",DSharp6:"num3",E6:"num4",F6:"num5",FSharp6:"num6",G6:"num7",GSharp6:"num8",A6:"num9",ASharp6:"num0",B6:"pageDown",C7:"pageUp"},CSharp2:{ASharp5:null}}}},21:function(n,e,a){n.exports=a(33)},32:function(n,e,a){},33:function(n,e,a){"use strict";a.r(e);var r,t,o=a(0),l=a.n(o),c=a(12),p=a.n(c),u=a(13),i=a.n(u);!function(n){n[n.noteOffEvent=128]="noteOffEvent",n[n.noteOnEvent=144]="noteOnEvent",n[n.polyphonicPressure=160]="polyphonicPressure",n[n.controlChange=176]="controlChange",n[n.programChange=192]="programChange",n[n.channelPressure=208]="channelPressure",n[n.pitchBendChange=224]="pitchBendChange"}(r||(r={})),function(n){n[n.C0=12]="C0",n[n.CSharp0=13]="CSharp0",n[n.D0=14]="D0",n[n.DSharp0=15]="DSharp0",n[n.E0=16]="E0",n[n.F0=17]="F0",n[n.FSharp0=18]="FSharp0",n[n.G0=19]="G0",n[n.GSharp0=20]="GSharp0",n[n.A0=21]="A0",n[n.ASharp0=22]="ASharp0",n[n.B0=23]="B0",n[n.C1=24]="C1",n[n.CSharp1=25]="CSharp1",n[n.D1=26]="D1",n[n.DSharp1=27]="DSharp1",n[n.E1=28]="E1",n[n.F1=29]="F1",n[n.FSharp1=30]="FSharp1",n[n.G1=31]="G1",n[n.GSharp1=32]="GSharp1",n[n.A1=33]="A1",n[n.ASharp1=34]="ASharp1",n[n.B1=35]="B1",n[n.C2=36]="C2",n[n.CSharp2=37]="CSharp2",n[n.D2=38]="D2",n[n.DSharp2=39]="DSharp2",n[n.E2=40]="E2",n[n.F2=41]="F2",n[n.FSharp2=42]="FSharp2",n[n.G2=43]="G2",n[n.GSharp2=44]="GSharp2",n[n.A2=45]="A2",n[n.ASharp2=46]="ASharp2",n[n.B2=47]="B2",n[n.C3=48]="C3",n[n.CSharp3=49]="CSharp3",n[n.D3=50]="D3",n[n.DSharp3=51]="DSharp3",n[n.E3=52]="E3",n[n.F3=53]="F3",n[n.FSharp3=54]="FSharp3",n[n.G3=55]="G3",n[n.GSharp3=56]="GSharp3",n[n.A3=57]="A3",n[n.ASharp3=58]="ASharp3",n[n.B3=59]="B3",n[n.C4=60]="C4",n[n.CSharp4=61]="CSharp4",n[n.D4=62]="D4",n[n.DSharp4=63]="DSharp4",n[n.E4=64]="E4",n[n.F4=65]="F4",n[n.FSharp4=66]="FSharp4",n[n.G4=67]="G4",n[n.GSharp4=68]="GSharp4",n[n.A4=69]="A4",n[n.ASharp4=70]="ASharp4",n[n.B4=71]="B4",n[n.C5=72]="C5",n[n.CSharp5=73]="CSharp5",n[n.D5=74]="D5",n[n.DSharp5=75]="DSharp5",n[n.E5=76]="E5",n[n.F5=77]="F5",n[n.FSharp5=78]="FSharp5",n[n.G5=79]="G5",n[n.GSharp5=80]="GSharp5",n[n.A5=81]="A5",n[n.ASharp5=82]="ASharp5",n[n.B5=83]="B5",n[n.C6=84]="C6",n[n.CSharp6=85]="CSharp6",n[n.D6=86]="D6",n[n.DSharp6=87]="DSharp6",n[n.E6=88]="E6",n[n.F6=89]="F6",n[n.FSharp6=90]="FSharp6",n[n.G6=91]="G6",n[n.GSharp6=92]="GSharp6",n[n.A6=93]="A6",n[n.ASharp6=94]="ASharp6",n[n.B6=95]="B6",n[n.C7=96]="C7",n[n.CSharp7=97]="CSharp7",n[n.D7=98]="D7",n[n.DSharp7=99]="DSharp7",n[n.E7=100]="E7",n[n.F7=101]="F7",n[n.FSharp7=102]="FSharp7",n[n.G7=103]="G7",n[n.GSharp7=104]="GSharp7",n[n.A7=105]="A7",n[n.ASharp7=106]="ASharp7",n[n.B7=107]="B7",n[n.C8=108]="C8",n[n.CSharp8=109]="CSharp8",n[n.D8=110]="D8",n[n.DSharp8=111]="DSharp8",n[n.E8=112]="E8",n[n.F8=113]="F8",n[n.FSharp8=114]="FSharp8",n[n.G8=115]="G8",n[n.GSharp8=116]="GSharp8",n[n.A8=117]="A8",n[n.ASharp8=118]="ASharp8",n[n.B8=119]="B8",n[n.C9=120]="C9"}(t||(t={}));var h=a(6),d=a(3),s=a(4),S=a(5),f=a(35),m=a(36),b=a(37),g=a(38),C=a(39),F=a(40),v=a(41),E=a(16);function A(){var n=Object(s.a)(["\n  margin: 16px 10px auto;\n  background-color: #fff;\n"]);return A=function(){return n},n}function D(){var n=Object(s.a)(["\n  margin: 0 10px;\n\n  .ReactPiano__Key--natural {\n    background: var(--base-note-color);\n    border: none;\n    box-shadow: 0 0 0 1px var(--global-background);\n  }\n\n  .ReactPiano__Key--accidental {\n    height: 64%;\n    border: none;\n    background: var(--sharp-note-color);\n  }\n\n  .ReactPiano__Key--active {\n    border: none;\n    background: var(--active-note-color);\n\n    &.ReactPiano__Key--natural {\n      height: unset;\n    }\n\n    &.ReactPiano__Key--natural, &.ReactPiano__Key--accidental {\n      .ReactPiano__NoteLabelContainer kbd {\n        color: var(--sharp-note-text-color);\n        text-shadow: 0 0 0 var(--sharp-note-text-color);\n        border: 1px solid var(--kbd-border-color);\n        box-shadow: 0 1.5px 0 var(--kbd-border-color);\n      }\n    }\n  }\n\n  .ReactPiano__Key {\n    border-top: 10px solid var(--piano-header-background);\n  }\n"]);return D=function(){return n},n}function x(){var n=Object(s.a)(["\n  color: transparent;\n  width: 14px;\n  overflow-x: hidden;\n"]);return x=function(){return n},n}function G(){var n=Object(s.a)(["\n  color: var(--active-note-color);\n  text-shadow: 0 0 0 var(--active-note-color);\n  border-color: var(--active-note-color);\n  box-shadow: 0 1.5px 0 var(--active-note-color);\n"]);return G=function(){return n},n}function w(){var n=Object(s.a)(['\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 20px;\n  margin-top: 14px;\n  padding: 1px 5px;\n  min-width: 12px;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  background-color: var(--kbd-background);\n  font-family: "SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace";\n  border-radius: 3px;\n  border: 1px solid var(--kbd-border-color);\n  box-shadow: 0 1.5px 0 var(--kbd-border-color);\n']);return w=function(){return n},n}function k(){var n=Object(s.a)(["\n  margin-bottom: 12px;\n  text-align: center;\n  font-size: 14px;\n  user-select: none;\n\n  .anticon svg {\n    font-size: 16px;\n  }\n"]);return k=function(){return n},n}function B(){var n=Object(s.a)(["\n  padding: 0 0 2px 4px;\n  text-align: left;\n  color: var(--base-note-name-color);\n  font-size: 14px;\n  user-select: none;\n\n  sub {\n    position: absolute;\n    bottom: 0;\n  }\n"]);return B=function(){return n},n}function y(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  justify-content: center;\n"]);return y=function(){return n},n}function P(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return P=function(){return n},n}var j=S.a.div(P()),O=S.a.div(y()),R=S.a.div(B()),N=S.a.div(k()),_=S.a.kbd(w()),M=Object(S.a)(_)(G()),L=S.a.span(x()),K=Object(S.a)(E.a)(D()),V=S.a.div(A()),U={backspace:"\u232b",delete:"\u2326",enter:"\u21a9\ufe0e",tab:"\u21e5",escape:"Esc",up:l.a.createElement(f.a,null),down:l.a.createElement(m.a,null),right:l.a.createElement(b.a,null),left:l.a.createElement(g.a,null),home:"Home",end:"End",pageUp:"Page\u21de",pageDown:"Page\u21df",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",f13:"F13",f14:"F14",f15:"F15",f16:"F16",f17:"F17",f18:"F18",f19:"F19",f20:"F20",f21:"F21",f22:"F22",f23:"F23",f24:"F24",capsLock:"\u21ea",command:"\u2318",alt:"\u2325",rightAlt:"\u2325",control:"\u2303",leftControl:"\u2303",rightControl:"\u2303",shift:"\u21e7",rightShift:"\u21e7",space:"Space",printScreen:"Screen",insert:"Insert",menu:"Menu",audioMute:l.a.createElement(L,{role:"img"},"\ud83d\udd0a"),audioVolDown:l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{role:"img"},"\ud83d\udd0a"),"-"),audioVolUp:l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{role:"img"},"\ud83d\udd0a"),"+"),audioPlay:l.a.createElement(C.a,null),audioStop:l.a.createElement(C.a,null),audioPause:l.a.createElement(C.a,null),audioPrev:l.a.createElement(F.a,null),audioNext:l.a.createElement(v.a,null),audioRewind:"Rewind",audioForward:"Forward",audioRepeat:"\u2394",audioRandom:"Random",numpadLock:"NumLock",num1:"1",num2:"2",num3:"3",num4:"4",num5:"5",num6:"6",num7:"7",num8:"8",num9:"9",num0:"0",numpad0:"0",numpad1:"1",numpad2:"2",numpad3:"3",numpad4:"4",numpad5:"5",numpad6:"6",numpad7:"7",numpad8:"8",numpad9:"9",numpadPlus:"+",numpadSub:"-",numpadMulti:"*",numpadDiv:"/",numpadDot:".",lightsMonUp:l.a.createElement(L,{role:"img"},"\ud83d\udd06"),lightsMonDown:l.a.createElement(L,{role:"img"},"\ud83d\udd05"),lightsKbdToggle:"Toggle",lightsKbdUp:l.a.createElement(L,{role:"img"},"\u2328\ufe0f\ud83d\udd06"),lightsKbdDown:l.a.createElement(L,{role:"img"},"\u2328\ufe0f\ud83d\udd05"),a:"A",b:"B",c:"C",d:"D",e:"E",f:"F",g:"G",h:"H",i:"I",j:"J",k:"K",l:"L",m:"M",n:"N",o:"O",p:"P",q:"Q",r:"R",s:"S",t:"T",u:"U",v:"V",w:"W",x:"X",y:"Y",z:"Z",tilde:"`",dash:"-",equal:"=",comma:",",dot:".",slash:"/",semicolon:";",quotes:"'",openBracket:"[",closeBracket:"]",backslash:"\\",fn:"Fn",NULL:""};a(11);function q(){var n=Object(s.a)(["\n  color: var(--base-note-text-color);\n  text-shadow: 0 0 0 var(--base-note-text-color);\n"]);return q=function(){return n},n}function z(){var n=Object(s.a)(["\n  padding-bottom: 8px;\n  color: var(--sharp-note-text-color);\n  text-shadow: 0 0 0 var(--sharp-note-text-color);\n"]);return z=function(){return n},n}var H,T,W=function(n){var e=n.noteCode,a=t[e].replace("Sharp","#");return l.a.createElement(R,null,l.a.createElement("span",null,a))},I=S.a.div(z()),J=S.a.div(q()),Q=function(n){var e=n.noteCode,a=n.portal,r=n.fnPortal,o=t[e],c=U[a[o]],p=new Map(Object.values(r).map((function(n){return Object.entries(n)})).reduce((function(n,e){return[].concat(Object(d.a)(n),Object(d.a)(e))}),[]).filter((function(n){return Object(h.a)(n,2)[1]}))),u=U[p.get(o)];return u?l.a.createElement(N,null,l.a.createElement("div",null,l.a.createElement(M,null,u)),c?l.a.createElement(_,null,c):null):c?r[o]&&Object.values(r[o]).filter(Boolean).length>0?l.a.createElement(N,null,l.a.createElement(M,null,c)):l.a.createElement(N,null,l.a.createElement(_,null,c)):null},X=function(n){var e=n.noteCode,a=n.isAccidental,r=n.portal,t=n.fnPortal,o=l.a.createElement(W,{noteCode:e}),c=a?I:J;return l.a.createElement(c,null,l.a.createElement(Q,{noteCode:e,portal:r,fnPortal:t}),a?null:o)},Y=a(20).a.Flow,Z=Y.Formatter,$=Y.Renderer,nn=Y.Stave,en=Y.StaveNote,an=Y.Beam;!function(n){n[n.CANVAS=1]="CANVAS",n[n.RAPHAEL=2]="RAPHAEL",n[n.SVG=3]="SVG",n[n.VML=4]="VML"}(H||(H={})),function(n){n.treble="treble",n.bass="bass"}(T||(T={}));var rn=function(n){return t[n].replace(/(Sharp)?(\d)/,"/$2")},tn=function(n,e){return Array.from({length:e-n+1}).map((function(e,a){return a+n})).filter((function(n){return!t[n].includes("Sharp")})).map((function(n){return new en({clef:n<t.C4?T.bass:T.treble,keys:[rn(n)],duration:"4q"})}))},on=function(n){var e=n.className,a=n.width,r=n.noteRange,c=r.first,p=r.last,u=n.noteKeyWidth,i=Object(o.useRef)(),h=tn(t.C4,p),d=tn(c,t.B3);Object(o.useEffect)((function(){var n=new $(i.current,H.SVG);s(n)}),[]);var s=function(n){n.resize(a,150);var e=n.getContext(),r=new nn(10,20,d.length*u-10).addClef(T.bass).setContext(e);r.draw();var t=an.generateBeams(d);Z.FormatAndDraw(e,r,d),t.forEach((function(n){return n.setContext(e).draw()}));var o=new nn(d.length*u+10,20,h.length*u-10).addClef(T.treble).setContext(e);o.draw();var l=an.generateBeams(h);Z.FormatAndDraw(e,o,h),l.forEach((function(n){return n.setContext(e).draw()}))};return l.a.createElement(V,null,l.a.createElement("div",{className:e,ref:i}))},ln=a(19),cn=a.n(ln),pn=(a(31),a(32),cn.a),un=pn.portal,hn=pn.fnPortal,dn={first:t.C2,last:t.C7},sn=70*function(n,e){for(var a=0,r=n;r<=e;r++)t[r].includes("Sharp")||(a+=1);return a}(dn.first,dn.last),Sn=document.getElementById("root");p.a.render(l.a.createElement((function(){return l.a.createElement(j,null,l.a.createElement(i.a,{url:"https://github.com/zthxxx/midk",backgroundColor:"white",color:"var(--global-background)",svgStyle:{position:"fixed"}}),l.a.createElement(O,null,l.a.createElement(K,{noteRange:dn,width:sn,playNote:function(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];return console.log("[Piano] playProps",e)},stopNote:function(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];return console.log("[Piano] stopNote",e)},disabled:!1,keyWidthToHeight:1/4.8,renderNoteLabel:function(n){var e=n.midiNumber,a=n.isAccidental;return l.a.createElement(X,{noteCode:e,isAccidental:a,portal:un,fnPortal:hn})}}),l.a.createElement(on,{width:sn,noteRange:dn,noteKeyWidth:70})))})),Sn)}},[[21,1,2]]]);
//# sourceMappingURL=main.af1ca96d.chunk.js.map