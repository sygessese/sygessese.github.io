(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"J/ba":function(t,e){var n=function(){"use strict";function t(t){this.array=this.initializeArray(t)}var e=t.prototype;return e.initializeArray=function(t){for(var e=[],n=0;n<t;n++)e.push(n);return e},e.root=function(t){for(;this.array[t]!=t;)this.array[t]=this.array[this.array[t]],t=this.array[t];return t},e.connected=function(t,e){return this.root(t)==this.root(e)},e.union=function(t,e){var n=this.root(t),i=this.root(e);n!==i&&(i<=n?this.array[n]=i:this.array[i]=n)},t}();t.exports=n},JEFm:function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),a=n.n(i),r=n("vOnD"),o=n("Bl7J"),c=n("vrFN"),h=n("J/ba"),p=n.n(h);var s=new p.a(400),u=r.a.div.withConfig({displayName:"quicksearch__Box",componentId:"d5rf94-0"})(["height:",";width:",";box-sizing:border-box;border:1px solid black;background-color:",";@media (max-width:820px){height:",";width:",";}"],(function(t){return t.graphSize+"px"}),(function(t){return t.graphSize+"px"}),(function(t){return t.color}),(function(t){return t.graphSize/2+"px"}),(function(t){return t.graphSize/2+"px"})),l=function(t){for(var e=[],n=t*t,i=0;i<n;i++){var r=Math.floor(Math.random()*Math.floor(10));e.push(a.a.createElement(u,{color:r<6?"white":"black",graphSize:t}))}return e},d=l(20),f=function(t){var e,n;function i(e){var n;return(n=t.call(this,e)||this).percolate=function(){d.forEach((function(t,e){"white"===t.props.color&&(e%20!=0&&"black"!==d[e-1].props.color&&s.union(e,e-1),e>19&&"black"!==d[e-20].props.color&&s.union(e,e-20))})),d.forEach((function(t,e){s.root(e)<20&&(t.props.color="blue")})),setTimeout(function(){this.setState({count:this.state.count+1})}.bind(this),400)},n.state={count:0,graphSize:20},n}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=i.prototype;return o.reset=function(){console.log(this.state.graphSize),d=l(this.state.graphSize),s=new p.a(this.state.graphSize*this.state.graphSize),this.setState({count:this.state.count+1})},o.handleChange=function(t){this.setState({graphSize:t.target.value})},o.render=function(){var t=r.a.div.withConfig({displayName:"quicksearch__Section",componentId:"d5rf94-1"})(["display:flex;flex-wrap:wrap;height:",";width:",";margin:auto;padding-top:10px;@media (max-width:820px){height:",";width:",";}"],(function(t){return t.graphSize*t.graphSize+"px"}),(function(t){return t.graphSize*t.graphSize+"px"}),(function(t){return t.graphSize*t.graphSize/2+"px"}),(function(t){return t.graphSize*t.graphSize/2+"px"})),e=r.a.div.withConfig({displayName:"quicksearch__ButtonRow",componentId:"d5rf94-2"})(["display:flex;width:100%;justify-content:space-between;"]);return a.a.createElement(t,{size:this.state.graphSize},d,a.a.createElement(e,null,a.a.createElement("button",{onClick:this.percolate.bind(this)},"percolate"),a.a.createElement("label",{for:"rowsize"},"Graph size:"),a.a.createElement("select",{id:"size",onChange:this.handleChange},a.a.createElement("option",{value:10},"10"),a.a.createElement("option",{value:20},"20"),a.a.createElement("option",{value:30},"30"),a.a.createElement("option",{value:40},"40")),a.a.createElement("button",{onClick:this.reset.bind(this)},"reset")))},i}(a.a.Component),m=r.a.div.withConfig({displayName:"quicksearch__Container",componentId:"sc-1etxhsc-0"})(["display:flex;flex-direction:column;font-family:times new roman;padding-left:25em;padding-right:5em;font-size:0.95em;margin-bottom:3em;@media (max-width:820px){padding-left:0px;padding-top:10em;margin-bottom:2em;padding-right:0px;}"]),g=r.a.div.withConfig({displayName:"quicksearch__Header",componentId:"sc-1etxhsc-1"})(["display:flex;justify-content:center;font-size:1.9em;margin-top:3em;"]);e.default=function(){return a.a.createElement(o.a,null,a.a.createElement(c.a,{title:"Quick Union"}),a.a.createElement(m,null,a.a.createElement(g,null,"Quick Union"),a.a.createElement(f,null)))}}}]);
//# sourceMappingURL=component---src-pages-quicksearch-js-2091ef8ef3c0eae06823.js.map