(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"16l3":function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),a=r("Bl7J"),i=r("vrFN"),c=r("vOnD"),s=r("R/WZ"),l=r("30+C"),u=r("o4QW"),h=r("oa/T"),p=r("Z3vd"),d=r("ofer"),f=function(t){var e=t.title,r=t.gif,a=t.info,i=t.technologies,f=t.github,m=t.live,g=t.index,y=t.type,v=c.a.div.withConfig({displayName:"project__Container",componentId:"qf85ja-0"})(["display:flex;flex-direction:row;margin-bottom:3em;width:100%;justify-content:center;'&:hover':{boxShadow:'0 6px 20px 0 rgba(0,0,0,0.38)',bottom:-6,},@media (max-width:600px){width:100%;flex-direction:column-reverse;}"]),b=c.a.div.withConfig({displayName:"project__GifContainer",componentId:"qf85ja-1"})(["max-width:100%;max-height:100%;margin-right:1.5em;margin-left:1em;text-align:center;display:",";@media (max-width:600px){text-align:center;max-width:100%;margin-top:1em;margin-right:0;margin-left:0;}"],(function(t){return t.show?"display":"none"})),w=Object(s.a)({card:{minWidth:275,width:"100%",maxHeight:800},title:{marginBottom:12,marginRight:".5em",fontWeight:100,fontSize:"2em","@media (max-width: 600px)":{display:"block",marginBottom:0}},type:{fontSize:"1.5em",fontWeight:100,"@media (max-width: 600px)":{display:"block",marginBottom:".5em"}},tech:{fontSize:15,textTransform:"uppercase"},cardcontent:{backgroundColor:"whitesmoke"},cardaction:{justifyContent:"space-around",backgroundColor:"lavenderblush","&:hover":{boxShadow:"0 6px 20px 0 rgba(0,0,0,0.38)",bottom:-6}}})(),x=i.join(" • "),E=Object(n.useState)(!1),j=E[0],C=E[1],O=function(){C(!j)},k=j?o.a.createElement(p.a,{size:"small",onClick:O}," Collapse GIF ↑ "):o.a.createElement(p.a,{size:"small",onClick:O}," Expand GIF ↓ "),S=f?o.a.createElement(p.a,{size:"small",href:f},"Go to Github"):"",N=m?o.a.createElement(p.a,{size:"small",href:m},"View Live"):"",L=r?o.a.createElement(b,{show:j},o.a.createElement("img",{src:r[e],style:{maxHeight:"500px",maxWidth:"100%",objectFit:"contain"}})):"";return o.a.createElement(v,{index:g},o.a.createElement(l.a,{className:w.card,raised:!0},o.a.createElement(h.a,{className:w.cardcontent},o.a.createElement(d.a,{variant:"h4",component:"h2",color:"textPrimary",display:"inline",className:w.title},e),o.a.createElement(d.a,{variant:"h4",component:"h2",display:"inline",color:"textPrimary",className:w.type},"// ",y),o.a.createElement(d.a,{variant:"body1",component:"p"},a,o.a.createElement("br",null),o.a.createElement("br",null),L),o.a.createElement(d.a,{className:w.tech,color:"textSecondary"},x)),o.a.createElement(u.a,{className:w.cardaction},S," ",N," ",r?k:"")))};f.defaultProps={siteTitle:""};var m=f,g=(r("oTW5"),r("dfgG")),y=r.n(g),v=r("8mSD"),b=r.n(v),w=(r("VRzm"),r("Btvt"),r("kD0k")),x=r.n(w),E=(r("ls82"),r("17x9")),j=r.n(E);function C(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,o)}var O=function(t){var e,r;function n(e){var r;return(r=t.call(this,e)||this).state={printedText:"",visibleCursor:!0,initialCursorCount:0},r.updateCursor=r.updateCursor.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r)),r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=n.prototype;return a.componentDidMount=function(){startShow()},a.updateCursor=function(){this.setState({visibleCursor:!this.state.visibleCursor,initialCursorCount:this.state.initialCursorCount+1},this.startShow)},a.startShow=function(){var t,e=(t=x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.state.initialCursorCount<6)){t.next=4;break}return t.next=3,fiveHundredMillisecondPromise();case 3:this.updateCursor();case 4:case"end":return t.stop()}}),t,this)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){C(a,n,o,i,c,"next",t)}function c(t){C(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),a.fiveHundredMillisecondPromise=function(){return new Promise((function(t){return setTimeout((function(){t()}),500)}))},a.render=function(){return o.a.createElement(k,null,o.a.createElement("span",null,this.state.printedText),o.a.createElement(S,{visibleCursor:this.state.visibleCursor},"|"))},n}(o.a.Component),k=c.a.div.withConfig({displayName:"typewriter__Container",componentId:"sc-14r6wo9-0"})(["font-size:2em;align-items:center;width:100%;"]),S=c.a.span.withConfig({displayName:"typewriter__Cursor",componentId:"sc-14r6wo9-1"})(["color:'lavendarblush';opacity = ",";"],(function(t){return t.visibleCursor?100:0}));O.PropTypes={text:j.a.string},O.defaultProps={text:"Lorem ipsum"};var N=O;e.default=function(){var t=c.a.div.withConfig({displayName:"projects__Container",componentId:"ytantc-0"})(["margin-top:5em;padding-left:25em;padding-right:5em;display:flex;flex-direction:column;@media (max-width:820px){padding-left:1em;padding-right:1em;padding-top:14em;margin-top:0em;"]),e=[{title:"Distilled",gif:{Distilled:b.a},info:"Clothing retailer's product detail page",technologies:["React","Express","MongoDB","Styled Components","Babel","Jest","Enzyme","Webpack","ESLint"],github:"https://github.com/Distilled-org/Selam_service",live:!1,type:"Web Application"},{title:"Hungry",gif:null,info:"No fuss selection of highly rated dining options near you",technologies:["ReactNative","GraphQL","Geolocation","Javascript","Express","PostgreSQL"],github:"https://github.com/sygessese/hungry",live:!1,type:"IOS Mobile Application"},{title:"Gessese",gif:null,info:"Personal Portfolio",technologies:["GatsbyJS","MaterialUI","Styled Components","Route 53","Github Pages"],github:"https://github.com/sygessese/sygessese.github.io/",live:"https://gessese.com",type:"Static Website"},{title:"FlickStash",gif:{FlickStash:y.a},info:"Save, and organize your favorite films - movie database API",technologies:["React","Javascript","Express","PostgreSQL","Heroku","Styled Components"],github:"https://github.com/sygessese/flickstash",live:"https://flickstash.herokuapp.com/",type:"Web Application"}].map((function(t,e){return o.a.createElement(m,{title:t.title,gif:t.gif,info:t.info,technologies:t.technologies,github:t.github,live:t.live,index:e,type:t.type})}));return o.a.createElement(a.a,null,o.a.createElement(i.a,{title:"Gessese",lang:"en",description:"Portfolio"}),o.a.createElement(t,null,o.a.createElement(N,{text:"Projects"}),e))}},"30+C":function(t,e,r){"use strict";var n=r("k1TG"),o=r("aXB2"),a=r("q1tI"),i=r.n(a),c=(r("17x9"),r("iuhU")),s=(r("8+KV"),r("H2TA")),l=i.a.forwardRef((function(t,e){var r=t.classes,a=t.className,s=t.component,l=void 0===s?"div":s,u=t.square,h=void 0!==u&&u,p=t.elevation,d=void 0===p?1:p,f=t.variant,m=void 0===f?"elevation":f,g=Object(o.a)(t,["classes","className","component","square","elevation","variant"]);return i.a.createElement(l,Object(n.a)({className:Object(c.a)(r.root,a,"outlined"===m?r.outlined:r["elevation".concat(d)],!h&&r.rounded),ref:e},g))})),u=Object(s.a)((function(t){var e={};return t.shadows.forEach((function(t,r){e["elevation".concat(r)]={boxShadow:t}})),Object(n.a)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},e)}),{name:"MuiPaper"})(l),h=i.a.forwardRef((function(t,e){var r=t.classes,a=t.className,s=t.raised,l=void 0!==s&&s,h=Object(o.a)(t,["classes","className","raised"]);return i.a.createElement(u,Object(n.a)({className:Object(c.a)(r.root,a),elevation:l?8:1,ref:e},h))}));e.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(h)},"8mSD":function(t,e,r){t.exports=r.p+"static/Distilled-8ddfeaf01f81c6e6a16f90148467a876.gif"},"R/WZ":function(t,e,r){"use strict";var n=r("k1TG"),o=r("RD7I"),a=r("cNwE");e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(t,Object(n.a)({defaultTheme:a.a},e))}},dfgG:function(t,e,r){t.exports=r.p+"static/IMG_1529-d8d48d40f2ee0c55dadb8b2c514d3dea.gif"},kD0k:function(t,e,r){t.exports=r("ls82")},ls82:function(t,e,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n=u;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=C(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var u="suspendedStart",h="suspendedYield",p="executing",d="completed",f={};function m(){}function g(){}function y(){}var v={};v[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(N([])));w&&w!==r&&n.call(w,a)&&(v=w);var x=y.prototype=m.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var c=l(t[r],t,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,f):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:L}}function L(){return{value:e,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,y[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[i]=function(){return this},t.AsyncIterator=j,t.async=function(e,r,n,o){var a=new j(s(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},oTW5:function(t,e,r){t.exports=r.p+"static/Coding-b419d3b96b92d533f8d5e01b3bfd6193.jpg"},"oa/T":function(t,e,r){"use strict";var n=r("k1TG"),o=r("aXB2"),a=r("q1tI"),i=r.n(a),c=(r("17x9"),r("iuhU")),s=r("H2TA"),l=i.a.forwardRef((function(t,e){var r=t.classes,a=t.className,s=t.component,l=void 0===s?"div":s,u=Object(o.a)(t,["classes","className","component"]);return i.a.createElement(l,Object(n.a)({className:Object(c.a)(r.root,a),ref:e},u))}));e.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},ofer:function(t,e,r){"use strict";var n=r("k1TG"),o=r("aXB2"),a=r("q1tI"),i=r.n(a),c=(r("17x9"),r("iuhU")),s=r("H2TA"),l=r("NqtD"),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},h=i.a.forwardRef((function(t,e){var r=t.align,a=void 0===r?"inherit":r,s=t.classes,h=t.className,p=t.color,d=void 0===p?"initial":p,f=t.component,m=t.display,g=void 0===m?"initial":m,y=t.gutterBottom,v=void 0!==y&&y,b=t.noWrap,w=void 0!==b&&b,x=t.paragraph,E=void 0!==x&&x,j=t.variant,C=void 0===j?"body1":j,O=t.variantMapping,k=void 0===O?u:O,S=Object(o.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),N=f||(E?"p":k[C]||u[C])||"span";return i.a.createElement(N,Object(n.a)({className:Object(c.a)(s.root,h,"inherit"!==C&&s[C],"initial"!==d&&s["color".concat(Object(l.a)(d))],w&&s.noWrap,v&&s.gutterBottom,E&&s.paragraph,"inherit"!==a&&s["align".concat(Object(l.a)(a))],"initial"!==g&&s["display".concat(Object(l.a)(g))]),ref:e},S))}));e.a=Object(s.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(h)}}]);
//# sourceMappingURL=component---src-pages-projects-js-377b5eb698d98e793042.js.map