import{T as l}from"./TopBar-96203550.js";import{_ as d,g as r,o as _,c as i,h as p,a as e,p as u,d as b}from"./index-ab906969.js";const m={name:"Phone",components:{TopBar:l},methods:{callNumber(){window.location.href="tel:+48321321321"}}},s=o=>(u("data-v-6bdbbf8d"),o=o(),b(),o),h={class:"div-container"},f=s(()=>e("div",{class:"sidebar"},null,-1)),v={class:"call-container"},B=s(()=>e("p",null,"This phone number is for road assistance.",-1)),w=s(()=>e("i",null,[e("p",null,"Please note that charges may apply depending on your mobile carrier.")],-1));function y(o,a,N,T,g,t){const n=r("TopBar");return _(),i("div",h,[p(n),f,e("div",v,[B,e("button",{class:"call-button",onClick:a[0]||(a[0]=(...c)=>t.callNumber&&t.callNumber(...c))},"Call +48321321321"),w])])}const P=d(m,[["render",y],["__scopeId","data-v-6bdbbf8d"]]);export{P as default};