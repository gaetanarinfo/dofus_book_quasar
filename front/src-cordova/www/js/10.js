(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{b497:function(t,e,i){},b5c1:function(t,e,i){"use strict";i("b497")},cb00:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"q-pa-md"},[!0===t.loggedIn?i("send",{attrs:{listUser:t.listUser,listRecipient:t.listRecipient}}):t._e()],1)},a=[],n=i("ded3"),o=i.n(n),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-12 col-xs-12"},[i("div",{staticClass:"column absolute-right text-center bg-transparent"},[i("q-avatar",{staticClass:"q-ma-md shadow-10",attrs:{size:"96px"}},[i("img",{attrs:{src:t.userData.avatar}})])],1),i("div",{staticClass:"absolute-center bg-transparent",staticStyle:{width:"700px"}},[i("q-form",{attrs:{transition:"flip-left"},on:{submit:t.send,reset:t.onReset}},[i("div",{staticClass:"col-sm-9 col-12 text-h4 font-bebas text-center text-white",staticStyle:{padding:"20px 0 0 0"}},[t._v("Envoyer un message")]),i("q-input",{staticStyle:{padding:"0 0 10px 0"},attrs:{disable:"","bg-color":"grey-2",filled:"",label:"Nom *",hint:"Nom"},model:{value:t.formEdit.lastname,callback:function(e){t.$set(t.formEdit,"lastname",e)},expression:"formEdit.lastname"}}),i("q-input",{staticStyle:{padding:"16px 0 10px 0"},attrs:{disable:"","bg-color":"grey-2",filled:"",label:"Prénom *",hint:"Prénom"},model:{value:t.formEdit.firstname,callback:function(e){t.$set(t.formEdit,"firstname",e)},expression:"formEdit.firstname"}}),i("q-input",{staticStyle:{padding:"16px 0 10px 0"},attrs:{disable:"","bg-color":"grey-2",filled:"",label:"Pseudo *",hint:"Pseudo"},model:{value:t.formEdit.author,callback:function(e){t.$set(t.formEdit,"author",e)},expression:"formEdit.author"}}),i("div",{staticClass:"q-gutter-md row items-start"},[i("q-select",{staticStyle:{width:"100%",padding:"16px 0 16px 0"},attrs:{"bg-color":"grey-2",filled:"","use-chips":"",label:"Destinataire",options:t.options},on:{filter:t.filterFn,"filter-abort":t.abortFilterFn},scopedSlots:t._u([{key:"no-option",fn:function(){return[i("q-item",[i("q-item-section",{staticClass:"text-grey"},[t._v("\n            Pas de résultat\n          ")])],1)]},proxy:!0}]),model:{value:t.formEdit.recipients,callback:function(e){t.$set(t.formEdit,"recipients",e)},expression:"formEdit.recipients"}})],1),i("q-input",{staticStyle:{padding:"16px 0 16px 0"},attrs:{"bg-color":"grey-2",filled:"",label:"Sujet *",hint:"Sujet"},model:{value:t.formEdit.sujet,callback:function(e){t.$set(t.formEdit,"sujet",e)},expression:"formEdit.sujet"}}),i("q-editor",{staticStyle:{margin:"16px 0 16px 0"},attrs:{label:"Message *",hint:"Message",flat:"","content-class":"bg-grey-10","toolbar-text-color":"white","toolbar-toggle-color":"blue-8","toolbar-bg":"brown-8",toolbar:[[{label:t.$q.lang.editor.align,icon:t.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],[{label:t.$q.lang.editor.formatting,icon:t.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6"]},{label:t.$q.lang.editor.fontSize,icon:t.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:t.$q.lang.editor.defaultFont,icon:t.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]}],["outdent","indent","undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:t.formEdit.content,callback:function(e){t.$set(t.formEdit,"content",e)},expression:"formEdit.content"}}),i("div",{staticStyle:{padding:"16px 0 0 0"}},[i("q-btn",{attrs:{color:"deep-orange",type:"submit",glossy:"",label:"Valider"}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Effacer",type:"reset",color:"red",glossy:""}})],1)],1)],1)])])},r=[],c=i("2f62"),d=(i("3022"),{name:"send",data(){return{tab:"send",options:null,editor:'<pre>Check out the two different types of dropdowns in each of the "Align" buttons.</pre> ',formEdit:{lastname:`${this.listUser.lastname}`,author:`${this.listUser.pseudo}`,firstname:`${this.listUser.firstname}`,recipients:null,sujet:"",content:"",avatar:`${this.listUser.avatar}`},userData:{avatar:`${this.listUser.avatar}`}}},methods:o()(o()({filterFn(t,e,i){null===this.options?setTimeout((()=>{e((()=>{let t=[];this.listRecipient.forEach((e=>{const i=e.pseudo;JSON.stringify(i),t.push(i),this.options=t}))}))}),2e3):e()},abortFilterFn(){},send(){this.sendMail(this.formEdit)},onReset(){this.content=null,this.lastname=null,this.firstname=null,this.author=null,this.sujet=null,this.recipients=null}},Object(c["b"])("auth",["sendMail"])),{},{checkAuth(){this.loggedDataUser(),setTimeout(this.checkAuth,2500)}},Object(c["b"])("auth",["loggedDataUser"])),mounted(){this.checkAuth()},props:{listUser:{type:Object},listRecipient:{type:Array}}}),u=d,m=i("2877"),p=i("cb32"),f=i("0378"),g=i("27f9"),h=i("ddd8"),b=i("66e5"),v=i("4074"),y=i("d66b"),x=i("9c40"),q=i("eebe"),E=i.n(q),k=Object(m["a"])(u,l,r,!1,null,null,null),w=k.exports;E()(k,"components",{QAvatar:p["a"],QForm:f["a"],QInput:g["a"],QSelect:h["a"],QItem:b["a"],QItemSection:v["a"],QEditor:y["a"],QBtn:x["a"]});var S={meta(){return{title:"Dofus Book - Envoyer un message",description:{name:"description",content:"Plusieurs milliers de joueurs dans le monde. DOFUS est un jeu de rôle massivement multijoueur où le but est de retrouver les 6 précieux Dofus pour devenir maître d'Amakna."},keywords:{name:"keywords",content:"mmo, mmorpg, free mmorpg, free online mmorpg, video game, video game rental, video game system, free video game, online game, multiplayer game, free multiplayer game, dofus community, comics, pc game, pc game cheat, game, free game, online game, toy game, addicting game"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}},data(){return{tab:"send"}},methods:o()(o()(o()({checkAuth(){this.logged(),this.loggedDataUser(),setTimeout(this.checkAuth,2500)}},Object(c["b"])("auth",["logged"])),Object(c["b"])("auth",["getListRecipient"])),Object(c["b"])("auth",["loggedDataUser"])),computed:o()(o()(o()({},Object(c["d"])("auth",["loggedIn"])),Object(c["d"])("auth",["listUser"])),Object(c["d"])("auth",["listRecipient"])),components:{send:w},mounted(){this.checkAuth(),this.getListRecipient(),this.loggedDataUser()}},j=S,$=(i("b5c1"),i("9989")),_=Object(m["a"])(j,s,a,!1,null,null,null);e["default"]=_.exports;E()(_,"components",{QPage:$["a"]})}}]);