webpackJsonp([1],{Jeve:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"ui container",attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},r,!1,function(t){a("lcmJ")},null,null).exports,i=a("/ocq"),l=a("WaEV"),o=a.n(l),c=a("mtWM"),u=a.n(c),d={name:"bar",props:["chartdata","label","url","chartId"],data:function(){return{localChartData:this.chartData,isBusy:!1}},methods:{load:function(){var t=this.localChartData,s=document.getElementById(this.chartId).getContext("2d");new o.a(s,{type:"horizontalBar",data:{labels:t.map(function(t){return(null===t.firstName?"":t.firstName)+" "+(null===t.lastName?"":t.lastName)}),datasets:[{label:this.label,data:t.map(function(t){return t.count}),backgroundColor:t.map(function(t){for(var s="0123456789ABCDEF".split(""),a="#",e=0;e<6;e++)a+=s[Math.floor(16*Math.random())];return a})}]}})}},mounted:function(){var t=this;this.isBusy=!0,u.a.get(this.url+"/api2/"+this.label+"/top/"+this.$route.params.chatId).then(function(s){var a=s.data;t.localChartData=a,t.load(),t.isBusy=!1}).catch(function(s){console.log(s),t.isBusy=!0})}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card fluid card"},[s("div",{staticClass:"content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:this.isBusy,expression:"isBusy"}],staticClass:"ui active inverted dimmer"},[s("div",{staticClass:"ui text loader"},[this._v("Loading")])]),this._v(" "),s("canvas",{attrs:{id:this.chartId}})])])},staticRenderFns:[]},v=a("VU/8")(d,h,!1,null,null,null).exports,m={name:"chart",props:["chartdata","label","url","chartId","backgroundColor","borderColor","borderWidth","type"],data:function(){return{localChartData:this.chartData,isBusy:!1}},methods:{load:function(){var t=this.localChartData,s=document.getElementById(this.chartId).getContext("2d");new o.a(s,{type:"line",data:{labels:t.map(function(t){return t.day}),datasets:[{label:this.label,data:t.map(function(t){return t.count}),backgroundColor:this.backgroundColor,borderColor:this.borderColor,borderWidth:this.borderWidth}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{time:{unit:"day"}}]}}})}},mounted:function(){var t=this;this.isBusy=!0,u.a.get(this.url+"/api2/"+this.label+"/trend/"+this.$route.params.chatId).then(function(s){var a=s.data;t.localChartData=a,t.load(),t.isBusy=!1}).catch(function(s){console.log(s),t.isBusy=!1})}},j={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card fluid card"},[s("div",{staticClass:"content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:this.isBusy,expression:"isBusy"}],staticClass:"ui active inverted dimmer"},[s("div",{staticClass:"ui text loader"},[this._v("Loading")])]),this._v(" "),s("canvas",{attrs:{id:this.chartId}})])])},staticRenderFns:[]},p=a("VU/8")(m,j,!1,null,null,null).exports,f={name:"today",props:["type","url"],data:function(){return{today:{},isBusy:!1,chatId:this.$route.params.chatId}},mounted:function(){var t=this;this.isBusy=!0,u.a.get(this.url+"/api2/"+this.type+"/stat/"+this.$route.params.chatId).then(function(s){var a=s.data;t.today=a}).catch(function(s){console.log(s),t.isBusy=!1})}},g={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"ui statistic"},[a("div",{staticClass:"value"},[t._v("\n            "+t._s(t.today.todayCount)+"\n        ")]),t._v(" "),a("div",{staticClass:"label"},[t._v("\n            Today "+t._s(this.type)+"\n        ")])]),t._v(" "),a("div",{staticClass:"description"},[t._v("\n        "+t._s(t.today.trend)+t._s(t.today.percentage)+"% of "+t._s(t.today.yesterdayCount)+" yesterday\n        ")])])])},staticRenderFns:[]},b=a("VU/8")(f,g,!1,null,null,null).exports,y={name:"joined",props:["url"],data:function(){return{users:[],isBusy:!1,chatId:this.$route.params.chatId}},mounted:function(){var t=this;this.isBusy=!0,u.a.get(this.url+"/api2/users/last/"+this.$route.params.chatId).then(function(s){var a=s.data;t.users=a}).catch(function(s){console.log(s),t.isBusy=!1})}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v("5 last joined users:")]),t._v(" "),a("div",{staticClass:"description"},[a("div",{staticClass:"left aligned column"},t._l(t.users,function(s){return a("div",{key:s.firstName,staticClass:"ui vertical fluid menu"},[a("div",{staticClass:"header item"},[t._v("\n            "+t._s(s.firstName)+" "),a("a",{directives:[{name:"show",rawName:"v-show",value:s.username,expression:"user.username"}],attrs:{href:"https://t.me/"+s.username}},[t._v("@"+t._s(s.username))])])])}))])])])},staticRenderFns:[]},C=a("VU/8")(y,_,!1,null,null,null).exports,k={name:"total",props:["type","url"],data:function(){return{total:{},isBusy:!1,chatId:this.$route.params.chatId}},mounted:function(){var t=this;this.isBusy=!0,u.a.get(this.url+"/api2/"+this.type+"/total/"+this.$route.params.chatId).then(function(s){var a=s.data;t.total=a}).catch(function(s){console.log(s),t.isBusy=!1})}},w={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"content"},[s("div",{staticClass:"ui statistic"},[s("div",{staticClass:"value"},[this._v("\n            "+this._s(this.total.total)+"\n          ")]),this._v(" "),s("div",{staticClass:"label"},[this._v("\n            Total "+this._s(this.type)+"\n          ")])])])])},staticRenderFns:[]},x=a("VU/8")(k,w,!1,null,null,null).exports,z=a("lEct"),B=(a("Jeve"),{inject:["config"],name:"ChartApp",data:function(){return{today:{},total:{},lastUsers:[],url:this.config.url,chatId:this.$route.params.chatId}},components:{VueTabs:z.VueTabs,VTab:z.VTab,chart:p,bar:v,today:b,joined:C,total:x}}),E={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"ui two column grid cards"},[a("total",{attrs:{url:this.url,type:"messages"}}),t._v(" "),a("total",{attrs:{url:this.url,type:"stickers"}})],1),t._v(" "),a("div",{staticClass:"ui three column grid cards"},[a("today",{attrs:{type:"messages",url:this.url}}),t._v(" "),a("today",{attrs:{type:"stickers",url:this.url}}),t._v(" "),a("joined",{attrs:{url:this.url}})],1),t._v(" "),a("div",{staticClass:"ui one column cards grid"},[a("div",{staticClass:"card fluid card"},[a("div",{staticClass:"content"},[a("vue-tabs",{attrs:{"active-tab-color":"#175","active-text-color":"white",type:"pills",centered:""}},[a("v-tab",{attrs:{title:"Daily activity"}},[a("div",{staticClass:"ui one column cards grid",staticStyle:{"margin-top":"20px"}},[a("chart",{attrs:{label:"Messages",url:this.url,"chart-id":"messages","background-color":"rgba(255, 99, 132, 0.2)","border-color":"rgba(255,99,132,1)","border-width":"1"}})],1),t._v(" "),a("div",{staticClass:"ui one column cards grid"},[a("chart",{attrs:{label:"Stickers",url:this.url,"chart-id":"stickers","background-color":"rgba(152, 99, 132, 0.2)","border-color":"rgba(152,99,132,1)","border-width":"1"}})],1)]),t._v(" "),a("v-tab",{attrs:{title:"User activity"}},[a("div",{staticClass:"ui one column cards grid"},[a("bar",{attrs:{label:"Messages",url:this.url,"chart-id":"top-messages"}})],1),t._v(" "),a("div",{staticClass:"ui one column cards grid"},[a("bar",{attrs:{label:"Stickers",url:this.url,"chart-id":"top-stickers"}})],1)])],1)],1)])])])},staticRenderFns:[]},F=a("VU/8")(B,E,!1,null,null,null).exports,I={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},I,!1,function(t){a("Ugm9")},"data-v-694cd902",null).exports;e.default.use(i.a);var V=new i.a({mode:"history",routes:[{path:"/chats/:chatId",name:"ChartApp",component:F}]}),N=a("myK/"),U=a.n(N);a("kVq8");e.default.config.productionTip=!1,e.default.use(U.a);new e.default({el:"#app",router:V,components:{App:n,ChartApp:F},template:"<App/>",provide:{config:{url:"http://progconfbotvue.herokuapp.com"}}})},Ugm9:function(t,s){},kVq8:function(t,s){},lcmJ:function(t,s){},uslO:function(t,s,a){var e={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return a(n(t))}function n(t){var s=e[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}r.keys=function(){return Object.keys(e)},r.resolve=n,t.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.e561cd11ee36c98be2ec.js.map