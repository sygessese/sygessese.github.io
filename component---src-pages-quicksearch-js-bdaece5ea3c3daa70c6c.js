(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"J/ba":function(t,r){var n=function(){"use strict";function t(t){this.array=this.initializeArray(t)}var r=t.prototype;return r.initializeArray=function(t){for(var r=[],n=0;n<t;n++)r.push(n);return r},r.root=function(t){for(;this.array[t]!=t;)this.array[t]=this.array[this.array[t]],t=this.array[t];return t},r.connected=function(t,r){return this.root(t)==this.root(r)},r.union=function(t,r){var n=this.root(t),e=this.root(r);n!==e&&(e<=n?this.array[n]=e:this.array[e]=n)},t}();t.exports=n},JEFm:function(t,r,n){"use strict";n.r(r);var e=n("q1tI"),a=n.n(e),i=n("vOnD"),o=n("Bl7J"),c=n("vrFN"),l=n("J/ba"),u=new(n.n(l).a)(100),p=i.a.div.withConfig({displayName:"quicksearch__Box",componentId:"d5rf94-0"})(["height:50px;width:50px;box-sizing:border-box;border:1px solid black;background-color:",";"],(function(t){return t.color})),s=function(t){for(var r=[],n=0;n<t;n++){var e=Math.floor(Math.random()*Math.floor(10));r.push(a.a.createElement(p,{color:e<6?"white":"black"}))}return r}(100),d=function(){var t=Object(e.useState)(0),r=(t[0],t[1]);return s.forEach((function(t,r){"white"===t.props.color&&(r%10!=0&&"black"!==s[r-1].props.color&&u.union(r,r-1),r>9&&"black"!==s[r-10].props.color&&u.union(r,r-10))})),s.forEach((function(t,r){u.root(r)<10&&(t.props.color="blue")})),function(){return r((function(t){return++t}))}},h=function(){var t=i.a.div.withConfig({displayName:"quicksearch__Section",componentId:"d5rf94-1"})(["display:flex;flex-wrap:wrap;height:500px;width:500px;margin:auto;padding-top:10px;@media (max-width:820px){margin-left:1em;margin-right:1em;}"]);return a.a.createElement(t,null,s,a.a.createElement("button",{onClick:d},"percolate"))},f=i.a.div.withConfig({displayName:"quicksearch__Container",componentId:"sc-1etxhsc-0"})(["display:flex;flex-direction:column;font-family:times new roman;padding-left:25em;padding-right:5em;font-size:0.95em;margin-bottom:3em;@media (max-width:820px){padding-left:0px;padding-top:10em;margin-bottom:2em;padding-right:0px;}"]),m=i.a.div.withConfig({displayName:"quicksearch__Header",componentId:"sc-1etxhsc-1"})(["display:flex;justify-content:center;font-size:1.9em;margin-top:3em;"]);r.default=function(){return a.a.createElement(o.a,null,a.a.createElement(c.a,{title:"Quick Search"}),a.a.createElement(f,null,a.a.createElement(m,null,"Quick Search"),a.a.createElement(h,null)))}}}]);
//# sourceMappingURL=component---src-pages-quicksearch-js-bdaece5ea3c3daa70c6c.js.map