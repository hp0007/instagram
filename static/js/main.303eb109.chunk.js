(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{40:function(e,c,s){},41:function(e,c,s){},49:function(e,c,s){"use strict";s.r(c);var t=s(2),i=s(31),a=s.n(i),n=(s(40),s(41),s(8)),j=s.p+"static/media/photo-1.174672af.jpg",l=s.p+"static/media/photo-2.0d1c9b74.jpg",d=s.p+"static/media/photo-3.3a2529e4.jpg",m=s.p+"static/media/photo-4.fa12dd85.jpg",r=s.p+"static/media/photo-5.815f1d09.jpg",o=s.p+"static/media/photo-6.954c1cb3.jpg",b=s.p+"static/media/photo-7.5f8b50a8.jpg",h=s.p+"static/media/photo-8.4b8cac9b.jpg",x=s.p+"static/media/photo-9.bd6b0d67.jpg",O=(s.p,s(53)),g=s(50),v=(s(25),s(17)),u=s(6),p=s(1),N=function(e){var c=Object(t.useState)(e.likes),s=Object(v.a)(c,2),i=s[0],a=s[1],n=Object(t.useState)(!0),j=Object(v.a)(n,2),l=j[0],d=j[1],m=Object(t.useState)(e.heart),r=Object(v.a)(m,2),o=r[0],b=r[1],h=function(){l&&(a(i+1),b(Object(p.jsx)(u.a,{})),document.getElementById(e.id).style.color="rgb(235,7,96)"),d(!1)};return Object(p.jsxs)("div",{className:"particular-post",children:[Object(p.jsxs)("div",{className:"heading d-flex",children:[Object(p.jsx)("img",{src:e.src,height:"60",width:"60"}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h6",{children:e.name}),Object(p.jsx)("p",{children:"Location and other"})]}),Object(p.jsx)("i",{className:"ml-auto",children:e.more})]}),Object(p.jsx)("div",{className:"mainphoto",children:Object(p.jsx)("img",{src:e.src,onDoubleClick:h},e.id)}),Object(p.jsxs)("div",{className:"icons",children:[Object(p.jsx)("i",{id:e.id,onClick:h,children:o}),Object(p.jsx)("span",{children:i}),Object(p.jsx)("i",{children:e.comment}),Object(p.jsx)("span",{children:e.comments}),Object(p.jsx)("i",{children:e.share}),Object(p.jsx)("i",{className:"ml-auto",children:e.save})]})]},e.id)},f=function(e){return Object(p.jsx)("div",{className:"posts",id:"posts",children:Object(p.jsxs)("div",{className:"all-posts",children:[Object(p.jsx)("div",{className:"stories pt-2",children:Object(p.jsx)(O.a,{spaceBetween:0,slidesPerView:7,breakpoints:{300:{width:400,slidesPerView:4}},children:e.value.map((function(e){return Object(p.jsxs)(g.a,{className:"slide",children:[Object(p.jsx)("img",{src:e.img,className:e.classname}),Object(p.jsx)("h6",{children:e.name})]},e.id)}))})}),e.post.map((function(e){return Object(p.jsx)(N,{id:e.id,src:e.img,name:e.name,likes:e.likes,comments:e.comments,heart:e.heartIcon,comment:e.commentIcon,share:e.shareIcon,save:e.saveIcon,more:e.moreIcon})}))]})})},I=function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(f,{value:e.dataStorie,post:e.dataPost,idMain:e.mainId})})},k=s.p+"static/media/1.8545789f.jpg",w=s.p+"static/media/2.741e250e.jpg",y=s.p+"static/media/4.89dad70a.jpg",S=s.p+"static/media/5.c2aff6b6.jpg",D=(s.p,s.p+"static/media/7.8cfde26b.jpg"),P=s.p+"static/media/Janmashtami.6843c7c8.mp4",E=s.p+"static/media/Ganesha Chaturthi.c9bfdbad.mp4",C=function(){return Object(p.jsxs)("div",{className:"searchSection",children:[Object(p.jsx)("div",{class:"input-group",children:Object(p.jsx)("input",{type:"search",class:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"})}),Object(p.jsxs)("div",{className:"wrraper-1",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)("img",{src:k})}),Object(p.jsx)("div",{className:"video",children:Object(p.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(p.jsx)("source",{src:P})})})]}),Object(p.jsxs)("div",{className:"wrraper-2",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)("img",{src:y})}),Object(p.jsx)("div",{className:"image",children:Object(p.jsx)("img",{src:S})})]}),Object(p.jsxs)("div",{className:"wrraper-2",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)("img",{src:D})}),Object(p.jsx)("div",{className:"image",children:Object(p.jsx)("img",{src:w})})]}),Object(p.jsxs)("div",{className:"wrraper-1",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)("img",{src:k})}),Object(p.jsx)("div",{className:"video",children:Object(p.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(p.jsx)("source",{src:E})})})]})]})},B=s(11),A=s(12),L=s(9),M=function(e){var c=Object(t.useState)(e.like),s=Object(v.a)(c,2),i=s[0],a=s[1],n=Object(t.useState)(!0),j=Object(v.a)(n,2),l=j[0],d=j[1],m=Object(t.useState)(Object(p.jsx)(u.c,{})),r=Object(v.a)(m,2),o=r[0],b=r[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,onDoubleClick:function(){l&&(a(i+1),b(Object(p.jsx)(u.a,{})),document.getElementById(e.id).style.color="rgb(235,7,96)"),d(!1)},children:Object(p.jsx)("source",{src:e.video})}),Object(p.jsxs)("div",{className:"overlay",keys:e.id,children:[Object(p.jsxs)("div",{className:"profile-detail",children:[Object(p.jsx)("img",{src:e.img,height:"50",width:"50"}),Object(p.jsxs)("h6",{className:"mr-2",children:[e.name," -"]}),Object(p.jsx)("a",{href:"#",className:"",children:"Folow"})]}),Object(p.jsx)("p",{children:e.desc}),Object(p.jsxs)("div",{className:"icons d-flex flex-column",children:[Object(p.jsxs)("i",{className:"icon",children:[Object(p.jsx)("i",{id:e.id,children:o}),Object(p.jsx)("h6",{children:i})]}),Object(p.jsxs)("i",{children:[Object(p.jsx)(B.b,{}),Object(p.jsx)("h6",{children:e.comment})]}),Object(p.jsx)("i",{children:Object(p.jsx)(A.d,{})}),Object(p.jsx)("i",{children:Object(p.jsx)(L.e,{className:"mt-4"})})]})]})]})},H=s(52),J=s(51);s(29);H.a.use([J.a]);var V=function(e){return Object(p.jsx)("div",{className:"reels",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsxs)(O.a,{spaceBetween:0,slidesPerView:1,direction:"vertical",className:"slider",children:[Object(p.jsx)(g.a,{className:"slide",children:Object(p.jsx)(M,{id:1,video:P,img:j,like:200,comment:"10",name:"harshit gajjar",desc:"I love it.. #love #gujarati #insta #india"})}),Object(p.jsx)(g.a,{className:"slide",children:Object(p.jsx)(M,{id:2,video:E,img:r,like:400,comment:"20",name:"harsh gohel",desc:"Very Nice......... #love #gujarati #insta #india"})}),Object(p.jsx)(g.a,{className:"slide",children:Object(p.jsx)(M,{id:3,video:P,img:d,like:880,comment:"45",name:"vatsal dendpara",desc:"Cool .... #love #insta #gujarati"})}),Object(p.jsx)(g.a,{className:"slide",children:Object(p.jsx)(M,{id:4,video:E,img:b,like:110,comment:"24",name:"nitant joshi",desc:".......... #ganpati #love #fav"})})]})})})};H.a.use([J.a]);var F=function(){return Object(p.jsx)("div",{className:"igtv",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsxs)(O.a,{spaceBetween:0,slidesPerView:1,direction:"horizontal",className:"slider",children:[Object(p.jsx)(g.a,{className:"slide",children:Object(p.jsx)(M,{id:1,video:P,img:j,like:200,comment:"10",name:"harshit gajjar",desc:"I love it.. #love #gujarati #insta #india"})}),Object(p.jsx)(g.a,{className:"slide",children:Object(p.jsx)(M,{id:2,video:E,img:r,like:400,comment:"20",name:"harsh gohel",desc:"Very Nice......... #love #gujarati #insta #india"})}),Object(p.jsx)(g.a,{className:"slide",children:Object(p.jsx)(M,{id:3,video:P,img:d,like:880,comment:"45",name:"vatsal dendpara",desc:"Cool .... #love #insta #gujarati"})}),Object(p.jsx)(g.a,{className:"slide",children:Object(p.jsx)(M,{id:4,video:E,img:b,like:110,comment:"24",name:"nitant joshi",desc:".......... #ganpati #love #fav"})})]})})})},G=function(e){return Object(p.jsxs)("div",{className:"follow-item d-flex",children:[Object(p.jsx)("img",{src:e.img,height:"50",width:"50"}),Object(p.jsx)("div",{className:"content ml-2",children:Object(p.jsxs)("h6",{className:"name",children:[e.name,Object(p.jsx)("p",{className:"mt-1",children:e.content})]})}),Object(p.jsx)("div",{className:"btn",children:"Follow"})]})},T=function(e){return Object(p.jsxs)("div",{className:"following-item d-flex",children:[Object(p.jsx)("img",{src:e.img,height:"50",width:"50"}),Object(p.jsxs)("div",{className:"content ml-2",children:[Object(p.jsx)("p",{className:"one mb-4",children:e.name}),Object(p.jsx)("p",{className:"sec",children:e.content})]})]})},z=function(e){return Object(p.jsxs)("div",{className:"suggesion-item d-flex",children:[Object(p.jsx)("img",{src:e.img,height:"50",width:"50"}),Object(p.jsxs)("div",{className:"content ml-2",children:[Object(p.jsx)("p",{className:"one mb-3",children:e.name}),Object(p.jsx)("p",{className:"sec",children:e.nickname})]}),Object(p.jsx)("div",{className:"btn ml-auto",children:"Follow"})]})},R=function(){return Object(p.jsx)("div",{className:"activity",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("h6",{children:"Activity"}),Object(p.jsxs)("div",{className:"follow-request d-flex",children:[Object(p.jsx)("div",{className:"profiles text-dark",children:"2"}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h6",{children:"Follow Request"}),Object(p.jsx)("p",{children:"Approve or ignore request"})]})]}),Object(p.jsx)("h6",{children:"Today"}),Object(p.jsx)(G,{img:j,name:"harshit gajjar",content:"who you might know,is on instagram"}),Object(p.jsx)(T,{img:d,name:"Harsh Gohel",content:"started following you."}),Object(p.jsx)("h6",{children:"This Month"}),Object(p.jsx)(G,{img:j,name:"Harshit Gajjar",content:"who you might know,is on instagram"}),Object(p.jsx)("h6",{children:"Earlier"}),Object(p.jsx)(G,{img:j,name:"Harshit Gajjar",content:"who you might know,is on instagram"}),Object(p.jsx)(G,{img:r,name:"Nitant Joshi",content:"who you might know,is on instagram"}),Object(p.jsx)(G,{img:b,name:"Vatsal Dendpara",content:"who you might know,is on instagram"}),Object(p.jsx)("h6",{children:"Suggestions for you"}),Object(p.jsx)(z,{img:j,name:"David Brooks",nickname:"David  "}),Object(p.jsx)(z,{img:d,name:"Matthew Hinkle",nickname:"Mathhew"}),Object(p.jsx)(z,{img:r,name:"Ed Morris",nickname:"Ed"}),Object(p.jsx)(z,{img:b,name:"Paul Pinnock",nickname:"Paul"})]})})},q=s(32),W=s(15),Y=s(33),_=function(){return Object(p.jsx)("div",{className:"settings",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("h5",{children:"Settings"}),Object(p.jsxs)("div",{className:"content-1",children:[Object(p.jsxs)("h6",{children:[Object(p.jsx)("i",{children:Object(p.jsx)(L.d,{})}),"Follows and Invite Friends"]}),Object(p.jsxs)("h6",{children:[Object(p.jsx)("i",{children:Object(p.jsx)(q.a,{})}),"Notification"]}),Object(p.jsxs)("h6",{children:[Object(p.jsx)("i",{children:Object(p.jsx)(L.b,{})}),"Privacy"]}),Object(p.jsxs)("h6",{children:[Object(p.jsx)("i",{children:Object(p.jsx)(u.g,{})}),"Security"]}),Object(p.jsxs)("h6",{children:[Object(p.jsx)("i",{children:Object(p.jsx)(W.b,{})}),"Ads"]}),Object(p.jsxs)("h6",{children:[Object(p.jsx)("i",{children:Object(p.jsx)(A.a,{})}),"Account"]}),Object(p.jsxs)("h6",{children:[Object(p.jsx)("i",{children:Object(p.jsx)(B.a,{})}),"Help"]}),Object(p.jsxs)("h6",{children:[Object(p.jsx)("i",{children:Object(p.jsx)(u.e,{})}),"About"]}),Object(p.jsxs)("h6",{children:[Object(p.jsx)("i",{children:Object(p.jsx)(u.b,{})}),"Theme"]})]}),Object(p.jsx)("h5",{children:"Logins"}),Object(p.jsxs)("div",{className:"content-2 d-flex flex-column",children:[Object(p.jsxs)("a",{href:"",children:[Object(p.jsx)("i",{children:Object(p.jsx)(A.b,{})}),"Add account"]}),Object(p.jsxs)("a",{href:"",children:[Object(p.jsx)("i",{children:Object(p.jsx)(Y.a,{})}),"Log Out"]})]})]})})},K=(s(43),s(20)),Q=function(e){var c=function(){window.screen.width<1100&&(document.getElementById(e.mainId).style.marginLeft="-100%")};return Object(p.jsx)("div",{className:"sidebar",id:"sidebar",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("i",{className:"arrowLeft",onClick:c,children:Object(p.jsx)(L.a,{})}),Object(p.jsxs)("div",{className:"profile-details",children:[Object(p.jsx)("img",{src:l,height:"90",width:"90"}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h6",{children:"Jani Dean"}),Object(p.jsx)("p",{children:"Hello,How are you?"})]}),Object(p.jsxs)("div",{className:"follows d-flex",children:[Object(p.jsxs)("div",{className:"total-post",children:[Object(p.jsx)("p",{children:"50"}),Object(p.jsx)("p",{children:"post"})]}),Object(p.jsxs)("div",{className:"followers",children:[Object(p.jsx)("p",{children:"1k"}),Object(p.jsx)("p",{children:"followers"})]}),Object(p.jsxs)("div",{className:"following",children:[Object(p.jsx)("p",{children:"1k"}),Object(p.jsx)("p",{children:"following"})]})]})]}),Object(p.jsx)("div",{className:"nav d-flex flex-column",children:e.value.map((function(e){return Object(p.jsxs)(K.b,{className:"item nav-link",to:e.path,activeClassName:"active",exact:!0,onClick:c,children:[Object(p.jsx)("i",{children:e.icon}),e.name]},e.id)}))})]})})},U=function(e){return Object(p.jsxs)("div",{className:"item d-flex",children:[Object(p.jsx)("img",{src:e.img,height:"60",width:"60"}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"title",children:e.name}),Object(p.jsx)("p",{className:"share",children:"Shared Post By Fashion_0007 "})]})]})},X=function(e){return Object(p.jsx)("div",{className:"list",children:e.itemData.map((function(e){return Object(p.jsx)(U,{id:e.id,name:e.name,img:e.img})}))})},Z=function(e){return Object(p.jsxs)("div",{className:"messagebar",children:[Object(p.jsxs)("div",{className:"top",children:[Object(p.jsx)("i",{className:"arrowLeft",onClick:function(){document.getElementById(e.mainId).style.marginLeft="-100%"},children:Object(p.jsx)(L.a,{})}),Object(p.jsx)("h6",{className:"",children:"Messages"}),Object(p.jsxs)("div",{class:"input-group",children:[Object(p.jsx)(u.f,{className:"search"}),Object(p.jsx)("input",{type:"search",class:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"})]})]}),Object(p.jsx)(X,{itemData:e.value})]})},$=s(35),ee=function(){var e={navData:[{id:1,name:"Home",path:"/instagram",icon:Object(p.jsx)(u.d,{})},{id:2,name:"Search",path:"/Search",icon:Object(p.jsx)(u.f,{})},{id:3,name:"Reels",path:"/Reels",icon:Object(p.jsx)($.a,{})},{id:4,name:"IGTV",path:"/IGTV",icon:Object(p.jsx)(A.c,{})},{id:5,name:"Activity",path:"/Activity",icon:Object(p.jsx)(u.c,{})},{id:5,name:"Setting",path:"/Settings",icon:Object(p.jsx)(u.h,{})}],StorieData:[{id:1,name:"Your Storie",img:l,classname:"own"},{id:2,name:"Jane Doe",img:j,classname:"active"},{id:3,name:"Matthew Hinkle",img:d,classname:"active"},{id:4,name:"Amy Smith",img:m,classname:"active"},{id:5,name:"Ed Morris",img:r,classname:"active"},{id:6,name:"Carolyn Duncan",img:o,classname:"active"},{id:7,name:"Paul Pinnock",img:b,classname:"active"},{id:8,name:"Elizabeth Wong",img:h,classname:"active"},{id:9,name:"James Lathrop",img:x,classname:"active"}],postData:[{id:1,name:"Jane Doe",img:l,likes:1743,comments:49,heartIcon:Object(p.jsx)(u.c,{}),commentIcon:Object(p.jsx)(B.b,{}),shareIcon:Object(p.jsx)(A.d,{}),saveIcon:Object(p.jsx)(W.a,{}),moreIcon:Object(p.jsx)(L.e,{})},{id:2,name:"David Brooks",img:j,likes:1364,comments:43,heartIcon:Object(p.jsx)(u.c,{}),commentIcon:Object(p.jsx)(B.b,{}),shareIcon:Object(p.jsx)(A.d,{}),saveIcon:Object(p.jsx)(W.a,{}),moreIcon:Object(p.jsx)(L.e,{})},{id:3,name:"Matthew Hinkle",img:d,likes:1200,comments:64,heartIcon:Object(p.jsx)(u.c,{}),commentIcon:Object(p.jsx)(B.b,{}),shareIcon:Object(p.jsx)(A.d,{}),saveIcon:Object(p.jsx)(W.a,{}),moreIcon:Object(p.jsx)(L.e,{})},{id:4,name:"Amy Smith",img:m,likes:2021,comments:77,heartIcon:Object(p.jsx)(u.c,{}),commentIcon:Object(p.jsx)(B.b,{}),shareIcon:Object(p.jsx)(A.d,{}),saveIcon:Object(p.jsx)(W.a,{}),moreIcon:Object(p.jsx)(L.e,{})},{id:5,name:"Ed Morris",img:r,likes:3234,comments:564,heartIcon:Object(p.jsx)(u.c,{}),commentIcon:Object(p.jsx)(B.b,{}),shareIcon:Object(p.jsx)(A.d,{}),saveIcon:Object(p.jsx)(W.a,{}),moreIcon:Object(p.jsx)(L.e,{})},{id:6,name:"Carolyn Duncan",img:o,likes:1456,comments:58,heartIcon:Object(p.jsx)(u.c,{}),commentIcon:Object(p.jsx)(B.b,{}),shareIcon:Object(p.jsx)(A.d,{}),saveIcon:Object(p.jsx)(W.a,{}),moreIcon:Object(p.jsx)(L.e,{})},{id:7,name:"Paul Pinnock",img:b,likes:560,comments:20,heartIcon:Object(p.jsx)(u.c,{}),commentIcon:Object(p.jsx)(B.b,{}),shareIcon:Object(p.jsx)(A.d,{}),saveIcon:Object(p.jsx)(W.a,{}),moreIcon:Object(p.jsx)(L.e,{})},{id:8,name:"Elizabeth Wong",img:h,likes:2300,comments:150,heartIcon:Object(p.jsx)(u.c,{}),commentIcon:Object(p.jsx)(B.b,{}),shareIcon:Object(p.jsx)(A.d,{}),saveIcon:Object(p.jsx)(W.a,{}),moreIcon:Object(p.jsx)(L.e,{})},{id:9,name:"James Lathrop",img:x,likes:1250,comments:70,heartIcon:Object(p.jsx)(u.c,{}),commentIcon:Object(p.jsx)(B.b,{}),shareIcon:Object(p.jsx)(A.d,{}),saveIcon:Object(p.jsx)(W.a,{}),moreIcon:Object(p.jsx)(L.e,{})}],messageData:[{id:1,name:"David brooks",img:j},{id:2,name:"Jane Doe",img:l},{id:3,name:"Matthew Hinkle",img:d},{id:4,name:"Amy Smith",img:m},{id:5,name:"Ed Morris",img:r},{id:6,name:"Carolyn Duncan",img:o},{id:7,name:"Paul Pinnock",img:b},{id:8,name:"Elizabeth Wong",img:h},{id:9,name:"James Lathrop",img:x}]};return Object(p.jsxs)("div",{className:"main",id:"main",children:[Object(p.jsx)(Q,{value:e.navData,id:"sidebar",mainId:"main"}),Object(p.jsxs)("div",{className:"topbar-for-mobile",children:[Object(p.jsx)("i",{onClick:function(){document.getElementById("main").style.marginLeft="0%"},children:Object(p.jsx)(L.c,{})}),Object(p.jsx)("h6",{className:"ml-auto",children:"Instagram"}),Object(p.jsx)("i",{className:"ml-auto",onClick:function(){document.getElementById("main").style.marginLeft="-200%"},children:Object(p.jsx)(B.c,{})})]}),Object(p.jsxs)(n.c,{children:[Object(p.jsx)(n.a,{path:"/instagram",component:function(){return Object(p.jsx)(I,{dataStorie:e.StorieData,dataPost:e.postData,mainId:"main"})},exact:!0}),Object(p.jsx)(n.a,{exact:!0,path:"/Search",component:C}),Object(p.jsx)(n.a,{exact:!0,path:"/Reels",component:V}),Object(p.jsx)(n.a,{exact:!0,path:"/IGTV",component:F}),Object(p.jsx)(n.a,{exact:!0,path:"/Activity",component:R}),Object(p.jsx)(n.a,{exact:!0,path:"/Settings",component:_})]}),Object(p.jsx)(Z,{value:e.messageData,mainId:"main"})]})};a.a.render(Object(p.jsx)(K.a,{children:Object(p.jsx)(ee,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.303eb109.chunk.js.map