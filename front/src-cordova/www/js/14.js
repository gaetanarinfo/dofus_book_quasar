(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"1cf9":function(t,e,s){},"5aa7":function(t,e,s){"use strict";s("1cf9")},fcea:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"q-pa-md"},[!1===t.loggedIn?s("password"):t._e()],1)},i=[],r=s("ded3"),n=s.n(r),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row items-start q-gutter-md justify-center"},[s("q-form",{staticClass:"q-pa-md",on:{submit:t.login,reset:t.onReset}},[s("div",{staticClass:"col-sm-9 col-12 text-h4 font-bebas text-center text-white"},[t._v("Confirmer le mot de passe oublié")]),s("div",{staticClass:"col-sm-9 text-center text-white"},[s("img",{staticStyle:{width:"279px"},attrs:{src:"images/dofus_logo.png"}})]),s("q-input",{attrs:{"bg-color":"grey-2",filled:"",type:t.isPwd?"password":"text",hint:"Mot de passe valide","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Merci d'enter un mot de passe valide"}]},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",staticStyle:{color:"black !important"},attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}}),s("q-input",{attrs:{"bg-color":"grey-2",filled:"",type:t.isPwd2?"password":"text",hint:"Mot de passe valide","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Merci d'enter un mot de passe valide"}]},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",staticStyle:{color:"black !important"},attrs:{name:t.isPwd2?"visibility_off":"visibility"},on:{click:function(e){t.isPwd2=!t.isPwd2}}})]},proxy:!0}]),model:{value:t.formLogin.password_confirm,callback:function(e){t.$set(t.formLogin,"password_confirm",e)},expression:"formLogin.password_confirm"}}),s("q-toggle",{attrs:{label:"J'accepte la licence et les termes"},model:{value:t.accept,callback:function(e){t.accept=e},expression:"accept"}}),s("div",[s("q-btn",{attrs:{color:"deep-orange",type:"submit",glossy:"",label:"Valider"}}),s("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Effacer",type:"reset",color:"red",glossy:""}})],1)],1)],1)},c=[],l=s("2f62"),d={name:"login",data(){return{accept:!1,isPwd:!0,isPwd2:!0,formLogin:{password:"",password_confirm:""}}},methods:n()(n()({login(){var t=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");if(!this.formLogin.password.match(t)&&!this.formLogin.password_confirm.match(t))return this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Le mot de passe ne correspond pas aux conditions !"}),!1;this.formLogin.password===this.formLogin.password_confirm?!0!==this.accept?this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Tu doit d'abord accepter la licence et les conditions"}):this.recoverPasswordUserConfirm(this.formLogin):this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Les mots de passe ne correspondent pas !"})},onReset(){this.formLogin.password=null,this.formLogin.password_confirm=null,this.accept=!1}},Object(l["b"])("auth",["recoverPasswordUserConfirm"])),{},{checkAuth(){this.recoverPasswordUser(),setTimeout(this.checkAuth,2500)}},Object(l["b"])("auth",["recoverPasswordUser"])),mounted(){this.checkAuth()}},p=d,u=(s("5aa7"),s("2877")),m=s("0378"),f=s("27f9"),h=s("0016"),g=s("9564"),w=s("9c40"),b=s("eebe"),v=s.n(b),y=Object(u["a"])(p,a,c,!1,null,null,null),x=y.exports;v()(y,"components",{QForm:m["a"],QInput:f["a"],QIcon:h["a"],QToggle:g["a"],QBtn:w["a"]});var _={data(){return{tab:"password"}},methods:n()({checkAuth(){this.logged(),setTimeout(this.checkAuth,2500)}},Object(l["b"])("auth",["logged"])),computed:n()({},Object(l["d"])("auth",["loggedIn"])),components:{password:x},mounted(){this.checkAuth()}},k=_,q=s("9989"),L=Object(u["a"])(k,o,i,!1,null,null,null);e["default"]=L.exports;v()(L,"components",{QPage:q["a"]})}}]);