(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3WtA":function(n,t,e){"use strict";e.r(t),e.d(t,"HelloRestrictedModule",(function(){return g}));var c=e("ofXK"),r=e("tyNb"),o=e("z6cu"),i=e("JIr8"),l=e("fXoL"),s=e("4CrM");function u(n,t){if(1&n&&(l.Ob(0,"div"),l.wc(1),l.Nb()),2&n){const n=t.ngIf;l.xb(1),l.yc(" ",n.text,"\n")}}function a(n,t){if(1&n&&(l.Mb(0),l.Ob(1,"div",3),l.wc(2),l.Nb(),l.Lb()),2&n){const n=l.bc(2);l.xb(2),l.xc(n.error)}}function b(n,t){1&n&&(l.Ob(0,"div"),l.wc(1,"Loading ..."),l.Nb())}function f(n,t){if(1&n&&(l.uc(0,a,3,1,"ng-container",0),l.uc(1,b,2,0,"ng-template",null,2,l.vc)),2&n){const n=l.nc(2),t=l.bc();l.gc("ngIf",t.error)("ngIfElse",n)}}const d=[{path:"",component:(()=>{class n{constructor(n){this.helloService=n,this.hello$=null,this.error=null}ngOnInit(){this.hello$=this.helloService.getHelloRestricted().pipe(Object(i.a)(n=>(this.error=n,Object(o.a)(n))))}}return n.\u0275fac=function(t){return new(t||n)(l.Jb(s.a))},n.\u0275cmp=l.Db({type:n,selectors:[["daja-hello-restricted"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["loadingOrError",""],["loading",""],[1,"alert","alert-danger"]],template:function(n,t){if(1&n&&(l.Ob(0,"h2"),l.wc(1,"Hello (restricted)"),l.Nb(),l.uc(2,u,2,1,"div",0),l.cc(3,"async"),l.uc(4,f,3,2,"ng-template",null,1,l.vc)),2&n){const n=l.nc(5);l.xb(2),l.gc("ngIf",l.dc(3,2,t.hello$))("ngIfElse",n)}},directives:[c.k],pipes:[c.b],styles:[""]}),n})()}];let p=(()=>{class n{}return n.\u0275mod=l.Hb({type:n}),n.\u0275inj=l.Gb({factory:function(t){return new(t||n)},imports:[[r.d.forChild(d)],r.d]}),n})(),g=(()=>{class n{}return n.\u0275mod=l.Hb({type:n}),n.\u0275inj=l.Gb({factory:function(t){return new(t||n)},imports:[[c.c,p]]}),n})()}}]);