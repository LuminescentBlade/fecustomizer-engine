"use strict";(self.webpackChunkkamui_customizer=self.webpackChunkkamui_customizer||[]).push([[872],{9872:(S,_,n)=>{n.r(_),n.d(_,{RobinModule:()=>B});var b=n(6814),p=n(4427),l=n(2096),a=function(r){return r.Female1="b_female1",r.Female2="b_female2",r.Female3="b_female3",r.Male1="b_male1",r.Male2="b_male2",r.Male3="b_male3",r}(a||{}),t=function(r){return r.Hair="o_hair",r.Body="o_body",r}(t||{});const i={[t.Body]:{title:"Face",count:5,path:"face"},[t.Hair]:{title:"Hair",count:5,path:"hair",colorSettings:{options:["#f9f2eb","#8e5956","#4c5f7a","#6e8160","#7d6350","#f6b1b1","#dfc7a9","#83618a","#5a5354","#b3afb0","#d57a80","#97aed3","#84cad2","#b9d3ad","#cbb1a1","#ffdadc","#fde8c0","#c7a3d8","#b17878","#e28d73"]}}},d="ROBIN",m=[t.Hair,t.Body],u=[t.Hair,t.Body],x={[a.Female1]:{title:"Female 1",path:"female1",offset:{x:0,y:0},options:{[t.Body]:{...i[t.Body],offset:{x:0,y:0}},[t.Hair]:{...i[t.Hair],offset:{x:0,y:0}}}},[a.Female2]:{title:"Female 2",path:"female2",offset:{x:0,y:0},options:{[t.Body]:{...i[t.Body],offset:{x:0,y:0}},[t.Hair]:{...i[t.Hair],offset:{x:0,y:0}}}},[a.Female3]:{title:"Female 3",path:"female3",offset:{x:0,y:0},options:{[t.Body]:{...i[t.Body],offset:{x:0,y:0}},[t.Hair]:{...i[t.Hair],offset:{x:0,y:0}}}},[a.Male1]:{title:"Male 1",path:"male1",offset:{x:0,y:0},options:{[t.Body]:{...i[t.Body],offset:{x:0,y:0}},[t.Hair]:{...i[t.Hair],offset:{x:0,y:0}}}},[a.Male2]:{title:"Male2",path:"male2",offset:{x:0,y:0},options:{[t.Body]:{...i[t.Body],offset:{x:0,y:0}},[t.Hair]:{...i[t.Hair],offset:{x:0,y:0}}}},[a.Male3]:{title:"Male3",path:"male3",offset:{x:0,y:0},options:{[t.Body]:{...i[t.Body],offset:{x:0,y:0}},[t.Hair]:{...i[t.Hair],offset:{x:0,y:0}}}}};var e=n(4769),g=n(8091),z=n(1241),h=n(6018);let v=(()=>{class r{constructor(o,c,f){this.loader=o,this.store=c,this.baseHref=f,this.robinPath=this.baseHref.getBasePath("assets/robin"),this.ext="png",this.robinConfig={rootKey:d,rootPath:this.robinPath,imageType:this.ext,menuOrder:m,layerOrder:u,dimensions:{x:255,y:255},bodyOptions:x}}getRobinConfig(){const o=this.store.getConfig(d);return o?(0,l.of)(o):this.loader.getConfig(this.robinConfig)}cacheRobin(o){this.store.setConfig(d,o)}}return r.\u0275fac=function(o){return new(o||r)(e.LFG(g.D),e.LFG(z.d),e.LFG(h.I))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var y=n(9340),C=n(870);function H(r,s){1&r&&(e.TgZ(0,"div",6),e._uU(1," Create an Avatar "),e.qZA())}function w(r,s){if(1&r){const o=e.EpF();e.TgZ(0,"fec-renderer",7),e.NdJ("image",function(f){e.CHM(o);const M=e.oxw();return e.KtG(M.setImage(f))}),e.qZA()}if(2&r){const o=e.oxw();e.Q6J("config",o.config.data)("complete",o.config.complete)}}function k(r,s){if(1&r){const o=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){e.CHM(o);const f=e.oxw();return e.KtG(f.save())}),e._uU(1," Save "),e.qZA()}}let R=(()=>{class r{constructor(o,c){this.configService=o,this.fileService=c,this.baseClass=!0}ngOnInit(){window.parent.postMessage("customizer-robin"),this.config$=this.configService.getRobinConfig(),this.configSubscription=this.config$.subscribe(o=>{this.config=o,1===o.complete&&this.configService.cacheRobin(o)})}ngOnDestroy(){this.configSubscription&&this.configSubscription.unsubscribe()}setImage(o){this.image=o}save(){this.fileService.save(this.image,"robin.png")}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(v),e.Y36(y.I))},r.\u0275cmp=e.Xpm({type:r,selectors:[["fecustomizer-engine-robin"]],hostVars:2,hostBindings:function(o,c){2&o&&e.ekj("robin-customizer",c.baseClass)},decls:8,vars:3,consts:[[1,"robin-customizer__header"],["src","./assets/ui/robin/logo.png",1,"robin-customizer__awaken-logo"],[1,"robin-customizer__content"],["class","robin-customizer__banner",4,"ngIf"],["class","robin-customizer__renderer",3,"config","complete","image",4,"ngIf"],["class","robin-customizer__save",3,"click",4,"ngIf"],[1,"robin-customizer__banner"],[1,"robin-customizer__renderer",3,"config","complete","image"],[1,"robin-customizer__save",3,"click"]],template:function(o,c){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"h1"),e._uU(3,"RobinCustomizer V2.0"),e.qZA()(),e.TgZ(4,"div",2),e.YNc(5,H,2,0,"div",3),e.YNc(6,w,1,2,"fec-renderer",4),e.YNc(7,k,2,0,"button",5),e.qZA()),2&o&&(e.xp6(5),e.Q6J("ngIf",c.config.data),e.xp6(1),e.Q6J("ngIf",c.config),e.xp6(1),e.Q6J("ngIf",c.config.data))},dependencies:[b.O5,C.J],styles:['@keyframes color-button-anim{0%{box-shadow:inset 0 0 5px 2px #ffffffb3}50%{box-shadow:inset 0 0 #fff0}to{box-shadow:inset 0 0 5px 2px #ffffffb3}}.robin-customizer{display:flex;flex-direction:column;align-items:center}.robin-customizer__header{margin:12px;position:relative;min-width:300px}.robin-customizer__header h1{font-weight:700;font-size:4rem;line-height:4.8rem;text-align:center;margin-top:60px;margin-bottom:8px;color:var(--fe-customizer--robin-text, #1c1811)}.robin-customizer__header .robin-customizer__awaken-logo{position:absolute;top:0;left:50%;transform:translate(-50%);width:300px}.robin-customizer,.robin-customizer button{font-family:fot-chiaro-std,sans-serif;font-size:1.4rem;line-height:1.6rem;color:#4d3c21}.robin-customizer__content{position:relative;margin-bottom:12px}.robin-customizer__content .robin-customizer__renderer.fec-renderer{flex-direction:row-reverse;background-color:#63684c}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-renderer__canvas-container{display:flex}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-renderer__controls{align-self:flex-end;margin:12px;border-radius:1px;padding:12px;background-color:#d3b56c;border:1px solid #f3efd4;box-shadow:inset 0 0 2px #0000001a,inset 0 0 10px #a87c3d,inset 0 0 20px 10px #bc8f3c,0 0 1px #0000004d,0 2px 1px #00000080}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-renderer__options{gap:6px;margin:6px 0}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select{position:relative;height:24px;gap:3px;border:1px solid #bc8f3c;border-radius:3px;box-shadow:inset 0 0 2px #bc8f3c,inset 1px 1px #0003}.robin-customizer__content .robin-customizer__renderer.fec-renderer fec-color-select{margin-top:6px}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__title{line-height:24px}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__title .color-options-palette__select{border:0;background:0;animation:3s infinite linear color-button-anim;cursor:pointer;width:100%;border-radius:3px}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__title .color-options-palette__select:hover,.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__title .color-options-palette__select:focus{background:rgba(255,255,255,.5)}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__button{position:absolute;z-index:2;cursor:pointer;height:100%}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__button:hover.fec-options-select__previous:before,.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__button:active.fec-options-select__previous:before{border-right-color:#f64d29}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__button:hover.fec-options-select__next:before,.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__button:active.fec-options-select__next:before{border-left-color:#f64d29}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__previous,.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__next{top:0;border:0;background:0}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__previous:before,.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__next:before{position:relative;z-index:2}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__previous:after,.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__next:after{content:"";position:absolute;display:block;top:50%;transform:translateY(-50%);width:0;height:0;border-top:7px solid transparent;border-bottom:7px solid transparent;margin-left:-1px}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__previous{left:0}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__previous:before{border-right-width:5px}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__previous:after{border-right:7px solid #f3efd4}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__next{right:0}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__next:before{border-left-width:5px}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-options-select__next:after{border-left:7px solid #f3efd4}.robin-customizer__content .robin-customizer__renderer.fec-renderer .color-options-palette__options{z-index:3;border-radius:1px;padding:12px;background-color:#d3b56c;border:1px solid #f3efd4;box-shadow:inset 0 0 2px #0000001a,inset 0 0 10px #a87c3d,inset 0 0 20px 10px #bc8f3c,0 0 1px #0000004d,0 2px 1px #00000080}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-renderer__randomize{position:relative;cursor:pointer;color:#4d3c21;background:rgb(238,230,203);background:linear-gradient(180deg,rgb(238,230,203) 0%,rgb(215,196,151) 100%);border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:0 2px 1px #00000080}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-renderer__randomize:hover,.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-renderer__randomize:active{background:rgb(246,77,41);background:linear-gradient(180deg,rgb(246,77,41) 0%,rgb(220,55,27) 100%);color:#eee6cb}.robin-customizer__content .robin-customizer__save{position:absolute;top:6px;right:6px;height:24px;color:#f3efd4;background:#1c1811;border:0;padding:3px 12px;border-radius:5px;box-shadow:0 0 3px 1px #0000004d;cursor:pointer}.robin-customizer__content .robin-customizer__save:hover,.robin-customizer__content .robin-customizer__save:active{background:rgb(246,77,41);background:linear-gradient(180deg,rgb(246,77,41) 0%,rgb(220,55,27) 100%);color:#eee6cb}.robin-customizer__content .robin-customizer__banner{display:flex;align-items:center;justify-content:center;position:absolute;top:40px;left:0;height:30px;width:267px;color:#f3efd4;background:#31301c;border:0;text-align:right;box-shadow:0 0 3px 1px #f3efd4}@media screen and (max-width: 600px){.robin-customizer__content .robin-customizer__renderer.fec-renderer{flex-direction:column;gap:0px;padding-top:60px}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-renderer__controls{margin-top:0}.robin-customizer__content .robin-customizer__renderer.fec-renderer .fec-renderer__canvas-container{transform:none}.robin-customizer__content .robin-customizer__banner{top:6px}.robin-customizer__content .robin-customizer__save{top:48px;right:10px}}@media screen and (max-width: 360px){.robin-customizer__header h1{font-size:36px;line-height:40px}}\n'],encapsulation:2}),r})();var F=n(4339);let B=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[b.ez,F.K,p.Bz.forChild([{path:"",pathMatch:"full",component:R}])]}),r})()}}]);