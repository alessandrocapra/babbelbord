webpackJsonp([1],{"7zck":function(e,t){},HCTz:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),a=r("HCTz"),s=r.n(a),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-toolbar",{attrs:{color:"amber",app:""}},[t("v-toolbar-title",[this._v("Babbelbord")]),this._v(" "),t("v-spacer"),this._v(" "),t("v-btn",{attrs:{icon:"",to:"/"}},[t("v-icon",[this._v("home")])],1),this._v(" "),t("v-btn",{attrs:{icon:""}},[t("v-icon",[this._v("settings")])],1)],1)},staticRenderFns:[]},o=function(e){r("c4lw")},c={name:"app",components:{PageHeader:r("VU/8")(s.a,i,!1,o,"data-v-0cc1d77e",null).exports}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",[t("page-header"),this._v(" "),t("main",[t("v-container",{attrs:{fluid:""}},[t("router-view")],1)],1)],1)],1)},staticRenderFns:[]},u=r("VU/8")(c,l,!1,function(e){r("WLhi")},null,null).exports,v=r("/ocq"),p={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"welcome"},[t("h1",[this._v("Welcome to Babbelbord!")]),this._v(" "),t("p",[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque blanditiis, corporis doloremque esse eum fuga id illo iusto molestiae mollitia odio quaerat ratione repudiandae sint tenetur totam ut! Non.")])])}]},d=r("VU/8")({data:function(){return{msg:"Welcome to Your Vue.js App"}}},p,!1,function(e){r("sT9W")},"data-v-c42859a8",null).exports,m=r("Xxa5"),f=r.n(m),_=r("exGp"),h=r.n(_),b=r("mtWM"),w=r.n(b),x=function(){return w.a.create({baseURL:"http://localhost:8081/"})},g=function(){return x().get("/api/players")},y=function(e){return x().post("/api/players/create",e)},k={data:function(){return{players_list:[]}},created:function(){var e=this;return h()(f.a.mark(function t(){var r;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:r=t.sent,e.players_list=r.data;case 4:case"end":return t.stop()}},t,e)}))()}},W={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",[r("h2",[e._v("Selecteer spelers")]),e._v(" "),r("p",[e._v("Selecteer twee spelers voor het babbelbord spel")]),e._v(" "),r("p",[e._v("Kies een van de volgende spelers")]),e._v(" "),r("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.players_list,function(t){return r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticClass:"headline"},[e._v(e._s(t.name)+" "+e._s(t.lastname))]),e._v(" "),r("div",[e._v("Onderwerpen vermijden:")])]),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{flat:"",dark:""}},[e._v("Listen now")])],1)],1)],1)}))],1),e._v(" "),r("v-btn",{attrs:{color:"orange",to:"/players/create"}},[e._v("Create new player")])],1)},staticRenderFns:[]},C=r("VU/8")(k,W,!1,function(e){r("wGlw")},"data-v-73ed9690",null).exports,E={data:function(){return{name:"",lastname:"",error:null,valid:!0}},methods:{register:function(){var e=this;return h()(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y({name:e.name,lastname:e.lastname});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 8:case"end":return t.stop()}},t,e,[[0,5]])}))()},clear:function(){this.$refs.form.reset()}}},V={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"","justify-center":""}},[r("v-form",{attrs:{xs8:""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("v-text-field",{attrs:{label:"Surname",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}}),e._v(" "),r("v-btn",{attrs:{flat:"",color:"orange"},on:{click:e.clear}},[e._v("clear")]),e._v(" "),r("v-btn",{attrs:{disabled:!e.valid,color:"orange"},on:{click:e.register}},[e._v("\n          submit\n        ")])],1)],1),e._v(" "),r("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}})],1)],1)},staticRenderFns:[]},$=r("VU/8")(E,V,!1,function(e){r("mjwS")},"data-v-2d72124f",null).exports;n.a.use(v.a);var j=new v.a({routes:[{path:"/",name:"welcome",component:d},{path:"/players",name:"players",component:C},{path:"/players/create",name:"createPlayer",component:$}]}),q=r("3EgV"),H=r.n(q);r("7zck");n.a.config.productionTip=!1,n.a.use(H.a),new n.a({el:"#app",router:j,template:"<App/>",components:{App:u}})},WLhi:function(e,t){},c4lw:function(e,t){},mjwS:function(e,t){},sT9W:function(e,t){},wGlw:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c1d9260ff07b60c7d98c.js.map