(this["webpackJsonpoblekco-frontend"]=this["webpackJsonpoblekco-frontend"]||[]).push([[0],{33:function(e,a,t){e.exports=t(63)},38:function(e,a,t){},40:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),s=(t(38),t(30)),u=t.n(s),i=(t(39),t(31)),m=t.n(i),o=t(4),d=t(5),p=t(6),h=t(7),k=Object(n.createContext)(),g=(t(40),t(10)),E=t(11),v=t.n(E),f="https://oblekco-runningtracker.herokuapp.com/api";v.a.defaults.withCredentials=!0;var N=function(e){return v.a.post("".concat(f,"/login"),e)},b=function(e){return v.a.post("".concat(f,"/signup"),e)},y=function(){return v.a.post("".concat(f,"/logout"))},x=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).logout=function(){var a=e.props.history;y().then((function(){localStorage.removeItem("user"),e.setState({user:{}}),a.push("/")}))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.context.state;return l.a.createElement("div",null,e.user._id&&l.a.createElement("nav",{className:"navbar","uk-navbar":"true"},l.a.createElement("div",{className:"uk-navbar-left"},l.a.createElement(g.b,{className:"nav-title-text",to:"/"},"Running Tracker")),l.a.createElement("div",{className:"uk-navbar-right"},l.a.createElement(g.b,{className:"nav-text",to:"/myruns"},"My Runs"),l.a.createElement(g.b,{className:"nav-text",to:"/newrun"},"+ Add New Run"),l.a.createElement("a",{className:"nav-text",href:"/",onClick:this.logout},"Log Out"))))}}]),t}(n.Component);x.contextType=k,x.contextType=k;var w=x,j=t(1),O=t(9),_=t(12),C=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"uk-position-center"},l.a.createElement("div",{className:"uk-text-center"},l.a.createElement("h3",{className:"uk-text-italic"},'"RUNNING is the greatest metaphor for life, because you get out of it what you put into it."')),l.a.createElement("div",{className:"uk-position-relative uk-visible-toggle uk-light uk-margin-top uk-margin-left uk-margin-right",tabIndex:"-1","uk-slider":"true"},l.a.createElement("ul",{className:"uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid"},l.a.createElement("li",null,l.a.createElement("div",{className:"uk-panel"},l.a.createElement("img",{src:"https://res.cloudinary.com/karen491/image/upload/v1599418984/oblekco/running1_kqrokc.jpg",alt:""}),l.a.createElement("div",{className:"uk-position-center uk-panel"},l.a.createElement("h1",null,"1")))),l.a.createElement("li",null,l.a.createElement("div",{className:"uk-panel"},l.a.createElement("img",{src:"https://res.cloudinary.com/karen491/image/upload/c_scale,h_701,w_1000/v1599419016/oblekco/running2_rr8p5n.jpg",alt:""}),l.a.createElement("div",{className:"uk-position-center uk-panel"},l.a.createElement("h1",null,"2")))),l.a.createElement("li",null,l.a.createElement("div",{className:"uk-panel"},l.a.createElement("img",{src:"https://res.cloudinary.com/karen491/image/upload/c_scale,h_701,w_1000/v1599418983/oblekco/running3_ypx7kn.jpg",alt:""}),l.a.createElement("div",{className:"uk-position-center uk-panel"},l.a.createElement("h1",null,"3")))),l.a.createElement("li",null,l.a.createElement("div",{className:"uk-panel"},l.a.createElement("img",{src:"https://res.cloudinary.com/karen491/image/upload/c_scale,h_701,w_1000/v1599419029/oblekco/running4_r6fs6g.jpg",alt:""}),l.a.createElement("div",{className:"uk-position-center uk-panel"},l.a.createElement("h1",null,"4")))),l.a.createElement("li",null,l.a.createElement("div",{className:"uk-panel"},l.a.createElement("img",{src:"https://res.cloudinary.com/karen491/image/upload/c_scale,h_701,w_1000/v1599418995/oblekco/running5_wloc1q.jpg",alt:""}),l.a.createElement("div",{className:"uk-position-center uk-panel"},l.a.createElement("h1",null,"5"))))),l.a.createElement("a",{className:"uk-position-center-left uk-position-small uk-hidden-hover",href:"/","uk-slidenav-previous":"true","uk-slider-item":"previous"}," "),l.a.createElement("a",{className:"uk-position-center-right uk-position-small uk-hidden-hover",href:"/","uk-slidenav-next":"true","uk-slider-item":"next"}," ")))}}]),t}(n.Component),S=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={user:{}},e.handleChange=function(a){var t=e.state.user;t=Object(_.a)({},t,Object(O.a)({},a.target.name,a.target.value)),e.setState({user:t})},e.handleSubmit=function(a){a.preventDefault();var t=e.state.user,n="/"===e.props.location.pathname,l=e.context.setUser,r=e.props.history;(n?N:b)(t).then((function(e){if(n){var a=e.data.user;localStorage.setItem("user",JSON.stringify(a)),l(a)}else r.push("/")})).catch((function(e){console.log(e)}))},e}return Object(d.a)(t,[{key:"render",value:function(){var e="/signup"===this.props.location.pathname,a=this.context.state;return l.a.createElement("div",null,!a.user._id&&l.a.createElement("div",{className:"uk-width-1-1 uk-flex uk-flex-middle uk-flex-right login","uk-height-viewport":"true"},l.a.createElement("div",{className:"uk-card uk-card-default uk-card-body uk-width-1-3@m uk-margin-xlarge-right authform-card"},l.a.createElement("h2",{className:"title-text uk-text-center"},"Running Tracker"),l.a.createElement("form",{onSubmit:this.handleSubmit},e?l.a.createElement("div",{className:"uk-margin"},l.a.createElement("div",{className:"uk-inline uk-width-1-1"},l.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: star"}),l.a.createElement("input",{onChange:this.handleChange,placeholder:"Name",id:"name",name:"name",className:"uk-input",type:"text"}))):null,e?l.a.createElement("div",{className:"uk-margin"},l.a.createElement("div",{className:"uk-inline uk-width-1-1"},l.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon:  bolt"}),l.a.createElement("input",{onChange:this.handleChange,placeholder:"Last name",id:"last_name",name:"last_name",className:"uk-input",type:"text"}))):null,l.a.createElement("div",{className:"uk-margin"},l.a.createElement("div",{className:"uk-inline uk-width-1-1"},l.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: user"}),l.a.createElement("input",{onChange:this.handleChange,placeholder:"Email address",id:"email",name:"email",className:"uk-input",type:"text"}))),l.a.createElement("div",{className:"uk-margin"},l.a.createElement("div",{className:"uk-inline uk-width-1-1"},l.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: lock"}),l.a.createElement("input",{onChange:this.handleChange,placeholder:"Password",id:"password",name:"password",className:"uk-input",type:"password"}))),l.a.createElement("button",{className:"authform-button uk-width-1-1"},e?"Sign Up":"Log In"),l.a.createElement("hr",{className:"uk-divider-icon"}),e?l.a.createElement("h5",{className:"uk-text-center"},"Have an account? ",l.a.createElement(g.b,{to:"/"},"Log In")):l.a.createElement("h5",{className:"uk-text-center"},"Don't have an account? ",l.a.createElement(g.b,{to:"/signup"},"Sign Up"))))),a.user._id&&l.a.createElement(C,null))}}]),t}(n.Component);S.contextType=k,S.contextType=k;var T=S,D=t(14),I=t.n(D);v.a.defaults.withCredentials=!0;var R=function(e){return v.a.post("".concat(f,"/run"),e)},M=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={run:{}},e.handleChange=function(a){var t,n=e.state.run,l=e.context.state.user._id,r=document.getElementById("distance").value,c=document.getElementById("type").value;n=Object(_.a)({},n,(t={},Object(O.a)(t,a.target.name,a.target.value),Object(O.a)(t,"user",l),Object(O.a)(t,"distance",r),Object(O.a)(t,"type",c),t)),e.setState({run:n})},e.handleSubmit=function(a){a.preventDefault();var t=e.state.run;R(t).then((function(){document.location.reload(!0)})).catch((function(e){return console.error(e.response)}))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=I()().format("YYYY-MM-DD");return l.a.createElement("div",{className:"uk-width-4-5 uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-margin-left","uk-grid":"true"},l.a.createElement("div",{className:"uk-flex-last@s uk-card-media-right uk-cover-container"},l.a.createElement("img",{src:"https://res.cloudinary.com/karen491/image/upload/v1599338719/oblekco/running-form_jfp907.jpg",alt:"","uk-cover":"true"}),l.a.createElement("canvas",{width:"600",height:"200"})),l.a.createElement("div",null,l.a.createElement("div",{className:"uk-card-body"},l.a.createElement("h2",{className:"uk-text-bolder"},"New Run"),l.a.createElement("form",{className:"uk-grid-small","uk-grid":"true",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"uk-width-1-2@s"},l.a.createElement("label",{className:"uk-form-label"},"Date"),l.a.createElement("input",{onChange:this.handleChange,className:"uk-input",name:"date",id:"date",type:"date",max:e})),l.a.createElement("div",{className:"uk-width-1-2@s"},l.a.createElement("label",{className:"uk-form-label"},"Distance"),l.a.createElement("select",{className:"uk-select",id:"distance"},l.a.createElement("option",null,"5K"),l.a.createElement("option",null,"10K"),l.a.createElement("option",null,"15K"),l.a.createElement("option",null,"21K"),l.a.createElement("option",null,"30K"),l.a.createElement("option",null,"Marathon (42K)"))),l.a.createElement("div",{className:"uk-width-1-2@s"},l.a.createElement("label",{className:"uk-form-label"},"Country"),l.a.createElement("input",{onChange:this.handleChange,className:"uk-input",name:"country",it:"country",type:"text"})),l.a.createElement("div",{className:"uk-width-1-2@s"},l.a.createElement("label",{className:"uk-form-label"},"City"),l.a.createElement("input",{onChange:this.handleChange,className:"uk-input",name:"city",it:"city",type:"text"})),l.a.createElement("div",{className:"uk-width-1-2@s"},l.a.createElement("label",{className:"uk-form-label"},"Run type"),l.a.createElement("select",{className:"uk-select",id:"type"},l.a.createElement("option",null,"Trail"),l.a.createElement("option",null,"Road"))),l.a.createElement("div",{className:"uk-width-1-2@s"},l.a.createElement("label",{className:"uk-form-label"},"Timing (min)"),l.a.createElement("input",{onChange:this.handleChange,className:"uk-input",name:"timing",id:"timing",type:"number"})),l.a.createElement("button",{className:"runform-button uk-width-1-2 uk-align-center"},"Save Run")))))}}]),t}(n.Component);M.contextType=k,M.contextType=k;var Y=M,A=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={runs:{}},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e,a=this;v.a.get("".concat(f,"/run"),e).then((function(e){var t=e.data.result,n=t.reduce((function(e,a){return Object(_.a)({},e,Object(O.a)({},a._id,a))}),{});a.setState({runs:n})}))}},{key:"render",value:function(){var e,a=this.state.runs,t=this.context.state;return a=(e=a,Object.values(e)).filter((function(e){return e.user===t.user._id})),l.a.createElement("div",null,l.a.createElement("h2",{className:"uk-margin-top uk-margin-large-left uk-text-bolder"},"All runs"),l.a.createElement("div",{className:"uk-grid-column-small uk-grid-row-large uk-child-width-1-4@s uk-text-center uk-margin-top uk-margin-left","uk-grid":"true"},a.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("div",{className:"uk-card run-card"},l.a.createElement("div",{className:"uk-card-media-top"},l.a.createElement("img",{src:"https://res.cloudinary.com/karen491/image/upload/c_scale,h_200,w_350/v1599410594/oblekco/my-runs_um7ssn.jpg",alt:""})),l.a.createElement("div",{className:"uk-text-left uk-margin uk-padding-small"},l.a.createElement("h5",{className:"uk-margin-small"},l.a.createElement("span",{className:"uk-text-bold"},"Distance: "),e.distance),l.a.createElement("h5",{className:"uk-margin-small"},l.a.createElement("span",{className:"uk-text-bold"},"Timing: "),"".concat(e.timing," min")),l.a.createElement("h5",{className:"uk-margin-small"},l.a.createElement("span",{className:"uk-text-bold"},"Date: "),I()(e.date).format("MMMM DD, YYYY")),l.a.createElement("h5",{className:"uk-margin-small"},l.a.createElement("span",{className:"uk-text-bold"},"Run type: "),e.type),l.a.createElement("h5",{className:"uk-margin-small"},l.a.createElement("span",{className:"uk-text-bold"},"Place: "),"".concat(e.city,", ").concat(e.country)))))}))))}}]),t}(n.Component);A.contextType=k,A.contextType=k;var U=A,K=function(){return l.a.createElement(j.c,null,l.a.createElement(j.a,{exact:!0,path:"/",component:T}),l.a.createElement(j.a,{exact:!0,path:"/signup",component:T}),l.a.createElement(j.a,{exact:!0,path:"/newrun",component:Y}),l.a.createElement(j.a,{exact:!0,path:"/myruns",component:U}))},B=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={user:JSON.parse(localStorage.getItem("user"))||{}},e.setUser=function(a){e.setState({user:a})},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state,a=this.setUser;return l.a.createElement(k.Provider,{value:{state:e,setUser:a}},l.a.createElement("div",{className:"home"},e.user._id&&l.a.createElement(w,null),l.a.createElement(K,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.use(m.a);var J=function(){return l.a.createElement(g.a,null,l.a.createElement(B,null))};c.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.5fba8da9.chunk.js.map