(this["webpackJsonpfirst-project"]=this["webpackJsonpfirst-project"]||[]).push([[9],{431:function(e,t,a){},432:function(e,t,a){},433:function(e,t,a){},443:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(5),i=a.n(c),s=a(11),l=a(6),o=a(1),r=a(28),j=a.n(r),u=a(37),d=a.n(u),b=a(402),h=a(401),m=a(8),p=a(20),O=a(36),x=a(17),g=(a(431),a(0));function f(e){var t=e.onPageChange1,a=e.totalItem,n=e.onPageChange2,c=e.activeID,i=e.pagination,s=i._start,l=i._limit,o=Math.ceil(a/l),r=function(e){for(var t=[],a=1;a<=e;a++){var n={id:a+1,number:a};t.push(n)}return t}(o),j=s/l+1;function u(e){n&&(n(e),window.scrollTo(0,472))}var d=j<=1?{display:"none"}:{display:"block"},b=j>=o?{display:"none"}:{display:"block"};return Object(g.jsxs)("div",{className:"bottom-pagination",children:[Object(g.jsx)("button",{style:d,onClick:function(){return u(j-1)},className:"button-pagination",children:"Prev"}),Object(g.jsx)("ul",{className:"pagination",children:r.map((function(e){return Object(g.jsx)("li",{className:e.id===c||e.number===j?"pagination-number active":"pagination-number",onClick:function(){!function(e){t&&(t(e),window.scrollTo(0,472))}(e)},children:e.number},e.id)}))}),Object(g.jsx)("button",{style:b,onClick:function(){return u(j+1)},className:"button-pagination",children:"Next"})]})}f.defaultProps={onPageChange1:null,onPageChange2:null,activeID:"",pagination:{},totalItem:null};var v=f;a(432);function N(e){var t=Object(p.g)(),a=Object(m.b)(),n=e.items,c=e.pagination,i=e.onSelectFilter,s=e.onSelectSort,r=e.onPageChange1,j=e.onPageChange2,u=e.totalItem,d=Object(o.useState)(""),f=Object(l.a)(d,2),N=f[0],C=f[1];return Object(g.jsx)("body",{className:"Body",children:Object(g.jsxs)("div",{className:"grid",children:[Object(g.jsxs)("div",{className:"body-top",children:[Object(g.jsx)(b.a,{xxl:{span:8},xl:{span:8},lg:{span:8},md:{span:10},sm:{span:12},children:Object(g.jsxs)("form",{className:"body-top_form-left",action:"",children:[Object(g.jsx)("label",{className:"label-top_left",htmlFor:"",children:"B\u1ed9 L\u1ecdc:"}),Object(g.jsxs)("select",{className:"select-option_left",autofocus:"autofocus",name:"boloc",id:"",onChange:function(e){var t=e.target.value;i&&(i(t),window.scrollTo(0,472))},children:[Object(g.jsx)("option",{defaultValue:!0,value:"1",children:"T\u1ea5t C\u1ea3"}),Object(g.jsx)("option",{value:"0-500000",children:"Nh\u1ecf h\u01a1n 500.000\u0111"}),Object(g.jsx)("option",{value:"500000-1000000",children:"T\u1eeb 500.000\u0111 - 1.000.000\u0111"}),Object(g.jsx)("option",{value:"1000000-2000000",children:"T\u1eeb 1.000.000\u0111 - 2.000.000\u0111"}),Object(g.jsx)("option",{value:"2000000-2500000",children:"T\u1eeb 2.000.000\u0111 - 2.500.000\u0111"}),Object(g.jsx)("option",{value:"2500000-4000000",children:"T\u1eeb 2.500.000\u0111 - 4.000.000\u0111"}),Object(g.jsx)("option",{value:"4000000",children:"L\u1edbn h\u01a1n 4.000.000\u0111"})]})]})}),Object(g.jsx)(b.a,{xxl:{span:8,offset:8},xl:{span:8,offset:8},lg:{span:8,offset:8},md:{span:10,offset:4},sm:{span:12},xs:{span:24},children:Object(g.jsxs)("form",{className:"body-top_form-right",action:"",children:[Object(g.jsx)("label",{className:"label-top_right",htmlFor:"",children:"S\u1eafp X\u1ebfp:"}),Object(g.jsxs)("select",{className:"select-option_right",autofocus:"autofocus",name:"sapxep",id:"",onChange:function(e){var t=e.target.value;s&&(s(t),window.scrollTo(0,472))},children:[Object(g.jsx)("option",{value:"gia:ASC",children:"S\u1ea3n Ph\u1ea9m B\xe1n Ch\u1ea1y"}),Object(g.jsx)("option",{defaultValue:!0,value:"tenSP:DESC",children:"Theo B\u1ea3ng Ch\u1eef C\xe1i T\u1eeb A-Z"}),Object(g.jsx)("option",{value:"tenSP:ASC",children:"Theo B\u1ea3ng Ch\u1eef C\xe1i T\u1eeb Z-A"}),Object(g.jsx)("option",{value:"gia:ASC",children:"Gi\xe1 T\u1eeb Th\u1ea5p \u0110\u1ebfn Cao"}),Object(g.jsx)("option",{value:"gia:DESC",children:"Gi\xe1 T\u1eeb Cao \u0110\u1ebfn Th\u1ea5p"}),Object(g.jsx)("option",{value:"createdAt:DESC",children:"M\u1edbi Nh\u1ea5t"}),Object(g.jsx)("option",{value:"createdAt:ASC",children:"C\u0169 Nh\u1ea5t"})]})]})})]}),Object(g.jsxs)("div",{className:"body-bottom",children:[Object(g.jsx)("ul",{className:"ul-item",children:Object(g.jsx)(h.a,{gutter:[8,8],children:n.map((function(e){var n=Object(x.a)(e.gia),c="";e.giamGia&&(c=Object(x.a)(e.giamGia));var i=Math.round((100-e.giamGia/e.gia*100).toFixed(2));return Object(g.jsx)(b.a,{xxl:8,xl:8,lg:8,md:8,sm:12,xs:24,children:Object(g.jsx)("li",{className:"item item-link",onClick:function(){return function(e){var n=Object(O.a)(e);a(n),t.push("/".concat(e.phanLoai,"/detail/").concat(e.id)),window.scrollTo(0,186)}(e)},children:Object(g.jsxs)("div",{className:"item-main",children:[Object(g.jsxs)("div",{className:"item-main_div-img",children:[Object(g.jsx)("img",{className:"item-main_img",src:e.anhBia,alt:"\u1ea3nh b\xeca"}),e.giamGia?Object(g.jsx)("div",{className:"notification-sale",children:Object(g.jsx)("span",{className:"notification-sale_content",children:Object(g.jsxs)("span",{children:[i,"%"]})})}):""]}),Object(g.jsx)("div",{className:"item-detail",children:Object(g.jsxs)("div",{className:"item-detail_flex",children:[Object(g.jsx)("div",{className:"item-detail_name",children:e.tenSP}),e.giamGia?Object(g.jsxs)("div",{className:"item-detail_price",children:[Object(g.jsxs)("span",{className:"item-detail_price-sale",children:[c,Object(g.jsx)("span",{className:"price",children:"\u0111"})]}),Object(g.jsx)("div",{children:Object(g.jsxs)("span",{className:"item-detail_price-real_sale",children:[n,Object(g.jsx)("span",{className:"price-sale",children:"\u0111"})]})})]}):Object(g.jsxs)("p",{className:"item-detail_price-real",children:[n,Object(g.jsx)("span",{className:"price",children:"\u0111"})]})]})})]})},e.id)})}))})}),Object(g.jsx)(v,{onPageChange1:function(e){r&&r(e.number),C(e.id)},onPageChange2:function(e){j&&j(e)},activeID:N,pagination:c,totalItem:u})]})]})})}N.defaultProps={items:[],pagination:{},onPageChange1:null,onPageChange2:null,onSelectFilter:null,onSelectSort:null,totalItem:null};var C=N,_=(a(433),a(51));function S(e){var t=e.backgroundBannerURL,a=e.titleBanner,n=a||"BST TH\u1eaeT L\u01afNG CAO C\u1ea4P",c=t||_.a;return Object(g.jsxs)("div",{className:"banner",children:[Object(g.jsx)("img",{className:"banner_img",src:c,alt:"banner"}),Object(g.jsx)("h1",{className:"banner__title",children:n})]})}S.defaultProps={backgroundBannerURL:"",titleBanner:""};var T=S,P=a(18);t.default=function(e){var t=Object(m.b)(),a=Object(o.useState)([]),c=Object(l.a)(a,2),r=c[0],u=c[1],b=Object(o.useState)(0),h=Object(l.a)(b,2),p=h[0],O=h[1],x=Object(o.useState)({_limit:12,_start:0,gia_gte:0,_sort:"tenSP:DESC"}),f=Object(l.a)(x,2),v=f[0],N=f[1];return Object(o.useEffect)((function(){t(Object(P.b)(!0));var e=!0;function a(){return(a=Object(s.a)(i.a.mark((function a(){var n,c,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=d.a.stringify(v),a.next=4,j()({method:"GET",url:"https://thetuxedo.herokuapp.com/products?phanLoai_containss=thatlung&".concat(n)});case 4:return c=a.sent,a.next=7,j()({method:"GET",url:"https://thetuxedo.herokuapp.com/products/count?phanLoai_contains=thatlung"});case 7:s=a.sent,e&&200===c.status&&u(c.data),e&&200===s.status&&O(s.data),e&&200===c.status&&200===s.status&&t(Object(P.a)(!1)),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[0,13]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){return e=!1}}),[v]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(T,{}),Object(g.jsx)(C,{totalItem:p,items:r,pagination:v,onPageChange1:function(e){var t=Object(n.a)(Object(n.a)({},v),{},{_start:12*(e-1)});N(t)},onPageChange2:function(e){var t=Object(n.a)(Object(n.a)({},v),{},{_start:12*(e-1)});N(t)},onSelectFilter:function(e){var t=e.split("-"),a=t[0],c=t[1],i=Object(n.a)(Object(n.a)({},v),{},{_start:0,gia_gte:a,gia_lte:c});N(i)},onSelectSort:function(e){var t=Object(n.a)(Object(n.a)({},v),{},{_start:0,_sort:e});N(t)}})]})}}}]);
//# sourceMappingURL=9.f08b1ff9.chunk.js.map