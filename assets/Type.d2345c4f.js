import{_ as h,r as y,o,c as a,a as e,b as r,w as l,t as n,F as c,e as m,f as _,d}from"./index.ad745ab8.js";const f=[{type:"Android",value:"Ici sont mes projets Android faits avec Android Studio pour la plupart."},{type:"C#",value:"Ici sont mes gros projets C# faits avec visual studio."},{type:"Symfony",value:"Ici sont mes projets Symfony faits avec Symfony CLI et postman."}],g=[{name:"GSB",type:"Android",image:"gsbAndroidResult",description:"Le projet GSB est une application mobile destin\xE9e aux visiteurs d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022.",file:"GSBApplication"},{name:"GogMeteo",type:"Android",image:"gogmeteoResult",description:"Ce projet a \xE9t\xE9 fait en collaboration avec un ami de ma classe de BTS et est pr\xE9vu pour \xEAtre une sorte de Geoguessr mais o\xF9 l'on doit retrouver une ville gr\xE2ce \xE0 sa temp\xE9rature.",file:"gogmeteo"},{name:"GSB_frais",type:"C#",image:"gsbCsharpResult",description:"Le projet GSB_frais est une application windows destin\xE9e aux comptables d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022 et est une application console windows de type client lourd.",file:"GSB_frais"},{name:"GSB",type:"Symfony",image:"NIY",description:"Le projet GSB est une application mobile destin\xE9e aux visiteurs d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022 et comprends aussi une partie symfony de type API.",file:"GSBApplication"},{name:"Cookle",type:"Symfony",image:"cookleResult",description:"Ce projet est une sorte de marmiton o\xFB l'on peut stocker et regarder les recettes de plusieurs sites internet (dont Marmiton) mais aussi la recette du jour choisie al\xE9atoirement.",url:"cookle"}];var v={types:f,data:g};const S={data(){return{datas:v,type:this.$route.params.types,typeUrl:""}},emits:["top"],mounted(){this.$emit("top"),this.type=="CSharp"?this.typeUrl="C#":this.typeUrl=this.type},watch:{$route(p,u){p.name&&u.name===null&&location.assign("/")}}},b=e("header",{id:"head",class:"secondary"},null,-1),B={class:"container"},C={class:"breadcrumb"},k=d("Home"),G=d("Mes projets"),w={class:"active"},A={class:"jumbotron top-space col-sm-12"},x={class:"container"},I={class:"row"},L={class:"col-sm-12 highlight"},T={class:"page-header"},U={class:"page-title"},j={key:0},N={key:0},$=d("Plus d'infos"),M=["href"],R=["src"],V=e("p",{class:"invisible"},"lespace",-1),F=["href"],z=e("b",null,[e("u",null,"Le t\xE9l\xE9charger")],-1),D=[z];function E(p,u,H,P,s,Y){const i=y("router-link");return o(),a(c,null,[b,e("div",B,[e("ol",C,[e("li",null,[r(i,{class:"marronColor",to:"/"},{default:l(()=>[k]),_:1})]),e("li",null,[r(i,{class:"marronColor",to:"/#projects"},{default:l(()=>[G]),_:1})]),e("li",w,n(s.typeUrl),1)]),e("div",A,[e("div",x,[e("div",I,[e("div",L,[e("header",T,[e("h1",U,"Mes projets "+n(s.typeUrl),1)]),(o(!0),a(c,null,m(s.datas.types,t=>(o(),a("div",{key:t},[t.type===s.type?(o(),a("div",j,[e("p",null,n(t.value),1)])):_("",!0)]))),128)),(o(!0),a(c,null,m(s.datas.data,t=>(o(),a("div",{key:t.name},[t.type===s.typeUrl?(o(),a("div",N,[e("div",null,[e("h2",null,"Projet "+n(t.name),1),e("p",null,n(t.description),1),r(i,{to:`/${s.type}/${t.name}`},{default:l(()=>[$]),_:2},1032,["to"]),e("a",{href:`/images/${t.image}.png`,target:"blank",noreferrer:"",noopener:"",nofollow:""},[e("img",{src:`/images/${t.image}.png`},null,8,R)],8,M)]),V,e("a",{class:"normalColor",href:`/files/${t.file}.7z`},D,8,F)])):_("",!0)]))),128))])])])])])],64)}var J=h(S,[["render",E]]);export{J as default};
