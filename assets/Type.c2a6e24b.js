import{_ as m,r as _,o,c as i,a as e,b as r,w as l,t as a,F as c,e as p,f as u,d}from"./index.0d878d1b.js";const h=[{type:"Android",value:"Ici sont mes projets Android faits avec Android Studio pour la plupart."},{type:"C#",value:"Ici sont mes gros projets C# faits avec visual studio."},{type:"Symfony",value:"Ici sont mes projets Symfony faits avec Symfony CLI et postman."}],y=[{name:"GSB",type:"Android",image:"gsbAndroidResult",description:"Le projet GSB est une application mobile destin\xE9e aux visiteurs d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022.",file:"GSBApplication"},{name:"GogMeteo",type:"Android",image:"gogmeteoResult",description:"Ce projet a \xE9t\xE9 fait en collaboration avec un ami de ma classe de BTS et est pr\xE9vu pour \xEAtre une sorte de Geoguessr mais o\xF9 l'on doit retrouver une ville gr\xE2ce \xE0 sa temp\xE9rature.",file:"gogmeteo"},{name:"GSB_frais",type:"C#",image:"gsbCsharpResult",description:"Le projet GSB_frais est une application windows destin\xE9e aux comptables d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022 et est une application console windows de type client lourd.",file:"GSB_frais"},{name:"GSB",type:"Symfony",image:"NIY",description:"Le projet GSB est une application mobile destin\xE9e aux visiteurs d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022 et comprends aussi une partie symfony de type API.",file:"GSBApplication"},{name:"Cookle",type:"Symfony",image:"cookleResult",description:"Ce projet est une sorte de marmiton o\xFB l'on peut stocker et regarder les recettes de plusieurs sites internet (dont Marmiton) mais aussi la recette du jour choisie al\xE9atoirement.",url:"cookle"}];var f={types:h,data:y};const g={data(){return{datas:f,type:this.$route.params.types,typeUrl:""}},emits:["top"],mounted(){this.$emit("top"),this.type=="CSharp"?this.typeUrl="C#":this.typeUrl=this.type}},v=e("header",{id:"head",class:"secondary"},null,-1),S={class:"container"},b={class:"breadcrumb"},B=d("Home"),C=d("Mes projets"),k={class:"active"},G={class:"jumbotron top-space col-sm-12"},A={class:"container"},w={class:"row"},x={class:"col-sm-12 highlight"},I={class:"page-header"},L={class:"page-title"},T={key:0},U={key:0},j=d("Plus d'infos"),N=["href"],M=["src"],R=e("p",{class:"invisible"},"lespace",-1),V=["href"],$=e("b",null,[e("u",null,"Le t\xE9l\xE9charger")],-1),F=[$];function z(D,E,H,P,s,Y){const n=_("router-link");return o(),i(c,null,[v,e("div",S,[e("ol",b,[e("li",null,[r(n,{class:"marronColor",to:"/"},{default:l(()=>[B]),_:1})]),e("li",null,[r(n,{class:"marronColor",to:"/#projects"},{default:l(()=>[C]),_:1})]),e("li",k,a(s.typeUrl),1)]),e("div",G,[e("div",A,[e("div",w,[e("div",x,[e("header",I,[e("h1",L,"Mes projets "+a(s.typeUrl),1)]),(o(!0),i(c,null,p(s.datas.types,t=>(o(),i("div",{key:t},[t.type===s.type?(o(),i("div",T,[e("p",null,a(t.value),1)])):u("",!0)]))),128)),(o(!0),i(c,null,p(s.datas.data,t=>(o(),i("div",{key:t.name},[t.type===s.typeUrl?(o(),i("div",U,[e("div",null,[e("h2",null,"Projet "+a(t.name),1),e("p",null,a(t.description),1),r(n,{to:`/${s.type}/${t.name}`},{default:l(()=>[j]),_:2},1032,["to"]),e("a",{href:`/images/${t.image}.png`,target:"blank",noreferrer:"",noopener:"",nofollow:""},[e("img",{src:`/images/${t.image}.png`},null,8,M)],8,N)]),R,e("a",{class:"normalColor",href:`/files/${t.file}.7z`},F,8,V)])):u("",!0)]))),128))])])])])])],64)}var J=m(g,[["render",z]]);export{J as default};
