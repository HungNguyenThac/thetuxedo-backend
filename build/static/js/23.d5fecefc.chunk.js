(this["webpackJsonpfirst-project"]=this["webpackJsonpfirst-project"]||[]).push([[23],{195:function(e,c,s){"use strict";var t=s(28),a=s(3),n=(s(196),s(1));function i(e){var c=e.backgroundColor,s=e.title,i=e.subString,l=e.handleClick,r=c||"black",j=Object(a.useState)(r),d=Object(t.a)(j,2),o=d[0],m=d[1],b=s||"",h=i||"Giao h\xe0ng t\u1eadn n\u01a1i to\xe0n qu\u1ed1c";function u(){l&&l()}function x(){m("rgb(206, 25, 25)")}function O(){"black"!==document.querySelector(".button--share").style.backgroundColor&&m("black")}return Object(n.jsx)("div",{children:i?Object(n.jsxs)("button",{className:"button--share",style:{backgroundColor:o,border:o},onClick:u,onMouseEnter:x,onMouseLeave:O,children:[Object(n.jsx)("span",{className:"button-add-item-cart_title",children:b}),Object(n.jsx)("span",{className:"button-add-item-cart_sub",children:h})]}):Object(n.jsx)("button",{className:"button--share",style:{backgroundColor:o,border:o},onClick:u,onMouseEnter:x,onMouseLeave:O,children:Object(n.jsx)("span",{className:"button-add-item-cart_title",children:b})})})}i.defaultProps={backgroundColor:"",title:"",subString:"",handleClick:null},c.a=i},196:function(e,c,s){},413:function(e,c,s){},469:function(e,c,s){"use strict";s.r(c);var t=s(3),a=s(15),n=(s(413),s.p+"static/media/banner6.66ea684a.jpeg"),i=s(1);function l(e){var c=e.backgroundBannerURL,s=e.titleBanner,t=s||"GI\u1ece H\xc0NG C\u1ee6A B\u1ea0N",a=c||n;return Object(i.jsxs)("div",{className:"banner",children:[Object(i.jsx)("img",{className:"banner_img",src:a,alt:"banner"}),Object(i.jsx)("h1",{className:"banner__title1",children:t})]})}l.defaultProps={backgroundBannerURL:"",titleBanner:""};var r=l,j=s(20),d=s.n(j),o=s(31),m=s(25),b=s(24),h=s(189),u=s(13),x=s(7),O=s(54),p=s(42),g=s(195),N=s(64);function v(e){var c=Object(a.b)(),s=Object(u.g)(),n=e.itemDetails,l=Object(a.c)((function(e){return e.itemCart.itemCart})),r=function(e){for(var c=e.length,s=0,t=0;t<c;t++)s+=e[t].giamGia?e[t].giamGia*e[t].soLuong:e[t].gia*e[t].soLuong;return s}(n),j=Object(N.a)(r);function v(e){var s=Object(O.b)(e);c(s)}return Object(t.useEffect)((function(){(function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.putAddNewCart(l);case 3:e.sent.status,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(i.jsx)("body",{className:"Body-cart",children:Object(i.jsxs)("div",{className:"grid",children:[Object(i.jsx)("div",{className:"body_cart-top",children:Object(i.jsx)("p",{className:"body_cart-top_title",children:"GI\u1ece H\xc0NG"})}),Object(i.jsx)("hr",{className:"hr-title-page"}),Object(i.jsxs)("div",{className:"danhmuc-tieude",children:[Object(i.jsx)(h.a,{className:"danhmuc-tieude-title",xxl:{span:8,offset:4},xl:{span:8,offset:4},lg:{span:8,offset:4},md:{span:9,offset:2},sm:{span:10,offset:2},children:Object(i.jsx)("span",{children:"Th\xf4ng tin chi ti\u1ebft s\u1ea3n ph\u1ea9m"})}),Object(i.jsx)(h.a,{className:"danhmuc-tieude-title",xxl:3,xl:3,lg:3,md:3,sm:2,children:Object(i.jsx)("span",{children:"Size"})}),Object(i.jsx)(h.a,{className:"danhmuc-tieude-title",xxl:3,xl:3,lg:3,md:3,sm:3,children:Object(i.jsx)("span",{children:"\u0110\u01a1n gi\xe1"})}),Object(i.jsx)(h.a,{className:"danhmuc-tieude-title",xxl:3,xl:3,lg:3,md:3,sm:3,children:Object(i.jsx)("span",{children:"S\u1ed1 l\u01b0\u1ee3ng"})}),Object(i.jsx)(h.a,{className:"danhmuc-tieude-title",xxl:3,xl:3,lg:3,md:4,sm:4,children:Object(i.jsx)("span",{children:"T\u1ed5ng gi\xe1"})})]}),Object(i.jsx)("div",{className:"danhmuc-tieude-576",children:Object(i.jsx)("span",{className:"danhmuc-tieude-title",children:"Th\xf4ng tin chi ti\u1ebft s\u1ea3n ph\u1ea9m"})}),Object(i.jsx)("hr",{className:"hr-title-page"}),Object(i.jsx)("ul",{className:"ul-parent_cart-page",children:n.map((function(e,s){var t="";void 0!==e.gia&&(t=Object(N.a)(e.gia));var a="";void 0!==e.gia&&(a=Object(N.a)(e.gia*e.soLuong));var l="";void 0!==e.giamGia&&(l=Object(N.a)(e.giamGia*e.soLuong));var r="";void 0!==e.giamGia&&(r=Object(N.a)(e.giamGia));var j="";if(e.gia&&void 0!==e.giamGia){var d=e.gia-e.giamGia;j=Object(N.a)(d)}function o(e){var s=n.slice();console.log(s),s[e[1]].soLuong=e[0];var t=Object(O.e)(s);c(t)}return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"lonHon-576px",children:[Object(i.jsxs)("li",{className:"thongtin-sanpham_trongcart",children:[Object(i.jsx)(h.a,{className:"div-tung-muc-parent",xxl:4,xl:4,lg:4,md:2,sm:2,children:Object(i.jsx)("div",{className:"div-tung-muc-children",children:Object(i.jsx)("img",{className:"div-tung-muc-img_img",src:e.anhBia,alt:"anhbia"})})}),Object(i.jsxs)(h.a,{xxl:8,xl:8,lg:8,md:9,sm:10,children:[Object(i.jsx)("div",{className:"div-tung-muc",children:Object(i.jsx)("span",{className:"content-of-product1",children:e.tenSP})}),Object(i.jsx)("div",{className:"div-tung-muc",children:e.giamGia?Object(i.jsxs)("span",{className:"sub-text_sale1",children:["(B\u1ea1n \u0111\xe3 ti\u1ebft ki\u1ec7m \u0111\u01b0\u1ee3c ",j,Object(i.jsx)("span",{className:"price",children:"\u0111"})," tr\xean m\u1ed7i SP)"]}):Object(i.jsx)("p",{className:"sub-text_sale1",children:"(S\u1ea3n ph\u1ea9m m\u1edbi ra m\u1eaft, ch\u01b0a \xe1p d\u1ee5ng ch\xednh s\xe1ch gi\u1ea3m gi\xe1)"})})]}),Object(i.jsx)(h.a,{xxl:3,xl:3,lg:3,md:3,sm:2,children:Object(i.jsx)("div",{className:"div-tung-muc",children:Object(i.jsx)("span",{className:"content-of-product1",children:e.size})})}),Object(i.jsx)(h.a,{xxl:3,xl:3,lg:3,md:3,sm:3,children:Object(i.jsx)("div",{className:"div-tung-muc",children:Object(i.jsx)("span",{children:e.giamGia?Object(i.jsxs)("div",{className:"item-detail_price",children:[Object(i.jsxs)("span",{className:"item-detail_price-sale",children:[r,Object(i.jsx)("span",{className:"price",children:"\u0111"})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("span",{className:"item-detail_price-real_sale",children:[t,Object(i.jsx)("span",{className:"price-sale",children:"\u0111"})]})})]}):Object(i.jsxs)("p",{className:"item-detail_price-real",children:[t,Object(i.jsx)("span",{className:"price",children:"\u0111"})]})})})}),Object(i.jsx)(h.a,{xxl:3,xl:3,lg:3,md:3,sm:3,children:Object(i.jsxs)("div",{className:"div-tung-muc",children:[Object(i.jsx)("button",{disabled:e.soLuong<=1,className:"button-item-change1",onClick:function(){o([e.soLuong-1,s])},children:Object(i.jsx)(b.a,{icon:m.i})}),Object(i.jsx)("span",{className:"number_so-luong1",children:e.soLuong}),Object(i.jsx)("button",{className:"button-item-change1",onClick:function(){o([e.soLuong+1,s])},children:Object(i.jsx)(b.a,{icon:m.j})})]})}),Object(i.jsx)(h.a,{xxl:3,xl:3,lg:3,md:4,sm:4,children:Object(i.jsx)("div",{className:"div-tung-muc",children:e.giamGia?Object(i.jsxs)("div",{className:"price-delete_item",children:[Object(i.jsxs)("span",{className:"content-of-product1 fontsize-1rem",children:[l,Object(i.jsx)("span",{className:"price",children:"\u0111"})]}),Object(i.jsx)("button",{onClick:function(){return v(s)},className:"click-to-remove-item",children:"Xo\xe1 SP"})]}):Object(i.jsxs)("div",{className:"price-delete_item",children:[Object(i.jsxs)("span",{className:"content-of-product1 fontsize-1rem",children:[a,Object(i.jsx)("span",{className:"price",children:"\u0111"})]}),Object(i.jsx)("button",{className:"click-to-remove-item",onClick:function(){return v(s)},children:"Xo\xe1 SP"})]})})})]},e.id),Object(i.jsx)("hr",{className:"hr-title-page"})]}),Object(i.jsxs)("div",{className:"nhoHon-576px",children:[Object(i.jsxs)("li",{className:"li-nhoHon-576px",children:[Object(i.jsx)(h.a,{xs:8,children:Object(i.jsx)("div",{className:"div-tung-muc-parent-576",children:Object(i.jsx)("div",{className:"div-tung-muc-children",children:Object(i.jsx)("img",{className:"div-tung-muc-img_img",src:e.anhBia,alt:"anhbia"})})})}),Object(i.jsx)(h.a,{xs:16,children:Object(i.jsxs)("div",{className:"div-detail-item-right",children:[Object(i.jsx)(h.a,{xs:24,children:Object(i.jsx)("div",{children:Object(i.jsx)("span",{className:"content-of-product1",children:e.tenSP})})}),Object(i.jsx)("div",{className:"div-tung-muc",children:Object(i.jsx)("span",{children:e.giamGia?Object(i.jsxs)("div",{className:"item-detail_price",children:[Object(i.jsxs)("span",{className:"item-detail_price-sale",children:["Gi\xe1: ",r,Object(i.jsx)("span",{className:"price",children:"\u0111"})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("span",{className:"item-detail_price-real_sale",children:[t,Object(i.jsx)("span",{className:"price-sale",children:"\u0111"})]})})]}):Object(i.jsxs)("p",{className:"item-detail_price-real",children:["Gi\xe1 :",t,Object(i.jsx)("span",{className:"price",children:"\u0111"})]})})}),Object(i.jsx)("div",{className:"div-tung-muc",children:e.giamGia?Object(i.jsxs)("span",{className:"sub-text_sale1",children:["(B\u1ea1n \u0111\xe3 ti\u1ebft ki\u1ec7m \u0111\u01b0\u1ee3c ",j,Object(i.jsx)("span",{className:"price",children:"\u0111"})," tr\xean m\u1ed7i SP)"]}):Object(i.jsx)("p",{className:"sub-text_sale1",children:"(S\u1ea3n ph\u1ea9m m\u1edbi ra m\u1eaft, ch\u01b0a \xe1p d\u1ee5ng ch\xednh s\xe1ch gi\u1ea3m gi\xe1)"})}),Object(i.jsx)("div",{className:"div-tung-muc",children:Object(i.jsxs)("span",{className:"content-of-product1",children:["Size: ",e.size]})}),Object(i.jsxs)("div",{className:"div-tung-muc",children:["S\u1ed1 l\u01b0\u1ee3ng:",Object(i.jsx)("button",{disabled:e.soLuong<=1,className:"button-item-change1",onClick:function(){o([e.soLuong-1,s])},children:Object(i.jsx)(b.a,{icon:m.i})}),Object(i.jsx)("span",{className:"number_so-luong1",children:e.soLuong}),Object(i.jsx)("button",{className:"button-item-change1",onClick:function(){o([e.soLuong+1,s])},children:Object(i.jsx)(b.a,{icon:m.j})})]}),Object(i.jsxs)("div",{className:"div-tung-muc",children:[e.giamGia?Object(i.jsxs)("div",{className:"total-price_remove-item",children:[Object(i.jsxs)("span",{className:"content-of-product1 fontsize-1rem",children:["T\u1ed5ng: ",l,Object(i.jsx)("span",{className:"price",children:"\u0111"})]}),Object(i.jsx)("button",{className:"click-to-remove-item",onClick:function(){return v(s)},children:"Xo\xe1 SP"})]}):Object(i.jsxs)("div",{className:"total-price_remove-item",children:[Object(i.jsxs)("span",{className:"content-of-product1 fontsize-1rem",children:["T\u1ed5ng: ",a,Object(i.jsx)("span",{className:"price",children:"\u0111"})]}),Object(i.jsx)("button",{className:"click-to-remove-item",onClick:function(){return v(s)},children:"Xo\xe1 SP"})]}),Object(i.jsx)("span",{})]})]})})]},e.id),Object(i.jsx)("hr",{className:"hr-title-page"})]})]})}))}),Object(i.jsx)("hr",{className:"hr-title-page"}),Object(i.jsxs)("footer",{className:"footer-cartPage",children:[Object(i.jsxs)("div",{className:"footer-cartPage_top",children:[Object(i.jsx)("span",{className:"footer-cartPage_top-title",children:"T\u1ed5ng Ti\u1ec1n:"}),Object(i.jsxs)("span",{className:"footer-cartPage_top-content",children:[j,Object(i.jsx)("span",{className:"price",children:"\u0111"})]})]}),Object(i.jsxs)("div",{className:"footer-cartPage_bottom",children:[Object(i.jsx)(x.a,{to:"/vestcollection",children:Object(i.jsx)(g.a,{title:"TI\u1ebeP T\u1ee4C MUA S\u1eaeM",subString:"Th\xeam nhi\u1ec1u s\u1ea3n ph\u1ea9m"})}),Object(i.jsx)(g.a,{title:"TI\u1ebeN H\xc0NH THANH TO\xc1N",subString:"Nh\u1eadn nhi\u1ec1u \u01b0u \u0111\xe3i",backgroundColor:"#ce1919",handleClick:function(){0===n.length?document.querySelector(".notificatrion-In-CartPage").classList.add("active"):s.push("/payPage")}})]}),Object(i.jsx)("div",{children:Object(i.jsx)("span",{className:"notificatrion-In-CartPage",children:"Gi\u1ecf h\xe0ng tr\u1ed1ng, vui l\xf2ng ch\u1ecdn s\u1ea3n ph\u1ea9m tr\u01b0\u1edbc khi Thanh to\xe1n"})})]})]})})}v.defaultProps={itemDetails:{}};var f=v;function _(e){var c=Object(a.c)((function(e){return e.itemCart.itemCart}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(r,{}),Object(i.jsx)(f,{itemDetails:c})]})}_.defaultProps={items:[]};c.default=_}}]);
//# sourceMappingURL=23.d5fecefc.chunk.js.map