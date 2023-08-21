import{_ as f,h as g,I as v,i as y,j as D,r as a,o as l,c as r,e as i,a as t,E as b,t as n,F as x,l as I,f as k,k as w,p as E,d as N}from"./index-67d284e1.js";import{f as B}from"./fullPageLoader-2f6a47f0.js";const C={components:{adminNavVue:g,Icon:v,fullPageLoader:B},data(){return{loading:!0,item:null,formattedDescription:"",formattedDate:""}},beforeCreate(){y(D(w,"Courses")).then(o=>{const s=o.docs.find(_=>_.data().id===this.$route.params.id);console.log(s),s?(this.item=s.data(),this.formattedDate=this.formatDate(this.item.date),this.formattedDescription=this.formatDescription(),this.loading=!1):console.log("Item not found")}).catch(o=>{console.error("Error fetching item details:",o)})},methods:{formatDescription(){const o=this.item.about.split(`

`);return this.formattedDescription=o.map(s=>`<p >${s}</p>`).join("")},formatDate(o){try{const s={year:"numeric",month:"long",day:"numeric"};return new Date(o).toLocaleDateString(void 0,s)}catch(s){return console.error("Error formatting date:",s),"Invalid Date"}}}},d=o=>(E("data-v-69cebaed"),o=o(),N(),o),L={class:"container my-5"},S={class:"row"},T={class:"col-lg-4 col-md-4"},V=["src"],j={class:"col-lg-8 col-md-8"},A={key:1},F={class:"mt-3"},H={class:"text-secondary"},M={class:"badge text-bg-primary"},P={class:"d-flex"},U=d(()=>t("span",{style:{"padding-top":"-50px"}},"(4.5 rating)",-1)),W={class:"about my-5"},q=d(()=>t("h2",null,"About This Course",-1)),z={class:"row"},G={class:"col-lg-9 col-md-9"},J=["innerHTML"],K=d(()=>t("h2",null,"What To Expect",-1)),O={class:"contain"},Q={class:"col-lg-3 col-md-3"},R={class:"shadow-lg py-5"},X={class:"container"},Y={class:"date"},Z={class:"duration text-center"},$=d(()=>t("div",{class:"d-flex justify-content-center align-items-center"},[t("button",{class:"btn btn-success"},"Enroll Now")],-1)),tt={class:"duration text-center my-3"},ot={class:"position-fixed bottom-0 end-0 p-3"},et={class:"btn btn-primary btn-lg rounded","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Add New Item"};function st(o,s,_,it,e,nt){const p=a("adminNavVue"),h=a("full-page-loader"),c=a("Icon"),u=a("router-link");return l(),r("main",null,[i(p),t("div",L,[t("div",S,[t("div",T,[t("img",{src:e.item.imageUrl,alt:"",style:{width:"100%"},class:"img-fluid"},null,8,V)]),t("div",j,[e.loading?(l(),b(h,{key:0})):(l(),r("div",A,[t("h3",F,n(e.item.title),1),t("p",H,"By "+n(e.item.instructors[0].value),1),t("span",M,n(e.item.category),1),t("p",null,n(e.item.description),1),t("div",P,[t("div",null,[i(c,{icon:"ph:star-fill",color:"gold"}),i(c,{icon:"ph:star-fill",color:"gold"}),i(c,{icon:"ph:star-fill",color:"gold"}),i(c,{icon:"ph:star-fill",color:"gold"}),i(c,{icon:"ph:star-half-fill",color:"gold"})]),U])]))])]),t("div",W,[q,t("div",z,[t("div",G,[t("div",{class:"mt-3 p-3",innerHTML:e.formattedDescription},null,8,J),K,t("div",O,[t("ul",null,[(l(!0),r(x,null,I(e.item.thingsToExpect,m=>(l(),r("li",{key:m,class:"my-2"},n(m.value),1))),128))])])]),t("div",Q,[t("div",R,[t("div",X,[t("p",Y,n(e.formattedDate),1),t("p",Z,n(e.item.duration),1)]),$,t("p",tt,[t("i",null,n(e.item.level),1)])])])])]),t("div",ot,[t("button",et,[i(u,{to:`/edit-course/${e.item.id}/edit`,class:"route"},{default:k(()=>[i(c,{icon:"ph:pencil-fill"})]),_:1},8,["to"])])])])])}const at=f(C,[["render",st],["__scopeId","data-v-69cebaed"]]);export{at as default};