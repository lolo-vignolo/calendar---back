(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(9),r=n.n(c),o=(n(64),n(7)),s=n(31),i=n(6),l=n(12),u=n.n(l),j=n(19),d=n(16),b=n.n(d),m="https://user-calendar-2021.herokuapp.com/api",p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)})},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e),c=localStorage.getItem("token")||" ";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-Type":"application/json",Accept:"application/json","x-token":c},body:JSON.stringify(t)})},O="[ui] Open Modal",v="[ui] Close Modal",h="[event] Set Active",x="[event] Add New",g="[event] Clean active Event",y="[event] Update Event",N="[event] Delate Event",w="[auth] Finish Checking login state",k="[auth] Login",E="[auth] Logout",S="[event] Event Loaded",C="[event] Event logout",D=n(5),T=n(15),P=n.n(T),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{end:P()(e.end).toDate(),start:P()(e.start).toDate()})}))},I=function(e){return{type:x,payload:e}},A=function(){return{type:g}},R=function(e){return{type:y,payload:e}},L=function(e){return{type:S,payload:e}},M=function(){return{type:N}},q=function(){return{type:w}},F=function(e){return{type:k,payload:e}},G=function(){return function(e){localStorage.clear(),e({type:C}),e(V())}},V=function(){return{type:E}},H=n(2),J=function(){return Object(H.jsxs)("div",{className:"card",children:[Object(H.jsx)("div",{className:"card-header",children:"Quote"}),Object(H.jsx)("div",{className:"card-body",children:Object(H.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(H.jsx)("p",{children:"A well-known quote, contained in a blockquote element."}),Object(H.jsxs)("footer",{className:"blockquote-footer",children:["Someone famous in ",Object(H.jsx)("cite",{title:"Source Title",children:"Source Title"})]})]})})]})},U=n(11),z=n(23),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(U.a)(t,2),c=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(D.a)(Object(D.a)({},c),{},Object(z.a)({},t.name,t.value)))};return[c,s,o]},B=(n(83),function(){var e=Object(o.b)(),t=X({lEmail:"vignolo_3@hotmail.com",lPassword:"Elmejormate123#"}),n=Object(U.a)(t,2),a=n[0],c=n[1],r=a.lEmail,s=a.lPassword,i=X({rName:"Lorenzo Vignolo",rEmail:"vignolo_3@hotmail.com",rPassword:"Elmejormate123#",rRepeatPassword:"Elmejormate123#"}),l=Object(U.a)(i,2),d=l[0],m=l[1],f=d.rName,O=d.rEmail,v=d.rPassword,h=d.rRepeatPassword;return Object(H.jsx)("div",{className:"container login-container",children:Object(H.jsxs)("div",{className:"row",children:[Object(H.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(H.jsx)("h3",{children:"Ingreso"}),Object(H.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=r,a=s,function(){var e=Object(j.a)(u.a.mark((function e(t){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({name:r.name,uid:r.uid}))):b.a.fire("Error","Check your email and the Password must include one lowercase character, one uppercase character, a number, and a special character.","error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(H.jsx)("div",{className:"form-group",children:Object(H.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:r,onChange:c})}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:s,onChange:c})}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(H.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(H.jsx)("h3",{children:"Registro"}),Object(H.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==h)return b.a.fire("Error","Your Passwords must be the same.","error");var n,a,c;e((n=O,a=v,c=f,function(){var e=Object(j.a)(u.a.mark((function e(t){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({name:o.name,uid:o.uid}))):b.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(H.jsx)("div",{className:"form-group",children:Object(H.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:f,onChange:m})}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:O,onChange:m})}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword",value:v,onChange:m})}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rRepeatPassword",value:h,onChange:m})}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})}),Q=(n(84),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(H.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(H.jsx)("span",{className:"navbar-brand name",children:t}),Object(H.jsxs)("button",{onClick:function(){e(G())},className:" btn btn-outline-danger button",children:[Object(H.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(H.jsx)("span",{children:" Salir"})]})]})}),Y=n(45),K=(n(86),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),W=(n(87),function(e){var t=e.event,n=t.title,a=t.user;return Object(H.jsxs)("div",{children:[Object(H.jsxs)("span",{children:[n," "]}),Object(H.jsx)("strong",{children:a.name})]})}),Z=n(42),$=n.n(Z),ee=n(43),te=n.n(ee),ne=function(){return{type:O,playload:!0}},ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};$.a.setAppElement("#root");var ce=P()().minutes(0).seconds(0).add(1,"hours"),re=ce.clone().add(1,"hours"),oe={title:"",note:"",start:ce.toDate(),end:re.toDate()},se=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),c=Object(a.useState)(ce.toDate()),r=Object(U.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(re.toDate()),d=Object(U.a)(l,2),m=d[0],p=d[1],O=Object(a.useState)(!0),h=Object(U.a)(O,2),x=h[0],g=h[1],y=Object(a.useState)(oe),N=Object(U.a)(y,2),w=N[0],k=N[1],E=w.title,S=w.note,C=w.start,T=w.end;Object(a.useEffect)((function(){k(t||oe)}),[t,k]);var _=function(e){var t=e.target;k(Object(D.a)(Object(D.a)({},w),{},Object(z.a)({},t.name,t.value)))},L=function(){n({type:v,playload:!1}),n(A()),k(oe)};return Object(H.jsxs)($.a,{isOpen:e,onRequestClose:L,style:ae,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(H.jsxs)("h1",{children:[" ",t?"Modify Event":"New Event"," "]}),Object(H.jsx)("hr",{}),Object(H.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,c=P()(C),r=P()(T);return c.isSameOrAfter(r)?b.a.fire("Error","End Date must be bigger than Start Date","error"):E.trim().length<2?g(!1):(n(t?(a=w,function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a._id,console.log(n),e.prev=2,e.next=5,f("events/".concat(n),a,"PUT");case 5:return c=e.sent,e.next=8,c.json();case 8:(r=e.sent).ok?t(R(a)):b.a.fire("Error",r.msg,"error"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n,a){var c,r,o,s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.name,o=c.uid,t.prev=1,t.next=4,f("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.event._id,e.user={user_id:o,name:r},n(I(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(w)),g(!0),void L())},children:[Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{children:"Fecha y hora inicio"}),Object(H.jsx)(te.a,{onChange:function(e){i(e),k(Object(D.a)(Object(D.a)({},w),{},{start:e}))},value:s,className:"form-control"})]}),Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{children:"Fecha y hora fin"}),Object(H.jsx)(te.a,{onChange:function(e){p(e),k(Object(D.a)(Object(D.a)({},w),{},{end:e}))},value:m,minDate:s,className:"form-control"})]}),Object(H.jsx)("hr",{}),Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{children:"Titulo y notas"}),Object(H.jsx)("input",{type:"text",className:"form-control ".concat(!x&&"is-invalid"),placeholder:"title",name:"title",value:E,onChange:_,autoComplete:"off"}),Object(H.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("textarea",{type:"text",className:"form-control",placeholder:"notes",rows:"5",name:"note",value:S,onChange:_}),Object(H.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(H.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(H.jsx)("i",{className:"far fa-save"}),Object(H.jsx)("span",{children:" Guardar"})]})]})]})},ie=function(){var e=Object(o.b)();return Object(H.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ne())},children:Object(H.jsx)("i",{className:"fas fa-plus"})})},le=function(){var e=Object(o.b)();return Object(H.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent._id,console.log(a),e.prev=2,e.next=5,f("events/".concat(a),{},"DELETE");case 5:return c=e.sent,e.next=8,c.json();case 8:(r=e.sent).ok?t(M()):b.a.fire("Error",r.msg,"error"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(H.jsx)("i",{className:"fas fa-trash"}),Object(H.jsx)("span",{children:" Delate Event"})]})};P.a.locale("es");var ue=Object(Y.b)(P.a),je=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,c=t.activeEvent,r=Object(a.useState)(localStorage.getItem("lastView")||"month"),s=Object(U.a)(r,2),i=s[0],l=s[1],d=Object(o.c)((function(e){return e.auth})).uid;Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log(a.events),c=_(a.events),t(L(c)),console.log(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(H.jsxs)("div",{className:"calendar-screen",children:[Object(H.jsx)(Q,{}),Object(H.jsx)(Y.a,{localizer:ue,events:n,startAccessor:"start",endAccessor:"end",messages:K,eventPropGetter:function(e,t,n,a){return{style:{color:"white",backgroundColor:d===e.user._id?"#367CF7":"#465660",opacity:.8,display:"block"}}},onDoubleClickEvent:function(t){e(ne())},onSelectEvent:function(t){e({type:h,payload:t})},onView:function(e){l(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(A())},selectable:!0,view:i,components:{event:W}}),Object(H.jsx)(ie,{}),c&&Object(H.jsx)(le,{}),Object(H.jsx)(se,{})]})},de=function(e){var t=e.children;return Object(o.c)((function(e){return e.auth})).uid?t:Object(H.jsx)(i.a,{to:"/login"})},be=function(e){var t=e.children;return Object(o.c)((function(e){return e.auth})).uid?Object(H.jsx)(i.a,{to:"/"}):t},me=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).checking;return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth/renew","POST");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({name:a.name,uid:a.uid}))):t(q());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),t?Object(H.jsx)(J,{}):Object(H.jsx)(s.a,{children:Object(H.jsxs)(i.d,{children:[Object(H.jsx)(i.b,{path:"/login",element:Object(H.jsx)(be,{children:Object(H.jsx)(B,{})})}),Object(H.jsx)(i.b,{path:"/*",element:Object(H.jsx)(de,{children:Object(H.jsx)(je,{})})})]})})},pe=n(25),fe=n(59),Oe={checking:!0},ve=n(46),he={events:[],activeEvent:null},xe={modalOpen:!1},ge=Object(pe.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case v:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:t.playload});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:t.payload});case x:return Object(D.a)(Object(D.a)({},e),{},{events:[].concat(Object(ve.a)(e.events),[t.payload])});case g:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case y:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case N:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t._id!==e.activeEvent._id})),activeEvent:null});case S:return Object(D.a)(Object(D.a)({},e),{},{events:Object(ve.a)(t.payload)});case C:return Object(D.a)({},he);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(D.a)(Object(D.a)(Object(D.a)({},e),t.payload),{},{checking:!1});case w:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case E:return{checking:!1};default:return e}}}),ye="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,Ne=Object(pe.d)(ge,ye(Object(pe.a)(fe.a)));var we=function(){return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(o.a,{store:Ne,children:Object(H.jsx)(me,{})})})};r.a.render(Object(H.jsx)(we,{}),document.getElementById("root"))},64:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.cd7a2f33.chunk.js.map