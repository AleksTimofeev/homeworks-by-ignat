(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={header:"HW5_header__lAqRP",navigation:"HW5_navigation__3PNrd",borderLink:"HW5_borderLink__dWSf2",activeLink:"HW5_activeLink__1cw5j"}},,function(e,a,t){e.exports={message:"Message_message__pk-1_",textWrapper:"Message_textWrapper__pFUtU",col:"Message_col__3ki6P",name:"Message_name__3-eIT",text:"Message_text__3daCQ",time:"Message_time__206YV"}},,function(e,a,t){e.exports={someClass:"Greeting_someClass__2FnK_",error:"Greeting_error__2jwSS",hw3Container:"Greeting_hw3Container__3iupd",greetingWrapper:"Greeting_greetingWrapper__1rZ3q",user:"Greeting_user__We9If"}},,function(e,a,t){e.exports={someClass:"Affairs_someClass__3_ezt",affairsWrapper:"Affairs_affairsWrapper__3PWEm",buttonsPriority:"Affairs_buttonsPriority__3aQiL",affairsItem:"Affairs_affairsItem__2z_Xf",highPriority:"Affairs_highPriority__3R4F1",middlePriority:"Affairs_middlePriority__xU4qv",lowPriority:"Affairs_lowPriority__3Vw-Y"}},function(e,a,t){e.exports={wrapper:"SuperInputText_wrapper__3P09e",superInput:"SuperInputText_superInput__4usMK",inputStyle:"SuperInputText_inputStyle__1VjFr",blue:"SuperInputText_blue__3T8Cf",green:"SuperInputText_green__369sp",errorInput:"SuperInputText_errorInput__2d4hj",error:"SuperInputText_error__28Dvx"}},,function(e,a,t){e.exports={default:"SuperButton_default__3JDBb",red:"SuperButton_red__3wKXa"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3WrOg",spanClassName:"SuperCheckbox_spanClassName__14cJC"}},,,function(e,a,t){e.exports={App:"App_App__3k_AP"}},function(e,a,t){e.exports={blue:"HW4_blue__23628",column:"HW4_column__19_tg",testSpanError:"HW4_testSpanError__2V-Xu"}},,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),i=(t(25),t(17)),s=t.n(i),o=t(5),u=t(1),m=t(6),p=t.n(m),_=function(e){var a=e.avatar,t=e.name,n=e.message,l=e.time;return r.a.createElement("div",{className:p.a.message},r.a.createElement("img",{src:a,alt:"avatar"}),r.a.createElement("div",{className:p.a.textWrapper},r.a.createElement("div",{className:p.a.col},r.a.createElement("h3",{className:p.a.name},t),r.a.createElement("p",{className:p.a.text},n)),r.a.createElement("span",{className:p.a.time},l)))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some",E="some text",h="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:d,name:f,message:E,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},v=t(2),b=t(10),k=t.n(b),C=t(9),w=t(13),N=t.n(w),x=["red","className"],y=function(e){var a=e.red,t=e.className,n=Object(C.a)(e,x),l="".concat(a?N.a.red:N.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var S=function(e){return r.a.createElement("div",{className:k.a.affairsItem+" "+k.a["".concat(e.affair.priority,"Priority")]},r.a.createElement("span",null,e.affair.name),r.a.createElement("span",null,e.affair.priority),r.a.createElement(y,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(S,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:k.a.affairsWrapper},r.a.createElement("div",{className:k.a.buttonsPriority},r.a.createElement(y,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(y,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(y,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(y,{onClick:function(){e.setFilter("low")}},"Low")),a)},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var W=function(){var e=Object(n.useState)(O),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(v.a)(c,2),s=i[0],o=i[1],u=function(e,a){return"all"===a?e:"high"===a||"middle"===a||"low"===a?e.filter((function(e){return e.priority===a})):void 0}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:u,setFilter:o,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(19),P=t(11),I=t.n(P),D=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","classesInput"],T=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=(e.className,e.spanClassName),s=e.classesInput,o=Object(C.a)(e,D),u="".concat(I.a.error," ").concat(i||""),m="".concat(I.a.inputStyle," ").concat(c?I.a.errorInput:""," ").concat(s?I.a[s]:"");return r.a.createElement("div",{className:I.a.wrapper},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},o)),c&&r.a.createElement("span",{className:u},c))},M=t(8),H=t.n(M),U=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers;return r.a.createElement("div",{className:H.a.greetingWrapper},r.a.createElement(T,{value:a,onChangeText:t,onEnter:n,error:l}),l?r.a.createElement("span",null,l):r.a.createElement(y,{onClick:n},"add"),r.a.createElement("span",null,c))},L=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),i=c[0],s=c[1],o=Object(n.useState)(""),u=Object(v.a)(o,2),m=u[0],p=u[1],_=a.length;return r.a.createElement(U,{name:i,setNameCallback:function(e){s(e.trim()),p("")},addUser:function(){i.length>0?(t(i),alert(i),s("")):p("error")},error:m,totalUsers:_})},F=t(28),J=function(e){var a=e.data,t=a._id,n=a.name,l=a.date,c=e.userClickHandler,i=e.removeUserCallback,s=new Date(l).getDate()<10?"0".concat(new Date(l).getDate()):new Date(l).getDate(),o=new Date(l).getMonth()<10?"0".concat(new Date(l).getMonth()):new Date(l).getMonth(),u=new Date(l).getHours()<10?"0".concat(new Date(l).getHours()):new Date(l).getHours(),m=new Date(l).getMinutes()<10?"0".concat(new Date(l).getMinutes()):new Date(l).getMinutes(),p="".concat(s,".").concat(o,".").concat(new Date(l).getFullYear()," ").concat(u,":").concat(m);return r.a.createElement("li",{className:H.a.user,onClick:c},r.a.createElement("span",{title:"created ".concat(p)},n),r.a.createElement(y,{red:!0,onClick:function(){return i(t)}},"delete"))},B=function(e){var a=e.users,t=e.removeUserCallback;return r.a.createElement("ul",null,null===a||void 0===a?void 0:a.map((function(e,a){return r.a.createElement(J,{key:a,data:e,userClickHandler:function(){e._id},removeUserCallback:t})})))};var G=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:H.a.hw3Container},r.a.createElement("hr",null),r.a.createElement("span",null,"homeworks 3"),r.a.createElement("div",null,r.a.createElement(L,{users:t,addUserCallback:function(e){l([{_id:Object(F.a)(),name:e,date:(new Date).getTime()}].concat(Object(A.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement(B,{users:t,removeUserCallback:function(e){l(t.filter((function(a){return a._id!==e})))}}),r.a.createElement("hr",null)))},K=t(18),X=t.n(K),q=t(14),V=t.n(q),Y=["type","onChange","onChangeChecked","className","spanClassName","children"],R=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(C.a)(e,Y),i="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:i},c)),l&&r.a.createElement("span",{className:V.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),o=Object(v.a)(s,2),u=o[0],m=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:X.a.column},r.a.createElement(T,{value:t,onChangeText:l,onEnter:i,error:c,classesInput:"green"}),r.a.createElement(T,{classesInput:"blue"}),r.a.createElement(y,null,"default"),r.a.createElement(y,{red:!0,onClick:i},"delete "),r.a.createElement(y,{disabled:!0},"disabled"),r.a.createElement(R,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(R,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(W,null),r.a.createElement(G,null),r.a.createElement(z,null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},$=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Junior page"))},ee=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"JuniorPlus page"))},ae="/pre-junior",te="/junior",ne="/junior-plus";var re=function(){return r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",element:r.a.createElement(u.a,{to:ae})}),r.a.createElement(u.b,{path:ae,element:r.a.createElement(Q,null)}),r.a.createElement(u.b,{path:te,element:r.a.createElement($,null)}),r.a.createElement(u.b,{path:ne,element:r.a.createElement(ee,null)}),r.a.createElement(u.b,{path:"/*",element:r.a.createElement(Z,null)})))},le=t(4),ce=t.n(le);var ie=function(){return r.a.createElement("div",{className:ce.a.header},r.a.createElement("div",{className:ce.a.navigation},r.a.createElement(o.b,{className:function(e){return e.isActive?ce.a.activeLink:""},to:ae},"PreJunior",r.a.createElement("span",{className:ce.a.borderLink})),r.a.createElement(o.b,{className:function(e){return e.isActive?ce.a.activeLink:""},to:te},"Junior",r.a.createElement("span",{className:ce.a.borderLink})),r.a.createElement(o.b,{className:function(e){return e.isActive?ce.a.activeLink:""},to:ne},"Junior +",r.a.createElement("span",{className:ce.a.borderLink}))))};var se=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(ie,null),r.a.createElement(re,null)))};var oe=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.c4c7d886.chunk.js.map