(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"home","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n        Dofus Book\n      ")]),n("div",[e._v("Gaëtan Seigneur v"+e._s(e.$q.version))])],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        Menu de navigation\n      ")]),!1===e.loggedIn?n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/login"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"person",color:"pink"}})],1),n("q-item-section",[e._v("\n              Se Connecter\n            ")])],1):e._e(),!0===e.loggedIn?n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.logout()}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"mail",color:"blue"}})],1),n("q-item-section",[e._v("\n              Logout\n            ")])],1):e._e(),e._l(e.essentialLinks,(function(t){return n("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),n("q-page-container",[n("router-view")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:e.link}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},l=[],r=n("e4fd"),c=Object(r["defineComponent"])({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}}),s=c,u=n("2877"),p=n("66e5"),m=n("4074"),d=n("0016"),b=n("0170"),f=n("eebe"),v=n.n(f),g=Object(u["a"])(s,o,l,!1,null,null,null),k=g.exports;v()(g,"components",{QItem:p["a"],QItemSection:m["a"],QIcon:d["a"],QItemLabel:b["a"]});var q=n("2f62");const _=[{title:"Accueil",caption:"Accueil du site internet",icon:"home",link:"/"},{title:"Actualités",caption:"Retrouve ici les nouvelle fraîche de dofus",icon:"article",link:"#/news"},{title:"Le jeu",caption:"Ici tu peut télécharger la meilleur version du jeux",icon:"games",link:"#/download"},{title:"Connexion",caption:"Connexion à l'espace membre",icon:"login",link:"#/login"},{title:"Inscription",caption:"Inscrit toi et profite de diverse avanatage",icon:"account_circle",link:"#/register"},{title:"Contact",caption:"Contactez-moi",icon:"alternate_email",link:"#/"}];var w=Object(r["defineComponent"])({name:"MainLayout",components:{EssentialLink:k},computed:Object.assign({},Object(q["c"])("auth",["loggedIn"])),setup(){const e=Object(r["ref"])(!1),t=Object(r["ref"])(_);return{leftDrawerOpen:e,essentialLinks:t}}}),Q=w,I=n("4d5a"),L=n("e359"),O=n("65c6"),h=n("9c40"),j=n("6ac5"),y=n("9404"),C=n("1c1c"),D=n("09e3"),S=n("714f"),x=Object(u["a"])(Q,a,i,!1,null,null,null);t["default"]=x.exports;v()(x,"components",{QLayout:I["a"],QHeader:L["a"],QToolbar:O["a"],QBtn:h["a"],QToolbarTitle:j["a"],QDrawer:y["a"],QList:C["a"],QItemLabel:b["a"],QItem:p["a"],QItemSection:m["a"],QIcon:d["a"],QPageContainer:D["a"]}),v()(x,"directives",{Ripple:S["a"]})}}]);