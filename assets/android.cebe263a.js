import{_,r as u,o,c as t,a as e,b as n,w as r,F as i,d as p,t as l,e as c}from"./index.4d1d58e3.js";const m=[{name:"GSB",image:"gsbAndroidResult",description:"Le projet GSB est une application mobile destin\xE9e aux visiteurs d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022.",url:"GSBApplication"},{name:"GogMeteo",image:"gogmeteoResult",description:"Ce projet a \xE9t\xE9 fait en collaboration avec un ami de ma classe de BTS et est pr\xE9vu pour \xEAtre une sorte de Geoguessr mais o\xF9 l'on doit retrouver une ville gr\xE2ce \xE0 sa temp\xE9rature.",url:"gogmeteo"}];var h={data:m};const g={data(){return{datas:h}},emits:["top"],mounted(){this.$emit("top")}},v=e("header",{id:"head",class:"secondary"},null,-1),f={class:"container"},b={class:"breadcrumb"},B=c("Home"),S=c("Mes projets"),$=e("li",{class:"active"},"Android",-1),k={class:"jumbotron top-space col-sm-12"},x={class:"container"},A={class:"row"},C={class:"col-sm-12 highlight"},G=e("header",{class:"page-header"},[e("h1",{class:"page-title"},"Mes projets Android")],-1),w=e("p",null,"Ici sont mes projets Android faits avec Android Studio pour la plupart.",-1),j=["href"],y=["src"],L=e("p",{class:"invisible"},"lespace",-1),M=["href"],N=e("b",null,[e("u",null,"Le t\xE9l\xE9charger")],-1),T=[N];function V(F,R,z,D,d,E){const a=u("router-link");return o(),t(i,null,[v,e("div",f,[e("ol",b,[e("li",null,[n(a,{class:"marronColor",to:"/"},{default:r(()=>[B]),_:1})]),e("li",null,[n(a,{class:"marronColor",to:"/#projects"},{default:r(()=>[S]),_:1})]),$]),e("div",k,[e("div",x,[e("div",A,[e("div",C,[G,w,(o(!0),t(i,null,p(d.datas.data,s=>(o(),t("div",{key:s.name},[e("div",null,[e("h2",null,"Projet "+l(s.name),1),e("p",null,l(s.description),1),e("a",{href:`/images/${s.image}.png`,target:"blank",noreferrer:"",noopener:"",nofollow:""},[e("img",{src:`/images/${s.image}.png`},null,8,y)],8,j)]),L,e("a",{class:"normalColor",href:`/files/${s.url}.7z`},T,8,M)]))),128))])])])])])],64)}var I=_(g,[["render",V]]);export{I as default};
