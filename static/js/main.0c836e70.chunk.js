(this.webpackJsonptutorville=this.webpackJsonptutorville||[]).push([[0],{127:function(e,t,c){"use strict";c.r(t);var n=c(5),i=c(2),s=c.n(i),a=c(14),r=c.n(a),j=(c(87),c(88),c(146)),l=c(35),o=c(27),d="ADD_TASK",h="DELETE_TASK",b="UPDATE_ISEDITED",u="UPDATE_TASK",x=c(145);var O=function(){var e=Object(o.c)((function(e){return e.tasks})),t=Object(i.useState)(!1),c=Object(l.a)(t,2),s=c[0],a=(c[1],Object(i.useState)(0)),r=Object(l.a)(a,2),j=r[0],d=r[1],O=Object(i.useState)(""),v=Object(l.a)(O,2),p=v[0],m=v[1],g=Object(o.b)();console.log(e);var f=function(e){g({type:h,payload:e})},y=function(e){console.log(s),d(e.taskId),m(e.text),g(function(e){return{type:b,payload:e}}(e.taskId))},k=function(e){g({type:u,payload:{task:p,taskId:e}}),d(0)},T=function(e){console.log(e.target.value),m(e.target.value)};return Object(n.jsx)("div",{className:"todolist-cls",children:e.map((function(e,t){return Object(n.jsxs)("li",{children:[j==e.taskId?Object(n.jsx)("input",{value:p,onChange:T}):Object(n.jsx)("span",{children:e.text}),e&&0==e.isEdited?Object(n.jsx)(x.a,{className:"md-2 ml-4",variant:"outline-info",onClick:function(){return y(e)},children:"EDIT"}):Object(n.jsx)(x.a,{className:"md-2 ml-4",variant:"outline-info",onClick:function(){return k(e.taskId)},children:"RESUBMIT"}),Object(n.jsx)(x.a,{className:"md-2 ml-4",variant:"outline-danger",onClick:function(){return f(e.taskId)},children:"DELETE"})]},t)}))})},v=c(151),p=c(147),m=c(11);var g=function(){var e=new m.e;return Object(n.jsxs)("div",{children:[Object(n.jsxs)(v.a,{variant:"info",children:["Student Dashboard",Object(n.jsx)(x.a,{onClick:function(){e.push("/tutorville")},className:"ml-2",variant:"danger",children:"Logout"})]}),Object(n.jsx)("div",{style:{height:60}}),Object(n.jsxs)(j.a,{container:!0,style:{minheight:"100vh"},children:[Object(n.jsxs)(j.a,{item:!0,xs:12,sm:6,children:[Object(n.jsx)("h6",{children:Object(n.jsx)(p.a,{pill:!0,variant:"warning",children:"New Tasks"})}),Object(n.jsx)("div",{style:{height:10}}),Object(n.jsx)("div",{style:{height:10}}),Object(n.jsx)(O,{})]}),Object(n.jsxs)(j.a,{container:!0,item:!0,xs:12,sm:6,justify:"center",style:{padding:40},children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{container:!0,justify:"center",children:Object(n.jsx)("img",{src:"https://image.freepik.com/free-vector/confirmation-completed-notices-message-notifications-list-computer-screen_212005-398.jpg",width:600,alt:"logo"})})})]})]})]})};var f=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.b)();return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{onChange:function(e){s(e.target.value)}}),Object(n.jsx)(x.a,{className:"ml-2",onClick:function(){console.log(c),a({type:d,payload:{text:c}})},variant:"outline-primary",children:"Submit"})]})},y=c(149),k=c(148),T=c(60),I=function(){return Object(n.jsx)(T.c,{md:"6",children:Object(n.jsxs)("div",{className:"input-group md-form form-sm form-1 pl-0",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text purple lighten-3",id:"basic-text1",children:Object(n.jsx)(T.d,{className:"text-white",icon:"search"})})}),Object(n.jsx)("input",{className:"form-control my-0 py-1",type:"text",placeholder:"Search Tasks","aria-label":"Search"})]})})};var S=function(){var e=new m.e;return Object(n.jsxs)("div",{children:[Object(n.jsxs)(v.a,{variant:"info",children:["Teacher Dashboard",Object(n.jsx)(x.a,{onClick:function(){e.push("/tutorville")},className:"ml-2",variant:"danger",children:"Logout"})]}),Object(n.jsx)(I,{}),Object(n.jsx)("div",{style:{height:60}}),Object(n.jsxs)(j.a,{container:!0,style:{minheight:"100vh"},children:[Object(n.jsxs)(j.a,{item:!0,xs:12,sm:6,children:[Object(n.jsxs)("h6",{children:["Add",Object(n.jsx)(p.a,{pill:!0,variant:"warning",children:"New Tasks"})," for Students"]}),Object(n.jsx)("div",{style:{height:10}}),Object(n.jsx)(f,{}),Object(n.jsx)("div",{style:{height:10}}),Object(n.jsx)(O,{})]}),Object(n.jsxs)(j.a,{container:!0,item:!0,xs:12,sm:6,justify:"center",style:{padding:40},children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{container:!0,justify:"center",children:Object(n.jsxs)(y.a,{defaultActiveKey:"new",id:"uncontrolled-tab-example",children:[Object(n.jsx)(k.a,{eventKey:"new",title:"New",children:Object(n.jsx)(O,{})}),Object(n.jsx)(k.a,{eventKey:"inprogress",title:"Inprogress"}),Object(n.jsx)(k.a,{eventKey:"rejected",title:"Rejected",children:Object(n.jsx)(O,{})}),Object(n.jsx)(k.a,{eventKey:"deleted",title:"Deleted",children:Object(n.jsx)(O,{})})]})})})]})]})]})},w=c(152),E=c(150);var N=function(){var e=new m.e;return Object(n.jsx)("div",{children:Object(n.jsxs)(j.a,{container:!0,style:{minheight:"100vh"},children:[Object(n.jsxs)(j.a,{item:!0,xs:12,sm:6,children:[Object(n.jsx)("div",{style:{height:10}}),Object(n.jsx)("img",{src:"https://image.freepik.com/free-vector/online-courses-concept_23-2148514212.jpg",style:{width:"100%",height:"100%",objectFit:"cover"},alt:"brand"})]}),Object(n.jsxs)(j.a,{container:!0,item:!0,xs:12,sm:6,justify:"center",style:{padding:40},children:[Object(n.jsx)("div",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)(j.a,{container:!0,justify:"center",children:Object(n.jsx)("img",{src:"https://image.freepik.com/free-vector/letter-l-logo-vector_23987-173.jpg",width:300,alt:"logo"})}),Object(n.jsx)("h1",{children:"Tutorville"}),Object(n.jsx)("h6",{children:"Online Mentorship | Learn the skills and excel"}),Object(n.jsx)("div",{style:{height:20}}),Object(n.jsxs)(w.a,{children:[Object(n.jsx)(E.a,{onClick:function(){e.push("/student/dashboard-student")},color:"primary",variant:"contained",children:"Login Student"}),Object(n.jsx)("div",{style:{height:20}}),Object(n.jsx)(E.a,{onClick:function(){e.push("/teacher/dashboard-teacher")},color:"secondary",variant:"contained",children:"Login Teacher"})]})]})]})]})})};var C=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m.a,{exact:!0,path:"/tutorville",component:N}),Object(n.jsx)(m.a,{exact:!0,path:"/student/dashboard-student",component:g}),Object(n.jsx)(m.a,{exact:!0,path:"/teacher/dashboard-teacher",component:S})]})},D=c(20),A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,153)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},L=c(30),K=c(79),_=c(44),F=0,P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return F++,"".concat(e).concat(F)},B=Object(L.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var c={text:t.payload.text,isCompleted:!1,isEdited:!1,taskId:P()};return e.concat(c);case h:return e.filter((function(e){return e.taskId!==t.payload}));case b:return e.map((function(e){return e.taskId==t.payload?Object(_.a)(Object(_.a)({},e),{},{isEdited:!0}):e}));case u:return e.map((function(e){return e.taskId==t.payload.taskId?Object(_.a)(Object(_.a)({},e),{},{isEdited:!1,text:t.payload.task}):e}));default:return e}}}),M=Object(L.createStore)(B,{},Object(K.composeWithDevTools)());c(123),c(124),c(125),c(126);r.a.render(Object(n.jsx)(o.a,{store:M,children:Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(D.a,{children:Object(n.jsx)(C,{})})})}),document.getElementById("root")),A()},87:function(e,t,c){},88:function(e,t,c){}},[[127,1,2]]]);
//# sourceMappingURL=main.0c836e70.chunk.js.map