(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{SaXW:function(t,n,e){"use strict";e.r(n),e.d(n,"HelloModule",(function(){return v}));var c=e("ofXK"),o=e("tyNb"),r=e("z6cu"),l=e("JIr8"),i=e("fXoL"),s=e("AytR"),u=e("tk/3");let a=(()=>{class t{constructor(t){this.http=t,this.helloUrl="hello"}getHello(){return this.http.get(s.a.SERVER_URL+this.helloUrl)}}return t.\u0275fac=function(n){return new(n||t)(i.Wb(u.a))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function f(t,n){if(1&t&&(i.Ob(0,"div",2),i.wc(1),i.Nb()),2&t){const t=n.ngIf;i.xb(1),i.yc(" ",t.text,"\n")}}function b(t,n){1&t&&(i.Mb(0),i.Ob(1,"div",5),i.wc(2,"ERROR"),i.Nb(),i.Lb())}function h(t,n){1&t&&(i.Ob(0,"div"),i.wc(1,"Loading ..."),i.Nb())}function p(t,n){if(1&t&&(i.uc(0,b,3,0,"ng-container",3),i.uc(1,h,2,0,"ng-template",null,4,i.vc)),2&t){const t=i.nc(2),n=i.bc();i.gc("ngIf",n.error)("ngIfElse",t)}}const g=[{path:"",component:(()=>{class t{constructor(t){this.helloService=t,this.hello$=null,this.error=null}ngOnInit(){this.hello$=this.helloService.getHello().pipe(Object(l.a)(t=>(this.error=t,Object(r.a)(t))))}}return t.\u0275fac=function(n){return new(n||t)(i.Jb(a))},t.\u0275cmp=i.Db({type:t,selectors:[["daja-hello"]],decls:4,vars:4,consts:[["class","m-2",4,"ngIf","ngIfElse"],["loadingOrError",""],[1,"m-2"],[4,"ngIf","ngIfElse"],["loading",""],[1,"alert","alert-danger"]],template:function(t,n){if(1&t&&(i.uc(0,f,2,1,"div",0),i.cc(1,"async"),i.uc(2,p,3,2,"ng-template",null,1,i.vc)),2&t){const t=i.nc(3);i.gc("ngIf",i.dc(1,2,n.hello$))("ngIfElse",t)}},directives:[c.k],pipes:[c.b],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(n){return new(n||t)},imports:[[o.b.forChild(g)],o.b]}),t})(),v=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(n){return new(n||t)},imports:[[c.c,d]]}),t})()}}]);