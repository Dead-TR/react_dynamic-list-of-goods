(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,o){},13:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),s=o(2),c=o.n(s),r=o(3),l=o(4),d=o(6),i=o(5),u=(o(12),function(t){var e=t.goods;return a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:"".concat(t.color)}},t.name)})))}),g=function(t){Object(d.a)(o,t);var e=Object(i.a)(o);function o(){var t;Object(r.a)(this,o);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={goods:[],isLoaded:!1},t.goodsURL="https://mate.academy/students-api/goods",t.getGoods=function(){return fetch(t.goodsURL).then((function(t){return t.json()}))},t.getAllGoods=function(){t.getGoods().then((function(e){t.setState({goods:e.data,isLoaded:!0})}))},t.getFiveFirstGoods=function(){t.getGoods().then((function(e){t.setState({goods:e.data.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5),isLoaded:!0})}))},t.getAllRedGoods=function(){t.getGoods().then((function(e){t.setState({goods:e.data.filter((function(t){return"red"===t.color})),isLoaded:!0})}))},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){this.getAllGoods()}},{key:"render",value:function(){var t=this.state,e=t.goods;return t.isLoaded?a.a.createElement("section",{className:"goods"},a.a.createElement("button",{type:"button",onClick:this.getAllGoods,className:"goods__button"},"All"),a.a.createElement("button",{type:"button",onClick:this.getFiveFirstGoods,className:"goods__button"},"5 first"),a.a.createElement("button",{type:"button",onClick:this.getAllRedGoods,className:"goods__button"},"Red"),a.a.createElement(u,{goods:e})):a.a.createElement("section",{className:"goods"},a.a.createElement("h1",null,"Please, wait"))}}]),o}(a.a.Component);c.a.render(a.a.createElement(g,null),document.getElementById("root"))},7:function(t,e,o){t.exports=o(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.08f416f9.chunk.js.map