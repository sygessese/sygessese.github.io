(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"J/ba":function(t,r){var e=function(){"use strict";function t(t){this.array=this.initializeArray(t)}var r=t.prototype;return r.initializeArray=function(t){for(var r=[],e=0;e<t;e++)r.push(e);return r},r.root=function(t){for(;this.array[t]!=t;)this.array[t]=this.array[this.array[t]],t=this.array[t];return t},r.connected=function(t,r){return this.root(t)==this.root(r)},r.union=function(t,r){var e=this.root(t),o=this.root(r);e!==o&&(o<=e?this.array[e]=o:this.array[o]=e)},t}();t.exports=e},JEFm:function(t,r,e){"use strict";e.r(r);var o=e("q1tI"),n=e.n(o),a=e("vOnD"),i=e("Bl7J"),c=e("vrFN"),p=e("J/ba");var l=new(e.n(p).a)(100),u=a.a.div.withConfig({displayName:"quicksearch__Box",componentId:"d5rf94-0"})(["height:50px;width:50px;box-sizing:border-box;border:1px solid black;background-color:",";"],(function(t){return t.color})),s=function(t){for(var r=[],e=0;e<t;e++){var o=Math.floor(Math.random()*Math.floor(10));r.push(n.a.createElement(u,{color:o<6?"white":"black"}))}return r}(100),h=function(t){var r,e;function o(r){var e;return(e=t.call(this,r)||this).state={count:0},e}return e=t,(r=o).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e,o.prototype.render=function(){var t=a.a.div.withConfig({displayName:"quicksearch__Section",componentId:"d5rf94-1"})(["display:flex;flex-wrap:wrap;height:500px;width:500px;margin:auto;padding-top:10px;@media (max-width:820px){margin-left:1em;margin-right:1em;}"]);return n.a.createElement(t,null,s,n.a.createElement("button",{onClick:function(){s.forEach((function(t,r){"white"===t.props.color&&(r%10!=0&&"black"!==s[r-1].props.color&&l.union(r,r-1),r>9&&"black"!==s[r-10].props.color&&l.union(r,r-10))})),s.forEach((function(t,r){l.root(r)<10&&(t.props.color="blue")})),this.forceUpdate()}},"percolate"))},o}(n.a.Component),d=a.a.div.withConfig({displayName:"quicksearch__Container",componentId:"sc-1etxhsc-0"})(["display:flex;flex-direction:column;font-family:times new roman;padding-left:25em;padding-right:5em;font-size:0.95em;margin-bottom:3em;@media (max-width:820px){padding-left:0px;padding-top:10em;margin-bottom:2em;padding-right:0px;}"]),f=a.a.div.withConfig({displayName:"quicksearch__Header",componentId:"sc-1etxhsc-1"})(["display:flex;justify-content:center;font-size:1.9em;margin-top:3em;"]);r.default=function(){return n.a.createElement(i.a,null,n.a.createElement(c.a,{title:"Quick Search"}),n.a.createElement(d,null,n.a.createElement(f,null,"Quick Search"),n.a.createElement(h,null)))}}}]);
//# sourceMappingURL=component---src-pages-quicksearch-js-5039474f40a87059170a.js.map