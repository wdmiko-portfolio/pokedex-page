import{E as u,M as d,O as f,P as k,W as g,Y as y,ca as w,d as i,ea as b,f as l,h as m,m as p,na as v,p as a,q as h,ra as x,xa as D}from"./chunk-ISXOTCF2.js";var S=(()=>{class o{constructor(e){this.http=e,this.apiUrl="https://pokeapi.co/api/v2"}getPokemons(e,t){return this.http.get(`${this.apiUrl}/pokemon?limit=${e}&offset=${t}`)}getPokemonDetails(e){return this.http.get(`${this.apiUrl}/pokemon/${e}`)}getPokemonEvolutions(e){return this.http.get(`${this.apiUrl}/pokemon-species/${e}/`)}getTotalPokemon(){return this.http.get(`${this.apiUrl}/pokemon/?offset=0&limit=1`)}getchainEvol(e){return this.http.get(e)}static{this.\u0275fac=function(t){return new(t||o)(a(x))}}static{this.\u0275prov=p({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var R=(()=>{class o{constructor(e,t){this.pokemonApi=e,this.route=t,this.pokemonSource=new l([]),this.selectedPokemon$=this.pokemonSource.asObservable(),this.pokemonDetails=[],this.pokemonPrevious=[],this.pokemonNext=[],this.species=[],this.weaknessesList=[]}setPokemonDetails(e){return i(this,null,function*(){this.pokemonSource.next(e),localStorage.setItem("pokemonDetails",JSON.stringify(e))})}loadPokemonDetails(){let e=localStorage.getItem("pokemonDetails");e&&this.pokemonSource.next(JSON.parse(e))}catchPokemon(e){return i(this,null,function*(){try{let t=yield m(this.pokemonApi.getPokemonDetails(e));yield this.getSpecies(t.species.url),yield this.getWeaknesses(t.types);let s=yield this.species.genera.find(r=>r.language.name==="en")?.genus;return this.pokemonDetails={id:t.id.toString().padStart(3,"0"),pokemon_id:t.id,name:t.name,sprite:t.sprites.other.home.front_default,stats:t.stats,types:t.types,abilities:t.abilities,species:this.species,weight:t.weight,height:t.height,category_pokemon:s,weaknesses:this.weaknessesList},yield this.setPokemonDetails(this.pokemonDetails),this.pokemonDetails}catch(t){console.error("Error fetching Pok\xE9mon details:",t)}finally{}})}getSpecies(e){return i(this,null,function*(){let t=yield fetch(e);this.species=yield t.json()})}getWeaknesses(e){return i(this,null,function*(){let t=e.map(n=>n.type.url),s=yield Promise.all(t.map(n=>i(this,null,function*(){return(yield(yield fetch(n)).json()).damage_relations}))),r=[];yield Promise.all(s.map(n=>i(this,null,function*(){yield n.double_damage_from.forEach(c=>{r.push(c.name)})}))),this.weaknessesList=r})}static{this.\u0275fac=function(t){return new(t||o)(a(S),a(D))}}static{this.\u0275prov=p({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var C=(o,j)=>[o,j],A=(()=>{class o{constructor(){this.color="",this.textcolor="",this.disabled=!1,this.text=""}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=h({type:o,selectors:[["app-button"]],inputs:{color:"color",textcolor:"textcolor",disabled:"disabled",text:"text"},standalone:!0,features:[w],decls:2,vars:6,consts:[[1,"custom-button","animation-up-down",3,"ngClass","disabled"]],template:function(t,s){t&1&&(f(0,"button",0),g(1),k()),t&2&&(d("ngClass",b(3,C,s.color,s.textcolor))("disabled",s.disabled),u(),y(" ",s.text,`
`))},dependencies:[v],styles:[".custom-button[_ngcontent-%COMP%]{font-size:16px;padding:8px 16px;border-radius:4px;border:none;cursor:pointer}"]})}}return o})();export{S as a,R as b,A as c};