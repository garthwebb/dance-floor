(window.webpackJsonpddfui=window.webpackJsonpddfui||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),s=(a(76),a(123)),c=a(121),i=a(122),u=a(115),p=a(118),m=a(17),h=a(4),f=a.n(h),y=a(6),d=a(23),v=a(14),g=a(30),b=a(31),E=a(33),w=a(116),C=a(66),x=a(124),O=a(22),k=function(e){return Math.round(Number.parseInt(e,10)/1e3)},P={maxHeight:200,overflow:"scroll",marginBottom:16};function j(e){var t=e.playlist;if(!t)return null;var a=t.current_position,n=(t.queue||[]).map(function(e,n){var o=n===a,l=o?"list-group-item active":"list-group-item",s=k(t.millis_remaining),c=o&&t.millis_remaining?"(".concat(s,"s remaining)"):"",i="".concat(e.name," ").concat(c);return r.a.createElement("ul",{key:n,className:l},i)}),o=[].concat(Object(O.a)(n.slice(a,n.length)),Object(O.a)(n.slice(0,a)));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card card-body bg-light",style:P},r.a.createElement("ul",{className:"list-group"},o)))}function S(e){var t=e.onPrevious,a=e.onNext,n=e.onStay,o=e.onSetEnabled,l=e.isEnabled;return r.a.createElement("div",{style:{marginBottom:16}},r.a.createElement("div",{className:"btn-group d-flex",role:"group",style:{marginBottom:16}},r.a.createElement(u.a,{variant:"secondary",onClick:t,className:"w-100"},"Prev"),r.a.createElement(u.a,{variant:"secondary",onClick:n,className:"w-100"},"Stay"),r.a.createElement(u.a,{variant:"secondary",onClick:a,className:"w-100"},"Next")),r.a.createElement(u.a,{variant:"secondary",onClick:function(){return o(!l)},block:!0},l?"Stop":"Start"))}var T=a(68),N=a(119),D=window.DDF_HOSTNAME||window.location.hostname,_={DDF_HOSTNAME:D,DDF_SERVER_URL:window.DDF_SERVER_URL||"http://".concat(D,":1977"),DDF_PREVIEW_URL:window.DDF_PREVIEW_URL||"http://".concat(D,":1979")},B=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_.DDF_SERVER_URL;Object(d.a)(this,e),this.baseUrl=t}return Object(v.a)(e,[{key:"_request",value:function(){var e=Object(y.a)(f.a.mark(function e(t,a){var n,r,o,l,s=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>2&&void 0!==s[2]?s[2]:null,a.startsWith("/")){e.next=3;break}throw new Error("Bad path: ".concat(a));case 3:return r="".concat(this.baseUrl).concat(a),e.next=6,fetch(r,{method:t,headers:{"Content-Type":"application/json"},body:n?JSON.stringify(n):void 0});case 6:return o=e.sent,e.next=9,o.json();case 9:return l=e.sent,e.abrupt("return",l);case 11:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(y.a)(f.a.mark(function e(t){var a,n=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:null,e.abrupt("return",this._request("GET",t,a));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(y.a)(f.a.mark(function e(t){var a,n=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:null,e.abrupt("return",this._request("POST",t,a));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"patch",value:function(){var e=Object(y.a)(f.a.mark(function e(t){var a,n=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:null,e.abrupt("return",this._request("PATCH",t,a));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getStatus",value:function(){var e=Object(y.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.get("/api/status"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"playlistAdvance",value:function(){var e=Object(y.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.post("/api/playlist/advance"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"playlistStay",value:function(){var e=Object(y.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.post("/api/playlist/stay"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"playlistPrevious",value:function(){var e=Object(y.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.post("/api/playlist/previous"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setTempo",value:function(){var e=Object(y.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.post("/api/tempo",{bpm:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"nudgeTempo",value:function(){var e=Object(y.a)(f.a.mark(function e(t,a){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={bpm_delta:t,downbeat_millis_delta:a},e.abrupt("return",this.post("/api/tempo/nudge",n));case 2:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"setLayer",value:function(){var e=Object(y.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.patch("/api/layers/".concat(t),a));case 1:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"setBrightness",value:function(){var e=Object(y.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.post("/api/brightness",{brightness:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPlaylists",value:function(){var e=Object(y.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.get("/api/playlists"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"activatePlaylist",value:function(){var e=Object(y.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.post("/api/playlists/".concat(t,"/activate")));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"uploadPlaylist",value:function(){var e=Object(y.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.post("/api/playlists/".concat(t),a));case 1:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}();function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var F=new B;function U(e){var t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))}).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}var R=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={allPlaylists:{},showChooserModal:!1,showUploadModal:!1},a.onPlaylistSelected=function(){var e=Object(y.a)(f.a.mark(function e(t){var n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({showChooserModal:!1}),n=t.target.value,e.next=4,F.activatePlaylist(n);case 4:r=e.sent,a.props.onChange(r);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onFileUploaded=function(e){var t=e.target.files;if(t.length){var n=t[0],r=new FileReader;r.onload=function(e){a.onFileContentsAvailable(e.target.result)},r.readAsText(n)}},a.onFileContentsAvailable=function(){var e=Object(y.a)(f.a.mark(function e(t){var n,r,o,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({showUploadModal:!1}),n=JSON.parse(t),r=n.title||"playlist",o=U(r),e.next=6,F.uploadPlaylist(o,n);case 6:return l=e.sent,a.setState(function(e){return{allPlaylists:M({},e.allPlaylists,Object(m.a)({},o,l))}}),e.next=10,F.activatePlaylist(o);case 10:a.props.onChange(l);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onHideChooserModal=function(){a.setState({showChooserModal:!1})},a.onHideUploadModal=function(){a.setState({showUploadModal:!1})},a.onSelectPlaylist=function(){a.setState({showChooserModal:!0})},a.onUploadPlaylist=function(){a.setState({showUploadModal:!0})},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getPlaylists();case 2:t=e.sent,this.setState({allPlaylists:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.allPlaylists,a=e.showChooserModal,n=e.showUploadModal,o=Object.entries(t).map(function(e){var t=Object(T.a)(e,2),a=t[0],n=t[1];return r.a.createElement("option",{value:a,key:a},n.title)});return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{show:a,onHide:this.onHideChooserModal},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Change Playlist")),r.a.createElement(N.a.Body,null,r.a.createElement(i.a.Group,null,r.a.createElement(i.a.Control,{as:"select",onChange:this.onPlaylistSelected},r.a.createElement("option",{value:""},"Select a playlist..."),o))),r.a.createElement(N.a.Footer,null,r.a.createElement(u.a,{variant:"secondary",onClick:this.onHideChooserModal},"Close"))),r.a.createElement(N.a,{show:n,onHide:this.onHideUploadModal},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Upload Playlist")),r.a.createElement(N.a.Body,null,r.a.createElement("input",{type:"file",name:"file",onChange:this.onFileUploaded})),r.a.createElement(N.a.Footer,null,r.a.createElement(u.a,{variant:"secondary",onClick:this.onHideUploadModal},"Close"))),r.a.createElement("div",{style:{marginBottom:16}},r.a.createElement("div",{className:"btn-group d-flex",role:"group",style:{marginBottom:16}},r.a.createElement(u.a,{variant:"secondary",onClick:this.onSelectPlaylist,className:"w-100"},"Change Playlist"),r.a.createElement(u.a,{variant:"secondary",onClick:this.onUploadPlaylist,className:"w-100"},"Upload Playlist"))))}}]),t}(r.a.Component),H=a(42),I=a(120),A=Object(H.a)({root:{color:"#52af77",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(I.a),W=function(e){return r.a.createElement(A,Object.assign({},e,{onChange:function(t,a){return e.onChange(a)}}))};function V(e){e.layerInfo;var t=e.onAlphaChange,a=e.onIntensityChange,n=e.onWetDryChange;return r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement(C.a,{md:5},r.a.createElement("b",null,"alpha")),r.a.createElement(C.a,null,r.a.createElement(W,{valueLabelDisplay:"auto","aria-label":"alpha slider",defaultValue:100,min:0,max:1,step:.01,onChange:t}))),r.a.createElement(w.a,null,r.a.createElement(C.a,{md:5},r.a.createElement("b",null,"wet/dry")),r.a.createElement(C.a,null,r.a.createElement(W,{valueLabelDisplay:"auto","aria-label":"wet/dry slider",defaultValue:127,min:0,max:127,step:1,onChange:n}))),r.a.createElement(w.a,null,r.a.createElement(C.a,{md:5},r.a.createElement("b",null,"intensity")),r.a.createElement(C.a,null,r.a.createElement(W,{valueLabelDisplay:"auto","aria-label":"intensity slider",defaultValue:127,min:0,max:127,step:1,onChange:a}))))}function q(){var e="".concat(_.DDF_PREVIEW_URL,"?is_embedded=true");return r.a.createElement("div",{style:{width:"100%",marginBottom:16}},r.a.createElement("iframe",{style:{border:0},src:e,title:"floor preview"}))}function G(e){var t=e.processors,a=e.value,n=e.onChange,o=t.map(function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)});return r.a.createElement(i.a.Group,null,r.a.createElement(i.a.Control,{as:"select",value:a,onChange:n},r.a.createElement("option",{value:""}),o))}var z=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={taps:[],tapTimeout:null},a.onHaveFourTaps=function(e){var t=[e[1]-e[0],e[2]-e[1],e[3]-e[2]],n=60*(1/((t[0]+t[1]+t[2])/3/1e3));(n=Math.round(10*n)/10)<60||n>200?console.error("Ignoring crazy BPM: ",n):a.props.onBpmChange(n)},a.onTap=function(){var e=a.state,t=e.taps,n=e.tapTimeout,r=(new Date).getTime();if(t.push(r),4===t.length)clearTimeout(n),a.setState({taps:[],tapTimeout:null}),a.onHaveFourTaps(t);else{clearTimeout(n);var o=setTimeout(a.onTapTimeout,5e3);a.setState({taps:t,tapTimeout:o})}},a.onTapTimeout=function(){a.setState({taps:[],tapTimeout:null})},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state.taps,t="Tap";return e.length>0&&(t="Tap (".concat(4-e.length," more ...)")),r.a.createElement(u.a,{variant:"secondary",onClick:this.onTap,className:"w-100"},t)}}]),t}(r.a.Component),J=a(117),$=a(65);function K(e){var t=e.bpm,a=e.onBpmChange,n=e.onNudgeTempo;return r.a.createElement("div",{style:{marginBottom:16}},r.a.createElement(J.a,{className:"mb-3"},r.a.createElement($.a,{type:"number",min:"40.0",max:"220.0",step:"0.1",value:t,onChange:function(e){return a(e.target.value)}}),r.a.createElement(J.a.Append,null,r.a.createElement(J.a.Text,null,"BPM"))),r.a.createElement("div",{style:{marginBottom:16}},r.a.createElement(z,{onBpmChange:a})),r.a.createElement("div",{className:"btn-group d-flex",role:"group",style:{marginBottom:16}},r.a.createElement(u.a,{variant:"secondary",onClick:function(){n(-.1,null)},className:"w-100"},"Slower"),r.a.createElement(u.a,{variant:"secondary",disabled:!0,className:"w-100"},"BPM"),r.a.createElement(u.a,{variant:"secondary",onClick:function(){n(.1,null)},className:"w-100"},"Faster")),r.a.createElement("div",{className:"btn-group d-flex",role:"group",style:{marginBottom:16}},r.a.createElement(u.a,{variant:"secondary",onClick:function(){n(0,-100)},className:"w-100"},"Earlier"),r.a.createElement(u.a,{variant:"secondary",disabled:!0,className:"w-100"},"Downbeat"),r.a.createElement(u.a,{variant:"secondary",onClick:function(){n(0,100)},className:"w-100"},"Later")))}var Q=new B,X=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).refreshStatus=Object(y.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.getStatus();case 2:t=e.sent,a.setState({status:t});case 4:case"end":return e.stop()}},e)})),a.onPlaylistPrevious=Object(y.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.playlistPrevious();case 2:return e.next=4,a.refreshStatus();case 4:case"end":return e.stop()}},e)})),a.onPlaylistStay=Object(y.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.playlistStay();case 2:return e.next=4,a.refreshStatus();case 4:case"end":return e.stop()}},e)})),a.onPlaylistNext=Object(y.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.playlistAdvance();case 2:return e.next=4,a.refreshStatus();case 4:case"end":return e.stop()}},e)})),a.onPlaylistStop=Object(y.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.playlistStop();case 2:return e.next=4,a.refreshStatus();case 4:case"end":return e.stop()}},e)})),a.onLayerParamChange=function(){var e=Object(y.a)(f.a.mark(function e(t,n,r){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.setLayer(t,Object(m.a)({},n,r));case 2:return e.next=4,a.refreshStatus();case 4:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.onLayerProcesorChange=function(){var e=Object(y.a)(f.a.mark(function e(t,n){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.setLayer(t,{processor_name:n});case 2:return e.next=4,a.refreshStatus();case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.onBpmChange=function(){var e=Object(y.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.setTempo(t);case 2:return e.next=4,a.refreshStatus();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onNudgeTempo=function(){var e=Object(y.a)(f.a.mark(function e(t,n){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.nudgeTempo(t,n);case 2:return e.next=4,a.refreshStatus();case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.onBrightnessChange=function(){var e=Object(y.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.setBrightness(t);case 2:return e.next=4,a.refreshStatus();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onPlaylistChange=function(){var e=Object(y.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.refreshStatus();case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={status:{}},a.statusPoller=null,a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;Q.getStatus().then(function(t){e.setState({status:t})}),this.statusPoller=setInterval(Object(y.a)(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.refreshStatus();case 2:case"end":return t.stop()}},t)})),2e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.statusPoller)}},{key:"render",value:function(){var e=this,t=this.state.status,a=t.processors?Object.values(t.processors):[];return t.layers?r.a.createElement(w.a,null,r.a.createElement(C.a,{md:4},r.a.createElement("div",{className:"ddf-panel"},r.a.createElement("h5",null,"Playlist"),r.a.createElement(j,{playlist:t.playlist}),r.a.createElement(S,{isEnabled:t.layers.playlist.enabled,onSetEnabled:function(t){return e.onLayerParamChange("playlist","enabled",!!t)},onPrevious:this.onPlaylistPrevious,onStay:this.onPlaylistStay,onNext:this.onPlaylistNext}),r.a.createElement(V,{layerInfo:t.layers?t.layers.playlist:{},onAlphaChange:function(t){return e.onLayerParamChange("playlist","alpha",t)},onWetDryChange:function(t){return e.onLayerParamChange("playlist","ranged_values",{0:t})},onIntensityChange:function(t){return e.onLayerParamChange("playlist","ranged_values",{1:t})}}),r.a.createElement(R,{onChange:this.onPlaylistChange}))),r.a.createElement(C.a,{md:4},r.a.createElement("h5",null,"Main"),r.a.createElement(q,null),r.a.createElement(K,{bpm:t.tempo.bpm,onBpmChange:this.onBpmChange,onNudgeTempo:this.onNudgeTempo}),r.a.createElement(w.a,null,r.a.createElement(C.a,{md:5},r.a.createElement("b",null,"brightness")),r.a.createElement(C.a,null,r.a.createElement(W,{valueLabelDisplay:"auto","aria-label":"brightness slider",value:t.brightness,min:0,max:1,step:.01,onChange:this.onBrightnessChange})))),r.a.createElement(C.a,{md:4},r.a.createElement("div",{className:"ddf-panel"},r.a.createElement("h5",null,"Layers"),r.a.createElement(x.a,{bg:"light",style:{width:"18rem"}},r.a.createElement(x.a.Header,null,"Overlay 1"),r.a.createElement(x.a.Body,null,r.a.createElement(G,{value:t.layers&&t.layers.overlay1.processor_name||"",processors:a,onChange:function(t){return e.onLayerProcesorChange("overlay1",t.target.value)}}),r.a.createElement(V,{layerInfo:t.layers?t.layers.overlay1:{},onAlphaChange:function(t){return e.onLayerParamChange("overlay1","alpha",t)},onWetDryChange:function(t){return e.onLayerParamChange("overlay1","ranged_values",{0:t})},onIntensityChange:function(t){return e.onLayerParamChange("overlay1","ranged_values",{1:t})}}))),r.a.createElement("br",null),r.a.createElement(x.a,{bg:"light",style:{width:"18rem"}},r.a.createElement(x.a.Header,null,"Overlay 2"),r.a.createElement(x.a.Body,null,r.a.createElement(G,{value:t.layers&&t.layers.overlay2.processor_name||"",processors:a,onChange:function(t){return e.onLayerProcesorChange("overlay2",t.target.value)}}),r.a.createElement(V,{layerInfo:t.layers?t.layers.overlay2:{},onAlphaChange:function(t){return e.onLayerParamChange("overlay2","alpha",t)},onWetDryChange:function(t){return e.onLayerParamChange("overlay2","ranged_values",{0:t})},onIntensityChange:function(t){return e.onLayerParamChange("overlay2","ranged_values",{1:t})}})))))):null}}]),t}(r.a.Component);a(98),a(99),a(100),a(101),a(102);var Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{bg:"dark",variant:"dark"},r.a.createElement(s.a.Brand,{href:"#home"},"DDF-GW1"),r.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(c.a,{className:"mr-auto"}),r.a.createElement(i.a,{inline:!0},r.a.createElement(u.a,{variant:"outline-success"},"Reload")))),r.a.createElement(p.a,null,r.a.createElement(X,null)))};window.DDF_CONFIG=_;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,t,a){e.exports=a(104)},76:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.68942b58.chunk.js.map