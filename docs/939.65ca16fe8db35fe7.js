"use strict";(self.webpackChunkkamui_customizer=self.webpackChunkkamui_customizer||[]).push([[939],{6939:(M,g,n)=>{n.r(g),n.d(g,{RobinModule:()=>R});var m=n(9808),b=n(6937),d=n(9646),a=(()=>{return(t=a||(a={})).Female1="b_female1",t.Female2="b_female2",t.Female3="b_female3",t.Male1="b_male1",t.Male2="b_male2",t.Male3="b_male3",a;var t})(),e=(()=>{return(t=e||(e={})).Hair="o_hair",t.Body="o_body",e;var t})();const s={[e.Body]:{title:"Face",count:5,path:"face"},[e.Hair]:{title:"Hair",count:5,path:"hair",colorSettings:{options:["#f9f2eb","#8e5956","#4c5f7a","#6e8160","#7d6350","#f6b1b1","#dfc7a9","#83618a","#5a5354","#b3afb0","#d57a80","#97aed3","#84cad2","#b9d3ad","#cbb1a1","#ffdadc","#fde8c0","#c7a3d8","#b17878","#e28d73"]}}},f="ROBIN",h=[e.Hair,e.Body],u=[e.Hair,e.Body],y={[a.Female1]:{title:"Female 1",path:"female1",offset:{x:0,y:0},options:{[e.Body]:Object.assign(Object.assign({},s[e.Body]),{offset:{x:0,y:0}}),[e.Hair]:Object.assign(Object.assign({},s[e.Hair]),{offset:{x:0,y:0}})}},[a.Female2]:{title:"Female 2",path:"female2",offset:{x:0,y:0},options:{[e.Body]:Object.assign(Object.assign({},s[e.Body]),{offset:{x:0,y:0}}),[e.Hair]:Object.assign(Object.assign({},s[e.Hair]),{offset:{x:0,y:0}})}},[a.Female3]:{title:"Female 3",path:"female3",offset:{x:0,y:0},options:{[e.Body]:Object.assign(Object.assign({},s[e.Body]),{offset:{x:0,y:0}}),[e.Hair]:Object.assign(Object.assign({},s[e.Hair]),{offset:{x:0,y:0}})}},[a.Male1]:{title:"Male 1",path:"male1",offset:{x:0,y:0},options:{[e.Body]:Object.assign(Object.assign({},s[e.Body]),{offset:{x:0,y:0}}),[e.Hair]:Object.assign(Object.assign({},s[e.Hair]),{offset:{x:0,y:0}})}},[a.Male2]:{title:"Male2",path:"male2",offset:{x:0,y:0},options:{[e.Body]:Object.assign(Object.assign({},s[e.Body]),{offset:{x:0,y:0}}),[e.Hair]:Object.assign(Object.assign({},s[e.Hair]),{offset:{x:0,y:0}})}},[a.Male3]:{title:"Male3",path:"male3",offset:{x:0,y:0},options:{[e.Body]:Object.assign(Object.assign({},s[e.Body]),{offset:{x:0,y:0}}),[e.Hair]:Object.assign(Object.assign({},s[e.Hair]),{offset:{x:0,y:0}})}}};var i=n(4893),p=n(7843),O=n(8037),v=n(6838);let j=(()=>{class t{constructor(o,r,l){this.loader=o,this.store=r,this.baseHref=l,this.robinPath=this.baseHref.getBasePath("assets/robin"),this.ext="png",this.robinConfig={rootKey:f,rootPath:this.robinPath,imageType:this.ext,menuOrder:h,layerOrder:u,dimensions:{x:255,y:255},bodyOptions:y}}getRobinConfig(){const o=this.store.getConfig(f);return o?(0,d.of)(o):this.loader.getConfig(this.robinConfig)}cacheRobin(o){this.store.setConfig(f,o)}}return t.\u0275fac=function(o){return new(o||t)(i.LFG(p.D),i.LFG(O.d),i.LFG(v.I))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var x=n(4133),C=n(872);function H(t,c){if(1&t){const o=i.EpF();i.TgZ(0,"fec-renderer",1),i.NdJ("image",function(l){return i.CHM(o),i.oxw().setImage(l)}),i.qZA()}if(2&t){const o=i.oxw();i.Q6J("config",o.config.data)("complete",o.config.complete)}}let B=(()=>{class t{constructor(o,r){this.configService=o,this.fileService=r,this.baseClass=!0}ngOnInit(){this.config$=this.configService.getRobinConfig(),this.configSubscription=this.config$.subscribe(o=>{this.config=o,1===o.complete&&this.configService.cacheRobin(o)})}ngOnDestroy(){this.configSubscription&&this.configSubscription.unsubscribe()}setImage(o){this.image=o}save(){this.fileService.save(this.image,"robin.png")}}return t.\u0275fac=function(o){return new(o||t)(i.Y36(j),i.Y36(x.I))},t.\u0275cmp=i.Xpm({type:t,selectors:[["fecustomizer-engine-robin"]],hostVars:2,hostBindings:function(o,r){2&o&&i.ekj("robin-customizer",r.baseClass)},decls:1,vars:1,consts:[["class","kamui-customizer__renderer",3,"config","complete","image",4,"ngIf"],[1,"kamui-customizer__renderer",3,"config","complete","image"]],template:function(o,r){1&o&&i.YNc(0,H,1,2,"fec-renderer",0),2&o&&i.Q6J("ngIf",r.config)},directives:[m.O5,C.J],styles:[""],encapsulation:2}),t})();var F=n(4184);let R=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[m.ez,F.K,b.Bz.forChild([{path:"",pathMatch:"full",component:B}])]]}),t})()}}]);