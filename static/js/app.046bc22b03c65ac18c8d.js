webpackJsonp([1],{"3zrL":function(t,a){},"8lpa":function(t,a){},M63f:function(t,a){},NHnr:function(t,a,e){"use strict";function s(t,a){var e=t.start.date||t.start.dateTime,s=a.start.date||a.start.dateTime,n=isFinite(e=new Date(e).valueOf()),i=isFinite(s=new Date(s).valueOf());return n&&i?(e>s)-(e<s):NaN}function n(t){return gapi.client.init({apiKey:b}).then(function(){return gapi.client.request({path:"https://www.googleapis.com/calendar/v3/calendars/"+t.calendarName+"/events?singleEvents=true&maxResults="+t.maxResults+"&orderBy=startTime&timeMin="+t.timeMin})})}function i(t){console.log("Error: "+t.result.error.message)}Object.defineProperty(a,"__esModule",{value:!0});var r=e("/5sW"),l=e("TXmL"),o=e("K/Lq"),c=e.n(o),d={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]},u=e("VU/8")({name:"app"},d,!1,function(t){e("pjWq")},null,null).exports,m=e("/ocq"),h=e("PJh5"),f=e.n(h),v=(e("CFqe"),{name:"Splash",data:function(){return{}},methods:{toggleLanguage:function(){"gr"===this.$i18n.locale?(this.$i18n.locale="en",this.$cookie.delete("hfxgreeks_language"),this.$cookie.set("hfxgreeks_language","en",7)):(this.$i18n.locale="gr",this.$cookie.delete("hfxgreeks_language"),this.$cookie.set("hfxgreeks_language","gr",7))},generateBulletinLink:function(){return"http://www.halifaxgreeks.ca/current-bulletin/"+f()().format("YYYY")+"-"+f()().format("MM")+"-post.pdf"}}}),g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"splash"},[e("section",{staticClass:"bgimage"},[e("div",{staticClass:"container h-90 d-flex justify-content-center"},[e("div",{staticClass:"jumbotron header-div"},[e("a",{staticClass:"language-toggle-btn btn btn-warning rounded-0",on:{click:t.toggleLanguage}},[t._v(t._s(t.$t("splash.toggle")))]),t._v(" "),e("h1",{staticClass:"display-3 hero-text"},[t._v(t._s(t.$t("splash.mainTitle")))]),t._v(" "),e("br"),t._v(" "),e("nav",{staticClass:"nav flex-column flex-md-row"},[e("a",{staticClass:"nav-link btn btn-outline-info btn-menu-c rounded-0",attrs:{href:"#/events"}},[t._v(t._s(t.$t("events.heading")))]),t._v(" "),e("a",{staticClass:"nav-link btn btn-outline-info btn-menu-c rounded-0",attrs:{href:t.generateBulletinLink()}},[t._v(t._s(t.$t("splash.bulletin")))]),t._v(" "),e("a",{staticClass:"nav-link btn btn-outline-info btn-menu-c rounded-0",attrs:{href:"#/information"}},[t._v(t._s(t.$t("info.heading")))]),t._v(" "),e("a",{staticClass:"nav-link btn btn-outline-info btn-menu-c rounded-0",attrs:{href:"#/contact-us"}},[t._v(t._s(t.$t("contact.heading")))]),t._v(" "),e("a",{staticClass:"nav-link btn btn-outline-info btn-menu-c rounded-0",attrs:{href:"#/community-directory"}},[t._v(t._s(t.$t("communityDirectory.heading")))])])])])])])},staticRenderFns:[]},j=e("VU/8")(v,g,!1,function(t){e("d1k2")},null,null).exports,p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light sticky-top rounded"},[t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo01"}},[e("ul",{staticClass:"navbar-nav mt-2 mt-lg-0"},[e("router-link",{staticClass:"nav-item",attrs:{tag:"li",to:{name:"Splash"},"active-class":"active"}},[e("a",{staticClass:"nav-link btn btn-outline-info btn-menu-c rounded-0"},[t._v(t._s(t.$t("splash.title")))])]),t._v(" "),e("router-link",{staticClass:"nav-item",attrs:{tag:"li",to:{name:"Events"},"active-class":"active"}},[e("a",{staticClass:"nav-link btn btn-outline-info btn-menu-c rounded-0"},[t._v(t._s(t.$t("events.heading")))])]),t._v(" "),e("router-link",{staticClass:"nav-item",attrs:{tag:"li",to:{name:"CommunityDirectory"},"active-class":"active"}},[e("a",{staticClass:"nav-link btn btn-outline-info btn-menu-c rounded-0"},[t._v(t._s(t.$t("communityDirectory.heading")))])])],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]},y=e("VU/8")({name:"navigation",data:function(){return{}},methods:{},mounted:function(){}},p,!1,function(t){e("wDWx")},"data-v-96b10afa",null).exports,b="AIzaSyDp00A7Ol9o-65hJ8dIGkKOQVdTq5p_dVQ",_={name:"Events",data:function(){return{masterList:[]}},methods:{addToMasterArray:function(t){Array.prototype.push.apply(this.masterList,t.result.items),this.masterList.sort(s)},isSameDayEvent:function(t){return!!t.start.dateTime&&!!f()(t.start.dateTime).isSame(f()(t.end.dateTime),"day")},isSingleAllDayEvent:function(t){return!!(t.start.date&&f.a.duration(f()(t.end.date).diff(f()(t.start.date))).asHours()<=24)},extractSingleDayTime:function(t){var a=f()(t.start.dateTime).format("h:mm"),e=f()(t.end.dateTime),s=e.format("h:mm A"),n=a.split(":"),i=s.split(":");return-1!=n[1].indexOf("00")&&-1!=i[1].indexOf("00")&&(a=n[0],s=i[0]+e.format(" A")),a+" - "+s},extractDayMonth:function(t){var a=f()(t.start.date||t.start.dateTime),e=(f()(t.end.date||t.end.dateTime),"D MMM");return"el"!==f.a.locale()&&(e="MMM D"),a.format(e)},extractMonth:function(t){return f()(t.start.date||t.start.dateTime).format("MMMM")},extractDayOfWeek:function(t){return f()(t.start.date||t.start.dateTime).format("ddd")}},mounted:function(){var t=this,a=f()().startOf("day").toISOString();gapi.load("client",function(){n({calendarName:"greekbulletin@halifaxgreeks.ca",maxResults:50,timeMin:a}).then(t.addToMasterArray,i),n({calendarName:"greekschool@halifaxgreeks.ca",maxResults:50,timeMin:a}).then(t.addToMasterArray,i),n({calendarName:"info@halifaxgreeks.ca",maxResults:50,timeMin:a}).then(t.addToMasterArray,i),n({calendarName:"metyouth@halifaxgreeks.ca",maxResults:50,timeMin:a}).then(t.addToMasterArray,i),n({calendarName:"philoptochos@halifaxgreeks.ca",maxResults:50,timeMin:a}).then(t.addToMasterArray,i),n({calendarName:"pta@halifaxgreeks.ca",maxResults:50,timeMin:a}).then(t.addToMasterArray,i),n({calendarName:"romiosyni@halifaxgreeks.ca",maxResults:50,timeMin:a}).then(t.addToMasterArray,i),n({calendarName:"volunteer@greekfest.org",maxResults:50,timeMin:a}).then(t.addToMasterArray,i),n({calendarName:"webteam@halifaxgreeks.ca",maxResults:50,timeMin:a}).then(t.addToMasterArray,i),n({calendarName:"fellowship@halifaxgreeks.ca",maxResults:50,timeMin:a}).then(t.addToMasterArray,i)}),"gr"===this.$i18n.locale?f.a.locale("el"):f.a.locale("en")}},x={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"events bgimage blurred"},[e("div",{staticClass:"container container-small"},[e("h1",{staticClass:"heading"},[t._v(t._s(t.$t("events.heading")))]),t._v(" "),e("navigation"),t._v(" "),t._l(t.masterList,function(a,s){return e("div",{key:a.id},[s>0&&t.extractMonth(a)!==t.extractMonth(t.masterList[s-1])||0===s?e("h2",{staticClass:"month-heading"},[t._v(t._s(t.extractMonth(a)))]):t._e(),t._v(" "),e("div",{staticClass:"row no-gutters",staticStyle:{color:"#fff","text-decoration":"none"}},[e("div",{staticClass:"col-3 col-sm-2"},[s>0&&t.extractDayMonth(a)!==t.extractDayMonth(t.masterList[s-1])||0===s?e("div",[e("h5",{staticClass:"mb-0"},[t._v(t._s(t.extractDayMonth(a)))]),t._v("\n            "+t._s(t.extractDayOfWeek(a))+"\n          ")]):t._e()]),t._v(" "),e("div",{staticClass:"col"},[e("a",{attrs:{href:a.htmlLink,target:"_blank"}},[e("div",{staticClass:"calendar-item",class:a.organizer.email.replace(/@|\./g,"")},[e("div",[t._v(t._s(a.summary))]),t._v(" "),void 0!==a.description?e("p",{domProps:{innerHTML:t._s(a.description)}}):t._e(),t._v(" "),t.isSameDayEvent(a)?e("p",[t._v(t._s(t.extractSingleDayTime(a)))]):t._e(),t._v(" "),e("p",{staticClass:"organizer-email"},[t._v(t._s(a.organizer.email))])])])])])])})],2)])},staticRenderFns:[]},k=e("VU/8")(_,x,!1,function(t){e("8lpa")},"data-v-5f421b48",null).exports,C={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"info bgimage blurred"},[a("div",{staticClass:"container container-small"},[a("h1",{staticClass:"heading"},[this._v(this._s(this.$t("info.heading")))]),this._v(" "),a("div",{staticClass:"list-group"},[a("div",{staticClass:"single-card"},[a("div",{staticClass:"list-group-item flex-column align-items-start"},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-1 card-heading"},[this._v(this._s(this.$t("info.communityHallRental.title")))]),this._v(" "),a("p")]),this._v(" "),a("p",{staticClass:"mb-1"},[this._v(this._s(this.$t("info.communityHallRental.text")))]),this._v(" "),a("small",[this._v(this._s(this.$t("info.communityHallRental.contractText"))+" "),a("a",{attrs:{href:"static/pdfs/St-Georges-Greek-Hall-Rental-Contract-Jan-2011.pdf"}},[this._v("PDF")])])])])])])])},staticRenderFns:[]},M=e("VU/8")({name:"Info",data:function(){return{}},methods:{},mounted:function(){}},C,!1,function(t){e("3zrL")},"data-v-32fa656c",null).exports,w={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"contact bgimage blurred"},[a("div",{staticClass:"container container-small"},[a("h1",{staticClass:"heading"},[this._v(this._s(this.$t("contact.heading")))])])])},staticRenderFns:[]},z=e("VU/8")({name:"Contact",data:function(){return{}},methods:{},mounted:function(){}},w,!1,function(t){e("M63f")},"data-v-8209c5c2",null).exports,T=e("K6ED"),R=e.n(T),D=e("C4MV"),E=e.n(D),L={name:"CommunityDirectory",data:function(){return{cards:[]}},methods:{},mounted:function(){self=this,fetch("https://api.trello.com/1/board/5a4bdbd67abf0132fd60546a?key=7be906a758676f380f82ff25075964fe&cards=open&lists=open").then(function(t){return t.json()}).then(function(t){!function(t){for(var a={},e={},s=0;s<t.lists.length;s++)a[t.lists[s].id]=[],e[t.lists[s].id]=t.lists[s].name;for(s=0;s<t.cards.length;s++)a[t.cards[s].idList].push(t.cards[s]);for(s=0;s<t.lists.length;s++)E()(a,e[t.lists[s].id],R()(a,t.lists[s].id)),delete a[t.lists[s].id];self.cards=a["Community Directory"]}(t)})}},N={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"community-directory bgimage blurred"},[e("div",{staticClass:"container container-small"},[e("h1",{staticClass:"heading"},[t._v(t._s(t.$t("communityDirectory.heading")))]),t._v(" "),e("navigation"),t._v(" "),e("div",{staticClass:"list-group"},t._l(t.cards,function(a){return e("div",{staticClass:"single-card"},[e("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("h5",{staticClass:"mb-1"},[t._v(t._s(a.name))])]),t._v(" "),e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("p",{staticClass:"mb-1",domProps:{innerHTML:t._s(a.desc)}})])])])}))],1)])},staticRenderFns:[]},F=e("VU/8")(L,N,!1,function(t){e("ujeA")},"data-v-24d5af15",null).exports;r.a.use(m.a);var O=new m.a({routes:[{path:"/",name:"Splash_root",component:j},{path:"/splash",name:"Splash",component:j},{path:"/events",name:"Events",component:k},{path:"/information",name:"Information",component:M},{path:"/contact-us",name:"Contact",component:z},{path:"/community-directory",name:"CommunityDirectory",component:F}]});r.a.config.productionTip=!1,r.a.use(l.a),r.a.use(c.a);var H=navigator.language||navigator.userLanguage;H=-1!==(H=H.toLowerCase()).indexOf("gr")?"gr":"en";var S=r.a.cookie.get("hfxgreeks_language");void 0===S&&null===S||(H=S);var $=new l.a({locale:H,fallbackLocale:"en",messages:{en:{splash:{mainTitle:"St. George's Greek Orthodox Church and Community Centre",toggle:"Αλλαγή Γλώσσας",bulletin:"Current Monthly Bulletin",title:"Home"},events:{heading:"Upcoming Events",allDay:"All day"},info:{heading:"General Information",communityHallRental:{title:"Community Hall Reservations",text:"Our Community Hall, at 38 Purcell's Cove Road, Halifax, NS, B3N 1R4, is available for rental as a banquet hall. It has a great location, overlooking the waters of Purcell's Cove, and it comes with ample parking , and an outdoor patio. Catering is available, if desired. For more information and reservations, call Jimmy Kyriakakis at (902) 830-1829 (cell).",contractText:"Hall rental terms and conditions, rates and contract:"}},contact:{heading:"Contact Us"},communityDirectory:{heading:"Community Directory"}},gr:{splash:{mainTitle:"Ελληνική Ορθόδοξη Εκκλησία Αγ. Γεωργίου και Κοινοτικό Κέντρο",commHallRent:"Ενοικίαση Κοινοτικής Αίθουσας",bylaws:"Εσωτερικοί Κανονισμοί",contactinfo:"Πληροφορίες Επικοινωνίας",announcements:"Ανακοινώσεις",toggle:"Switch to English",events:"Προσεχείς Εκδηλώσεις",bulletin:"Τρέχον Μηνιαίο Δελτίο",title:"Αρχική Σελίδα"},events:{heading:"Προσεχείς Εκδηλώσεις",allDay:"Ολοήμερο"},info:{heading:"Γενική Πληροφόρηση",communityHallRental:{title:"Ενοικίαση Κοινοτικής Αίθουσας",text:"Η Κοινοτική αίθουσά μας, που βρίσκεται στη διεύθυνση 38 Purcell's Cove Road, Halifax, NS, B3N 1R4, είναι διαθέσιμη για ενοικίαση ως αίθουσα εκδηλώσεων. Τοποθετημένη επάνω στον κολπίσκο του Purcell, με πολύ γραφική θέα του όρμου, διαθέτει επίσης μεγάλο χώρο στάθμευσης και αυλή. Τροφοδοσία διαθέσιμη. Για περισσότερες πληροφορίες και για να κάνετε κράτηση, τηλεφωνήστε στον Τζίμι Κυριακάκη, αριθμός (902) 830-1829 (κινητό).",contractText:"Όροι και προϋποθέσεις ενοικίασης, τιμές και συμβόλαιο:"}},contact:{heading:"Επικοινωνήστε Μαζί Μας"},communityDirectory:{heading:"Κοινοτικός Τηλ/ός Κατάλογος"}}}});r.a.component("navigation",y),new r.a({router:O,i18n:$,el:"#app",render:function(t){return t(u)}})},d1k2:function(t,a){},pjWq:function(t,a){},ujeA:function(t,a){},uslO:function(t,a,e){function s(t){return e(n(t))}function n(t){var a=i[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id="uslO"},wDWx:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.046bc22b03c65ac18c8d.js.map