import{_ as f,h as b,I as w,i as y,j as k,k as x,r,o as e,c as s,e as o,a as t,F as l,l as _,f as d,t as N,g as m}from"./index-c40977f2.js";const E={components:{adminNav:b,Icon:w},data(){return{events:[]}},mounted(){this.fetchData()},methods:{async fetchData(){try{(await y(k(x,"Events"))).forEach(c=>{console.log(c.data()),this.events.push(c.data())})}catch(a){console.error("Error fetching data:",a)}}}},D={class:"container my-5"},I={class:"row"},V={class:"card bg-dark text-white"},$=["src"],B={class:"card-body"},S={class:"card-title"},q={class:"position-fixed bottom-0 end-0 p-5"},C={class:"btn rounded","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Add New Item",style:{background:"orangered"}};function F(a,c,j,A,u,L){const h=r("adminNav"),i=r("router-link"),p=r("Icon");return e(),s("main",null,[o(h),t("div",D,[t("div",I,[(e(!0),s(l,null,_(u.events,n=>(e(),s("div",{class:"col-lg-3 col-md-4 my-3",key:n.id},[t("div",V,[(e(!0),s(l,null,_(a.item.eventDetails,(g,v)=>(e(),s("div",{key:v},[t("img",{src:g.img,class:"card-img-top",alt:"..."},null,8,$)]))),128)),t("div",B,[t("h5",S,N(n.title),1),o(i,{to:`/all-course/${n.id}`,class:"btn btn-warning text-white"},{default:d(()=>[m("View")]),_:2},1032,["to"]),o(i,{to:`/edit-event/${n.id}/edit`,class:"btn btn-success mx-3 text-white"},{default:d(()=>[m("Edit")]),_:2},1032,["to"])])])]))),128))]),t("div",q,[t("button",C,[o(i,{to:"/create-event",class:"route"},{default:d(()=>[o(p,{icon:"mingcute:add-fill",color:"white",width:"25"})]),_:1})])])])])}const z=f(E,[["render",F]]);export{z as default};
