(this["webpackJsonpfirst-project"]=this["webpackJsonpfirst-project"]||[]).push([[13],{190:function(e,t,a){"use strict";t.a=a.p+"static/media/banner5.149cfa04.png"},431:function(e,t,a){},432:function(e,t,a){},433:function(e,t,a){},434:function(e,t,a){},456:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(20),i=a.n(c),s=a(31),l=a(28),o=a(75),r=a.n(o),j=a(41),u=a.n(j),d=a(3),b=a(15),h=a(64),p=(a(431),a(190)),m=a(1);function O(e){var t=e.backgroundBannerURL,a=e.titleBanner,n=a||"BST VEST D\u1ea0 H\u1ed8I CAO C\u1ea4P",c=t||p.a;return Object(m.jsxs)("div",{className:"banner",children:[Object(m.jsx)("img",{className:"banner_img",src:c,alt:"banner"}),Object(m.jsx)("h1",{className:"banner__title",children:n})]})}O.defaultProps={backgroundBannerURL:"",titleBanner:""};var x=O,g=(a(432),a(13)),f=a(189),v=a(188);a(433);function N(e){var t=e.onPageChange1,a=e.totalItem,n=e.onPageChange2,c=e.activeID,i=e.pagination,s=i._start,l=i._limit,o=Math.ceil(a/l),r=function(e){for(var t=[],a=1;a<=e;a++){var n={id:a+1,number:a};t.push(n)}return t}(o),j=s/l+1;function u(e){n&&(n(e),window.scrollTo(0,472))}var d=j<=1?{display:"none"}:{display:"block"},b=j>=o?{display:"none"}:{display:"block"};return Object(m.jsxs)("div",{className:"bottom-pagination",children:[Object(m.jsx)("button",{style:d,onClick:function(){return u(j-1)},className:"button-pagination",children:"Prev"}),Object(m.jsx)("ul",{className:"pagination",children:r.map((function(e){return Object(m.jsx)("li",{className:e.id===c||e.number===j?"pagination-number active":"pagination-number",onClick:function(){!function(e){t&&(t(e),window.scrollTo(0,472))}(e)},children:e.number},e.id)}))}),Object(m.jsx)("button",{style:b,onClick:function(){return u(j+1)},className:"button-pagination",children:"Next"})]})}N.defaultProps={onPageChange1:null,onPageChange2:null,activeID:"",pagination:{},totalItem:null};var C=N,_=a(65),S=a(40);function P(e){var t=Object(g.g)(),a=Object(b.b)(),n=e.items,c=e.pagination,i=e.onSelectFilter,s=e.onSelectSort,o=e.onPageChange1,r=e.onPageChange2,j=e.totalItem,u=Object(d.useState)(""),h=Object(l.a)(u,2),p=h[0],O=h[1];return Object(m.jsx)("body",{className:"Body",children:Object(m.jsxs)("div",{className:"grid",children:[Object(m.jsxs)("div",{className:"body-top",children:[Object(m.jsx)(f.a,{xxl:{span:8},xl:{span:8},lg:{span:8},md:{span:10},sm:{span:12},children:Object(m.jsxs)("form",{className:"body-top_form-left",action:"",children:[Object(m.jsx)("label",{className:"label-top_left",htmlFor:"",children:"B\u1ed9 L\u1ecdc:"}),Object(m.jsxs)("select",{className:"select-option_left",autofocus:"autofocus",name:"boloc",id:"",onChange:function(e){var t=e.target.value;i&&(i(t),window.scrollTo(0,472))},children:[Object(m.jsx)("option",{defaultValue:!0,value:"1",children:"T\u1ea5t C\u1ea3"}),Object(m.jsx)("option",{value:"0-500000",children:"Nh\u1ecf h\u01a1n 500.000\u0111"}),Object(m.jsx)("option",{value:"500000-1000000",children:"T\u1eeb 500.000\u0111 - 1.000.000\u0111"}),Object(m.jsx)("option",{value:"1000000-2000000",children:"T\u1eeb 1.000.000\u0111 - 2.000.000\u0111"}),Object(m.jsx)("option",{value:"2000000-2500000",children:"T\u1eeb 2.000.000\u0111 - 2.500.000\u0111"}),Object(m.jsx)("option",{value:"2500000-4000000",children:"T\u1eeb 2.500.000\u0111 - 4.000.000\u0111"}),Object(m.jsx)("option",{value:"4000000",children:"L\u1edbn h\u01a1n 4.000.000\u0111"})]})]})}),Object(m.jsx)(f.a,{xxl:{span:8,offset:8},xl:{span:8,offset:8},lg:{span:8,offset:8},md:{span:10,offset:4},sm:{span:12},xs:{span:24},children:Object(m.jsxs)("form",{className:"body-top_form-right",action:"",children:[Object(m.jsx)("label",{className:"label-top_right",htmlFor:"",children:"S\u1eafp X\u1ebfp:"}),Object(m.jsxs)("select",{className:"select-option_right",autofocus:"autofocus",name:"sapxep",id:"",onChange:function(e){var t=e.target.value;s&&(s(t),window.scrollTo(0,472))},children:[Object(m.jsx)("option",{value:"gia:ASC",children:"S\u1ea3n Ph\u1ea9m B\xe1n Ch\u1ea1y"}),Object(m.jsx)("option",{defaultValue:!0,value:"tenSP:DESC",children:"Theo B\u1ea3ng Ch\u1eef C\xe1i T\u1eeb A-Z"}),Object(m.jsx)("option",{value:"tenSP:ASC",children:"Theo B\u1ea3ng Ch\u1eef C\xe1i T\u1eeb Z-A"}),Object(m.jsx)("option",{value:"gia:ASC",children:"Gi\xe1 T\u1eeb Th\u1ea5p \u0110\u1ebfn Cao"}),Object(m.jsx)("option",{value:"gia:DESC",children:"Gi\xe1 T\u1eeb Cao \u0110\u1ebfn Th\u1ea5p"}),Object(m.jsx)("option",{value:"createdAt:DESC",children:"M\u1edbi Nh\u1ea5t"}),Object(m.jsx)("option",{value:"createdAt:ASC",children:"C\u0169 Nh\u1ea5t"})]})]})})]}),Object(m.jsxs)("div",{className:"body-bottom",children:[Object(m.jsx)("ul",{className:"ul-item",children:Object(m.jsx)(v.a,{gutter:[8,8],children:n.map((function(e){var n=Object(_.a)(e.gia),c="";e.giamGia&&(c=Object(_.a)(e.giamGia));var i=Math.round((100-e.giamGia/e.gia*100).toFixed(2));return Object(m.jsx)(f.a,{xxl:8,xl:8,lg:8,md:8,sm:12,xs:24,children:Object(m.jsx)("li",{className:"item item-link",onClick:function(){return function(e){var n=Object(S.a)(e);a(n),t.push("/".concat(e.phanLoai,"/detail/").concat(e.id)),window.scrollTo(0,186)}(e)},children:Object(m.jsxs)("div",{className:"item-main",children:[Object(m.jsxs)("div",{className:"item-main_div-img",children:[Object(m.jsx)("img",{className:"item-main_img",src:e.anhBia,alt:"\u1ea3nh b\xeca"}),e.giamGia?Object(m.jsx)("div",{className:"notification-sale",children:Object(m.jsx)("span",{className:"notification-sale_content",children:Object(m.jsxs)("span",{children:[i,"%"]})})}):""]}),Object(m.jsx)("div",{className:"item-detail",children:Object(m.jsxs)("div",{className:"item-detail_flex",children:[Object(m.jsx)("div",{className:"item-detail_name",children:e.tenSP}),e.giamGia?Object(m.jsxs)("div",{className:"item-detail_price",children:[Object(m.jsxs)("span",{className:"item-detail_price-sale",children:[c,Object(m.jsx)("span",{className:"price",children:"\u0111"})]}),Object(m.jsx)("div",{children:Object(m.jsxs)("span",{className:"item-detail_price-real_sale",children:[n,Object(m.jsx)("span",{className:"price-sale",children:"\u0111"})]})})]}):Object(m.jsxs)("p",{className:"item-detail_price-real",children:[n,Object(m.jsx)("span",{className:"price",children:"\u0111"})]})]})})]})},e.id)})}))})}),Object(m.jsx)(C,{onPageChange1:function(e){o&&o(e.number),O(e.id)},onPageChange2:function(e){r&&r(e)},activeID:p,pagination:c,totalItem:j})]})]})})}P.defaultProps={items:[],pagination:{},onPageChange1:null,onPageChange2:null,onSelectFilter:null,onSelectSort:null,totalItem:null};var T=P;a(434);t.default=function(e){var t=Object(b.b)(),a=Object(d.useState)([]),c=Object(l.a)(a,2),o=c[0],j=c[1],p=Object(d.useState)(0),O=Object(l.a)(p,2),g=O[0],f=O[1],v=Object(d.useState)({_limit:12,_start:0,gia_gte:0,_sort:"tenSP:DESC"}),N=Object(l.a)(v,2),C=N[0],_=N[1];return Object(d.useEffect)((function(){t(Object(h.b)(!0));var e=!0;function a(){return(a=Object(s.a)(i.a.mark((function a(){var n,c,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=u.a.stringify(C),a.next=4,r()({method:"GET",url:"https://thetuxedo.herokuapp.com/products?phanLoai_containss=vestdahoi&".concat(n)});case 4:return c=a.sent,a.next=7,r()({method:"GET",url:"https://thetuxedo.herokuapp.com/products/count?phanLoai_contains=vestdahoi"});case 7:s=a.sent,e&&200===c.status&&j(c.data),e&&200===s.status&&f(s.data),e&&200===c.status&&200===s.status&&t(Object(h.a)(!1)),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[0,13]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){return e=!1}}),[C]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(x,{}),Object(m.jsx)(T,{totalItem:g,items:o,pagination:C,onPageChange1:function(e){var t=Object(n.a)(Object(n.a)({},C),{},{_start:12*(e-1)});_(t)},onPageChange2:function(e){var t=Object(n.a)(Object(n.a)({},C),{},{_start:12*(e-1)});_(t)},onSelectFilter:function(e){var t=e.split("-"),a=t[0],c=t[1],i=Object(n.a)(Object(n.a)({},C),{},{_start:0,gia_gte:a,gia_lte:c});_(i)},onSelectSort:function(e){var t=Object(n.a)(Object(n.a)({},C),{},{_start:0,_sort:e});_(t)}})]})}}}]);
//# sourceMappingURL=13.335e6a43.chunk.js.map