(this["webpackJsonpfirst-project"]=this["webpackJsonpfirst-project"]||[]).push([[18],{190:function(e,t,a){"use strict";t.a=a.p+"static/media/banner5.149cfa04.png"},445:function(e,t,a){},446:function(e,t,a){},447:function(e,t,a){},460:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(20),i=a.n(c),s=a(31),l=a(28),o=a(3),r=a(75),j=a.n(r),u=a(41),d=a.n(u),b=a(189),h=a(188),p=a(15),m=a(13),O=a(40),x=a(65),g=(a(445),a(1));function f(e){var t=e.onPageChange1,a=e.totalItem,n=e.onPageChange2,c=e.activeID,i=e.pagination,s=i._start,l=i._limit,o=Math.ceil(a/l),r=function(e){for(var t=[],a=1;a<=e;a++){var n={id:a+1,number:a};t.push(n)}return t}(o),j=s/l+1;function u(e){n&&(n(e),window.scrollTo(0,472))}var d=j<=1?{display:"none"}:{display:"block"},b=j>=o?{display:"none"}:{display:"block"};return Object(g.jsxs)("div",{className:"bottom-pagination",children:[Object(g.jsx)("button",{style:d,onClick:function(){return u(j-1)},className:"button-pagination",children:"Prev"}),Object(g.jsx)("ul",{className:"pagination",children:r.map((function(e){return Object(g.jsx)("li",{className:e.id===c||e.number===j?"pagination-number active":"pagination-number",onClick:function(){!function(e){t&&(t(e),window.scrollTo(0,472))}(e)},children:e.number},e.id)}))}),Object(g.jsx)("button",{style:b,onClick:function(){return u(j+1)},className:"button-pagination",children:"Next"})]})}f.defaultProps={onPageChange1:null,onPageChange2:null,activeID:"",pagination:{},totalItem:null};var v=f;a(446);function N(e){var t=Object(p.b)(),a=e.items,n=e.pagination,c=e.onSelectFilter,i=e.onSelectSort,s=e.onPageChange1,r=e.onPageChange2,j=e.totalItem,u=Object(o.useState)(""),d=Object(l.a)(u,2),f=d[0],N=d[1];var C=Object(m.g)();return Object(g.jsx)("body",{className:"Body",children:Object(g.jsxs)("div",{className:"grid",children:[Object(g.jsxs)("div",{className:"body-top",children:[Object(g.jsx)(b.a,{xxl:{span:8},xl:{span:8},lg:{span:8},md:{span:10},sm:{span:12},children:Object(g.jsxs)("form",{className:"body-top_form-left",action:"",children:[Object(g.jsx)("label",{className:"label-top_left",htmlFor:"",children:"B\u1ed9 L\u1ecdc:"}),Object(g.jsxs)("select",{className:"select-option_left",autofocus:"autofocus",name:"boloc",id:"",onChange:function(e){var t=e.target.value;c&&(c(t),window.scrollTo(0,472))},children:[Object(g.jsx)("option",{defaultValue:!0,value:"1",children:"T\u1ea5t C\u1ea3"}),Object(g.jsx)("option",{value:"0-500000",children:"Nh\u1ecf h\u01a1n 500.000\u0111"}),Object(g.jsx)("option",{value:"500000-1000000",children:"T\u1eeb 500.000\u0111 - 1.000.000\u0111"}),Object(g.jsx)("option",{value:"1000000-2000000",children:"T\u1eeb 1.000.000\u0111 - 2.000.000\u0111"}),Object(g.jsx)("option",{value:"2000000-2500000",children:"T\u1eeb 2.000.000\u0111 - 2.500.000\u0111"}),Object(g.jsx)("option",{value:"2500000-4000000",children:"T\u1eeb 2.500.000\u0111 - 4.000.000\u0111"}),Object(g.jsx)("option",{value:"4000000",children:"L\u1edbn h\u01a1n 4.000.000\u0111"})]})]})}),Object(g.jsx)(b.a,{xxl:{span:8,offset:8},xl:{span:8,offset:8},lg:{span:8,offset:8},md:{span:10,offset:4},sm:{span:12},xs:{span:24},children:Object(g.jsxs)("form",{className:"body-top_form-right",action:"",children:[Object(g.jsx)("label",{className:"label-top_right",htmlFor:"",children:"S\u1eafp X\u1ebfp:"}),Object(g.jsxs)("select",{className:"select-option_right",autofocus:"autofocus",name:"sapxep",id:"",onChange:function(e){var t=e.target.value;i&&(i(t),window.scrollTo(0,472))},children:[Object(g.jsx)("option",{value:"gia:ASC",children:"S\u1ea3n Ph\u1ea9m B\xe1n Ch\u1ea1y"}),Object(g.jsx)("option",{defaultValue:!0,value:"tenSP:DESC",children:"Theo B\u1ea3ng Ch\u1eef C\xe1i T\u1eeb A-Z"}),Object(g.jsx)("option",{value:"tenSP:ASC",children:"Theo B\u1ea3ng Ch\u1eef C\xe1i T\u1eeb Z-A"}),Object(g.jsx)("option",{value:"gia:ASC",children:"Gi\xe1 T\u1eeb Th\u1ea5p \u0110\u1ebfn Cao"}),Object(g.jsx)("option",{value:"gia:DESC",children:"Gi\xe1 T\u1eeb Cao \u0110\u1ebfn Th\u1ea5p"}),Object(g.jsx)("option",{value:"createdAt:DESC",children:"M\u1edbi Nh\u1ea5t"}),Object(g.jsx)("option",{value:"createdAt:ASC",children:"C\u0169 Nh\u1ea5t"})]})]})})]}),Object(g.jsxs)("div",{className:"body-bottom",children:[Object(g.jsx)("ul",{className:"ul-item",children:Object(g.jsx)(h.a,{gutter:[8,8],children:a.map((function(e){var a=Object(x.a)(e.gia),n="";e.giamGia&&(n=Object(x.a)(e.giamGia));var c=Math.round((100-e.giamGia/e.gia*100).toFixed(2));return Object(g.jsx)(b.a,{xxl:8,xl:8,lg:8,md:8,sm:12,xs:24,children:Object(g.jsx)("li",{className:"item item-link",onClick:function(){return function(e){var a=Object(O.a)(e);t(a),C.push("/".concat(e.phanLoai,"/detail/").concat(e.id)),window.scrollTo(0,186)}(e)},children:Object(g.jsxs)("div",{className:"item-main",children:[Object(g.jsxs)("div",{className:"item-main_div-img",children:[Object(g.jsx)("img",{className:"item-main_img",src:e.anhBia,alt:"\u1ea3nh b\xeca"}),e.giamGia?Object(g.jsx)("div",{className:"notification-sale",children:Object(g.jsx)("span",{className:"notification-sale_content",children:Object(g.jsxs)("span",{children:[c,"%"]})})}):""]}),Object(g.jsx)("div",{className:"item-detail",children:Object(g.jsxs)("div",{className:"item-detail_flex",children:[Object(g.jsx)("div",{className:"item-detail_name",children:e.tenSP}),e.giamGia?Object(g.jsxs)("div",{className:"item-detail_price",children:[Object(g.jsxs)("span",{className:"item-detail_price-sale",children:[n,Object(g.jsx)("span",{className:"price",children:"\u0111"})]}),Object(g.jsx)("div",{children:Object(g.jsxs)("span",{className:"item-detail_price-real_sale",children:[a,Object(g.jsx)("span",{className:"price-sale",children:"\u0111"})]})})]}):Object(g.jsxs)("p",{className:"item-detail_price-real",children:[a,Object(g.jsx)("span",{className:"price",children:"\u0111"})]})]})})]})},e.id)})}))})}),Object(g.jsx)(v,{onPageChange1:function(e){s&&s(e.number),N(e.id)},onPageChange2:function(e){r&&r(e)},activeID:f,pagination:n,totalItem:j})]})]})})}N.defaultProps={items:[],pagination:{},onPageChange1:null,onPageChange2:null,onSelectFilter:null,onSelectSort:null,totalItem:null};var C=N,_=(a(447),a(190));function S(e){var t=e.backgroundBannerURL,a=e.titleBanner,n=a||"BST KH\u0102N C\xc0I \xc1O CAO C\u1ea4P",c=t||_.a;return Object(g.jsxs)("div",{className:"banner",children:[Object(g.jsx)("img",{className:"banner_img",src:c,alt:"banner"}),Object(g.jsx)("h1",{className:"banner__title",children:n})]})}S.defaultProps={backgroundBannerURL:"",titleBanner:""};var P=S,T=a(64);t.default=function(e){var t=Object(p.b)(),a=Object(o.useState)([]),c=Object(l.a)(a,2),r=c[0],u=c[1],b=Object(o.useState)(0),h=Object(l.a)(b,2),m=h[0],O=h[1],x=Object(o.useState)({_limit:12,_start:0,gia_gte:0,_sort:"tenSP:DESC"}),f=Object(l.a)(x,2),v=f[0],N=f[1];return Object(o.useEffect)((function(){t(Object(T.b)(!0));var e=!0;function a(){return(a=Object(s.a)(i.a.mark((function a(){var n,c,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=d.a.stringify(v),a.next=4,j()({method:"GET",url:"https://thetuxedo.herokuapp.com/products?phanLoai_containss=khancaiao&".concat(n)});case 4:return c=a.sent,a.next=7,j()({method:"GET",url:"https://thetuxedo.herokuapp.com/products/count?phanLoai_contains=khancaiao"});case 7:s=a.sent,e&&200===c.status&&u(c.data),e&&200===s.status&&O(s.data),e&&200===c.status&&200===s.status&&t(Object(T.a)(!1)),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[0,13]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){return e=!1}}),[v]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(P,{}),Object(g.jsx)(C,{totalItem:m,items:r,pagination:v,onPageChange1:function(e){var t=Object(n.a)(Object(n.a)({},v),{},{_start:12*(e-1)});N(t)},onPageChange2:function(e){var t=Object(n.a)(Object(n.a)({},v),{},{_start:12*(e-1)});N(t)},onSelectFilter:function(e){var t=e.split("-"),a=t[0],c=t[1],i=Object(n.a)(Object(n.a)({},v),{},{_start:0,gia_gte:a,gia_lte:c});N(i)},onSelectSort:function(e){var t=Object(n.a)(Object(n.a)({},v),{},{_start:0,_sort:e});N(t)}})]})}}}]);
//# sourceMappingURL=18.4178289c.chunk.js.map