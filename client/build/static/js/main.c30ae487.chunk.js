(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,a){e.exports=a(50)},25:function(e,t,a){},26:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),o=(a(25),a(26),a(4)),m=a(1),i=a(3),s=a.n(i),u=function(e){var t=e.listState;return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Action"))),t.map((function(e,t){return l.a.createElement("tbody",{key:t},l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(m.a,{to:"/pets/"+e._id},"Detail |"),l.a.createElement(m.a,{to:"/pet/"+e._id+"/edit"},"Edit"))))}))))},p=function(e){var t=e.listState;return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(m.a,{to:"/pets/new"},"Add a pet to the shelter")),l.a.createElement("h3",null,"These pets are looking for a good home"),l.a.createElement(u,{listState:t}))},E=a(6),h=a(5),f=function(e){var t=e.formState,a=e.setFormState,c=Object(n.useState)([]),r=Object(o.a)(c,2),i=r[0],u=r[1],p=function(e){a(Object(h.a)({},t,Object(E.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(m.a,{to:"/"}," Back to home")),l.a.createElement("h3",null,"Knowing a pet needing home?"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s.a.post("http://localhost:8000/api/pets",t).then((function(e){console.log(e),a({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""}),console.log(t),Object(m.c)("/")})).catch((function(e){for(var t=e.response.data.errors,a=[],n=0,l=Object.keys(t);n<l.length;n++){var c=l[n];a.push(t[c].message)}u(a)}))},className:"form-group"},i.map((function(e,t){return l.a.createElement("p",{key:t},e)})),l.a.createElement("p",null,"Name:",l.a.createElement("input",{type:"text",name:"name",onChange:p,className:"form-control"})),l.a.createElement("p",null,"Type:",l.a.createElement("input",{type:"text",name:"type",onChange:p,className:"form-control"})),l.a.createElement("p",null,"Description:",l.a.createElement("input",{type:"text",name:"description",onChange:p,className:"form-control"})),l.a.createElement("p",null,"Skill 01:",l.a.createElement("input",{type:"tet",name:"skill1",onChange:p,className:"form-control"})),l.a.createElement("p",null,"Skill 02:",l.a.createElement("input",{type:"text",name:"skill2",onChange:p,className:"form-control"})),l.a.createElement("p",null,"Skill 03:",l.a.createElement("input",{type:"text",name:"skill3",onChange:p,className:"form-control"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))},d=function(e){var t=e.removeFromDom,a=e.id,c=Object(n.useState)({}),r=Object(o.a)(c,2),i=r[0],u=r[1];Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets/"+a).then((function(e){return u(Object(h.a)({},e.data))})).catch((function(e){return console.log(e)}))}),[]);return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(m.a,{to:"/"}," Back to home")),l.a.createElement("h3",null,"Detail about: ",i.name),l.a.createElement("button",{type:"submit",className:"btn btn-danger",onClick:function(){s.a.delete("http://localhost:8000/api/pets/"+a).then((function(e){t(a),Object(m.c)("/")}))}},"Adopt ",i.name),l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h4",null,"Pet Type: ",i.type),l.a.createElement("h4",null,"Description: ",i.description),l.a.createElement("h4",null,"Skills: ",l.a.createElement("h4",null,i.skill1),l.a.createElement("h4",null,i.skill2),l.a.createElement("h4",null,i.skill3))))},b=function(e){var t=e.id,a=Object(n.useState)([]),c=Object(o.a)(a,2),r=c[0],i=c[1],u=Object(n.useState)({name:"",type:"",description:""}),p=Object(o.a)(u,2),f=p[0],d=p[1],b=function(e){d(Object(h.a)({},f,Object(E.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets/"+t).then((function(e){return d(Object(h.a)({},e.data))})).catch((function(e){return console.log(e)}))}),[]);return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(m.a,{to:"/"}," Back to home")),l.a.createElement("h3",null,"Edit ",f.name),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s.a.put("http://localhost:8000/api/pets/"+t+"/edit",f).then((function(e){console.log(e),d({name:"",type:"",description:""}),Object(m.c)("/")})).catch((function(e){for(var t=e.response.data.errors,a=[],n=0,l=Object.keys(t);n<l.length;n++){var c=l[n];a.push(t[c].message)}i(a)}))},className:"form-group"},r.map((function(e,t){return l.a.createElement("p",{key:t},e)})),l.a.createElement("p",null,"Name:",l.a.createElement("input",{type:"text",value:f.name,name:"name",onChange:b,className:"form-control"})),l.a.createElement("p",null,"Type:",l.a.createElement("input",{type:"text",value:f.type,name:"type",onChange:b,className:"form-control"})),l.a.createElement("p",null,"Description:",l.a.createElement("input",{type:"text",value:f.description,name:"description",onChange:b,className:"form-control"})),l.a.createElement("p",null,"Skill 01:",l.a.createElement("input",{type:"text",value:f.skill1,name:"skill1",onChange:b,className:"form-control"})),l.a.createElement("p",null,"Skill 02:",l.a.createElement("input",{type:"text",value:f.skill2,name:"skill2",onChange:b,className:"form-control"})),l.a.createElement("p",null,"Skill 03:",l.a.createElement("input",{type:"text",value:f.skill3,name:"skill3",onChange:b,className:"form-control"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))};var v=function(){var e=Object(n.useState)({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],E=i[1];return Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets").then((function(e){E(e.data)})).catch((function(e){return console.log("Error: ",e)}))}),[]),l.a.createElement("div",{className:"container"},l.a.createElement(m.b,null,l.a.createElement(p,{path:"/",listState:u}),l.a.createElement(f,{path:"pets/new",formState:a,setFormState:c}),l.a.createElement(d,{path:"pets/:id",removeFromDom:function(e){console.log(e),E(u.filter((function(t){return t._id!==e})))}}),l.a.createElement(b,{path:"pet/:id/edit",formState:a,setFormState:c})))};var g=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.c30ae487.chunk.js.map