(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"J/ba":function(i,t){var r=function(){"use strict";function i(i){this.array=this.initializeArray(i),this.sizeArray=this.initializeSizeArray(i)}var t=i.prototype;return t.initializeArray=function(i){for(var t=[],r=0;r<i;r++)t.push(r);return t},t.initializeSizeArray=function(i){for(var t=[],r=0;r<i;r++)t.push(1);return t},t.root=function(i){for(;this.array[i]!=i;)this.array[i]=this.array[this.array[i]],i=this.array[i];return i},t.connected=function(i,t){return this.root(i)==this.root(t)},t.union=function(i,t){var r=this.root(i),e=this.root(t);r!==e&&(this.sizeArray[e]>this.sizeArray[r]?(this.array[r]=e,this.sizeArray[e]+=this.sizeArray[r]):(this.array[e]=r,this.sizeArray[r]+=this.sizeArray[e]))},i}();i.exports=r},JEFm:function(i,t,r){"use strict";r.r(t);var e=r("q1tI"),a=r.n(e),n=r("vOnD"),o=r("Bl7J"),s=r("vrFN"),c=r("J/ba"),h=(new(r.n(c).a)(100),n.a.div.withConfig({displayName:"quicksearch__Box",componentId:"d5rf94-0"})(["height:50px;width:50px;box-sizing:border-box;border:1px solid black;background-color:",";"],(function(i){return i.color}))),l=function(i){for(var t=[],r=0;r<i;r++){var e=Math.floor(Math.random()*Math.floor(10));t.push(a.a.createElement(h,{color:e<6?"white":"black"}))}return t}(100),d=function(){var i=n.a.div.withConfig({displayName:"quicksearch__Section",componentId:"d5rf94-1"})(["display:flex;flex-wrap:wrap;height:500px;width:500px;margin:auto;padding-top:10px;@media (max-width:820px){margin-left:1em;margin-right:1em;}"]);return a.a.createElement(i,null,l)},u=n.a.div.withConfig({displayName:"quicksearch__Container",componentId:"sc-1etxhsc-0"})(["display:flex;flex-direction:column;font-family:times new roman;padding-left:25em;padding-right:5em;font-size:0.95em;margin-bottom:3em;@media (max-width:820px){padding-left:0px;padding-top:10em;margin-bottom:2em;padding-right:0px;}"]),m=n.a.div.withConfig({displayName:"quicksearch__Header",componentId:"sc-1etxhsc-1"})(["display:flex;justify-content:center;font-size:1.9em;margin-top:3em;"]);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(s.a,{title:"Quick Search"}),a.a.createElement(u,null,a.a.createElement(m,null,"Quick Search"),a.a.createElement(d,null)))}}}]);
//# sourceMappingURL=component---src-pages-quicksearch-js-99c912cb81fdf280c5e5.js.map