(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={wrapper:"HW10_wrapper__33Atj",center:"HW10_center__1aE6s",wave:"HW10_wave__1ozt1"}},function(e,a,t){e.exports={container:"HW5_container__3-cvm",header:"HW5_header__lAqRP",navigation:"HW5_navigation__3PNrd",showNavigation:"HW5_showNavigation__3z27O",closeNavigation:"HW5_closeNavigation__QibMK",activeLink:"HW5_activeLink__1cw5j",menu:"HW5_menu__2fzg2"}},,function(e,a,t){e.exports={someClass:"Affairs_someClass__3_ezt",affairsWrapper:"Affairs_affairsWrapper__3PWEm",buttonsPriority:"Affairs_buttonsPriority__3aQiL",btn:"Affairs_btn__3Ef2a",affairsItem:"Affairs_affairsItem__2z_Xf",highPriority:"Affairs_highPriority__3R4F1",middlePriority:"Affairs_middlePriority__xU4qv",lowPriority:"Affairs_lowPriority__3Vw-Y"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__2FnK_",error:"Greeting_error__2jwSS",hw3Container:"Greeting_hw3Container__3iupd",greetingWrapper:"Greeting_greetingWrapper__1rZ3q",input:"Greeting_input__wfhYn",btn:"Greeting_btn__2AxY_",user:"Greeting_user__We9If"}},,function(e,a,t){e.exports={message:"Message_message__pk-1_",textWrapper:"Message_textWrapper__pFUtU",col:"Message_col__3ki6P",name:"Message_name__3-eIT",text:"Message_text__3daCQ",time:"Message_time__206YV"}},,function(e,a,t){e.exports={wrapper:"SuperInputText_wrapper__3P09e",superInput:"SuperInputText_superInput__4usMK",inputStyle:"SuperInputText_inputStyle__1VjFr",blue:"SuperInputText_blue__3T8Cf",green:"SuperInputText_green__369sp",errorInput:"SuperInputText_errorInput__2d4hj",error:"SuperInputText_error__28Dvx"}},,,,function(e,a,t){e.exports={wrapper:"HW9_wrapper__3dz0A",time:"HW9_time__3vFXf",date:"HW9_date__3qX9j"}},,function(e,a,t){e.exports={App:"App_App__3k_AP",title:"App_title__260Xj"}},function(e,a,t){e.exports={default:"SuperButton_default__3JDBb",red:"SuperButton_red__3wKXa"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3WrOg",spanClassName:"SuperCheckbox_spanClassName__14cJC"}},function(e,a,t){e.exports={wrapper:"HW6_wrapper__3Y5Wd",buttons:"HW6_buttons__4wsCT"}},,,,,function(e,a,t){e.exports={blue:"HW4_blue__23628",column:"HW4_column__19_tg",testSpanError:"HW4_testSpanError__2V-Xu"}},function(e,a,t){e.exports={editableSpan:"SuperEditableSpan_editableSpan__1MkfO"}},function(e,a,t){e.exports=t.p+"static/media/7202841.605bade1.png"},function(e,a,t){e.exports={item:"HW8_item__3aqhu"}},,,function(e,a,t){e.exports=t(44)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=(t(38),t(19)),i=t.n(o),s=t(2),u=t(10),m=t(1),p=t(11),d=t.n(p),E=function(e){var a=e.avatar,t=e.name,n=e.message,l=e.time;return r.a.createElement("div",{className:d.a.message},r.a.createElement("img",{src:a,alt:"avatar"}),r.a.createElement("div",{className:d.a.textWrapper},r.a.createElement("div",{className:d.a.col},r.a.createElement("h3",{className:d.a.name},t),r.a.createElement("p",{className:d.a.text},n)),r.a.createElement("span",{className:d.a.time},l)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some",v="some text",g="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:_,name:f,message:v,time:g}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(8),w=t.n(b),C=t(4),k=t(20),N=t.n(k),O=["red","className"],j=function(e){var a=e.red,t=e.className,n=Object(C.a)(e,O),l="".concat(a&&N.a.red," ").concat(N.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var y=function(e){return r.a.createElement("div",{className:w.a.affairsItem+" "+w.a["".concat(e.affair.priority,"Priority")]},r.a.createElement("span",null,e.affair.name),r.a.createElement("span",null,e.affair.priority),r.a.createElement(j,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var S=function(e){var a=e.data.map((function(a){return r.a.createElement(y,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:w.a.affairsWrapper},r.a.createElement("div",{className:w.a.buttonsPriority},r.a.createElement(j,{className:w.a.btn,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(j,{className:w.a.btn,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(j,{className:w.a.btn,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(j,{className:w.a.btn,onClick:function(){e.setFilter("low")}},"Low")),a)},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var W=function(){var e=Object(n.useState)(x),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(s.a)(c,2),i=o[0],u=o[1],m=function(e,a){return"all"===a?e:"high"===a||"middle"===a||"low"===a?e.filter((function(e){return e.priority===a})):void 0}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(S,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(7),I=t(13),H=t.n(I),D=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","classesInput"],P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),i=e.classesInput,s=Object(C.a)(e,D),u="".concat(H.a.error," ").concat(o||""),m="".concat(H.a.inputStyle," ").concat(c?H.a.errorInput:""," ").concat(i?H.a[i]:"");return r.a.createElement("div",{className:H.a.wrapper},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:u},c))},M=t(9),T=t.n(M),F=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers;return r.a.createElement("div",{className:T.a.greetingWrapper},r.a.createElement(P,{value:a,onChangeText:t,onEnter:n,error:l,className:T.a.input}),l?r.a.createElement("span",null,l):r.a.createElement(j,{className:T.a.btn,onClick:n},"add"),r.a.createElement("span",null,c))},U=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],d=m[1],E=a.length;return r.a.createElement(F,{name:o,setNameCallback:function(e){i(e.trim()),d("")},addUser:function(){o.length>0?(t(o),alert(o),i("")):d("error")},error:p,totalUsers:E})},J=t(46),B=function(e){var a=e.data,t=a._id,n=a.name,l=a.date,c=e.userClickHandler,o=e.removeUserCallback,i=new Date(l).getDate()<10?"0".concat(new Date(l).getDate()):new Date(l).getDate(),s=new Date(l).getMonth()<10?"0".concat(new Date(l).getMonth()):new Date(l).getMonth(),u=new Date(l).getHours()<10?"0".concat(new Date(l).getHours()):new Date(l).getHours(),m=new Date(l).getMinutes()<10?"0".concat(new Date(l).getMinutes()):new Date(l).getMinutes(),p="".concat(i,".").concat(s,".").concat(new Date(l).getFullYear()," ").concat(u,":").concat(m);return r.a.createElement("li",{className:T.a.user,onClick:c},r.a.createElement("span",{title:"created ".concat(p)},n),r.a.createElement(j,{red:!0,onClick:function(){alert("are you sure?"),o(t)}},"delete"))},L=function(e){var a=e.users,t=e.removeUserCallback;return r.a.createElement("ul",null,null===a||void 0===a?void 0:a.map((function(e,a){return r.a.createElement(B,{key:a,data:e,userClickHandler:function(){e._id},removeUserCallback:t})})))};var G=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:T.a.hw3Container},r.a.createElement("hr",null),r.a.createElement("span",null,"homeworks 3"),r.a.createElement("div",null,r.a.createElement(U,{users:t,addUserCallback:function(e){l([{_id:Object(J.a)(),name:e,date:(new Date).getTime()}].concat(Object(A.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement(L,{users:t,removeUserCallback:function(e){l(t.filter((function(a){return a._id!==e})))}}),r.a.createElement("hr",null)))},X=t(27),Y=t.n(X),z=t(21),K=t.n(z),q=["type","onChange","onChangeChecked","className","spanClassName","children"],V=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(C.a)(e,q),o="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var Q=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),u=Object(s.a)(i,2),m=u[0],p=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:Y.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:o,error:c,classesInput:"green"}),r.a.createElement(P,{classesInput:"blue"}),r.a.createElement(j,null,"default"),r.a.createElement(j,{red:!0,onClick:o},"delete "),r.a.createElement(j,{disabled:!0},"disabled"),r.a.createElement(V,{checked:m,onChangeChecked:p},"some text "),r.a.createElement(V,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},R=t(28),Z=t.n(R),$=t(29),ee=t.n($),ae=["autoFocus","onBlur","onEnter","spanProps"],te=["children","onDoubleClick","className"],ne=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(C.a)(e,ae),o=Object(n.useState)(!1),i=Object(s.a)(o,2),u=i[0],m=i[1],p=l||{},d=p.children,E=p.onDoubleClick,_=p.className,f=Object(C.a)(p,te),v="".concat(Z.a.editableSpan," ").concat(_);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:v},f),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:ee.a,alt:"double click"}),d||c.value)))};function re(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function le(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}re("test",{x:"A",y:1});le("test",{x:"",y:0});var ce=t(22),oe=t.n(ce);var ie=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),i=o[0],u=o[1],m=function(){u(!1)};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:oe.a.wrapper},r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{value:t,onChangeText:l,onEnter:m,onFocus:function(){u(!0)},onBlur:m,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:oe.a.buttons},i?r.a.createElement(j,{onClick:m},"Add"):r.a.createElement(j,{disabled:!Boolean(t),onClick:function(){t.trim()&&"enter text..."!==t&&re("editable-span-value",t)}},"save"),r.a.createElement(j,{onClick:function(){l(le("editable-span-value","enter text..."))}},"restore"))),r.a.createElement("hr",null),r.a.createElement("hr",null))};var se=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(W,null),r.a.createElement(G,null),r.a.createElement(Q,null),r.a.createElement(ie,null))};var ue=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},me=["options","onChange","onChangeOption"],pe=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(C.a)(e,me),l=a?Object(A.a)(a):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),l.map((function(e,a){return r.a.createElement("option",{key:a},e)})))},de=["type","name","options","value","onChange","onChangeOption"],Ee=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(C.a)(e,de),function(e){l&&l(e.currentTarget.name)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",name:e,checked:e===n,value:e,onChange:c}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},_e=["x","y","z"];var fe=function(){var e=Object(n.useState)(_e[1]),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(pe,{options:_e,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(Ee,{name:"radio",options:_e,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ve=function(e,a){switch(a.type){case"sort":return"up"===a.payload?Object(A.a)(e.sort((function(e,a){return e.name>a.name?1:-1}))):"down"===a.payload?Object(A.a)(e.sort((function(e,a){return e.name<a.name?1:-1}))):e;case"check":return Object(A.a)(e.filter((function(e){return e.age>a.payload})));default:return e}},ge=t(30),he=t.n(ge),be=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var we=function(){var e=Object(n.useState)(be),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t&&t.map((function(e){return r.a.createElement("div",{className:he.a.item,key:e._id},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(j,{onClick:function(){return l(ve(be,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(j,{onClick:function(){return l(ve(be,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(j,{onClick:function(){return l(ve(be,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ce=t(17),ke=t.n(Ce);var Ne=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(s.a)(c,2),i=o[0],u=o[1],m=Object(n.useState)(!1),p=Object(s.a)(m,2),d=p[0],E=p[1],_=function(){clearInterval(t)},f="\n    ".concat(i.getHours()<10?"0"+i.getHours():i.getHours(),":").concat(i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes(),":").concat(i.getSeconds()<10?"0"+i.getSeconds():i.getSeconds()),v="\n    ".concat(i.getMonth()+1,"/").concat(i.getDate(),"/").concat(i.getFullYear(),"\n  ");return r.a.createElement("div",{className:ke.a.wrapper},r.a.createElement("div",{className:ke.a.time,onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},f),d&&r.a.createElement("div",{className:ke.a.date},v),r.a.createElement(j,{onClick:function(){_();var e=window.setInterval((function(){u(new Date)}),1e3);l(e)}},"start"),r.a.createElement(j,{onClick:_},"stop"))};var Oe=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(Ne,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},je=t(15),ye=t(25),Se={loading:!1},xe=function(e){return{type:"IS_LOADING",loading:e}},We=t(24),Ae=Object(We.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"IS_LOADING":return Object(ye.a)(Object(ye.a)({},e),{},{loading:a.loading});default:return e}}}),Ie=Object(We.b)(Ae),He=Ie,De=function(e){return e.loading};window.store=Ie;var Pe=t(5),Me=t.n(Pe);var Te=function(){var e=Object(je.b)(),a=Object(je.c)(De).loading;return r.a.createElement("div",{className:Me.a.wrapper},r.a.createElement("hr",null),"homeworks 10",a?r.a.createElement("div",{className:Me.a.center},r.a.createElement("div",{className:Me.a.wave}),r.a.createElement("div",{className:Me.a.wave}),r.a.createElement("div",{className:Me.a.wave}),r.a.createElement("div",{className:Me.a.wave}),r.a.createElement("div",{className:Me.a.wave}),r.a.createElement("div",{className:Me.a.wave}),r.a.createElement("div",{className:Me.a.wave}),r.a.createElement("div",{className:Me.a.wave}),r.a.createElement("div",{className:Me.a.wave}),r.a.createElement("div",{className:Me.a.wave})):r.a.createElement("div",null,r.a.createElement(j,{onClick:function(){e(xe(!0)),setTimeout((function(){e(xe(!1))}),3e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Fe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Junior page"),r.a.createElement(fe,null),r.a.createElement(we,null),r.a.createElement(Oe,null),r.a.createElement(Te,null))},Ue=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"JuniorPlus page"))},Je="/pre-junior",Be="/junior",Le="/junior-plus";var Ge=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",element:r.a.createElement(m.a,{to:Je})}),r.a.createElement(m.b,{path:Je,element:r.a.createElement(se,null)}),r.a.createElement(m.b,{path:Be,element:r.a.createElement(Fe,null)}),r.a.createElement(m.b,{path:Le,element:r.a.createElement(Ue,null)}),r.a.createElement(m.b,{path:"/*",element:r.a.createElement(ue,null)})))},Xe=t(6),Ye=t.n(Xe);var ze=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{onMouseLeave:function(){return l(!1)},className:Ye.a.header},r.a.createElement("div",{className:"".concat(Ye.a.navigation," ").concat(t?Ye.a.showNavigation:Ye.a.closeNavigation)},r.a.createElement(u.b,{className:function(e){return e.isActive?Ye.a.activeLink:""},to:Je},"PreJunior"),r.a.createElement(u.b,{className:function(e){return e.isActive?Ye.a.activeLink:""},to:Be},"Junior"),r.a.createElement(u.b,{className:function(e){return e.isActive?Ye.a.activeLink:""},to:Le},"Junior +")),r.a.createElement("div",{onClick:function(){return l(!t)},className:Ye.a.menu},"Nav"))};var Ke=function(){return r.a.createElement("div",{className:Ye.a.container},r.a.createElement(u.a,null,r.a.createElement(ze,null),r.a.createElement(Ge,null)))};var qe=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("h1",{className:i.a.title},"react homeworks:"),r.a.createElement(Ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je.a,{store:He},r.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.8c96795d.chunk.js.map