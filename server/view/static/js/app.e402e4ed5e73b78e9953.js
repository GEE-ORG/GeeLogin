webpackJsonp([1],{113:function(t,e){},119:function(t,e,n){var s=n(13)(n(71),n(123),null,null,null);t.exports=s.exports},120:function(t,e,n){var s=n(13)(n(72),n(122),null,null,null);t.exports=s.exports},121:function(t,e,n){var s=n(13)(n(73),n(125),null,null,null);t.exports=s.exports},122:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("img",{attrs:{src:t.$store.state.user.avatar+"?s=200",alt:"avatar"}}),t._v(" "),n("p",{staticClass:"username"},[t.$store.state.user.source?n("img",{staticClass:"source",attrs:{alt:"source",src:t.sourceImgPath()}}):t._e(),t._v(" "),n("span",[t._v(t._s(t.$store.state.user.username))]),t._v(" "),n("a",{staticClass:"signout",attrs:{href:"/signout"}},[t._v("Sign out")])]),t._v(" "),t.$store.state.user.source?n("div",{staticClass:"signup"},[n("button",{attrs:{id:"signup"},on:{click:t.signup}},[t._v("Sign up with current profile")]),t._v(" "),n("button",{attrs:{id:"link-account"},on:{click:t.signin}},[t._v("Or link to an exist account")])]):t._e()])},staticRenderFns:[]}},123:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"oauth"},t._l(t.oauth,function(e){return n("a",{attrs:{href:e.url}},[n("img",{attrs:{src:t.oauthImgPath(e.name),alt:e.name}})])})),t._v(" "),n("div",{staticClass:"or"},[t._v("- OR -")]),t._v(" "),t.$store.state.isSignIn?n("form",{staticClass:"signin",attrs:{action:"/signin"},on:{submit:function(e){e.preventDefault(),t.signin(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",name:"name",placeholder:"Username/Email",required:"",autofocus:""},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||(t.user.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",name:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}}),t._v(" "),n("input",{attrs:{type:"submit",value:"Sign In"}})]):n("form",{staticClass:"signup",attrs:{action:"/signup"},on:{submit:function(e){e.preventDefault(),t.signup(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",name:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||(t.user.username=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"email",name:"email",placeholder:"Email",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||(t.user.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",name:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}}),t._v(" "),n("input",{attrs:{type:"submit",value:"Sign Up"}})]),t._v(" "),n("input",{staticClass:"sign-in-up",attrs:{type:"button",value:t.$store.state.isSignIn?"Sign Up":"Sign In"},on:{click:t.signInOrUp}})])},staticRenderFns:[]}},124:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{class:{show:t.$store.state.isLoading},attrs:{id:"loading"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tipShow,expression:"tipShow"}],staticClass:"tip"},[t._v(t._s(t.tip))]),t._v(" "),n("router-view",{on:{tip:t.onTip}})],1)},staticRenderFns:[]}},125:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"oauth"},t._l(t.oauth,function(e){return n("a",{attrs:{href:e.url}},[n("img",{attrs:{src:t.oauthImgPath(e.name),alt:e.name}})])})),t._v(" "),n("div",{staticClass:"or"},[t._v("- OR -")]),t._v(" "),t.isSignIn?n("form",{staticClass:"signin",attrs:{action:"/signin"},on:{submit:function(e){e.preventDefault(),t.signin(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",name:"name",placeholder:"Username/Email",required:"",autofocus:""},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||(t.user.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",name:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}}),t._v(" "),n("input",{attrs:{type:"submit",value:"Sign In"}})]):n("form",{staticClass:"signup",attrs:{action:"/signup"},on:{submit:function(e){e.preventDefault(),t.signup(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",name:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||(t.user.username=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"email",name:"email",placeholder:"Email",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||(t.user.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",name:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}}),t._v(" "),n("input",{attrs:{type:"submit",value:"Sign Up"}})]),t._v(" "),n("input",{staticClass:"sign-in-up",attrs:{type:"button",value:t.isSignIn?"Sign Up":"Sign In"},on:{click:t.signInOrUp}})])},staticRenderFns:[]}},25:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk2MDUzNjk3NTE1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTQxLjcxNCA1MTJxMCAxNDMuNDMzLTgzLjcxMiAyNTguMDExdC0yMTYuMjgzIDE1OC41NzRxLTE1LjQzMyAyLjg1My0yMi41NjUtMy45ODZ0LTcuMTMxLTE3LjE1MnYtMTIwLjU3NnEwLTU1LjQ0Mi0yOS42OTYtODEuMTUyIDMyLjU4NS0zLjQzOCA1OC41ODctMTAuMjc3dDUzLjcyMy0yMi4yNzIgNDYuMjk5LTM3Ljk5OCAzMC4yODEtNjAuMDE0IDExLjcwMy04Ni4wMTZxMC02OS4xNTctNDUuMTI5LTExNy43MjMgMjEuMTM4LTUyLjAwNS00LjU3MS0xMTYuNTUzLTE2LjAxOC01LjE1Ny00Ni4yOTkgNi4yOXQtNTIuNTUzIDI1LjE2MWwtMjEuNzIzIDEzLjcxNHEtNTMuMTM4LTE0Ljg0OC0xMDkuNzE0LTE0Ljg0OHQtMTA5LjcxNCAxNC44NDhxLTkuMTQzLTYuMjktMjQuMjgzLTE1LjQzM3QtNDcuNzI2LTIyLjAxNi00OS4xNTItNy43MTdxLTI1LjE2MSA2NC41ODUtMy45ODYgMTE2LjU1My00NS4xMjkgNDguNTY3LTQ1LjEyOSAxMTcuNzIzIDAgNDguNTY3IDExLjcwMyA4NS43MjN0MjkuOTg5IDYwLjAxNCA0Ni4wMDcgMzguMjkgNTMuNzIzIDIyLjI3MiA1OC41ODcgMTAuMjc3cS0yMi44NTcgMjAuNTUzLTI4LjAxNCA1OC44NDMtMTEuOTk1IDUuNzA1LTI1LjcxIDguNTU4dC0zMi41ODUgMi44NTMtMzcuNDEzLTEyLjI4OC0zMS43MDctMzUuNzNxLTEwLjg2Mi0xOC4yODYtMjcuNzIxLTI5LjY5NnQtMjguMjctMTMuNzE0bC0xMS40NDctMS43MTlxLTExLjk5NSAwLTE2LjU2NyAyLjU2dC0yLjg1MyA2LjU4MyA1LjE1NyA4LjAwOSA3LjQyNCA2LjgzOWwzLjk4NiAyLjg1M3ExMi41ODEgNS43MDUgMjQuODY5IDIxLjcyM3QxNy45OTMgMjkuMTQ3bDUuNzA1IDEzLjEyOXE3LjQyNCAyMS43MjMgMjUuMTYxIDM1LjE0NXQzOC4yOSAxNy4xNTIgMzkuNzE3IDMuOTg2IDMxLjcwNy0yLjAxMWwxMy4xMjktMi4zMDRxMCAyMS43MjMgMC4yOTMgNTAuODcxdDAuMjkzIDMwLjg2NnEwIDEwLjI3Ny03LjQyNCAxNy4xNTJ0LTIyLjg1NyAzLjk4NnEtMTMyLjU3MS00My45OTUtMjE2LjI4My0xNTguNTc0dC04My43MTItMjU4LjAxMXEwLTExOS40NDIgNTguODQzLTIyMC4yN3QxNTkuNzA3LTE1OS43MDcgMjIwLjI3LTU4Ljg0MyAyMjAuMjcgNTguODQzIDE1OS43MDcgMTU5LjcwNyA1OC44NDMgMjIwLjI3eiIgcC1pZD0iMjQ2NiI+PC9wYXRoPjwvc3ZnPg=="},26:function(t,e,n){function s(t){return n(i(t))}function i(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./github.svg":25};s.keys=function(){return Object.keys(r)},s.resolve=i,t.exports=s,s.id=26},47:function(t,e,n){"use strict";var s=n(27),i=n(126),r=n(119),a=n.n(r),u=n(120),o=n.n(u),c=n(121),m=n.n(c);s.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Home",component:a.a},{path:"/profile",name:"Profile",component:o.a},{path:"/signup",name:"SignUp",component:m.a}]})},51:function(t,e,n){function s(t){n(113)}var i=n(13)(n(70),n(124),s,null,null);t.exports=i.exports},70:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="";e.default={name:"app",data:function(){return{tip:"",tipShow:!1}},methods:{onTip:function(t){var e=this;s&&(this.tipShow=!1,this.tip="",clearTimeout(s)),this.tipShow=!0,this.tip=t,s=setTimeout(function(){e.tipShow=!1,e.tip=""},5e3)}},beforeMount:function(){var t=this;this.$http("get","/auth").then(function(e){e.state<0||(t.$store.commit("updateUser",e.user),t.$router.push({name:"Profile"}))})}}},71:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(25);n.n(s);e.default={name:"home",data:function(){return{user:{name:"",username:"",password:"",email:""},userExist:!1,signInCount:0,oauth:[{name:"github",url:"https://github.com/login/oauth/authorize?client_id=6e6d16dc32560e7d5b34&scope=user"}]}},mounted:function(){var t=this.$store.state.user;t&&(this.user.username=t.username,this.user.email=t.email)},methods:{oauthImgPath:function(t){return n(26)("./"+t+".svg")},signInOrUp:function(){this.$store.commit("setSignIn",!this.$store.state.isSignIn)},signin:function(){var t=this;if(this.signInCount>5)return this.$emit("tip","Please try again later(10s)."),void setTimeout(function(){return t.signInCount=0},1e4);this.signInCount++,this.validator(),this.$http("post","/signin",this.user).then(function(e){if(t.$emit("tip",e.msg),e.state<0);else{if(e.redirect)return void(window.location.href=e.redirect);t.$router.push({name:"Profile"})}})},signup:function(){var t=this;this.validator(),this.$http("post","/signup",this.user).then(function(e){t.$emit("tip",e.msg),e.state<0||(t.isSignIn=!0)})},validator:function(t){if(!this.user.password)return void this.$emit("tip","Password is required!");if(this.isSignIn){if(!this.user.name)return void this.$emit("tip","Username or email is required!")}else if(!this.user.username||!this.user.email)return void this.$emit("tip","Username and email is required!")}}}},72:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"profile",data:function(){return{avatar:"",username:"Anonymous"}},mounted:function(){this.updateInfo()},methods:{sourceImgPath:function(){return n(26)("./"+this.$store.state.user.source+".svg")},signup:function(){this.$store.commit("setSignIn",!1),this.$router.push({name:"Home"})},signin:function(){this.$router.push({name:"Home"})},updateInfo:function(){var t=this;this.$http("get","/auth").then(function(e){e.state<0?t.$router.push({name:"Home"}):t.$store.commit("updateUser",e.user)})}}}},73:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(25);n.n(s);e.default={name:"home",data:function(){return{user:{name:"",username:"",password:"",email:""},isSignIn:!0,userExist:!1,signInCount:0,oauth:[{name:"github",url:"https://github.com/login/oauth/authorize?client_id=6e6d16dc32560e7d5b34&scope=user"}]}},methods:{oauthImgPath:function(t){return n(26)("./"+t+".svg")},signInOrUp:function(){this.isSignIn=!this.isSignIn},signin:function(){var t=this;if(this.signInCount>5)return this.$emit("tip","Please try again later(10s)."),void setTimeout(function(){return t.signInCount=0},1e4);this.signInCount++,this.validator(),this.$http("post","/signin",this.user).then(function(e){t.$emit("tip",e.msg),e.state<0||t.$router.push({name:"Profile"})})},signup:function(){var t=this;this.validator(),this.$http("post","/signup",this.user).then(function(e){t.$emit("tip",e.msg),e.state<0||(t.isSignIn=!0)})},validator:function(t){if(!this.user.password)return void this.$emit("tip","Password is required!");if(this.isSignIn){if(!this.user.name)return void this.$emit("tip","Username or email is required!")}else if(!this.user.username||!this.user.email)return void this.$emit("tip","Username and email is required!")}}}},74:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(50),i=n.n(s),r=n(49),a=n.n(r),u=n(48),o=n.n(u),c=n(27),m=n(51),p=n.n(m),l=n(47),d=n(52),g=n(46),v=n.n(g);c.a.config.productionTip=!1,c.a.use(d.a);var h=new d.a.Store({state:{isLoading:!1,isSignIn:!0,user:{username:"",avatar:"",source:"",email:"",uid:-1}},mutations:{loaded:function(t){t.isLoading=!1},loading:function(t){t.isLoading=!0},toggleLoadingBar:function(t){t.isLoading=!t.isLoading},updateUser:function(t,e){t.user=o()(t.user,e)},setSignIn:function(t,e){t.isSignIn=e}}});c.a.prototype.$http||(c.a.prototype.$http=function(){var t=a()(i.a.mark(function t(e,n){var s,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&n){t.next=2;break}throw new Error("method and url is required!");case 2:return h.commit("loading"),t.next=5,v()({method:e,baseURL:"https://login.geeku.net/",url:n,data:r,headers:a,withCredentials:!0,validateStatus:function(t){return t>=200&&t<300}}).then(function(t){return t});case 5:return s=t.sent,h.commit("loaded"),t.abrupt("return",s.data);case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()),new c.a({el:"#app",router:l.a,store:h,render:function(t){return t(p.a)}})}},[74]);
//# sourceMappingURL=app.e402e4ed5e73b78e9953.js.map