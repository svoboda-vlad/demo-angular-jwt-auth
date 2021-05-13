(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{dTRx:function(r,e,t){"use strict";t.r(e),t.d(e,"RegistrationUserModule",(function(){return N}));var s=t("ofXK"),n=t("tyNb"),i=t("3Pt+"),o=t("JIr8"),a=t("AytR"),c=t("fXoL"),b=t("tk/3"),u=t("DbDQ");let d=(()=>{class r{constructor(r,e){this.http=r,this.errorResponseService=e,this.registrationUserUrl="register"}registerUser(r){return this.http.post(a.a.SERVER_URL+this.registrationUserUrl,r).pipe(Object(o.a)(this.errorResponseService.handleError))}}return r.\u0275fac=function(e){return new(e||r)(c.Wb(b.b),c.Wb(u.a))},r.\u0275prov=c.Fb({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();class g{constructor(r,e){this.username=r,this.password=e}}var m=t("XNvx"),h=t("0jD/");function l(r,e){1&r&&(c.Ob(0,"div",8),c.Ob(1,"strong"),c.xc(2,"Failed to register!"),c.Nb(),c.xc(3," Please check your username and password.\n"),c.Nb())}function p(r,e){1&r&&(c.Ob(0,"div"),c.xc(1," Username must be between 1 and 50 characters long. "),c.Nb())}function f(r,e){if(1&r&&(c.Ob(0,"div",8),c.vc(1,p,2,0,"div",9),c.Nb()),2&r){const r=c.bc();c.xb(1),c.hc("ngIf",r.username.errors.required||r.username.errors.minlength||r.username.errors.maxlength)}}function v(r,e){1&r&&(c.Ob(0,"div"),c.xc(1," Password must be between 4 and 100 characters long. "),c.Nb())}function w(r,e){if(1&r&&(c.Ob(0,"div",8),c.vc(1,v,2,0,"div",9),c.Nb()),2&r){const r=c.bc();c.xb(1),c.hc("ngIf",r.password.errors.required||r.password.errors.minlength||r.password.errors.maxlength)}}const U=[{path:"",component:(()=>{class r{constructor(r,e,t,s,n){this.fb=r,this.router=e,this.registrationUserService=t,this.currentUserService=s,this.loginService=n,this.registrationUserError=!1,this.registrationUserForm=this.fb.group({username:[null,[i.m.required,i.m.minLength(1),i.m.maxLength(50)]],password:[null,[i.m.required,i.m.minLength(4),i.m.maxLength(100)]]})}ngOnInit(){this.loginService.getJwtToken()&&this.router.navigate([""])}register(){const r=new g(this.registrationUserForm.get("username").value,this.registrationUserForm.get("password").value);this.registrationUserService.registerUser(r).subscribe(()=>{this.registrationUserError=!1,this.loginService.logIn(new m.a(r.username,r.password)).subscribe(()=>this.currentUserService.getCurrentUser().subscribe(()=>this.router.navigate([""])))},()=>this.registrationUserError=!0)}get username(){return this.registrationUserForm.get("username")}get password(){return this.registrationUserForm.get("password")}}return r.\u0275fac=function(e){return new(e||r)(c.Jb(i.b),c.Jb(n.b),c.Jb(d),c.Jb(h.a),c.Jb(m.b))},r.\u0275cmp=c.Db({type:r,selectors:[["daja-registration-user"]],decls:16,vars:5,consts:[["class","alert alert-danger",4,"ngIf"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","formControlName","username",1,"form-control"],["for","password"],["type","password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(r,e){1&r&&(c.Ob(0,"h2"),c.xc(1,"User Registration"),c.Nb(),c.vc(2,l,4,0,"div",0),c.Ob(3,"form",1),c.Zb("ngSubmit",(function(){return e.register()})),c.Ob(4,"div",2),c.Ob(5,"label",3),c.xc(6,"Username"),c.Nb(),c.Kb(7,"input",4),c.vc(8,f,2,1,"div",0),c.Nb(),c.Ob(9,"div",2),c.Ob(10,"label",5),c.xc(11,"Password"),c.Nb(),c.Kb(12,"input",6),c.vc(13,w,2,1,"div",0),c.Nb(),c.Ob(14,"button",7),c.xc(15,"Register"),c.Nb(),c.Nb()),2&r&&(c.xb(2),c.hc("ngIf",e.registrationUserError),c.xb(1),c.hc("formGroup",e.registrationUserForm),c.xb(5),c.hc("ngIf",e.username.invalid&&(e.username.dirty||e.username.touched)),c.xb(5),c.hc("ngIf",e.password.invalid&&(e.password.dirty||e.password.touched)),c.xb(1),c.hc("disabled",e.registrationUserForm.invalid))},directives:[s.l,i.o,i.i,i.d,i.a,i.h,i.c],styles:[""]}),r})()}];let x=(()=>{class r{}return r.\u0275mod=c.Hb({type:r}),r.\u0275inj=c.Gb({factory:function(e){return new(e||r)},imports:[[n.f.forChild(U)],n.f]}),r})(),N=(()=>{class r{}return r.\u0275mod=c.Hb({type:r}),r.\u0275inj=c.Gb({factory:function(e){return new(e||r)},imports:[[s.c,x,i.l]]}),r})()}}]);