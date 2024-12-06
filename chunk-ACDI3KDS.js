import{a as k,b as E,c as G}from"./chunk-GUEGE6SB.js";import{D,E as r,F as c,Ha as M,Ia as $,Ja as B,L as m,M as s,O as n,P as i,Q as d,R as O,S as I,U as j,V as x,W as l,X as f,Y as z,Z as w,ba as F,ca as _,d as g,da as T,fa as A,h,na as L,oa as N,pa as C,q as b,qa as H,u as y,va as S,x as v,xa as P,ya as V}from"./chunk-ISXOTCF2.js";function J(t,p){if(t&1&&(O(0),d(1,"div",1),I()),t&2){let e=p.$implicit;r(),s("ngClass",e.line_power?"line-power":"line")}}function K(t,p){if(t&1&&(n(0,"div",38),m(1,J,2,1,"ng-container",37),i()),t&2){let e=p.$implicit,a=x();r(),s("ngForOf",a.isActiveStat(e.stat_percent))}}function Q(t,p){if(t&1&&(n(0,"div",39),l(1),i()),t&2){let e=p.$implicit;r(),z(" ",e.id,"")}}function ee(t,p){if(t&1&&(n(0,"span",40)(1,"strong"),l(2),i()()),t&2){let e=p.$implicit;r(2),f(e.ability.name)}}function te(t,p){t&1&&(n(0,"span"),l(1,"Genero fluido"),i())}function ne(t,p){t&1&&(n(0,"span"),v(),n(1,"svg",41),d(2,"path",42),i()())}function ie(t,p){t&1&&(n(0,"div",43),v(),n(1,"svg",44),d(2,"path",45),i()())}function oe(t,p){t&1&&(n(0,"div",43),v(),n(1,"svg",46),d(2,"path",47),i()())}function ae(t,p){t&1&&(n(0,"span"),l(1,"Hembra"),i())}function re(t,p){if(t&1&&(n(0,"span",50)(1,"strong"),l(2),i()()),t&2){let e=p.$implicit;s("ngClass","type-"+e.type.name),r(2),f(e.type.name)}}function se(t,p){if(t&1&&(n(0,"div",48),m(1,re,3,2,"span",49),i()),t&2){let e=x();r(),s("ngForOf",e.pokemonDetails.types)}}function le(t,p){if(t&1&&(n(0,"span",50)(1,"strong"),l(2),i()()),t&2){let e=p.$implicit;s("ngClass","type-"+e),r(2),f(e)}}function pe(t,p){if(t&1&&(n(0,"div",48),m(1,le,3,2,"span",49),i()),t&2){let e=x();r(),s("ngForOf",e.pokemonDetails.weaknesses)}}function me(t,p){if(t&1&&(n(0,"span",57)(1,"strong"),l(2),i()()),t&2){let e=p.$implicit;s("ngClass","type-"+e.type.name),r(2),f(e.type.name)}}function ce(t,p){t&1&&(n(0,"div",58),v(),n(1,"svg",59),d(2,"path",60),i()())}function de(t,p){if(t&1&&(O(0),n(1,"div",51),d(2,"img",52),n(3,"div",53),l(4),i(),n(5,"div",54),m(6,me,3,2,"span",55),i()(),m(7,ce,3,0,"div",56),I()),t&2){let e=p.$implicit,a=p.index,o=x();r(2),s("src",e.sprites.other.showdown.front_default,D)("alt",e.name),r(2),z(" ",e.name,""),r(2),s("ngForOf",e.types),r(),s("ngIf",a<o.evolDetails.length-1)}}function ge(t,p){}var U=(()=>{class t{constructor(e,a){this.api=e,this.spinner=a,this.statsArray=[],this.statsLines=[],this.weaknessesList=[],this.showStats=!1,this.species=[],this.baseMaxStat=255,this.baseLines=15}ngOnInit(){}ngOnChanges(){return g(this,null,function*(){this.showStats=!1,this.evolDetails&&(this.evolutions=yield Promise.all(this.evolDetails.map(e=>g(this,null,function*(){return h(this.api.getPokemonDetails(e))}))),yield this.statsCreate(),this.showStats=!0)})}statsCreate(){return g(this,null,function*(){this.statsArray=[],this.pokemonDetails.stats.forEach(e=>{this.statsArray.push({id:e.stat.name,stat:e.base_stat,stat_percent:Math.round(e.base_stat/this.baseMaxStat*(this.baseMaxStat/this.baseLines))})})})}isActiveStat(e){this.statsLines=[];for(let a=0;a<this.baseLines;a++)a<e?this.statsLines.push({line_power:!0}):this.statsLines.push({line_power:!1});return this.statsLines}ngAfterViewInit(){}replaceNewline(e){return e.replace(/[\n\f]/g," ")}static{this.\u0275fac=function(a){return new(a||t)(c(k),c(M))}}static{this.\u0275cmp=b({type:t,selectors:[["app-pokemon-stats"]],inputs:{pokemonDetails:"pokemonDetails",evolDetails:"evolDetails"},standalone:!0,features:[y,_],decls:72,vars:18,consts:[["noMoreEvols",""],[3,"ngClass"],[1,"content"],[1,"details"],[1,"column-details-1"],[1,"pokemon-img",2,"width","50%","min-height","200px","min-width","200px"],[1,"pokemon-sprite",2,"width","100%",3,"src","alt"],[1,"stat-power-lines"],[2,"color","white"],[2,"display","flex","flex-direction","row","justify-content","space-between"],["class","trasnition-hover","style","width: 3rem;display: flex;flex-direction: column-reverse; align-items: center;  margin: 2px;",4,"ngFor","ngForOf"],[2,"display","flex","flex-direction","row","justify-content","space-between","font-size","smaller","width","100%"],["style","color: white; width: 3rem; text-size-adjust:inherit; text-align: center; margin: 1px; padding: 3px; box-sizing: border-box; font-size: smaller;",4,"ngFor","ngForOf"],[1,"column-details-2"],[2,"border","groove","border-radius","5px","margin","10px","background-color","rgb(255, 255, 255)","box-shadow","4px 4px 10px rgba(0, 0, 0, 0.2)"],[2,"text-align","justify","color","rgb(49, 49, 49)","padding","10px"],[1,"pokemon-info-block"],[2,"color","white","margin","10px"],[2,"display","flex","justify-content","space-between"],[1,"col-1"],["for","abilities"],[2,"display","flex","flex-wrap","wrap","margin-top","15px","margin-bottom","15px","gap","10px"],["name","abilities","class","badge","style","background-color: rgb(231, 150, 51); margin: 0;",4,"ngFor","ngForOf"],["for","weight"],[2,"margin-top","15px","margin-bottom","15px"],["name","weight",1,"badge",2,"background-color","rgb(255, 239, 230)"],["for","height"],["name","height",1,"badge",2,"background-color","rgb(255, 239, 230)"],[2,"margin-right","10px"],["for","gender"],[4,"ngIf"],["style","text-align: center; margin-top: 15px; margin-bottom: 15px;",4,"ngIf"],["for","category"],["name","category",1,"badge",2,"background-color","rgb(255, 239, 230)"],["style","display: flex; flex-wrap: wrap; width: 100%;",4,"ngIf"],[1,"evolution-stats"],[1,"evol-content"],[4,"ngFor","ngForOf"],[1,"trasnition-hover",2,"width","3rem","display","flex","flex-direction","column-reverse","align-items","center","margin","2px"],[2,"color","white","width","3rem","text-size-adjust","inherit","text-align","center","margin","1px","padding","3px","box-sizing","border-box","font-size","smaller"],["name","abilities",1,"badge",2,"background-color","rgb(231, 150, 51)","margin","0"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512"],["d","M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8l112 0c13.3 0 24 10.7 24 24l0 112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80s0 0 0 0s0 0 0 0s0 0 0 0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"],[2,"text-align","center","margin-top","15px","margin-bottom","15px"],["fill","white","height","2rem","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 512"],["d","M176 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 176c0 86.3-62.1 158.1-144 173.1l0 34.9 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-34.9C62.1 334.1 0 262.3 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM271.9 360.6c19.3-10.1 36.9-23.1 52.1-38.4c20 18.5 46.7 29.8 76.1 29.8c61.9 0 112-50.1 112-112s-50.1-112-112-112c-7.2 0-14.3 .7-21.1 2c-4.9-21.5-13-41.7-24-60.2C369.3 66 384.4 64 400 64c37 0 71.4 11.4 99.8 31l20.6-20.6L487 41c-6.9-6.9-8.9-17.2-5.2-26.2S494.3 0 504 0L616 0c13.3 0 24 10.7 24 24l0 112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L545 140.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4z"],["fill","white","height","2rem","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 384 512"],["d","M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1l0 34.9-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-34.9z"],[2,"display","flex","flex-wrap","wrap","width","100%"],["class","badge trasnition-hover",3,"ngClass",4,"ngFor","ngForOf"],[1,"badge","trasnition-hover",3,"ngClass"],[2,"aspect-ratio","1","border-radius","50%","border-color","rgb(255, 255, 255)","border-width","10px","border-style","solid","display","flex","justify-content","center","align-items","center","width","150px","flex-direction","column"],[2,"height","80%","width","80%","object-fit","contain","box-sizing","border-box",3,"src","alt"],[2,"transform","translateY(50px)","color","white"],[2,"transform","translateY(50px)","color","white","margin","2px"],["style","border-radius: 5px; padding: 1px; margin: 2px;",3,"ngClass",4,"ngFor","ngForOf"],["style","display: flex; align-items: center; justify-content: center; width: 50px;margin-top: 15px;",4,"ngIf"],[2,"border-radius","5px","padding","1px","margin","2px",3,"ngClass"],[2,"display","flex","align-items","center","justify-content","center","width","50px","margin-top","15px"],["xmlns","http://www.w3.org/2000/svg","height","5rem","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-right","rotate-down",2,"color","aliceblue"],["fill-rule","evenodd","d","M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"]],template:function(a,o){a&1&&(n(0,"main",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),d(5,"img",6),i(),n(6,"div",7)(7,"h2",8),l(8,"Stats"),i(),n(9,"div",9),m(10,K,2,1,"div",10),i(),n(11,"div",11),m(12,Q,2,1,"div",12),i()()(),n(13,"div",13)(14,"div")(15,"div",14)(16,"p",15)(17,"strong"),l(18),i()()(),n(19,"div",16)(20,"h2",17),l(21,"Info"),i(),n(22,"div",18)(23,"div",19)(24,"label",20)(25,"strong"),l(26,"Abilities"),i()(),n(27,"div",21),m(28,ee,3,1,"span",22),i(),n(29,"label",23)(30,"strong"),l(31,"Weigh"),i()(),n(32,"div",24)(33,"span",25)(34,"strong"),l(35),i()()(),n(36,"label",26)(37,"strong"),l(38,"Height"),i(),l(39,"Height"),i(),n(40,"div",24)(41,"span",27)(42,"strong"),l(43),i()()()(),n(44,"div",28)(45,"label",29)(46,"strong"),l(47,"Genero"),i()(),m(48,te,2,0,"span",30)(49,ne,3,0,"span",30)(50,ie,3,0,"div",31)(51,oe,3,0,"div",31)(52,ae,2,0,"span",30),n(53,"label",32)(54,"strong"),l(55,"Categoria"),i()(),n(56,"div",24)(57,"p",33)(58,"strong"),l(59),i()()()()()(),n(60,"h3"),l(61,"Type"),i(),m(62,se,2,1,"div",34),i(),n(63,"div")(64,"h3"),l(65,"Weakness"),i(),m(66,pe,2,1,"div",34),i()()(),n(67,"div",35)(68,"div",36),m(69,de,8,5,"ng-container",37),i()()()(),m(70,ge,0,0,"ng-template",null,0,A)),a&2&&(s("ngClass","background-"+o.pokemonDetails.types[0].type.name),r(5),s("src",o.pokemonDetails.sprite,D)("alt",o.pokemonDetails.name),r(5),s("ngForOf",o.statsArray),r(2),s("ngForOf",o.statsArray),r(6),f(o.replaceNewline(o.pokemonDetails.species.flavor_text_entries[0].flavor_text)),r(10),s("ngForOf",o.pokemonDetails.abilities),r(7),f(o.pokemonDetails.weight),r(8),f(o.pokemonDetails.height),r(5),s("ngIf",o.species.gender_rate<=0),r(),s("ngIf",o.species.gender_rate==0),r(),s("ngIf",o.pokemonDetails.species.gender_rate>0&&o.pokemonDetails.species.gender_rate<8),r(),s("ngIf",o.species.gender_rate==8),r(),s("ngIf",o.pokemonDetails.species.gender_rate>0&&o.species.gender_rate==8),r(7),f(o.pokemonDetails.category_pokemon),r(3),s("ngIf",o.pokemonDetails),r(4),s("ngIf",o.pokemonDetails),r(3),s("ngForOf",o.evolutions))},dependencies:[H,L,N,C],styles:["main[_ngcontent-%COMP%]{width:100vw;height:auto;display:flex;margin:auto;justify-content:center;box-sizing:border-box}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box;margin:20px}.card[_ngcontent-%COMP%]{text-align:center;display:flex;width:50%;align-items:center;justify-content:center;height:30vh;background-color:#faebd7}.details[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:center;box-sizing:border-box}.column-details-1[_ngcontent-%COMP%]{width:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}.column-details-2[_ngcontent-%COMP%]{width:50%;box-sizing:border-box}.pokemon-img[_ngcontent-%COMP%]{border-radius:50%;padding:12px;box-sizing:border-box;background-image:radial-gradient(circle,#e88,#e9706d,#e15651,#d73a33,#cb1313);width:auto;height:auto;display:flex;align-items:center;justify-content:center}.line-power[_ngcontent-%COMP%]{border:2px solid rgb(229,255,0);width:1.5rem;margin:2px 0}.line[_ngcontent-%COMP%]{border:2px solid rgb(170,170,170);width:1.5rem;margin:2px 0}.stat-power-lines[_ngcontent-%COMP%]{min-height:200px;background-color:#720000;margin:10px;border-radius:10px;padding:10px;box-sizing:inherit;width:70%}.pokemon-info-block[_ngcontent-%COMP%]{min-height:200px;min-width:70%;width:auto;display:flex;flex-direction:column;background-color:#0061e0;margin:10px;border-radius:10px;padding:10px;box-sizing:inherit}.carach[_ngcontent-%COMP%], .column-details-1[_ngcontent-%COMP%]{width:50%}.evolution-stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:#000;width:100%;height:auto;background-image:linear-gradient(to top,#000,#161616,#242424,#343434,#444,#444,#444,#444,#343434,#242424,#161616,#000)}.evol-content[_ngcontent-%COMP%]{width:100%;margin:50px;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box}.badge[_ngcontent-%COMP%]{padding:10px;margin:10px;border-radius:5px}@media screen and (max-width: 650px){.rotate-down[_ngcontent-%COMP%]{transform:rotate(90deg)}.stat-power-lines[_ngcontent-%COMP%]{background-color:#720000;margin:10px;border-radius:10px;padding:10px;box-sizing:inherit;width:auto}.column-details-1[_ngcontent-%COMP%], .column-details-2[_ngcontent-%COMP%]{width:95%}.container-evol[_ngcontent-%COMP%]{flex-direction:column;width:100%}.sprite-evol[_ngcontent-%COMP%]{width:50%}.evol-content[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]{flex-direction:column}.pokemon-img[_ngcontent-%COMP%]{width:100%}}"]})}}return t})();function xe(t,p){if(t&1&&(n(0,"h2",15),l(1),i()),t&2){let e=x();r(),w("#",e.pokemonPrevious.id.toString().padStart(3,"0")," ",e.pokemonPrevious.name,"")}}function ue(t,p){if(t&1&&(n(0,"h2",16),l(1),i()),t&2){let e=x();r(),w(" ",e.pokemonNext.name," #",e.pokemonNext.id.toString().padStart(3,"0"),"")}}var q=(()=>{class t{constructor(e,a,o,u){this.pokemonApi=e,this.route=a,this.router=o,this.pokemonService=u}ngOnInit(){}ngOnChanges(){this.pokemonDetails&&this.getNext(this.pokemonDetails.pokemon_id)}getNext(e){return g(this,null,function*(){try{this.pokemonPrevious=yield h(this.pokemonApi.getPokemonDetails(e==1?898:e-1)),this.pokemonNext=yield h(this.pokemonApi.getPokemonDetails(e==898?1:e+1))}catch(a){console.log(a)}})}sendToCatch(e){return g(this,null,function*(){try{this.router.navigate(["/details",e],{queryParams:{pokemon:!0}})}catch{}})}static{this.\u0275fac=function(a){return new(a||t)(c(k),c(S),c(P),c(E))}}static{this.\u0275cmp=b({type:t,selectors:[["app-header-details"]],inputs:{pokemonDetails:"pokemonDetails"},standalone:!0,features:[y,_],decls:19,vars:4,consts:[[1,"top-design"],[1,"top-design-l"],[1,"top-design-l","mirrored"],[2,"position","absolute","top","0","left","0","width","100%","height","100%","pointer-events","none"],[2,"display","flex","justify-content","space-between","align-items","center","padding","15px","height","100%","pointer-events","auto"],[1,"btn-previous"],[1,"icon-previous",3,"click"],["style","color: white; ",4,"ngIf"],[1,"btn-next"],["style","color: white; text-align: end;",4,"ngIf"],[1,"icon-next",3,"click"],[1,"top"],[2,"position","absolute","width","0","height","0","overflow","hidden"],["id","curved-clip","clipPathUnits","objectBoundingBox"],["d","M 0,0 L 1,0 L 1,0.55 L 0.25,0.55 C 0.20,0.55 0.13,1 0.08,1 L 0,1 Z","fill","lightblue"],[2,"color","white"],[2,"color","white","text-align","end"]],template:function(a,o){a&1&&(n(0,"header",0),d(1,"div",1)(2,"div",2),n(3,"div",3)(4,"div",4)(5,"div",5)(6,"strong",6),j("click",function(){return o.sendToCatch(o.pokemonPrevious.id)}),l(7,"<"),i(),m(8,xe,2,2,"h2",7),i(),n(9,"div",8),m(10,ue,2,2,"h2",9),n(11,"strong",10),j("click",function(){return o.sendToCatch(o.pokemonNext.id)}),l(12,">"),i()()()(),n(13,"h1",11),l(14),i(),v(),n(15,"svg",12)(16,"defs")(17,"clipPath",13),d(18,"path",14),i()()()()),a&2&&(r(8),s("ngIf",o.pokemonPrevious),r(2),s("ngIf",o.pokemonNext),r(4),w("",o.pokemonDetails.name," #",o.pokemonDetails.id,""))},dependencies:[C],styles:["header[_ngcontent-%COMP%]{width:100vw;height:20vh;display:flex;align-items:center;justify-content:center;position:relative;flex-direction:row;justify-content:space-between;background-color:#fff}.top[_ngcontent-%COMP%]{text-align:center;width:100%;position:absolute;bottom:5%;font-size:3rem;overflow:hidden}.top-design-r[_ngcontent-%COMP%]{width:49.8%;height:100%;background-color:#868686;clip-path:polygon(0 0,100% 0,100% 60%,25% 60%,15% 100%,0 100%)}.top-design-l[_ngcontent-%COMP%]{width:49.8%;height:100%;background-size:cover;background-position:center;background-color:#868686;clip-path:url(#curved-clip)}.mirrored[_ngcontent-%COMP%]{transform:scaleX(-1)}.isolated[_ngcontent-%COMP%]{transform:none!important;isolation:isolate!important}.mirrored[_ngcontent-%COMP%]   .not-mirrored[_ngcontent-%COMP%]{transform:none!important;display:inline-block}.btn-next[_ngcontent-%COMP%]{margin-right:30px;transform:translateY(-50px);display:flex;flex-direction:row;box-sizing:border-box}.icon-next[_ngcontent-%COMP%]{align-items:end;display:flex;align-self:center;background-color:#f0f8ff;color:#000;border-radius:50%;width:1rem;height:1rem;margin-left:2px;justify-content:center;cursor:pointer}.icon-previous[_ngcontent-%COMP%]{align-items:end;display:flex;align-self:center;background-color:#f0f8ff;color:#000;border-radius:50%;width:1rem;height:1rem;margin-right:2px;justify-content:center;cursor:pointer}.btn-previous[_ngcontent-%COMP%]{display:flex;flex-direction:row;transform:translateY(-50px);margin-left:30px;box-sizing:border-box}"]})}}return t})();var ve=()=>["/welcome"],W=(()=>{class t{constructor(e,a,o,u,X){this.spinner=e,this.route=a,this.router=o,this.pokemonService=u,this.pokemonApi=X,this.receivedPokemon=[]}ngOnInit(){this.pokemonService.loadPokemonDetails(),this.pokemonService.selectedPokemon$.subscribe(e=>{this.receivedPokemon=e}),this.route.queryParams.subscribe(e=>{e.pokemon==="true"?this.route.params.subscribe(o=>{this.pokemon_id=o.id,this.pokemonService.catchPokemon(this.pokemon_id),this.pokemonid=this.pokemon_id,this.getEvolutions()}):(this.pokemonid=this.route.snapshot.paramMap.get("id"),this.getEvolutions(),console.log("Navegaci\xF3n externa o carga directa"))})}getEvolutions(){return g(this,null,function*(){try{let e=yield h(this.pokemonApi.getPokemonEvolutions(this.pokemonid));this.evolData=e,this.getchain(this.evolData)}catch(e){console.error("Error obteniendo evoluciones:",e)}})}getchain(e){return g(this,null,function*(){try{let a=yield h(this.pokemonApi.getchainEvol(e.evolution_chain.url));this.passDataEvolDetails=yield this.getAllEvolutions(a.chain)}catch(a){console.error("Error al obtener la cadena de evoluci\xF3n",a)}})}getAllEvolutions(o){return g(this,arguments,function*(e,a=[]){return a.push(e.species.name),e.evolves_to.forEach(u=>{this.getAllEvolutions(u,a)}),a})}static{this.\u0275fac=function(a){return new(a||t)(c(M),c(S),c(P),c(E),c(k))}}static{this.\u0275cmp=b({type:t,selectors:[["app-details"]],standalone:!0,features:[F([]),_],decls:6,vars:5,consts:[[3,"pokemonDetails"],["textcolor","text-white","text","Menu","color","primary",1,"btn-menu",3,"routerLink"],[3,"evolDetails","pokemonDetails"],["bdColor","rgba(255, 255, 255, 1)","size","medium","color","#fff","type","ball-scale-multiple"],[2,"font-size","20px","color","white"]],template:function(a,o){a&1&&(d(0,"app-header-details",0)(1,"app-button",1)(2,"app-pokemon-stats",2),n(3,"ngx-spinner",3)(4,"p",4),l(5,"Loading..."),i()()),a&2&&(s("pokemonDetails",o.receivedPokemon),r(),s("routerLink",T(4,ve)),r(),s("evolDetails",o.passDataEvolDetails)("pokemonDetails",o.receivedPokemon))},dependencies:[U,q,B,$,V,G],styles:[".custom-spinner[_ngcontent-%COMP%]{background-image:radial-gradient(circle,#fb6887,#fe5874,#ff4860,#fd3649,#fa2331,#fb2f32,#fb3934,#fc4135,#ff5c52,#ff736d,#ff8987,#ff9f9f);height:100%;width:100%;position:absolute;top:0;left:0;z-index:1000;display:flex;justify-content:center;align-items:center}.btn-menu[_ngcontent-%COMP%]{position:absolute;left:2rem;transform:translateY(1rem)}"]})}}return t})();var Le=[{path:":id",component:W}];export{Le as routes};