(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(9),b=n.n(a),i=(n(24),n(25),n(16)),o=n(4),j=(n(30),n(7)),u=n.n(j),s=n(5),d=Object(s.b)("contact/add",(function(e,t){return{payload:{id:u()(),name:e,number:t}}})),l=Object(s.b)("contact/remove"),O=Object(s.b)("contact/find"),f=n(1);var m=function(){var e=Object(o.c)(),t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],b=Object(c.useState)(""),j=Object(i.a)(b,2),s=j[0],l=j[1],O=u.a.generate(),m=u.a.generate(),h=function(e){var t=e.currentTarget,n=t.value;switch(t.name){case"name":a(n);break;case"number":l(n);break;default:return}},x=function(){l(""),a("")};return Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(d(r,s)),x()},children:[Object(f.jsx)("label",{htmlFor:O,children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:r,id:O,required:!0,onChange:h}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{htmlFor:m,children:"Number"}),Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:s,id:m,required:!0,onChange:h}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})},h=function(){var e=Object(o.d)((function(e){return e.contacts.filter})),t=Object(o.c)();return Object(f.jsxs)("label",{children:[Object(f.jsx)("br",{}),"Find contacts by name ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"text",value:e,onChange:function(e){return t(O(e.target.value))}})]})},x=function(){var e=Object(o.d)((function(e){return e.contacts.filter})),t=Object(o.d)((function(e){return e.contacts.contacts})),n=Object(o.c)(),c=function(e,t){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}(e,t);return Object(f.jsx)("ul",{children:c.map((function(e){var t=e.name,c=e.id,r=e.number;return Object(f.jsxs)("li",{children:[t," ",r,Object(f.jsx)("button",{type:"button",onClick:function(){return n(l(c))},children:"Delete"})]},c)}))})};var p,g=Object(o.b)()((function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(m,{}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(h,{}),Object(f.jsx)(x,{})]})})),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,b=t.getTTFB;n(e),c(e),r(e),a(e),b(e)}))},C=n(11),y=n(19),k=n(3),A=Object(s.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(p={},Object(C.a)(p,d,(function(e,t){return[].concat(Object(y.a)(e),[t.payload])})),Object(C.a)(p,l,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),p)),F=Object(s.c)("",Object(C.a)({},O,(function(e,t){return t.payload}))),w=Object(k.b)({contacts:A,filter:F}),S=n(15),z=n(17),L=n.n(z),T=n(2),B={key:"contacts",storage:L.a},D=Object(k.b)({contacts:w}),J=Object(S.a)(B,D),P=Object(s.a)({reducer:J,devTools:!1,middleware:Object(s.d)({serializableCheck:{ignoredActions:[T.b,T.h,T.d,T.e,T.f,T.g]}})}),Z=Object(S.b)(P),q=n(18);b.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(o.a,{store:P,children:Object(f.jsx)(q.a,{loading:"loading",persistor:Z,children:Object(f.jsx)(g,{})})})}),document.getElementById("root")),v()}},[[42,1,2]]]);
//# sourceMappingURL=main.3fb869c7.chunk.js.map