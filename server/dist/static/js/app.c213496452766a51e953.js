webpackJsonp([1],{"0wGz":function(e,t){},"7zck":function(e,t){},"9Ces":function(e,t){},ABBJ:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r={data:function(){return{title:"",backArrow:!1}},methods:{goBack:function(){this.$router.go(-1)}},created:function(){var e=this;Event.$on("toolbar-data",function(t,n){e.title=t,e.backArrow=n})}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{color:"amber",app:""}},[e.backArrow?n("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:e.goBack}},[n("v-icon",[e._v("arrow_back")])],1):e._e(),e._v(" "),n("v-toolbar-title",[e._v(e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:"",to:"/"}},[n("v-icon",[e._v("home")])],1),e._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("settings")])],1)],1)},staticRenderFns:[]},s=n("VU/8")(r,i,!1,function(e){n("ABBJ")},"data-v-4b2527de",null).exports,o={name:"app",components:{PageHeader:s}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",[t("page-header"),this._v(" "),t("main",[t("v-container",{attrs:{fluid:""}},[t("router-view")],1)],1)],1)],1)},staticRenderFns:[]},c=n("VU/8")(o,l,!1,function(e){n("WLhi")},null,null).exports,v=n("/ocq"),u=n("Xxa5"),d=n.n(u),p=n("exGp"),f=n.n(p),m=n("mtWM"),h=n.n(m),_=function(){return h.a.create({baseURL:"https://babbelbord.herokuapp.com/"})},y=function(){return _().get("/api/players")},b=function(e){return _().get("/api/player/"+e)},g=function(e){return _().post("/api/player/update",e)},k=function(e){return _().post("/api/players/create",e)},w=function(){return _().get("/api/topics")},x=function(){return _().get("/api/questions")},P={data:function(){return{loading:!0}},created:function(){var e=this;return f()(d.a.mark(function t(){var n,a,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Event.$emit("toolbar-data","Babbelbord",!1),t.next=3,y();case 3:return n=t.sent,t.next=6,w();case 6:return a=t.sent,t.next=9,x();case 9:r=t.sent,e.$store.commit("initializePlayers",n),e.$store.commit("initializeTopics",a),e.$store.commit("initializeQuestions",r),e.loading=!1;case 14:case"end":return t.stop()}},t,e)}))()}},$={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{attrs:{"text-xs-center":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[t("v-content",[t("div",{staticClass:"welcome"},[t("h1",{staticClass:"display-2"},[this._v("Welcome to Babbelbord!")]),this._v(" "),t("p",[this._v("Here we should put a brief description of the game perhaps?")])]),this._v(" "),this.loading?t("div",{staticClass:"text-xs-center"},[t("v-progress-circular",{attrs:{indeterminate:"",size:100,width:3,color:"deep-purple"}}),this._v(" "),t("p",[this._v("Retrieving data...")])],1):this._e()])],1),this._v(" "),t("v-flex",{attrs:{xs12:""}},[t("v-btn",{attrs:{disabled:this.loading,dark:"",color:"deep-purple",to:"/players/select"}},[this._v("\n        Start game\n      ")]),this._v(" "),t("v-btn",{attrs:{disabled:this.loading,dark:"",color:"deep-purple",to:"/players/profiles"}},[this._v("\n        Profiles\n      ")])],1)],1)],1)},staticRenderFns:[]},C=n("VU/8")(P,$,!1,function(e){n("XTSF")},"data-v-046a756f",null).exports,q={components:{PageHeader:s},data:function(){return{loading:!0}},watch:{players_list:function(){this.loading=!1}},computed:{players_list:function(){return this.$store.state.players},topics:function(){return this.$store.state.topics}},created:function(){var e=this;return f()(d.a.mark(function t(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:Event.$emit("toolbar-data","Spelers",!0);case 1:case"end":return e.stop()}},t,e)}))()}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Selecteer spelers")]),e._v(" "),n("p",[e._v("Selecteer twee spelers voor het babbelbord spel")]),e._v(" "),n("p",[e._v("Kies een van de volgende spelers")]),e._v(" "),n("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.players_list,function(t,a){return n("v-flex",{key:a,attrs:{xs4:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[e._v(e._s(t.name)+" "+e._s(t.lastname))]),e._v(" "),n("div",[e._v("Topics avoided:\n                "),e._l(t.skipQuestions,function(t){return n("span",e._l(e.topics,function(a){return a.id==t?n("v-chip",{key:a.id,attrs:{color:"amber","text-color":"black"}},[e._v(e._s(a.name))]):e._e()}))})],2)])]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",to:"/players/edit/"+t.id,color:"deep-purple"}},[e._v("Edit")])],1)],1)],1)}))],1),e._v(" "),n("v-fab-transition",[n("v-btn",{staticStyle:{"margin-bottom":"3em","margin-right":"1em"},attrs:{dark:"",fab:"",fixed:"",absolute:"",bottom:"",right:"",color:"deep-purple",to:"/players/create"}},[n("v-icon",[e._v("add")])],1)],1)],1)},staticRenderFns:[]},Q=n("VU/8")(q,E,!1,function(e){n("drsa")},"data-v-2fa5d575",null).exports,S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-card",[t("v-card-title",{attrs:{"primary-title":""}},[t("div",[t("h3",{staticClass:"headline mb-0"},[this._v(this._s(this.title))])])]),this._v(" "),this._t("default")],2)},staticRenderFns:[]},F={props:["player","active"],data:function(){return{}},methods:{toggleItem:function(e){Event.$emit("item-selected",e.id)}},computed:{topics:function(){return this.$store.state.topics}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-tile",{key:e.player.id,class:{enabled:e.active},attrs:{avatar:""},on:{click:function(t){t.stopPropagation(),e.toggleItem(e.player)}}},[n("v-list-tile-avatar",[n("v-icon",[e._v("face")])],1),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.player.name)+" "+e._s(e.player.lastname)+" ")]),e._v(" "),n("v-list-tile-sub-title",e._l(e.player.skipQuestions,function(t){return n("span",e._l(e.topics,function(a){return a.id==t?n("span",{attrs:{color:"amber","text-color":"black"}},[e._v(" "+e._s(a.name)+" ")]):e._e()}))}))],1),e._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",{attrs:{medium:"",color:"deep-purple"}},[e._v("mode_edit")])],1)],1)],1)},staticRenderFns:[]},U={components:{Panel:n("VU/8")({props:["title"],data:function(){return{}}},S,!1,function(e){n("U27L")},"data-v-4fe156e0",null).exports,PlayerListItem:n("VU/8")(F,T,!1,function(e){n("0wGz")},"data-v-0b50167e",null).exports},data:function(){return{caregiver:{name:""},player:{name:"",lastname:""},selectedPlayer:null,error:null,loader:null,valid:!1,loading:!1,snackbar:!1,timeout:3e3,showList:!0,showCaregiver:!1,showPlayer:!1}},computed:{players:function(){return this.$store.state.players}},methods:{register:function(){var e=this;return f()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k({name:e.player.name,lastname:e.player.lastname});case 3:e.$store.dispatch("retrievePlayers"),e.snackbar=!0,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},switchCaregiverForm:function(){this.showList=!this.showList,this.showCaregiver=!this.showCaregiver},switchPlayerForm:function(){this.showList=!this.showList,this.showPlayer=!this.showPlayer},addPlayer:function(e){console.log("Adding player to summary"),this.player.name=e.name,this.player.lastname=e.lastname},removeCaregiver:function(){this.caregiver.name=""},removePlayer:function(){this.player.name="",this.player.lastname=""}},watch:{loader:function(){var e=this,t=this.loader;this[t]=!this[t],setTimeout(function(){return e[t]=!1},3e3),this.loader=null}},created:function(){Event.$emit("toolbar-data","Nieuw spel",!0)},mounted:function(){var e=this;Event.$on("item-selected",function(t){e.selectedPlayer=t})}},z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"d-flex":"",sm5:"","offset-sm1":""}},[e.players?n("panel",{attrs:{title:"Bestaande spelers"}},[n("v-list",{attrs:{"three-line":""}},[e._l(e.players,function(t){return[n("player-list-item",{attrs:{player:t,active:t.id===e.selectedPlayer},nativeOn:{click:function(n){e.addPlayer(t)}}}),e._v(" "),n("v-divider")]})],2)],1):e._e()],1),e._v(" "),n("v-flex",{attrs:{"d-flex":"",sm5:""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("panel",{attrs:{title:"Nieuwe speler"}},[n("v-list",{directives:[{name:"show",rawName:"v-show",value:e.showList,expression:"showList"}]},[n("v-list-tile",{attrs:{avatar:"",disabled:e.caregiver.name.length>0},on:{click:e.switchCaregiverForm}},[n("v-list-tile-avatar",[n("v-icon",[e._v("accessibility")])],1),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Zorgdrager")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list-tile",{attrs:{avatar:"",disabled:e.player.name.length>0},on:{click:e.switchPlayerForm}},[n("v-list-tile-avatar",[n("v-icon",[e._v("face")])],1),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Bewoner")])],1)],1)],1),e._v(" "),n("v-content",{directives:[{name:"show",rawName:"v-show",value:e.showCaregiver,expression:"showCaregiver"}]},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-form",{attrs:{xs8:""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Naam van de zorgdrager",required:""},model:{value:e.caregiver.name,callback:function(t){e.$set(e.caregiver,"name",t)},expression:"caregiver.name"}}),e._v(" "),n("v-btn",{attrs:{flat:"",color:"orange"},on:{click:e.switchCaregiverForm}},[e._v("terug")]),e._v(" "),n("v-btn",{attrs:{color:"orange"},on:{click:e.switchCaregiverForm}},[e._v("\n                      ok\n                    ")])],1),e._v(" "),n("v-snackbar",{attrs:{timeout:e.timeout,color:"green"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n                    Player created, taking you back to players' list in a moment.\n                    "),n("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1),e._v(" "),n("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}})],1)],1),e._v(" "),n("v-content",{directives:[{name:"show",rawName:"v-show",value:e.showPlayer,expression:"showPlayer"}]},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-form",{attrs:{xs8:""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Naam van de bewoner",required:""},model:{value:e.player.name,callback:function(t){e.$set(e.player,"name",t)},expression:"player.name"}}),e._v(" "),n("v-text-field",{attrs:{label:"Achternaam van de bewoner",required:""},model:{value:e.player.lastname,callback:function(t){e.$set(e.player,"lastname",t)},expression:"player.lastname"}}),e._v(" "),n("v-btn",{attrs:{flat:"",color:"orange"},on:{click:e.switchPlayerForm}},[e._v("terug")]),e._v(" "),n("v-btn",{attrs:{loading:e.loading,disabled:e.loading,color:"orange"},on:{click:e.register},nativeOn:{click:function(t){e.loader="loading"}}},[e._v("\n                      submit\n                    ")])],1),e._v(" "),n("v-snackbar",{attrs:{timeout:e.timeout,color:"green"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n                    Player created, taking you back to players' list in a moment.\n                    "),n("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1),e._v(" "),n("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}})],1)],1)],1)],1),e._v(" "),n("v-flex",{attrs:{"d-flex":""}},[n("panel",{attrs:{title:"Summary"}},[n("v-list",[e.caregiver.name?n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",[n("v-icon",[e._v("accessibility")])],1),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.caregiver.name))])],1),e._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""},on:{click:e.removeCaregiver}},[n("v-icon",{attrs:{medium:"",color:"red lighten-1"}},[e._v("delete")])],1)],1)],1):e._e(),e._v(" "),e.player.name?n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",[n("v-icon",[e._v("face")])],1),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.player.name)+" "+e._s(e.player.lastname))])],1),e._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""},on:{click:e.removePlayer}},[n("v-icon",{attrs:{medium:"",color:"red lighten-1"}},[e._v("delete")])],1)],1)],1):e._e()],1),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("v-btn",{attrs:{color:"amber",disabled:0===e.player.name.length||0===e.caregiver.name.length}},[e._v("Start Game")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},L=n("VU/8")(U,z,!1,function(e){n("je4S")},"data-v-6c0dbead",null).exports,R={props:["id"],data:function(){return{player:{},topics:[],loader:null,loading:!1,snackbar:!1,timeout:3e3}},methods:{changeTopicState:function(e){e.isDeselected=!e.isDeselected},savePlayerDetails:function(){var e=this;return f()(d.a.mark(function t(){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n=0;n<e.topics.length;n++)null!=e.player.skipQuestions?e.topics[n].isDeselected?e.player.skipQuestions.includes(e.topics[n].id)||e.player.skipQuestions.push(e.topics[n].id):e.player.skipQuestions.includes(e.topics[n].id)&&e.player.skipQuestions.splice(e.player.skipQuestions.indexOf(e.topics[n].id),1):(e.player.skipQuestions=[],e.topics[n].isDeselected&&e.player.skipQuestions.push(e.topics[n].id));return t.prev=1,t.next=4,g(e.player);case 4:e.snackbar=!0,setTimeout(function(){e.$router.go(-1)},3e3),e.$store.dispatch("retrievePlayers"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.error=t.t0.response.data.error;case 12:case"end":return t.stop()}},t,e,[[1,9]])}))()}},watch:{loader:function(){var e=this,t=this.loader;this[t]=!this[t],setTimeout(function(){return e[t]=!1},3e3),this.loader=null}},created:function(){var e=this;return f()(d.a.mark(function t(){var n,a,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e.id);case 2:return n=t.sent,e.player=n.data,t.next=6,w();case 6:for(a=t.sent,e.topics=a.data,r=0;r<e.topics.length;r++)null==e.player.skipQuestions?e.$set(e.topics[r],"isDeselected",!1):e.player.skipQuestions.includes(e.topics[r].id)?e.$set(e.topics[r],"isDeselected",!0):e.$set(e.topics[r],"isDeselected",!1);case 9:case"end":return t.stop()}},t,e)}))()}},O={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Onderwerpen")]),e._v(" "),n("p",[e._v("Deselecteer de onderwerpen die je wilt vermijden")]),e._v(" "),n("p",[e._v(" "+e._s(e.player.name)+" ")]),e._v(" "),n("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.topics,function(t,a){return n("v-flex",{key:a,attrs:{xs4:""}},[n("v-btn",{class:t.isDeselected?"disabled":"enabled",attrs:{large:""},on:{click:function(n){e.changeTopicState(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])],1)}))],1),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("v-btn",{attrs:{loading:e.loading,disabled:e.loading,color:"deep-purple"},on:{click:e.savePlayerDetails},nativeOn:{click:function(t){e.loader="loading"}}},[e._v("Save\n    ")]),e._v(" "),n("v-snackbar",{attrs:{timeout:e.timeout,color:"green"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      Player updated, taking you back to players' list in a moment.\n      "),n("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)],1)},staticRenderFns:[]},V=n("VU/8")(R,O,!1,function(e){n("pF8O")},"data-v-99bc1138",null).exports,D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h4",[e._v("Category: "+e._s(e.question.category))]),e._v(" "),n("h2",[e._v(e._s(e.question.question))]),e._v(" "),e._l(e.question.subquestions,function(t){return n("h3",[e._v(e._s(t))])}),e._v(" "),n("v-btn",{on:{click:e.followUpQuestion}},[e._v("following question")]),e._v(" "),n("v-btn",{on:{click:e.nextTurn}},[e._v("done")]),e._v(" "),n("v-btn",{on:{click:e.addToSkipQuestions}},[e._v("skip")])],2)},staticRenderFns:[]},B={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},N={components:{Question:n("VU/8")({props:["question","subquestions"],data:function(){return{currentQuestion:""}},methods:{addToSkipQuestions:function(){},followUpQuestion:function(){},nextTurn:function(){}}},D,!1,function(e){n("zyrJ")},null,null).exports,Instruction:n("VU/8")({data:function(){return{}}},B,!1,function(e){n("SdEr")},null,null).exports},data:function(){return{currentPlayers:[{}],activePlayer:"",gameStatus:"turn",cards:{player1:0,player2:0},currentQuestion:{},currentSubQuestions:[],showInstructions:!0,showQuestions:!1}},computed:{questions:function(){return this.$store.state.questions}},created:function(){var e=this;return f()(d.a.mark(function t(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},t,e)}))()}},A={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h3",[this._v("It is "+this._s(this.activePlayer)+" turn.")]),this._v(" "),t("question",{attrs:{question:this.questions[2],subquestions:this.questions[2].subquestions}}),this._v(" "),t("instruction")],1)},staticRenderFns:[]},j=n("VU/8")(N,A,!1,function(e){n("9Ces")},null,null).exports;a.a.use(v.a);var H=new v.a({routes:[{path:"/",name:"welcome",component:C},{path:"/players/profiles",name:"players",component:Q},{path:"/players/select",name:"selectPlayers",component:L},{path:"/players/edit/:id",name:"editPlayer",component:V,props:!0},{path:"/game",name:"game",component:j}]}),I=n("3EgV"),J=n.n(I),M=(n("9JMe"),n("7zck"),n("NYxO"));a.a.use(M.a);var W=new M.a.Store({strict:!0,state:{players:[],topics:[],categories:[],questions:[]},getters:{},mutations:{initializePlayers:function(e,t){e.players=t.data,console.log("Players set!")},initializeTopics:function(e,t){e.topics=t.data},initializeQuestions:function(e,t){e.questions=t.data}},actions:{retrievePlayers:function(e){var t=this;return f()(d.a.mark(function n(){var a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y();case 3:a=t.sent,console.log("Players in retrieveUpdated function: ",a),e.commit("initializePlayers",a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error in getting updated players");case 11:case"end":return t.stop()}},n,t,[[0,8]])}))()}}});a.a.config.productionTip=!1,a.a.use(J.a),window.Event=new a.a,new a.a({el:"#app",router:H,store:W,template:"<App/>",components:{App:c}})},SdEr:function(e,t){},U27L:function(e,t){},WLhi:function(e,t){},XTSF:function(e,t){},drsa:function(e,t){},je4S:function(e,t){},pF8O:function(e,t){},zyrJ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c213496452766a51e953.js.map