(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4D6J":function(t,n,e){"use strict";e.r(n),e.d(n,"NoteModule",(function(){return N}));var o=e("ofXK"),r=e("tyNb"),c=e("z6cu"),s=e("AytR"),i=e("fXoL"),b=e("tk/3");let a=(()=>{class t{constructor(t){this.http=t,this.loginUrl="login"}login(t){return this.http.post(s.a.SERVER_URL+this.loginUrl,t,{observe:"response"})}}return t.\u0275fac=function(n){return new(n||t)(i.Wb(b.a))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();class l{constructor(t,n){this.username=t,this.password=n}}var u=e("JIr8");let p=(()=>{class t{constructor(t){this.http=t,this.noteUrl="note"}getNotes(t){const n={headers:new b.c({Authorization:t})};return this.http.get(s.a.SERVER_URL+this.noteUrl,n)}postNote(t,n){const e={headers:new b.c({Authorization:n})};return this.http.post(s.a.SERVER_URL+this.noteUrl,t,e)}}return t.\u0275fac=function(n){return new(n||t)(i.Wb(b.a))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function f(t,n){if(1&t&&(i.Ob(0,"tr"),i.Ob(1,"td"),i.wc(2),i.Nb(),i.Ob(3,"td"),i.wc(4),i.Nb(),i.Nb()),2&t){const t=n.$implicit;i.xb(2),i.xc(t.id),i.xb(2),i.xc(t.content)}}function h(t,n){if(1&t&&(i.Ob(0,"div",2),i.Ob(1,"p"),i.wc(2,"Notes"),i.Nb(),i.Ob(3,"div",3),i.Ob(4,"table",4),i.Ob(5,"thead"),i.Ob(6,"tr"),i.Ob(7,"th",5),i.wc(8,"ID"),i.Nb(),i.Ob(9,"th",5),i.wc(10,"Content"),i.Nb(),i.Nb(),i.Nb(),i.Ob(11,"tbody"),i.uc(12,f,5,2,"tr",6),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&t){const t=n.ngIf;i.xb(12),i.gc("ngForOf",t)}}function d(t,n){1&t&&(i.Mb(0),i.Ob(1,"div",9),i.wc(2,"ERROR"),i.Nb(),i.Lb())}function g(t,n){1&t&&(i.Ob(0,"div"),i.wc(1,"Loading ..."),i.Nb())}function w(t,n){if(1&t&&(i.uc(0,d,3,0,"ng-container",7),i.uc(1,g,2,0,"ng-template",null,8,i.vc)),2&t){const t=i.nc(2),n=i.bc();i.gc("ngIf",n.error)("ngIfElse",t)}}const O=[{path:"",component:(()=>{class t{constructor(t,n){this.loginService=t,this.noteService=n,this.notes$=null,this.error=null}ngOnInit(){this.loginService.login(new l("user","password")).pipe(Object(u.a)(t=>(this.error=t,Object(c.a)(t)))).subscribe(t=>{this.jwtToken=t.headers.get("Authorization"),this.notes$=this.noteService.getNotes(this.jwtToken).pipe(Object(u.a)(t=>(this.error=t,Object(c.a)(t))))})}}return t.\u0275fac=function(n){return new(n||t)(i.Jb(a),i.Jb(p))},t.\u0275cmp=i.Db({type:t,selectors:[["daja-note"]],decls:4,vars:4,consts:[["class","m-2",4,"ngIf","ngIfElse"],["loadingOrError",""],[1,"m-2"],[1,"table-responsive"],[1,"table","table-sm"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["loading",""],[1,"alert","alert-danger"]],template:function(t,n){if(1&t&&(i.uc(0,h,13,1,"div",0),i.cc(1,"async"),i.uc(2,w,3,2,"ng-template",null,1,i.vc)),2&t){const t=i.nc(3);i.gc("ngIf",i.dc(1,2,n.notes$))("ngIfElse",t)}},directives:[o.k,o.j],pipes:[o.b],styles:[""]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(n){return new(n||t)},imports:[[r.b.forChild(O)],r.b]}),t})(),N=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(n){return new(n||t)},imports:[[o.c,v]]}),t})()}}]);