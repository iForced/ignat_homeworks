(this.webpackJsonpignathw=this.webpackJsonpignathw||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={affairs:"Affairs_affairs__2_3e5",buttons:"Affairs_buttons__72Ijl",affair:"Affairs_affair__1Mpe6",name:"Affairs_name__2EE72",priority:"Affairs_priority__1ZlDs"}},,,function(e,t,n){e.exports={container:"Greeting_container__3wYg9",valid:"Greeting_valid__1Jf1P",error:"Greeting_error__15B8b",error_text:"Greeting_error_text__2UO25",add_button:"Greeting_add_button__CyWlJ"}},,,function(e,t,n){e.exports={message:"Message_message__1a3MP",avatar:"Message_avatar__3YWWE",content:"Message_content__w_-G1",time:"Message_time__Oy6GM"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__16U4V",errorInput:"SuperInputText_errorInput__lc4mc",error:"SuperInputText_error__klimZ"}},function(e,t,n){e.exports={blue:"HW4_blue__2aBq-",column:"HW4_column__19mdy",testSpanError:"HW4_testSpanError__3ioiN"}},,,,,function(e,t,n){e.exports={default:"SuperButton_default__3W-Ey",red:"SuperButton_red__1bRVz"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2TE9N",spanClassName:"SuperCheckbox_spanClassName__p-Hb9"}},,,,function(e,t,n){e.exports={App:"App_App__aSCXT"}},,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(25),s=n.n(c),i=(n(33),n(26)),o=n.n(i),j=(n(34),n(6)),l=n(0);var u=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(j.b,{className:"nav_link",to:"/pre-junior",activeClassName:"active_link",children:"Pre Junior"}),Object(l.jsx)(j.b,{className:"nav_link",to:"/junior",activeClassName:"active_link",children:"Junior"}),Object(l.jsx)(j.b,{className:"nav_link",to:"/junior-plus",activeClassName:"active_link",children:"Junior Plus"})]})},d=n(2),b=n(13),h=n.n(b);var x=function(e){return Object(l.jsxs)("div",{className:h.a.message,children:[Object(l.jsx)("div",{className:h.a.avatar,children:Object(l.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(l.jsxs)("div",{className:h.a.content,children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsx)("p",{children:e.message}),Object(l.jsx)("div",{className:h.a.time,children:e.time})]})]})},O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Ilya (anime)",m="Alo alo alo alo alo aloaloaloalao",_="22:00";var p=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1",Object(l.jsx)(x,{avatar:O,name:f,message:m,time:_}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},v=n(5),g=n(7),C=n.n(g);var N=function(e){return Object(l.jsxs)("div",{className:C.a.affair,children:[Object(l.jsx)("div",{className:C.a.name,children:e.affair.name}),Object(l.jsxs)("div",{className:C.a.priority,children:["Priority: ",e.affair.priority]}),Object(l.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(l.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{className:C.a.affairs,children:[t,Object(l.jsxs)("div",{className:C.a.buttons,children:[Object(l.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(r.useState)(y),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(v.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):[]}(n,i);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 2",Object(l.jsx)(k,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},S=n(28),A=n(10),E=n.n(A),T=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a?E.a.error:E.a.valid;return Object(l.jsxs)("div",{className:E.a.container,children:[Object(l.jsx)("input",{value:t,onChange:n,className:s}),Object(l.jsx)("button",{className:E.a.add_button,onClick:r,children:"add"}),Object(l.jsx)("span",{children:c}),Object(l.jsx)("span",{className:E.a.error_text,children:a})]})},I=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(v.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(v.a)(o,2),u=j[0],d=j[1],b=t.length;return Object(l.jsx)(T,{name:s,setNameCallback:function(e){i(e.currentTarget.value),d("")},addUser:function(){s?(n(s),alert("Hello ".concat(s," !")),i("")):d("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f")},error:u,totalUsers:b})},P=n(43);var W=function(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(I,{users:n,addUserCallback:function(e){var t={_id:Object(P.a)(),name:e};a([].concat(Object(S.a)(n),[t]))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},J=n(8),M=n(9),G=n(15),U=n.n(G),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(U.a.error," ").concat(i||""),u="".concat(U.a.errorInput," ").concat(s||"");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(J.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:c?u:U.a.superInput},o)),c&&Object(l.jsx)("span",{className:j,children:c})]})},F=n(16),H=n.n(F),K=n(21),X=n.n(K),Y=function(e){var t=e.red,n=e.className,r=Object(M.a)(e,["red","className"]),a="".concat(t?X.a.red:X.a.default," ").concat(n);return Object(l.jsx)("button",Object(J.a)({className:a},r))},Z=n(22),q=n.n(Z),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(q.a.checkbox," ").concat(r||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(J.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},c)),a&&Object(l.jsx)("span",{className:q.a.spanClassName,children:a})]})};var V=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(v.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:H.a.column,children:[Object(l.jsx)(B,{value:n,onChangeText:a,onEnter:s,error:c,spanClassName:H.a.testSpanError}),Object(l.jsx)(B,{className:H.a.blue}),Object(l.jsx)(Y,{children:"default"}),Object(l.jsx)(Y,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(Y,{disabled:!0,children:"disabled"}),Object(l.jsx)(R,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(R,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var z=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{}),Object(l.jsx)(w,{}),Object(l.jsx)(W,{}),Object(l.jsx)(V,{})]})};var D=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var L=function(){return Object(l.jsx)("div",{children:"Junior page"})};var $=function(){return Object(l.jsx)("div",{children:"Junior Plus page"})},Q="/pre-junior",ee="/junior",te="/junior-plus";var ne=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(d.d,{children:[Object(l.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(d.a,{to:Q})}}),Object(l.jsx)(d.b,{path:Q,render:function(){return Object(l.jsx)(z,{})}}),Object(l.jsx)(d.b,{path:ee,render:function(){return Object(l.jsx)(L,{})}}),Object(l.jsx)(d.b,{path:te,render:function(){return Object(l.jsx)($,{})}}),Object(l.jsx)(d.b,{render:function(){return Object(l.jsx)(D,{})}})]})})};var re=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(ne,{})]})})};var ae=function(){return Object(l.jsxs)("div",{className:o.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(re,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(ae,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.7e46fd93.chunk.js.map