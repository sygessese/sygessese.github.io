(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"3XHS":function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=(a("Wbzz"),a("Bl7J")),s=a("yHsY"),o=a("9eSz"),d=a.n(o),l=function(){var e=s.data;return r.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},c=a("vrFN"),u=a("vOnD");t.default=function(){var e=u.a.div.withConfig({displayName:"about__Container",componentId:"sc-1bm4joi-0"})(["display:flex;flex-direction:row;height:70vh;align-content:space-around;@media (max-width:820px){flex-direction:column-reverse;height:100vh;width:90vw;}width:90vw;"]),t=u.a.div.withConfig({displayName:"about__ImageContainer",componentId:"sc-1bm4joi-1"})(["width:39%;@media (max-width:820px){width:100%;margin-bottom:1vh;}"]),a=u.a.div.withConfig({displayName:"about__TextContainer",componentId:"sc-1bm4joi-2"})(["width:39%;@media (max-width:820px){width:100%;margin-bottom:1vh;}display:flex;flex-direction:column;font-family:Georgia;font-size:2em;@media (max-width:820px){font-size:1.5em;}"]),i=u.a.h1.withConfig({displayName:"about__Name",componentId:"sc-1bm4joi-3"})(["margin-bottom:5px;font-size:3em;@media (max-width:820px){font-size:2em;}"]);return r.a.createElement(n.a,null,r.a.createElement(c.a,{title:"Gessese",lang:"en",description:"Portfolio"}),r.a.createElement(e,null,r.a.createElement(t,null,r.a.createElement(l,null)),r.a.createElement(a,null,r.a.createElement(i,null,"Hello!"),"My name is Selam, and I am a software engineer based in Seattle, Washington. I am passionate about improving the human experience, and about showing people the beauty in life. My work before this involved civic engagement with the American Civil Liberties Union, and similarly at the City of Seattle. Now, I work across the stack using React, Javascript, Node, Mongo, and more. I'm a sucker for a new perspective on life, and a day at the beach in a city I've never seen. Reach out and say Hi!")))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("5NKs");t.__esModule=!0,t.default=void 0;var r,n=i(a("v06X")),s=i(a("XEEL")),o=i(a("uDP2")),d=i(a("j8BX")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),m=function(e){var t=u(e),a=A(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function C(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=l.default.createElement(N,(0,d.default)({src:t},r));return a.length>1?l.default.createElement("picture",null,i(a),n):n},N=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:r},A,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&E&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,C=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,d.default)({opacity:x?1:0,transition:R?"opacity "+b+"ms":"none"},o),O="boolean"==typeof h?"lightgray":h,Q={transitionDelay:b+"ms"},P=(0,d.default)({opacity:this.state.imgLoaded?0:1},R&&Q,{},o,{},f),V={title:t,alt:this.state.isVisible?"":a,style:P,className:A,itemProp:y};if(p){var z=p,k=g(p);return l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},l.default.createElement(E,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),O&&l.default.createElement(E,{title:t,style:(0,d.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&Q)}),k.base64&&l.default.createElement(j,{src:k.base64,spreadProps:V,imageVariants:z,generateSources:I}),k.tracedSVG&&l.default.createElement(j,{src:k.tracedSVG,spreadProps:V,imageVariants:z,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,v(z),l.default.createElement(N,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:C})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,d.default)({alt:a,title:t,loading:w},k,{imageVariants:z}))}}))}if(m){var Y=m,G=g(m),M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},O&&l.default.createElement(E,{title:t,style:(0,d.default)({backgroundColor:O,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},R&&Q)}),G.base64&&l.default.createElement(j,{src:G.base64,spreadProps:V,imageVariants:Y,generateSources:I}),G.tracedSVG&&l.default.createElement(j,{src:G.tracedSVG,spreadProps:V,imageVariants:Y,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,v(Y),l.default.createElement(N,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:C})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,d.default)({alt:a,title:t,loading:w},G,{imageVariants:Y}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:L,sizes:O,fixed:c.default.oneOfType([L,c.default.arrayOf(L)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=R;t.default=Q},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},yHsY:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAdABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAcnVvFEcQyXlcaUHCv/EABwQAAEEAwEAAAAAAAAAAAAAAAEAAgMRBCEiQ//aAAgBAQABBQI6VOaqXvkHkqrmnGgxxEO35aiPH//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBIh/9oACAEDAQE/AUsmiP/EABgRAAIDAAAAAAAAAAAAAAAAAAABEBIh/9oACAECAQE/AW9m7P/EAB0QAAICAQUAAAAAAAAAAAAAAAEQABECEiIxQWH/2gAIAQEABj8C9M3jlYi6gOrti4CFiv/EABsQAQADAQEBAQAAAAAAAAAAAAEAETEhYUFR/9oACAEBAAE/IVQAvAioAPio9TirLYXcWlE1F1exBdyhiknbf5NnyMnyf//aAAwDAQACAAMAAAAQ1P4B/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREEH/2gAIAQMBAT8QrWLsExU//8QAGREBAAIDAAAAAAAAAAAAAAAAAQARECEx/9oACAECAQE/EFKYe7iDU//EABwQAAICAwEBAAAAAAAAAAAAAAERACExQVEQkf/aAAgBAQABPxC+vLtB+qhdcPktAtA0bMAIRVOsmoAeMRsIxpRPCMilSggiAOVGPyBKEVqDwNk6AfBP/9k=","aspectRatio":0.6964472309299895,"src":"/static/44efe67713d6d5d0beb6912f5137728d/ca45b/glossyselfie.jpg","srcSet":"/static/44efe67713d6d5d0beb6912f5137728d/01656/glossyselfie.jpg 125w,\\n/static/44efe67713d6d5d0beb6912f5137728d/8be41/glossyselfie.jpg 250w,\\n/static/44efe67713d6d5d0beb6912f5137728d/ca45b/glossyselfie.jpg 500w,\\n/static/44efe67713d6d5d0beb6912f5137728d/39525/glossyselfie.jpg 750w,\\n/static/44efe67713d6d5d0beb6912f5137728d/a0205/glossyselfie.jpg 1000w,\\n/static/44efe67713d6d5d0beb6912f5137728d/e6c41/glossyselfie.jpg 1333w","sizes":"(max-width: 500px) 100vw, 500px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-about-js-f777c6ed05b0cd80de90.js.map