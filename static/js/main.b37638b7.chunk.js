(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);n(8);var a=n(1),r=n.n(a),s=n(3),i=n.n(s),c=(n(13),n(4)),l=n(5),o=n(7),d=n(6),u=n(0);var j=function(t){var e=t.state,n=t.fnPositivePer\u0441ent,a=t.fnTotal;return Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good: ",e.good]}),Object(u.jsxs)("li",{children:["Neutral: ",e.neutral]}),Object(u.jsxs)("li",{children:["Bad: ",e.bad]}),Object(u.jsxs)("li",{children:["Total: ",a()]}),"                                               ",Object(u.jsxs)("li",{children:["Positive feedback: ",n()," %"]}),"                       "]})};var b=function(t){var e=t.fnPlus;return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{id:"plus",onClick:e,children:"Good"}),Object(u.jsx)("button",{id:"neutral",onClick:e,children:"Neutral"}),Object(u.jsx)("button",{id:"bad",onClick:e,children:"Bad"})]})};var f=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={good:0,neutral:0,bad:0},t.defaultState={total:0},t.fnPlus=function(e){"plus"===e.target.id&&t.setState((function(t){return{good:t.good+1}})),"neutral"===e.target.id&&t.setState({neutral:t.state.neutral+1}),"bad"===e.target.id&&t.setState({bad:t.state.bad+1})},t.fnTotal=function(){var e=t.state.good+t.state.neutral+t.state.bad;return t.defaultState.total=e,e},t.fnPositivePer\u0441ent=function(){var e=t.fnTotal();return(e?100*t.state.good/e:0).toFixed(0)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("h1",{children:"Please leave feedback"}),Object(u.jsx)(b,{fnPlus:this.fnPlus}),Object(u.jsx)("h2",{fn:this.fnTotal(),children:"Statistics"}),"                      ",this.defaultState.total<1&&Object(u.jsx)("h2",{children:"No feedback"}),this.defaultState.total>=1&&Object(u.jsx)(j,{state:this.state,fnTotal:this.fnTotal,"fnPositivePer\u0441ent":this.fnPositivePer\u0441ent})]})}}]),n}(a.Component);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b37638b7.chunk.js.map