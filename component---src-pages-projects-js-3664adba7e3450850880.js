(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"16l3":function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),i=a.n(o),n=a("Bl7J"),r=a("vrFN"),l=a("vOnD"),c=a("R/WZ"),s=a("30+C"),p=a("o4QW"),d=a("oa/T"),m=a("Z3vd"),h=a("ofer"),g=function(e){var t=e.title,a=e.gif,o=e.info,n=e.technologies,r=e.github,g=e.live,u=e.index,f=e.type,y=l.a.div.withConfig({displayName:"project__Container",componentId:"qf85ja-0"})(["display:flex;flex-direction:row;margin-bottom:8em;width:100%;justify-content:center;@media (max-width:600px){width:100%;flex-direction:column-reverse;}"]),b=l.a.div.withConfig({displayName:"project__GifContainer",componentId:"qf85ja-1"})(["width:auto;height:auto;margin-right:1.5em;margin-left:1em;text-align:right;display:",";@media (max-width:600px){text-align:center;width:100%;margin-top:1em;margin-right:0;margin-left:0;}"],(function(e){return e.show?"display":"none"})),v=l.a.div.withConfig({displayName:"project__InfoContainer",componentId:"qf85ja-2"})(["@media (max-width:600px){width:100%;}"]),x=Object(c.a)({card:{minWidth:275,maxWidth:500},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:16,marginBottom:12},pos:{marginBottom:12,fontSize:15},cardcontent:{backgroundColor:"whitesmoke",minHeight:350},cardaction:{justifyContent:"space-around",backgroundColor:"yellow"}})(),w=n.join(" • "),j=!1,E=function(){j=!j},C=j?i.a.createElement(m.a,{size:"small",onClick:E}," Collapse "):i.a.createElement(m.a,{size:"small",onClick:E}," Expand "),N=r?i.a.createElement(m.a,{size:"small",href:r},"Go to Github"):"",O=g?i.a.createElement(m.a,{size:"small",href:g},"View Live"):"";return i.a.createElement(y,{index:u},i.a.createElement(v,null,i.a.createElement(s.a,{className:x.card,raised:!0},i.a.createElement(d.a,{className:x.cardcontent},i.a.createElement(h.a,{className:x.title,color:"textSecondary",gutterBottom:!0},"Type: ",f),i.a.createElement(h.a,{variant:"h4",component:"h2",color:"textPrimary"},t),i.a.createElement(h.a,{className:x.pos,color:"textSecondary"},w),i.a.createElement(h.a,{variant:"body1",component:"p"},o,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),C,i.a.createElement(b,{show:j},i.a.createElement("img",{src:a[t],style:{height:"100%",width:"auto",objectFit:"contain"}})))),i.a.createElement(p.a,{className:x.cardaction},N," ",O))))};g.defaultProps={siteTitle:""};var u=g,f=a("oTW5"),y=a.n(f),b=a("dfgG"),v=a.n(b),x=a("8mSD"),w=a.n(x);t.default=function(){var e=l.a.div.withConfig({displayName:"projects__Container",componentId:"ytantc-0"})(["margin-top:5em;display:flex;flex-direction:column;"]),t=(l.a.div.withConfig({displayName:"projects__TextContainer",componentId:"ytantc-1"})(["height:3em;display:flex;flex-direction:row;font-size:1em;"]),[{title:"Distilled",gif:{Distilled:w.a},info:"Clothing retailer's product detail page",technologies:["React","Express","MongoDB","Styled Components","Babel","Jest","Enzyme","Webpack","ESLint"],github:"https://github.com/Distilled-org/Selam_service",live:!1,type:"Web Application"},{title:"FlickStash",gif:{FlickStash:v.a},info:"Save, and organize your favorite films - movie database API",technologies:["React","Javascript","Express","PostgreSQL","Heroku","Styled Components"],github:"https://github.com/sygessese/flickstash",live:"https://flickstash.herokuapp.com/",type:"Web Application"},{title:"Hungry",gif:{Hungry:y.a},info:"No fuss selection of highly rated dining options near you",technologies:["ReactNative","GraphQL","Geolocation","Javascript","Express","PostgreSQL"],github:"https://github.com/sygessese/hungry",live:!1,type:"IOS Mobile Application"},{title:"Gessese",gif:{Gessese:y.a},info:"Personal Portfolio",technologies:["GatsbyJS","MaterialUI","Styled Components","Route 53","Github Pages"],github:"https://github.com/sygessese/sygessese.github.io/",live:"https://gessese.com",type:"Static Website"}].map((function(e,t){return i.a.createElement(u,{title:e.title,gif:e.gif,info:e.info,technologies:e.technologies,github:e.github,live:e.live,index:t,type:e.type})})));return i.a.createElement(n.a,null,i.a.createElement(r.a,{title:"Gessese",lang:"en",description:"Portfolio"}),i.a.createElement(e,null,t))}},"30+C":function(e,t,a){"use strict";var o=a("k1TG"),i=a("aXB2"),n=a("q1tI"),r=a.n(n),l=(a("17x9"),a("iuhU")),c=(a("8+KV"),a("H2TA")),s=r.a.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,s=void 0===c?"div":c,p=e.square,d=void 0!==p&&p,m=e.elevation,h=void 0===m?1:m,g=e.variant,u=void 0===g?"elevation":g,f=Object(i.a)(e,["classes","className","component","square","elevation","variant"]);return r.a.createElement(s,Object(o.a)({className:Object(l.a)(a.root,n,"outlined"===u?a.outlined:a["elevation".concat(h)],!d&&a.rounded),ref:t},f))})),p=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(o.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s),d=r.a.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.raised,s=void 0!==c&&c,d=Object(i.a)(e,["classes","className","raised"]);return r.a.createElement(p,Object(o.a)({className:Object(l.a)(a.root,n),elevation:s?8:1,ref:t},d))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(d)},"8mSD":function(e,t,a){e.exports=a.p+"static/Distilled-8ddfeaf01f81c6e6a16f90148467a876.gif"},"R/WZ":function(e,t,a){"use strict";var o=a("k1TG"),i=a("RD7I"),n=a("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(e,Object(o.a)({defaultTheme:n.a},t))}},dfgG:function(e,t,a){e.exports=a.p+"static/IMG_1529-d8d48d40f2ee0c55dadb8b2c514d3dea.gif"},oTW5:function(e,t,a){e.exports=a.p+"static/Coding-b419d3b96b92d533f8d5e01b3bfd6193.jpg"},"oa/T":function(e,t,a){"use strict";var o=a("k1TG"),i=a("aXB2"),n=a("q1tI"),r=a.n(n),l=(a("17x9"),a("iuhU")),c=a("H2TA"),s=r.a.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,s=void 0===c?"div":c,p=Object(i.a)(e,["classes","className","component"]);return r.a.createElement(s,Object(o.a)({className:Object(l.a)(a.root,n),ref:t},p))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},ofer:function(e,t,a){"use strict";var o=a("k1TG"),i=a("aXB2"),n=a("q1tI"),r=a.n(n),l=(a("17x9"),a("iuhU")),c=a("H2TA"),s=a("NqtD"),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=r.a.forwardRef((function(e,t){var a=e.align,n=void 0===a?"inherit":a,c=e.classes,d=e.className,m=e.color,h=void 0===m?"initial":m,g=e.component,u=e.display,f=void 0===u?"initial":u,y=e.gutterBottom,b=void 0!==y&&y,v=e.noWrap,x=void 0!==v&&v,w=e.paragraph,j=void 0!==w&&w,E=e.variant,C=void 0===E?"body1":E,N=e.variantMapping,O=void 0===N?p:N,k=Object(i.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=g||(j?"p":O[C]||p[C])||"span";return r.a.createElement(S,Object(o.a)({className:Object(l.a)(c.root,d,"inherit"!==C&&c[C],"initial"!==h&&c["color".concat(Object(s.a)(h))],x&&c.noWrap,b&&c.gutterBottom,j&&c.paragraph,"inherit"!==n&&c["align".concat(Object(s.a)(n))],"initial"!==f&&c["display".concat(Object(s.a)(f))]),ref:t},k))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)}}]);
//# sourceMappingURL=component---src-pages-projects-js-3664adba7e3450850880.js.map