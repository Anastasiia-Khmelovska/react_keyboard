(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),o=n(5),c=n(7),u=n(6),p=n(1),i=n(0),d=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={pressedButton:""},e.handleKeyup=function(t){e.setState({pressedButton:t.key})," "===e.state.pressedButton&&e.setState({pressedButton:"space"})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyup)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyup)}},{key:"render",value:function(){var e=this.state.pressedButton;return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("p",{className:"App__message",children:this.state.pressedButton?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(p.Component);n(13);a.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d47ea966.chunk.js.map