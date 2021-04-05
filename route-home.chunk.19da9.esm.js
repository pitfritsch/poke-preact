(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{A4YR:function(t,e,o){"use strict";function n(t){return function(e){return i.b.createElement(a,l({attr:l({},t.attr)},e),function t(e){return e&&e.map((function(e,o){return i.b.createElement(e.tag,l({key:o},e.attr),t(e.child))}))}(t.child))}}function a(t){var e=function(e){var o,n=t.attr,a=t.size,r=t.title,c=u(t,["attr","size","title"]),s=a||e.size||"1em";return e.className&&(o=e.className),t.className&&(o=(o?o+" ":"")+t.className),i.b.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,c,{className:o,style:l(l({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),r&&i.b.createElement("title",null,r),t.children)};return void 0!==s?i.b.createElement(s.Consumer,null,(function(t){return e(t)})):e(c)}function r(t){return n({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(t)}o.d(e,"a",(function(){return r}));var i=o("l8WD"),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=i.b.createContext&&i.b.createContext(c),l=function(){return(l=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var a in e=arguments[o])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},u=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(o[n[a]]=t[n[a]])}return o}},FA6U:function(t){t.exports={home:"home__MseGd",flex:"flex__1tooj"}},N6VX:function(t,e,o){"use strict";(function(t){var n=o("QRet"),a=(o("l8WD"),o("UutA"));let r,i,c=t=>t;const s=Object(a.c)(r||(r=c`
  0% {
    bottom: -100px;
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    bottom: 15px;
    opacity: 1;
  }
`)),l=a.b.div(i||(i=c`
  position: absolute;
  bottom: 15px;
  background: ${0};
  color: ${0};
  padding: 15px 50px;
  border-radius: 5px;
  animation: ${0};
  animation-duration: .2s;
  animation-iteration-count: initial;
  z-index: 101;
  text-transform: capitalize;

  h3 {
    margin: 0 0 5px 0;
  }
`),t=>"success"===t.status?"#9BC53D":"#C3423F",t=>"success"===t.status?"#393D3F":"#FDFDFF",s);e.a=function({options:e,timeout:o=5e3,closeFunction:a}){return Object(n.d)(()=>{setTimeout(()=>{a()},o)},[o,a]),t(l,{onClick:t=>{t.stopPropagation(),a()},status:e.status},t("h3",null,e.title),e.description)}}).call(this,o("hosL").h)},Othf:function(t,e,o){"use strict";o.r(e),function(t){var n=o("QRet"),a=o("UutA"),r=o("XWqd"),i=o("l+nt"),c=o("ro6/"),s=o("7l2R"),l=o("FA6U"),u=o.n(l);let d,f,m=t=>t;const p=a.b.h1(d||(d=m`
	font-family: 'Fjalla One', sans-serif;
	font-size: 3em;
	text-align: center;
`)),b=a.b.div(f||(f=m`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 35px;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 400px) {
		grid-template-columns: 1fr;
	}
`));e.default=()=>{const[e,o]=Object(n.j)([]),[a,l]=Object(n.j)(void 0),[d,f]=Object(n.j)(0),m=Object(n.a)(async()=>{const t=await s.a.list(d);o(e=>[...e,...t.results])},[d]);Object(n.d)(()=>{m()},[m]);const g=Object(n.a)(async t=>{const e=await s.a.getPokemon(t.name);e.image=`https://pokeres.bastionbot.org/images/pokemon/${e.id}.png`,l(e)},[]);return t("div",{class:u.a.home},t(p,null,"All Pokémons List"),t(b,null,e.length>0&&e.map(e=>t(r.a,{onClick:()=>g(e)},e.name))),t("div",{class:u.a.flex},t(c.a,{onClick:()=>f(t=>t+20)},"Load more")),a&&t(i.a,{data:a,closeFunction:()=>l(void 0)}))}}.call(this,o("hosL").h)},XWqd:function(t,e,o){"use strict";(function(t){function n(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)e.indexOf(o=r[n])>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e.indexOf(o=r[n])>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}o("l8WD");let a;const r=o("UutA").b.div(a||(a=(t=>t)`
	outline: none;
	border: none;
	min-height: 100px;
	background-color: #fafafa;
	border-radius: 5px;
	font-family: 'Oswald', sans-serif;
	color: #393D3F;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	text-transform: capitalize;
	transition: .2s;
	cursor: pointer;
	
	:hover, :focus{
    background-color: #067BC2;
		color: #FDFDFF;
		transform: scale(1.05);
	}
	:active{
		transform: scale(1);
	}
`));e.a=function(e){let{children:o}=e,a=n(e,["children"]);return t(r,a,o)}}).call(this,o("hosL").h)},"l+nt":function(t,e,o){"use strict";(function(t){var n=o("QRet"),a=(o("l8WD"),o("UutA")),r=o("7l2R"),i=o("A4YR"),c=o("N6VX"),s=o("Jlcc");let l,u,d,f,m,p,b,g,h,v=t=>t;const x=a.b.div(l||(l=v`
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  place-items: center;
  background-color: #0000008c;
  
  ${0}
`),t=>t.open&&Object(a.a)(u||(u=v`
    display: grid;
  `))),O=(Object(a.c)(d||(d=v`
  0% { background: #54b7ff }
  12.5% { background: #5d54ff }
  25% { background: #da54ff }
  37.5% { background: #ff54c3 }
  50% { background: #ff5454 }
  62.5% { background: #ff54c3 }
  75% { background: #da54ff }
  87.5% { background: #5d54ff }
  100% { background: #54b7ff }
`)),Object(a.c)(f||(f=v`
  0% { 
    opacity: 0;
    transform: scale(0);
  }
  100% { 
    opacity: 100;
    transform: scale(1);
  }
`))),y=a.b.div(m||(m=v`
  position: relative;
  background: #54b7ff;
  width: 50vw;
  height: 75vh;
  display: grid;
  place-items: center;
  border-radius: 5px;
  animation-name: ${0};
  animation-duration: .2s;
  animation-iteration-count: initial;

  @media (max-width: 1000px) {
    width: 75vw;
  }

  @media (max-width: 400px) {
    width: 95vw;
  }
  
  >img {
    object-fit: cover;
    max-width: 45vw;
    max-height: 70vh;
    margin: auto;
    animation-name: ${0};
    animation-duration: .2s;
    animation-iteration-count: initial;
    
    @media (max-width: 1000px) {
      max-width: 70vw;
    }

    @media (max-width: 400px) {
      max-width: 90vw;
    }
  }
`),O,O),j=a.b.header(p||(p=v`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px 15px;
`)),w=Object(a.c)(b||(b=v`
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(-7deg);
  }
  20%, 40%, 60%, 80% {
    transform: rotate(7deg);
  }
`)),k=Object(a.b)(i.a)(g||(g=v`
  font-size: 40px;
  transition: .2s;
  cursor: pointer;
  animation: ${0};
  animation-duration: 1s;
  animation-iteration-count: initial;
  
  :hover {
    transform: scale(1.1);
    color: gold;
  }

  :active {
    transform: scale(0.8)
  }

  ${0}
`),w,t=>t.isFavorite&&Object(a.a)(h||(h=v`
    color: gold;
    :hover {
      color: #FDFDFF;
    }
  `)));e.a=function({data:e,closeFunction:o}){const[a,i]=Object(n.j)(void 0),[l,u]=Object(n.j)(!1),[d,f]=Object(n.j)(!1),[m,p]=Object(n.j)({}),b=Object(n.a)(async()=>{e&&i(await r.a.getImageBlob(e.image))},[e]);Object(n.d)(()=>{b();var t=JSON.parse(localStorage.getItem("favorites")||"[]");f(!!t.find(t=>t.name===e.name))},[b]);const g=Object(n.a)(()=>{i(void 0),u(!1),o()},[o]),h=Object(n.a)(()=>{var t=JSON.parse(localStorage.getItem("favorites")||"[]");d?(t=t.filter(t=>t.name!==e.name),p({title:"Removed",description:e.name+" removed from favorites",status:"error"}),f(!1)):(t.push(e),p({title:"Added",description:e.name+" added to favorites",status:"success"}),f(!0)),localStorage.setItem("favorites",JSON.stringify(t)),u(!0)},[e,d,localStorage]);return t(x,{open:!!e,onClick:g},l&&t(c.a,{options:m,closeFunction:()=>u(!1)}),e&&t(y,{onClick:t=>t.stopPropagation()},t(j,null,a&&t(k,{title:d?"Remove from favorites":"Add to favorites",onClick:h,isFavorite:d})),a?t("img",{src:a,alt:"imagem"}):t(s.a,null)))}}).call(this,o("hosL").h)},"ro6/":function(t,e,o){"use strict";(function(t){function n(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)e.indexOf(o=r[n])>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e.indexOf(o=r[n])>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}o("l8WD");let a;const r=o("UutA").b.div(a||(a=(t=>t)`
  outline: none;
  margin: 20px auto;
  padding: 10px 20px;
	background-color: #fafafa;
	color: #3e3e3e;
  border-radius: 5px;
	font-family: 'Oswald', sans-serif;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: .2s;

  :hover {
    transform: scale(1.05);
    background-color: #F37748;
    color: #FDFDFF;
  }
  
  :active {
    transform: scale(1);
  }
`));e.a=function(e){let{children:o}=e,a=n(e,["children"]);return t(r,a,o)}}).call(this,o("hosL").h)}}]);
//# sourceMappingURL=route-home.chunk.19da9.esm.js.map