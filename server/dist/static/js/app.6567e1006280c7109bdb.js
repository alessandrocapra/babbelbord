webpackJsonp([1],{"7zck":function(t,e){},"9Ces":function(t,e){},ABBJ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),s={data:function(){return{title:"",backArrow:!1}},methods:{goBack:function(){this.$router.go(-1)}},created:function(){var t=this;Event.$on("toolbar-data",function(e,n){t.title=e,t.backArrow=n})}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{color:"amber",app:""}},[t.backArrow?n("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:t.goBack}},[n("v-icon",[t._v("arrow_back")])],1):t._e(),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",to:"/"}},[n("v-icon",[t._v("home")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("settings")])],1)],1)},staticRenderFns:[]},i=n("VU/8")(s,a,!1,function(t){n("ABBJ")},"data-v-4b2527de",null).exports,o={name:"app",components:{PageHeader:i}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("page-header"),this._v(" "),e("main",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1)],1)],1)},staticRenderFns:[]},l=n("VU/8")(o,c,!1,function(t){n("WLhi")},null,null).exports,u=n("/ocq"),p=n("Xxa5"),d=n.n(p),v=n("exGp"),f=n.n(v),_=n("mtWM"),h=n.n(_),m=function(){return h.a.create({baseURL:"https://babbelbord.herokuapp.com/"})},b=function(){return m().get("/api/players")},k=function(t){return m().get("/api/player/"+t)},y=function(t){return m().post("/api/player/update",t)},g=function(t){return m().post("/api/players/create",t)},x=function(){return m().get("/api/topics")},w=function(){return m().get("/api/questions")},$={data:function(){return{loading:!0}},created:function(){var t=this;return f()(d.a.mark(function e(){var n,r,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Event.$emit("toolbar-data","Babbelbord",!1),e.next=3,b();case 3:return n=e.sent,e.next=6,x();case 6:return r=e.sent,e.next=9,w();case 9:s=e.sent,t.$store.commit("initializePlayers",n),t.$store.commit("initializeTopics",r),t.$store.commit("initializeQuestions",s),t.loading=!1;case 14:case"end":return e.stop()}},e,t)}))()},beforeDestroy:function(){Event.$emit("players_topics",this.players,this.topics)}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"text-xs-center":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[e("v-content",[e("div",{staticClass:"welcome"},[e("h1",{staticClass:"display-2"},[this._v("Welcome to Babbelbord!")]),this._v(" "),e("p",[this._v("Here we should put a brief description of the game perhaps?")])]),this._v(" "),this.loading?e("div",{staticClass:"text-xs-center"},[e("v-progress-circular",{attrs:{indeterminate:"",size:100,width:3,color:"deep-purple"}}),this._v(" "),e("p",[this._v("Retrieving data...")])],1):this._e()])],1),this._v(" "),e("v-flex",{attrs:{xs12:""}},[e("v-btn",{attrs:{disabled:this.loading,dark:"",color:"deep-purple",to:"/players/select"}},[this._v("\n        Start game\n      ")]),this._v(" "),e("v-btn",{attrs:{disabled:this.loading,dark:"",color:"deep-purple",to:"/players/profiles"}},[this._v("\n        Profiles\n      ")])],1)],1)],1)},staticRenderFns:[]},q=n("VU/8")($,P,!1,function(t){n("UPkN")},"data-v-38815e04",null).exports,Q={components:{PageHeader:i},data:function(){return{loading:!0}},watch:{players_list:function(){this.loading=!1}},computed:{players_list:function(){return this.$store.state.players},topics:function(){return this.$store.state.topics}},created:function(){var t=this;return f()(d.a.mark(function e(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:Event.$emit("toolbar-data","Spelers",!0);case 1:case"end":return t.stop()}},e,t)}))()}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Selecteer spelers")]),t._v(" "),n("p",[t._v("Selecteer twee spelers voor het babbelbord spel")]),t._v(" "),n("p",[t._v("Kies een van de volgende spelers")]),t._v(" "),n("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.players_list,function(e,r){return n("v-flex",{key:r,attrs:{xs4:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.name)+" "+t._s(e.lastname))]),t._v(" "),n("div",[t._v("Topics avoided:\n                "),t._l(e.skipQuestions,function(e){return n("span",t._l(t.topics,function(r){return r.id==e?n("v-chip",{key:r.id,attrs:{color:"amber","text-color":"black"}},[t._v(t._s(r.name))]):t._e()}))})],2)])]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",to:"/players/edit/"+e.id,color:"deep-purple"}},[t._v("Edit")])],1)],1)],1)}))],1),t._v(" "),n("v-fab-transition",[n("v-btn",{staticStyle:{"margin-bottom":"3em","margin-right":"1em"},attrs:{dark:"",fab:"",fixed:"",absolute:"",bottom:"",right:"",color:"deep-purple",to:"/players/create"}},[n("v-icon",[t._v("add")])],1)],1)],1)},staticRenderFns:[]},S=n("VU/8")(Q,E,!1,function(t){n("drsa")},"data-v-2fa5d575",null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[e("v-flex",{attrs:{xs10:"","offset-xs1":""}},[e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("h3",{staticClass:"headline mb-0"},[this._v(this._s(this.title))])])]),this._v(" "),this._t("default")],2)],1)],1)},staticRenderFns:[]},T={components:{Panel:n("VU/8")({props:["title"],data:function(){return{}}},U,!1,function(t){n("qRxP")},"data-v-fb8ac440",null).exports},data:function(){return{name:"",lastname:"",error:null,loader:null,valid:!1,loading:!1,snackbar:!1,timeout:3e3}},computed:{players:function(){return this.$store.state.players},topics:function(){return this.$store.state.topics}},methods:{register:function(){var t=this;return f()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g({name:t.name,lastname:t.lastname});case 3:t.snackbar=!0,setTimeout(function(){t.$router.push("/players")},3e3),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},clear:function(){this.$refs.form.reset()}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout(function(){return t[e]=!1},3e3),this.loader=null}},created:function(){Event.$emit("toolbar-data","Nieuw spel",!0)}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[n("panel",{attrs:{title:"Bestaande spelers"}},[n("v-list",{attrs:{"three-line":""}},[t._l(t.players,function(e){return[n("v-list-tile",{key:e.id,attrs:{avatar:""},on:{click:function(t){}}},[n("v-list-tile-avatar",[n("v-icon",[t._v("face")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.name)+" "+t._s(e.lastname)+" ")]),t._v(" "),n("v-list-tile-sub-title",t._l(e.skipQuestions,function(e){return n("span",t._l(t.topics,function(r){return r.id==e?n("span",{attrs:{color:"amber","text-color":"black"}},[t._v(" "+t._s(r.name)+" ")]):t._e()}))}))],1),t._v(" "),n("v-list-tile-action",[n("v-icon",{attrs:{color:"deep-purple"}},[t._v("mode edit")])],1)],1),t._v(" "),n("v-divider")]})],2)],1),t._v(" "),n("panel",{attrs:{title:"Nieuwe speler"}},[n("v-list",[n("v-list-tile",{on:{click:function(t){}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("Zorgdrager")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",{on:{click:function(t){}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("Bewoner")])],1)],1),t._v(" "),n("v-divider")],1)],1)],1),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-form",{attrs:{xs8:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{label:"Surname",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}}),t._v(" "),n("v-btn",{attrs:{flat:"",color:"orange"},on:{click:t.clear}},[t._v("clear")]),t._v(" "),n("v-btn",{attrs:{loading:t.loading,disabled:t.loading,color:"orange"},on:{click:t.register},nativeOn:{click:function(e){t.loader="loading"}}},[t._v("\n            submit\n          ")])],1),t._v(" "),n("v-snackbar",{attrs:{timeout:t.timeout,color:"green"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          Player created, taking you back to players' list in a moment.\n          "),n("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1),t._v(" "),n("div",{staticClass:"error",domProps:{innerHTML:t._s(t.error)}})],1)],1)],1)},staticRenderFns:[]},R=n("VU/8")(T,D,!1,function(t){n("dhD+")},"data-v-681c1fc6",null).exports,C={props:["id"],data:function(){return{player:{},topics:[],loader:null,loading:!1,snackbar:!1,timeout:3e3}},methods:{changeTopicState:function(t){t.isDeselected=!t.isDeselected},savePlayerDetails:function(){var t=this;return f()(d.a.mark(function e(){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n=0;n<t.topics.length;n++)null!=t.player.skipQuestions?t.topics[n].isDeselected?t.player.skipQuestions.includes(t.topics[n].id)||t.player.skipQuestions.push(t.topics[n].id):t.player.skipQuestions.includes(t.topics[n].id)&&t.player.skipQuestions.splice(t.player.skipQuestions.indexOf(t.topics[n].id),1):(t.player.skipQuestions=[],t.topics[n].isDeselected&&t.player.skipQuestions.push(t.topics[n].id));return e.prev=1,e.next=4,y(t.player);case 4:t.snackbar=!0,setTimeout(function(){t.$router.go(-1)},3e3),t.$store.dispatch("retrieveUpdatedPlayers"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t.error=e.t0.response.data.error;case 12:case"end":return e.stop()}},e,t,[[1,9]])}))()}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout(function(){return t[e]=!1},3e3),this.loader=null}},created:function(){var t=this;return f()(d.a.mark(function e(){var n,r,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t.id);case 2:return n=e.sent,t.player=n.data,e.next=6,x();case 6:for(r=e.sent,t.topics=r.data,s=0;s<t.topics.length;s++)null==t.player.skipQuestions?t.$set(t.topics[s],"isDeselected",!1):t.player.skipQuestions.includes(t.topics[s].id)?t.$set(t.topics[s],"isDeselected",!0):t.$set(t.topics[s],"isDeselected",!1);case 9:case"end":return e.stop()}},e,t)}))()}},z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Onderwerpen")]),t._v(" "),n("p",[t._v("Deselecteer de onderwerpen die je wilt vermijden")]),t._v(" "),n("p",[t._v(" "+t._s(t.player.name)+" ")]),t._v(" "),n("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.topics,function(e,r){return n("v-flex",{key:r,attrs:{xs4:""}},[n("v-btn",{class:e.isDeselected?"disabled":"enabled",attrs:{large:""},on:{click:function(n){t.changeTopicState(e)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)}))],1),t._v(" "),n("div",{staticClass:"text-xs-center"},[n("v-btn",{attrs:{loading:t.loading,disabled:t.loading,color:"deep-purple"},on:{click:t.savePlayerDetails},nativeOn:{click:function(e){t.loader="loading"}}},[t._v("Save\n    ")]),t._v(" "),n("v-snackbar",{attrs:{timeout:t.timeout,color:"green"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      Player updated, taking you back to players' list in a moment.\n      "),n("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)],1)},staticRenderFns:[]},V=n("VU/8")(C,z,!1,function(t){n("W1ag")},"data-v-7dfdd877",null).exports,B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("Category: "+t._s(t.question.category))]),t._v(" "),n("h2",[t._v(t._s(t.question.question))]),t._v(" "),t._l(t.question.subquestions,function(e){return n("h3",[t._v(t._s(e))])}),t._v(" "),n("v-btn",{on:{click:t.followUpQuestion}},[t._v("following question")]),t._v(" "),n("v-btn",{on:{click:t.nextTurn}},[t._v("done")]),t._v(" "),n("v-btn",{on:{click:t.addToSkipQuestions}},[t._v("skip")])],2)},staticRenderFns:[]},F={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},N={components:{Question:n("VU/8")({props:["question","subquestions"],data:function(){return{currentQuestion:""}},methods:{addToSkipQuestions:function(){},followUpQuestion:function(){},nextTurn:function(){}}},B,!1,function(t){n("zyrJ")},null,null).exports,Instruction:n("VU/8")({data:function(){return{}}},F,!1,function(t){n("SdEr")},null,null).exports},data:function(){return{currentPlayers:[{}],activePlayer:"",gameStatus:"turn",cards:{player1:0,player2:0},currentQuestion:{},currentSubQuestions:[],showInstructions:!0,showQuestions:!1}},computed:{questions:function(){return this.$store.state.questions}},created:function(){var t=this;return f()(d.a.mark(function e(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("It is "+this._s(this.activePlayer)+" turn.")]),this._v(" "),e("question",{attrs:{question:this.questions[2],subquestions:this.questions[2].subquestions}}),this._v(" "),e("instruction")],1)},staticRenderFns:[]},A=n("VU/8")(N,O,!1,function(t){n("9Ces")},null,null).exports;r.a.use(u.a);var W=new u.a({routes:[{path:"/",name:"welcome",component:q},{path:"/players/profiles",name:"players",component:S},{path:"/players/select",name:"selectPlayers",component:R},{path:"/players/edit/:id",name:"editPlayer",component:V,props:!0},{path:"/game",name:"game",component:A}]}),H=n("3EgV"),J=n.n(H),j=(n("9JMe"),n("7zck"),n("NYxO"));r.a.use(j.a);var L=new j.a.Store({strict:!0,state:{players:[],topics:[],categories:[],questions:[]},getters:{},mutations:{initializePlayers:function(t,e){t.players=e.data,console.log("Players set!")},initializeTopics:function(t,e){t.topics=e.data},initializeQuestions:function(t,e){t.questions=e.data}},actions:{retrieveUpdatedPlayers:function(t){var e=this;return f()(d.a.mark(function n(){var r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:r=e.sent,console.log("Players in retrieveUpdated function: ",r),t.commit("initializePlayers",r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error in getting updated players");case 11:case"end":return e.stop()}},n,e,[[0,8]])}))()}}});r.a.config.productionTip=!1,r.a.use(J.a),window.Event=new r.a,new r.a({el:"#app",router:W,store:L,template:"<App/>",components:{App:l}})},SdEr:function(t,e){},UPkN:function(t,e){},W1ag:function(t,e){},WLhi:function(t,e){},"dhD+":function(t,e){},drsa:function(t,e){},qRxP:function(t,e){},zyrJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6567e1006280c7109bdb.js.map