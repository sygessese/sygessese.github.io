(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"J/ba":function(t,e){var n=function(){"use strict";function t(t){this.array=this.initializeArray(t)}var e=t.prototype;return e.initializeArray=function(t){for(var e=[],n=0;n<t;n++)e.push(n);return e},e.root=function(t){for(;this.array[t]!=t;)this.array[t]=this.array[this.array[t]],t=this.array[t];return t},e.connected=function(t,e){return this.root(t)==this.root(e)},e.union=function(t,e){var n=this.root(t),a=this.root(e);n!==a&&(a<=n?this.array[n]=a:this.array[a]=n)},t}();t.exports=n},JEFm:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("Bl7J"),c=n("vrFN"),s=n("J/ba"),l=n.n(s);var p=new l.a(400),h=r.a.div.withConfig({displayName:"quicksearch__Box",componentId:"d5rf94-0"})(["height:",";width:",";box-sizing:border-box;border:1px solid black;background-color:",";@media (max-width:820px){height:",";width:",";}"],(function(t){return 600/t.size+"px"}),(function(t){return 600/t.size+"px"}),(function(t){return t.color}),(function(t){return 300/t.size+"px"}),(function(t){return 300/t.size+"px"})),u=function(t){for(var e=[],n=t*t,a=0;a<n;a++){var r=Math.floor(Math.random()*Math.floor(10));e.push(i.a.createElement(h,{color:r<6?"white":"black",size:t}))}return e},d=u(20),f=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).percolate=function(){var t=this.state.graphSize;d.forEach((function(e,n){"white"===e.props.color&&(n%t!=0&&"black"!==d[n-1].props.color&&p.union(n,n-1),n>t-1&&"black"!==d[n-t].props.color&&p.union(n,n-t))})),d.forEach((function(e,n){p.root(n)<t&&(e.props.color="blue")})),d.forEach((function(e,n){"white"===e.props.color&&(n%t!=0&&"black"!==d[n-1].props.color&&p.union(n,n-1),n>t-1&&"black"!==d[n-t].props.color&&p.union(n,n-t))})),d.forEach((function(e,n){p.root(n)<t&&(e.props.color="blue")})),this.setState({count:this.state.count+1})},n.state={count:0,graphSize:20},n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=a.prototype;return o.reset=function(){d=u(this.state.graphSize),p=new l.a(this.state.graphSize*this.state.graphSize),this.setState({count:this.state.count+1})},o.handleChange=function(t){this.setState({graphSize:t.target.value},this.reset)},o.render=function(){var t=r.a.div.withConfig({displayName:"quicksearch__Section",componentId:"d5rf94-1"})(["display:flex;flex-wrap:wrap;height:600px;width:600px;margin:auto;padding-top:10px;@media (max-width:820px){height:300px;width:300px;}"]),e=r.a.div.withConfig({displayName:"quicksearch__ButtonRow",componentId:"d5rf94-2"})(["display:flex;width:100%;justify-content:space-between;"]);return i.a.createElement(t,{graphSize:this.state.graphSize},d,i.a.createElement(e,null,i.a.createElement("button",{onClick:this.percolate.bind(this)},"percolate"),i.a.createElement("span",null,i.a.createElement("label",{for:"rowsize"},"Graph size:"),i.a.createElement("select",{id:"size",onChange:this.handleChange.bind(this),value:this.state.graphSize},i.a.createElement("option",{value:10},"10"),i.a.createElement("option",{value:20,selected:"selected"},"20"),i.a.createElement("option",{value:30},"30"),i.a.createElement("option",{value:40},"40"))),i.a.createElement("button",{onClick:this.reset.bind(this)},"reset")))},a}(i.a.Component),m=r.a.div.withConfig({displayName:"quicksearch__Container",componentId:"sc-1etxhsc-0"})(["display:flex;flex-direction:column;font-family:times new roman;padding-left:25em;padding-right:5em;font-size:0.95em;margin-bottom:3em;@media (max-width:820px){padding-left:0px;padding-top:10em;margin-bottom:2em;padding-right:0px;}"]),g=r.a.div.withConfig({displayName:"quicksearch__Header",componentId:"sc-1etxhsc-1"})(["display:flex;justify-content:center;font-size:1.9em;margin-top:3em;"]);e.default=function(){return i.a.createElement(o.a,null,i.a.createElement(c.a,{title:"Quick Union"}),i.a.createElement(m,null,i.a.createElement(g,null,"Quick Union"),i.a.createElement(f,null)))}}}]);
//# sourceMappingURL=component---src-pages-quicksearch-js-d9edcaae45a5d3073469.js.map