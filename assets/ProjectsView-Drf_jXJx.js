import{_ as g,o as c,c as n,a as s,t as o,u as b,b as a,d as r,F as p,r as l,e as d}from"./index-BqVi2LaQ.js";const x={class:"project-box"},v={class:"project-box__image"},w=["src"],P={class:"project-box__content"},B={class:"project-box__title"},f={class:"project-box__type"},k=["innerHTML"],L={__name:"ProjectBox",props:["title","type","description","image"],setup(j){const e=j;return(u,m)=>(c(),n("div",x,[s("div",v,[s("img",{class:"size",src:e.image,alt:"image"},null,8,w)]),s("div",P,[s("h2",B,o(e.title),1),s("h3",f,o(e.type),1),s("p",{class:"project-box__description",innerHTML:e.description},null,8,k)])]))}},_=g(L,[["__scopeId","data-v-7fe6a4da"]]),F="/personal-website/assets/PPM-CHY4ApbV.png",C="/personal-website/assets/ana_cup-jB3BKH2_.png",D="/personal-website/assets/bmw_news-hKbppiVy.png",V="/personal-website/assets/FLcn-C3USTIsu.png",H="/personal-website/assets/FLen-DkdPDO4b.png",I="/personal-website/assets/thesis-DCXEKv0S.png",M="/personal-website/assets/plupload-BAQDT8Nn.png",N={class:"box"},S={class:"box"},T={class:"box"},$={__name:"ProjectsView",setup(j){const{t:e,locale:u}=b(),m=a(()=>[{title:e("projects.academic-projects-2.title"),type:e("projects.academic-projects-2.type"),description:e("projects.academic-projects-2.content"),image:I},{title:e("projects.academic-projects-1.title"),type:e("projects.academic-projects-1.type"),description:e("projects.academic-projects-1.content"),image:F},{title:e("projects.academic-projects-3.title"),type:e("projects.academic-projects-3.type"),description:e("projects.academic-projects-3.content"),image:C}]),y=a(()=>[{title:e("projects.personal-projects-1.title"),description:e("projects.personal-projects-1.content"),image:u.value==="zh-CN"?V:H}]),h=a(()=>[{title:e("projects.industry-projects-2.title"),description:e("projects.industry-projects-2.content"),image:M},{title:e("projects.industry-projects-1.title"),description:e("projects.industry-projects-1.content"),image:D}]);return(A,K)=>(c(),n(p,null,[s("h1",null,o(r(e)("projects.info")),1),s("h2",null,o(r(e)("projects.industry")),1),s("div",N,[(c(!0),n(p,null,l(h.value,(t,i)=>(c(),d(_,{key:i,title:t.title,type:t.type,description:t.description,image:t.image},null,8,["title","type","description","image"]))),128))]),s("h2",null,o(r(e)("projects.academic")),1),s("div",S,[(c(!0),n(p,null,l(m.value,(t,i)=>(c(),d(_,{key:i,title:t.title,type:t.type,description:t.description,image:t.image},null,8,["title","type","description","image"]))),128))]),s("h2",null,o(r(e)("projects.personal")),1),s("div",T,[(c(!0),n(p,null,l(y.value,(t,i)=>(c(),d(_,{key:i,title:t.title,type:t.type,description:t.description,image:t.image},null,8,["title","type","description","image"]))),128))])],64))}},E=g($,[["__scopeId","data-v-a94964a3"]]);export{E as default};