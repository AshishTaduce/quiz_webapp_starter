(this.webpackJsonpquiz_webapp_starter=this.webpackJsonpquiz_webapp_starter||[]).push([[0],{24:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(18),o=n.n(i),r=(n(29),n(30),n(13)),c=n.n(r),l=n(19),u=n(8),h=n(9),d=n(11),m=n(10);function p(e){return s.a.createElement("div",{style:{fontSize:"48px",margin:"32px"}},e.question)}n(32);var f=n(20),E=n.n(f);function v(e){return s.a.createElement("div",{onClick:e.disableClick?null:function(){e.triggerClick(e.option,e.correct)},className:"option ".concat(e.selected?e.correct?"correct-option":"wrong-option":"")},s.a.createElement(E.a,{active:e.correct&&e.selected}),e.text)}n(34),n(35);var g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={timer:null},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({timer:setTimeout((function(){e.props.callBackFn(null,!1)}),1e4)})}},{key:"componentWillUnmount",value:function(){console.log("com2"),this.state.timer=null,clearTimeout(this.state.timer)}},{key:"render",value:function(){return this.props.disableClick?(clearTimeout(this.state.timer),null):s.a.createElement("div",{className:"timer"})}}]),n}(s.a.Component),b=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={score:0,showAnswers:!1,selection:null,displayedQuestionIndex:0,disableClick:!1,status:null,userChoices:[]},e.questions=[{text:"Who is current PM of India?",options:["Narendra Modi","Rahul Gandhi","Manmohan Singh","Sonia Gandhi"],correct_choice:0},{text:"What is capital of Orissa?",options:["Chandigarh","Bhubaneshwar","Tripura","Nagaland"],correct_choice:1},{text:"In the context to India's wild life, the flying fox is a __?",options:["Bat","Vulture","Stok","Kite"],correct_choice:0},{text:"What percentage of land area should remain covered by forest to maintain Ecological balance?",options:["10%","33%","5%","None of these"],correct_choice:1},{text:" The purest form of iron is",options:["Wrought iron","Steel","Pig iron","Nickel steel"],correct_choice:0},{text:"Layer of atmosphere in which Ozone layer lies is",options:["Exosphere","Mesosphere","Troposphere","Stratosphere"],correct_choice:3}],e}return Object(h.a)(n,[{key:"triggerClick",value:function(){var e=Object(l.a)(c.a.mark((function e(t,n){var a=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.userChoices.push(null!==t?this.questions[this.state.displayedQuestionIndex].options[t]:"Timed out"),this.state.displayedQuestionIndex!==this.questions.length-1){e.next=4;break}return this.props.history.push({pathname:"/result",state:{score:this.state.score,questions:this.questions,userChoices:this.state.userChoices}}),e.abrupt("return");case 4:return console.log("Entered triggerClick with:",t,n),n?this.setState({status:"Yayy!! Correct Answer!",score:this.state.score+10}):null===t?this.setState({status:"Sorry. Timed Out"}):n||this.setState({status:"Sorry. Wrong Answer!"}),this.setState({selection:t,disableClick:!0}),e.next=9,setTimeout((function(){a.setState({displayedQuestionIndex:a.state.displayedQuestionIndex+1,disableClick:!1,selection:null,status:null})}),3e3);case 9:console.log(this.state.selection," is the selected option");case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.displayedQuestionIndex<this.questions.length?s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"score"},"Score: ",this.state.score),s.a.createElement(p,{question:this.questions[this.state.displayedQuestionIndex].text}),s.a.createElement("div",{className:"options-container"},this.questions[this.state.displayedQuestionIndex].options.map((function(t,n){return s.a.createElement(v,{text:t,correct:e.questions[e.state.displayedQuestionIndex].correct_choice===n,option:n,selected:e.state.selection===n,disableClick:e.state.disableClick,triggerClick:e.triggerClick.bind(e)})}))),s.a.createElement("div",{className:"status"},this.state.status),s.a.createElement(g,{key:this.state.displayedQuestionIndex,disableClick:this.state.disableClick,callBackFn:this.triggerClick.bind(this)})):null}}]),n}(s.a.Component),k=n(21),y=n(5);n(36);var x=function(e){return a.createElement("div",null,a.createElement("head",null,a.createElement("title",null,"Result Page")),a.createElement("body",null,a.createElement("div",null,"Your total score is : ",e.location.state.score),a.createElement("table",{className:"result-table"},a.createElement("tr",null,a.createElement("th",null,"QUESTION"),a.createElement("th",null,"CORRECT CHOICE"),a.createElement("th",null,"YOUR CHOICE")),e.location.state.questions.map((function(t,n){return a.createElement("tr",null,a.createElement("td",null,t.text),a.createElement("td",null,t.options[t.correct_choice]),a.createElement("td",null,e.location.state.userChoices[n]))})))))};var C=function(){return s.a.createElement(k.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(y.c,null,s.a.createElement(y.a,{exact:!0,path:"/",component:b}),s.a.createElement(y.a,{exact:!0,path:"/result",component:x})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.5bc6c4de.chunk.js.map