(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n.n(o),a=n(2),i=n.n(a),c=n(3),r=n(4),l=n(6),u=n(5),d=(n(12),function(t){var e=t.godsList;return s.a.createElement("ul",null,e.map((function(t){return s.a.createElement("li",{key:t.id,style:{color:"".concat(t.color)}},t.name)})))}),f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={godsList:[],isLoad:!1},t.godsURL="https://mate.academy/students-api/goods",t.getAllGods=function(){return fetch(t.godsURL).then((function(t){return t.json()})).then((function(e){t.setState({godsList:e.data,isLoad:!0})}))},t.getFiveFirstGods=function(){return fetch(t.godsURL).then((function(t){return t.json()})).then((function(e){t.setState({godsList:e.data.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5),isLoad:!0})}))},t.getAllRedGods=function(){return fetch(t.godsURL).then((function(t){return t.json()})).then((function(e){t.setState({godsList:e.data.filter((function(t){return"red"===t.color})),isLoad:!0})}))},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.getAllGods()}},{key:"render",value:function(){var t=this.state,e=t.godsList;return t.isLoad?s.a.createElement("section",{className:"godsList"},s.a.createElement("button",{type:"button",onClick:this.getAllGods,className:"godsList__button"},"All"),s.a.createElement("button",{type:"button",onClick:this.getFiveFirstGods,className:"godsList__button"},"5 first"),s.a.createElement("button",{type:"button",onClick:this.getAllRedGods,className:"godsList__button"},"Red"),s.a.createElement(d,{godsList:e})):s.a.createElement("section",{className:"godsList"},s.a.createElement("h1",null,"Please, wait"))}}]),n}(s.a.Component);i.a.render(s.a.createElement(f,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4585aaa4.chunk.js.map