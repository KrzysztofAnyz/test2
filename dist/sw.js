if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddNewCarView-2aaed5fa.js",revision:null},{url:"assets/AddNewCarView-d3e53b11.css",revision:null},{url:"assets/AuthorsView-a83eaa0a.js",revision:null},{url:"assets/AuthorsView-efa72d7c.css",revision:null},{url:"assets/CarDetailsView-a69ba187.js",revision:null},{url:"assets/FuelView-e3295f93.js",revision:null},{url:"assets/HomeView-637a3d3a.css",revision:null},{url:"assets/HomeView-cadd9e9d.js",revision:null},{url:"assets/index-35420bb4.js",revision:null},{url:"assets/index-8c95c468.css",revision:null},{url:"assets/index-ab906969.js",revision:null},{url:"assets/LoginView-8a39fa15.css",revision:null},{url:"assets/LoginView-b4d8994a.js",revision:null},{url:"assets/MapsView-87c8edfc.js",revision:null},{url:"assets/PhoneView-00f585d0.js",revision:null},{url:"assets/PhoneView-d8390a7d.css",revision:null},{url:"assets/RegisterView-b3b15813.css",revision:null},{url:"assets/RegisterView-e2da5280.js",revision:null},{url:"assets/TopBar-695eacf7.css",revision:null},{url:"assets/TopBar-96203550.js",revision:null},{url:"index.html",revision:"ea2213f179bdaa6256039ef105795625"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"6135a0744a4379c2d7482da504c52550"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));