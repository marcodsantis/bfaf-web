"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2789],{2789:(G,c,l)=>{l.r(c),l.d(c,{SignupPageModule:()=>x});var g=l(177),i=l(4341),s=l(9364),d=l(4964),m=l(467),n=l(4438),u=l(6796),f=l(7157);function v(o,a){if(1&o&&(n.j41(0,"div",21),n.EFF(1),n.k0s()),2&o){const e=n.XpG().$implicit;n.R7$(),n.SpI(" ",e.message," ")}}function h(o,a){if(1&o&&(n.qex(0),n.DNE(1,v,2,1,"div",20),n.bVm()),2&o){let e;const r=a.$implicit,t=n.XpG();n.R7$(),n.Y8G("ngIf",(null==(e=t.validationFormUser.get("names"))?null:e.hasError(r.type))&&(null==(e=t.validationFormUser.get("names"))?null:e.dirty)&&(null==(e=t.validationFormUser.get("names"))?null:e.touched))}}function _(o,a){if(1&o&&(n.j41(0,"div",21),n.EFF(1),n.k0s()),2&o){const e=n.XpG().$implicit;n.R7$(),n.SpI(" ",e.message," ")}}function P(o,a){if(1&o&&(n.qex(0),n.DNE(1,_,2,1,"div",20),n.bVm()),2&o){let e;const r=a.$implicit,t=n.XpG();n.R7$(),n.Y8G("ngIf",(null==(e=t.validationFormUser.get("phone"))?null:e.hasError(r.type))&&(null==(e=t.validationFormUser.get("phone"))?null:e.dirty)&&(null==(e=t.validationFormUser.get("phone"))?null:e.touched))}}function F(o,a){if(1&o&&(n.j41(0,"div",21),n.EFF(1),n.k0s()),2&o){const e=n.XpG().$implicit;n.R7$(),n.SpI(" ",e.message," ")}}function k(o,a){if(1&o&&(n.qex(0),n.DNE(1,F,2,1,"div",20),n.bVm()),2&o){let e;const r=a.$implicit,t=n.XpG();n.R7$(),n.Y8G("ngIf",(null==(e=t.validationFormUser.get("email"))?null:e.hasError(r.type))&&(null==(e=t.validationFormUser.get("email"))?null:e.dirty)&&(null==(e=t.validationFormUser.get("email"))?null:e.touched))}}function M(o,a){if(1&o&&(n.j41(0,"div",21),n.EFF(1),n.k0s()),2&o){const e=n.XpG().$implicit;n.R7$(),n.SpI(" ",e.message," ")}}function b(o,a){if(1&o&&(n.qex(0),n.DNE(1,M,2,1,"div",20),n.bVm()),2&o){let e;const r=a.$implicit,t=n.XpG();n.R7$(),n.Y8G("ngIf",(null==(e=t.validationFormUser.get("password"))?null:e.hasError(r.type))&&(null==(e=t.validationFormUser.get("password"))?null:e.dirty)&&(null==(e=t.validationFormUser.get("password"))?null:e.touched))}}function y(o,a){if(1&o&&(n.j41(0,"div",21),n.EFF(1),n.k0s()),2&o){const e=n.XpG().$implicit;n.R7$(),n.SpI(" ",e.message," ")}}function C(o,a){if(1&o&&(n.qex(0),n.DNE(1,y,2,1,"div",20),n.bVm()),2&o){let e;const r=a.$implicit,t=n.XpG();n.R7$(),n.Y8G("ngIf",(null==(e=t.validationFormUser.get("prof"))?null:e.hasError(r.type))&&(null==(e=t.validationFormUser.get("prof"))?null:e.dirty)&&(null==(e=t.validationFormUser.get("prof"))?null:e.touched))}}const S=[{path:"",component:(()=>{var o;class a{constructor(r,t,p,$,O,U){this.formBuilder=r,this.authService=t,this.router=p,this.loadingCtrl=$,this.alertCtrl=O,this.navCtr=U,this.validationMessages={names:[{type:"required",message:"Por favor, digite seu nome completo"}],phone:[{type:"required",message:"Por favor, digite seu celular"},{type:"pattern",message:"O formato do telefone est\xe1 incorreto. Tente novamente"}],email:[{type:"required",message:"Por favor, digite seu email"},{type:"pattern",message:"O tipo de email est\xe1 incorreto. Tente novamente"}],password:[{type:"required",message:"Por favor, digite sua senha"},{type:"minLength",message:"Senha deve ter pelo menos 5 d\xedgitos"}],prof:[{type:"required",message:"Por favor, digite sua profiss\xe3o"},{type:"minLength",message:"Profiss\xe3o deve ter pelo menos 5 d\xedgitos"}]},this.validationFormUser=this.formBuilder.group({names:["",[i.k0.required]],phone:["",[i.k0.required]],email:["",[i.k0.required,i.k0.email]],password:["",[i.k0.required,i.k0.minLength(5)]],prof:["",[i.k0.required,i.k0.minLength(5)]]})}ngOnInit(){this.validationFormUser=this.formBuilder.group({names:new i.MJ("",[i.k0.required]),phone:new i.MJ("",[i.k0.required]),email:new i.MJ("",[i.k0.required,i.k0.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),password:new i.MJ("",[i.k0.required,i.k0.minLength(5)]),prof:new i.MJ("",[i.k0.required,i.k0.minLength(5)])})}registerUser(r){this.showalert(),this.authService.userRegistration(r).then(t=>{t.user&&(this.loading.dismiss(),this.router.navigate(["loginscreen"]))}).catch(t=>{this.loading.dismiss(),this.errorLoading(t.message)})}errorLoading(r){var t=this;return(0,m.A)(function*(){yield(yield t.alertCtrl.create({header:"Erro registrando",message:r,buttons:[{text:"ok",handler:()=>{t.navCtr.navigateBack(["/signup"])}}]})).present()})()}showalert(){var r=this;return(0,m.A)(function*(){r.loading=yield r.loadingCtrl.create({message:"Por favor, aguarde..."}),yield r.loading.present()})()}}return(o=a).\u0275fac=function(r){return new(r||o)(n.rXU(i.ok),n.rXU(u.u),n.rXU(d.Ix),n.rXU(s.Xi),n.rXU(s.hG),n.rXU(f.q9))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-signup"]],decls:41,vars:7,consts:[[1,"ion-no-border"],["slot","start"],["defaulthref","login","text",""],[1,"bg-color"],[1,"ion-no-margin"],[3,"ngSubmit","formGroup"],["color","#E1EAF9"],["name","person-outline"],["name","namesName","type","text","placeholder","Nome completo","formControlName","names"],[4,"ngFor","ngForOf"],["name","call-outline"],["name","phoneName","type","text","placeholder","(11)11111-1111","formControlName","phone"],["name","mail-outline"],["name","emailName","type","text","placeholder","Email","formControlName","email"],["name","lock-closed-outline"],["name","passwordName","type","password","placeholder","Senha","formControlName","password"],["name","briefcase-outline"],["name","profName","type","text","placeholder","Profiss\xe3o","formControlName","prof"],[1,"sign-btn-wrap"],["type","submit","hape","round","fill","solid",1,"sign-btn",3,"disabled"],["class","error_message",4,"ngIf"],[1,"error_message"]],template:function(r,t){1&r&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n.nrm(3,"ion-back-button",2),n.k0s()()(),n.j41(4,"ion-content",3)(5,"ion-card",4)(6,"ion-card-header")(7,"ion-card-title"),n.EFF(8," Inscreva-se "),n.k0s()(),n.j41(9,"ion-card-subtitle"),n.EFF(10," Crie sua conta preenchendo o formul\xe1rio "),n.k0s(),n.j41(11,"form",5),n.bIt("ngSubmit",function(){return t.registerUser(t.validationFormUser.value)}),n.j41(12,"ion-card-content")(13,"ion-item",6),n.nrm(14,"ion-icon",7)(15,"ion-input",8),n.k0s(),n.j41(16,"div"),n.DNE(17,h,2,1,"ng-container",9),n.k0s(),n.j41(18,"ion-item",6),n.nrm(19,"ion-icon",10)(20,"ion-input",11),n.k0s(),n.j41(21,"div"),n.DNE(22,P,2,1,"ng-container",9),n.k0s(),n.j41(23,"ion-item",6),n.nrm(24,"ion-icon",12)(25,"ion-input",13),n.k0s(),n.j41(26,"div"),n.DNE(27,k,2,1,"ng-container",9),n.k0s(),n.j41(28,"ion-item",6),n.nrm(29,"ion-icon",14)(30,"ion-input",15),n.k0s(),n.j41(31,"div"),n.DNE(32,b,2,1,"ng-container",9),n.k0s(),n.j41(33,"ion-item",6),n.nrm(34,"ion-icon",16)(35,"ion-input",17),n.k0s(),n.j41(36,"div"),n.DNE(37,C,2,1,"ng-container",9),n.k0s(),n.j41(38,"div",18)(39,"ion-button",19),n.EFF(40,"Inscrever-se"),n.k0s()()()()()()),2&r&&(n.R7$(11),n.Y8G("formGroup",t.validationFormUser),n.R7$(6),n.Y8G("ngForOf",t.validationMessages.names),n.R7$(5),n.Y8G("ngForOf",t.validationMessages.phone),n.R7$(5),n.Y8G("ngForOf",t.validationMessages.email),n.R7$(5),n.Y8G("ngForOf",t.validationMessages.password),n.R7$(5),n.Y8G("ngForOf",t.validationMessages.prof),n.R7$(2),n.Y8G("disabled",!t.validationFormUser.valid))},dependencies:[g.Sq,g.bT,i.qT,i.BC,i.cb,s.Jm,s.QW,s.b_,s.I9,s.ME,s.HW,s.tN,s.W9,s.eU,s.iq,s.$w,s.uz,s.ai,s.Gw,s.el,i.j4,i.JD],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color: #E1EAF9}.bg-color[_ngcontent-%COMP%]{background:#e1eaf9}ion-header[_ngcontent-%COMP%]{position:absolute}ion-toolbar[_ngcontent-%COMP%]{--ion-background-color: transparent;--opacity: 0}ion-card[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none!important}ion-card-title[_ngcontent-%COMP%]{margin-top:50px!important;font-size:25px;color:#53565a;font-weight:600;text-align:center}ion-card-subtitle[_ngcontent-%COMP%]{text-align:center;padding-top:15px!important;font-size:13px;color:#888c91;font-weight:400;text-transform:none;padding:0 40px}ion-card-content[_ngcontent-%COMP%]{padding-top:30px}ion-item[_ngcontent-%COMP%]{color:#74787e;--border-color: #D4D7DB;--highlight-color-focused: #215AB7;--padding-start: 0;--inner-padding-end: 0;--highlight-color-invalid: #215AB7;--highlight-color-valid: #215AB7;font-size:13px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{color:#74787e;font-size:13px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:6px;font-size:18px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]:hover{color:215AB7}.sign-btn-wrap[_ngcontent-%COMP%]{text-align:center;padding-top:20px}.sign-btn-wrap[_ngcontent-%COMP%]   .sign-btn[_ngcontent-%COMP%]{--ion-primary-color: #215AB7;--background-activated: #E1EAF9;--background-focused: #E1EAF9;--background-hover: #647B9D;color:#faf6fa;border-radius:25px;--background: #215AB7;text-transform:none}.error_message[_ngcontent-%COMP%]{font-size:10px;font-weight:200px;color:#913e07}ion-back-button[_ngcontent-%COMP%]{color:#3880ff}"]}),a})()}];let E=(()=>{var o;class a{}return(o=a).\u0275fac=function(r){return new(r||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[d.iI.forChild(S),d.iI]}),a})(),x=(()=>{var o;class a{}return(o=a).\u0275fac=function(r){return new(r||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[g.MD,i.YN,s.bv,i.X1,E]}),a})()}}]);