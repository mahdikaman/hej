import{r as v,o as c,c as d,a as t,b,w as g,F as h,t as l,d as u,e as k,f,p as L,g as B,h as A,i as S,j as x,k as I,l as $,v as N,m as V}from"./vendor.8b5f0910.js";const C=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};C();var _=(e,i)=>{const s=e.__vccOpts||e;for(const[a,o]of i)s[a]=o;return s};const R={},F=t("h1",null,l("One simpel project"),-1),O={class:"nav-ul"},T=u("Home"),W=u("About"),H=t("footer",null,"Copyright \xA9 Mahdi Kamankesh",-1);function P(e,i){const s=v("RouterLink"),a=v("RouterView");return c(),d(h,null,[t("nav",null,[F,t("ul",O,[t("li",null,[b(s,{class:"routerlink",to:"/"},{default:g(()=>[T]),_:1})]),t("li",null,[b(s,{class:"routerlink",to:"/about"},{default:g(()=>[W]),_:1})])])]),t("main",null,[b(a)]),H],64)}var q=_(R,[["render",P]]);const j={name:"AllBreweries",data(){return{heading:"Click below for further information",favorite:""}},computed:{breweries(){return this.$store.state.breweries},isbreweriesLoading(){return this.$store.state.isLoading}},created(){this.$store.dispatch("getbreweries")},methods:{goTobrewery(e){this.$router.push("/breweryview/"+e)}}},E={key:0},M={key:1},J=["onClick"];function K(e,i,s,a,o,n){return c(),d(h,null,[t("h2",null,[t("u",null,l(o.heading),1)]),n.isbreweriesLoading?(c(),d("div",E,"Loading breweries...")):n.breweries.length===0?(c(),d("div",M,"No breweries...")):(c(!0),d(h,{key:2},k(n.breweries,r=>(c(),d("div",{class:"div1",key:r.id},[t("ul",null,[t("li",{onClick:y=>n.goTobrewery(r.id)},l(r.name),9,J)])]))),128))],64)}var D=_(j,[["render",K],["__scopeId","data-v-258e85f4"]]);const U={name:"HomeView",components:{Breweries:D}};function Y(e,i,s,a,o,n){const r=v("Breweries");return c(),f(r)}var z=_(U,[["render",Y]]);const G={name:"LinkApi",methods:{hacked(){alert("I am sorry but your Computer got hacked!")},goToApi(){window.open("https://api.openbrewerydb.org")}}},w=e=>(L("data-v-0c905db3"),e=e(),B(),e),Q={class:"info"},X={class:"section-cta"},Z={class:"container"},ee={class:"cta"},te={class:"cta-text-box"},oe=w(()=>t("h2",{class:"heading-secondary"},"Vote for your best Brewery !",-1)),re={class:"cta-form",action:"#"},ie=A('<div data-v-0c905db3><label for="favorite-brewery" data-v-0c905db3>Favorite Brewery</label><input id="favorite-brewery" type="text" placeholder="Banjo Brewing" required data-v-0c905db3></div><div data-v-0c905db3><label for="full-name" data-v-0c905db3>Full Name</label><input id="full-name" type="text" placeholder="mahdi" required data-v-0c905db3></div><div data-v-0c905db3><label for="email" data-v-0c905db3> Your email address</label><input id="email" type="email" placeholder="hej@example.com" required data-v-0c905db3></div><div data-v-0c905db3><label for="select-where" data-v-0c905db3>Where did you hear from us?</label><select id="select-where" required data-v-0c905db3><option value="" data-v-0c905db3>Please choose one option:</option><option value="friends" data-v-0c905db3>Friends and family</option><option value="IT" data-v-0c905db3>IT h\xF6gskolan</option><option value="NONE" data-v-0c905db3>None of your business</option><option value="Mahdi" data-v-0c905db3>From Mahdi</option><option value="Jon" data-v-0c905db3>From Jon</option></select></div>',4),ne=w(()=>t("div",{class:"cta-img-box",role:"img"},null,-1)),se=w(()=>t("div",{class:"div_img"},null,-1));function ae(e,i,s,a,o,n){return c(),d(h,null,[t("div",Q,[t("section",X,[t("div",Z,[t("div",ee,[t("div",te,[oe,t("form",re,[ie,t("button",{class:"cta",onClick:i[0]||(i[0]=(...r)=>n.goToApi&&n.goToApi(...r))},"Visit Brewery API"),t("button",{class:"cta",onClick:i[1]||(i[1]=(...r)=>n.hacked&&n.hacked(...r))},"Send your Review")])]),ne])])])]),se],64)}var ce=_(G,[["render",ae],["__scopeId","data-v-0c905db3"]]);const de={name:"AboutView",components:{LinkApi:ce}};function le(e,i,s,a,o,n){const r=v("LinkApi");return c(),f(r)}var ue=_(de,[["render",le]]);const _e={name:"SingleBrewery",data(){return{singleBreweryInfo:[],isBreweryLoading:!1}},computed:{brewery(){return this.$store.state.brewery}},created(){this.$store.dispatch("singlebrewery",this.$route.params.id)},watch:{"$store.state.brewery":function(){console.log("Watch brewery",this.$store.state.brewery),this.singleBreweryInfo=this.$store.state.brewery},"$store.state.isLoading":function(){console.log("Watch isLoading",this.$store.state.isLoading),this.isBreweryLoading=this.$store.state.isLoading}},props:{heading:{type:String,required:!0}}},m=e=>(L("data-v-1243e74b"),e=e(),B(),e),pe={key:0},he={key:1},me=m(()=>t("b",null,"Name:",-1)),ve=m(()=>t("b",null,"City:",-1)),be=m(()=>t("b",null,"Country:",-1)),fe=m(()=>t("b",null,"Phone number:",-1)),we=m(()=>t("b",null,"Postal code:",-1)),ye=m(()=>t("b",null,"Website:",-1));function ge(e,i,s,a,o,n){return c(),d(h,null,[t("h2",null,[t("u",null,l(s.heading),1)]),e.isbreweryLoading?(c(),d("div",pe,"Loading brewery...")):o.singleBreweryInfo.length===0?(c(),d("div",he,"No brewery...")):(c(!0),d(h,{key:2},k(o.singleBreweryInfo,r=>(c(),d("div",{key:r.id},[t("ul",null,[t("li",null,[me,u(" "+l(r.name),1)]),t("li",null,[ve,u(" "+l(r.city),1)]),t("li",null,[be,u(" "+l(r.country),1)]),t("li",null,[fe,u(" "+l(r.phone),1)]),t("li",null,[we,u(" "+l(r.postal_code),1)]),t("li",null,[ye,u(" "+l(r.website_url),1)])])]))),128))],64)}var $e=_(_e,[["render",ge],["__scopeId","data-v-1243e74b"]]);const ke={name:"BreweryView",components:{SingleBrewery:$e},data(){return{singleHeading:"Breweries"}}};function Le(e,i,s,a,o,n){const r=v("SingleBrewery");return c(),f(r,{heading:o.singleHeading},null,8,["heading"])}var Be=_(ke,[["render",Le]]),Ae=S({history:x(),routes:[{name:"home",component:z,path:"/"},{name:"aboutview",component:ue,path:"/about"},{name:"breweryview",component:Be,path:"/breweryview/:id"}]});const Se={breweries:[],brewery:[],isLoading:!1},xe={setbreweries(e,i){e.breweries=i},setbrewery(e,i){e.brewery=i},isLoading(e,i){e.isLoading=i}},Ie={async getbreweries(e){e.commit("isLoading",!0);const i=await $.get("https://api.openbrewerydb.org/breweries/?");e.commit("setbreweries",i.data),e.commit("isLoading",!1)},async singlebrewery(e,i){e.commit("isLoading",!0);const s=await $.get("https://api.openbrewerydb.org/breweries/?"+i);e.commit("setbrewery",s.data),e.commit("isLoading",!1)}};var Ne=I({mutations:xe,actions:Ie,state:Se,strict:!0});function Ve(e={}){const{immediate:i=!1,onNeedRefresh:s,onOfflineReady:a,onRegistered:o,onRegisterError:n}=e;let r;const y=async(p=!0)=>{};return"serviceWorker"in navigator&&(r=new N("/sw.js",{scope:"/",type:"classic"}),r.addEventListener("activated",p=>{p.isUpdate?window.location.reload():a==null||a()}),r.register({immediate:i}).then(p=>{o==null||o(p)}).catch(p=>{n==null||n(p)})),y}V(q).use(Ae).use(Ne).mount("#app");Ve();