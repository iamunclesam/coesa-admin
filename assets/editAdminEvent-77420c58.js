import{_ as C,q as w,h as x,I as D,i as p,j as g,k as _,s as T,x as S,y as E,n as U,r as f,o as u,c as h,e as I,a as e,b as F,w as d,v as c,t as v,g as b,F as V,p as k,d as A}from"./index-6beb093a.js";const N=w(),q={components:{adminNavVue:x,Icon:D},data(){return{editedItem:{title:"",description:"",date:"",time:"",selectedFile:null,isUploading:!1,showAlmostThere:!1},imageFile:null,imageUrl:"",characterCount:0,textareaCharacterCount:0}},async created(){const t=this.$route.params.id;await this.fetchItemDetails(t)},methods:{updateCounter(){this.characterCount=this.editedItem.description.length},updateTextareaCounter(){this.textareaCharacterCount=this.editedItem.about.length},async fetchItemDetails(t){try{const r=(await p(g(_,"Events"))).docs.find(l=>l.data().id===t);console.log(r),r?this.editedItem={...r.data()}:console.log("Item not found")}catch(s){console.error("Error fetching item details:",s)}},async saveChanges(){try{const t=this.$route.params.id,s=g(_,"Events"),l=(await p(s)).docs.find(i=>i.data().id===t);if(!l){console.log("Item not found");return}this.isUploading=!0,setTimeout(()=>{this.showAlmostThere=!0},1e4);const a={...this.editedItem};if(this.imageFile){const i=T(N,`images/${l.ref.id}`),m=await S(i,this.imageFile);this.imageUrl=await E(m.ref),a.imageUrl=this.imageUrl}await U(l.ref,a),this.$router.replace({params:{id:this.editedItem.title}}),this.isUploading=!1,console.log("Item updated successfully"),this.$router.push("/all-course")}catch(t){console.error("Error updating item:",t)}},async handleImageChange(t){this.imageFile=t.target.files[0]},addThing(){this.thingsToExpect.push({id:Date.now(),value:""})},removeThing(t){this.thingsToExpect.splice(t,1)},addCourseInstructor(){this.instructors.push({id:Date.now(),value:""})},removeCourseInstructor(t){this.instructors.splice(t,1)}},watch:{"$route.params.title":{immediate:!0,async handler(t){await this.fetchItemDetails(t)}}}},n=t=>(k("data-v-869a786d"),t=t(),A(),t),B={class:"container my-5"},R=n(()=>e("h2",null,"Edit Event",-1)),L={class:"row"},M={class:"col-lg-6 col-md-6"},P={class:"mb-3 mt-4"},j=n(()=>e("label",{for:"exampleInputName",class:"form-label"},"Add Course Image",-1)),z={class:"mb-3"},G=n(()=>e("label",{for:"exampleInputEmail1",class:"form-label"}," Course Title",-1)),H={class:"mb-3"},J=n(()=>e("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Course Description(briefly describe the course)",-1)),K={key:0,type:"submit",class:"btn btn-secondary"},O=n(()=>e("span",{class:"spinner-border spinner-border-sm text-white mx-2",role:"status"},null,-1)),Q={key:1,type:"submit",class:"btn btn-secondary"},W={class:"col-lg-6 col-md-6"},X={class:"row"},Y={class:"col-lg-6 col-md-6"},Z={class:"mb-3"},$=n(()=>e("label",{for:"datepicker",class:"form-label"},"Select Date:",-1)),ee={class:"col-lg-6 col-md-6"},te={class:"mb-3"},se=n(()=>e("label",{for:"timepicker",class:"form-label"},"Select Time:",-1));function oe(t,s,r,l,a,i){const m=f("adminNavVue"),y=f("Icon");return u(),h(V,null,[I(m),e("div",B,[R,e("form",{onSubmit:s[6]||(s[6]=F((...o)=>i.saveChanges&&i.saveChanges(...o),["prevent"])),ref:"uploadForm"},[e("div",L,[e("div",M,[e("div",P,[j,e("input",{type:"file",onChange:s[0]||(s[0]=(...o)=>i.handleImageChange&&i.handleImageChange(...o)),class:"form-control",id:"image",ref:"fileInput",required:""},null,544)]),e("div",z,[G,d(e("input",{type:"text",class:"form-control",id:"exampleInputEmail1","onUpdate:modelValue":s[1]||(s[1]=o=>a.editedItem.title=o)},null,512),[[c,a.editedItem.title]])]),e("div",H,[J,d(e("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3","onUpdate:modelValue":s[2]||(s[2]=o=>a.editedItem.description=o),maxlength:"300",onInput:s[3]||(s[3]=(...o)=>i.updateCounter&&i.updateCounter(...o))},null,544),[[c,a.editedItem.description]]),e("p",null,v(a.characterCount)+" / 300",1)]),t.isUploading?(u(),h("button",K,[O,b(" "+v(t.showAlmostThere?"Almost there..":"Loading..."),1)])):(u(),h("button",Q,[b("Save "),I(y,{icon:"ci:save",color:"white"})]))]),e("div",W,[e("div",X,[e("div",Y,[e("div",Z,[$,d(e("input",{type:"date",class:"form-control",id:"datepicker","onUpdate:modelValue":s[4]||(s[4]=o=>a.editedItem.date=o)},null,512),[[c,a.editedItem.date]])])]),e("div",ee,[e("div",te,[se,d(e("input",{type:"time",class:"form-control",id:"timepicker","onUpdate:modelValue":s[5]||(s[5]=o=>a.editedItem.time=o)},null,512),[[c,a.editedItem.time]])])])])])])],544)])],64)}const ie=C(q,[["render",oe],["__scopeId","data-v-869a786d"]]);export{ie as default};