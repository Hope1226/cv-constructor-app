(this["webpackJsonpcv-constructor-app"]=this["webpackJsonpcv-constructor-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(7),c=n.n(a),r=(n(15),n(10)),o=n(8),d=n(2),l=n(3),h=n(5),u=n(4),j=(n(16),n(17),n(0)),b=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.firstName,n=e.lastName,i=e.ocupation,s=e.birthday,a=e.email;return Object(j.jsxs)("div",{className:"personalInfo-inner",children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)("b",{children:"First Name:"})," ",t]}),Object(j.jsxs)("h2",{children:[Object(j.jsx)("b",{children:"Last Name:"})," ",n]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Occupation:"})," ",i]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Date of Birth:"})," ",s]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Email:"})," ",a]})]})}}]),n}(i.Component),p=(n(19),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.institutionName,n=e.studyField,i=e.degree,s=e.graduation;return Object(j.jsxs)("div",{className:"education-info-inner",children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)("b",{children:"Institution Name:"})," ",t]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Field of Study:"})," ",n]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"The degree obtained:"})," ",i]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Graduation year:"})," ",s]})]})}}]),n}(i.Component)),m=n(9),O=n.n(m),x=(n(21),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.list;return Object(j.jsx)("div",{className:"experianceCont",children:e.map((function(e){return Object(j.jsxs)("div",{className:"experiance-inner",children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)("b",{children:"Organization name:"})," ",e.organization]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Position hold:"})," ",e.position]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Years of worked:"})," form ",e.start," to ",e.end]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Main achievements:"})," ",e.duties]})]},O()())}))})}}]),n}(i.Component)),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={firstName:"",lastName:"",birthDate:"",ocupation:"",email:"",personalFormOpen:!1,submitted:!1,institutionName:"",studyField:"",graduationDate:"",degree:"",educationFormOpen:!1,eduInfoSubmitted:!1,organization:"",poition:"",start:"",end:"",duties:"",experianceList:[],experianceFormOpen:!1,experianceSubmitted:!1},i.openTheForm=function(){i.setState({personalFormOpen:!0})},i.openEduForm=function(){i.setState({educationFormOpen:!0})},i.openExForm=function(){i.setState({experianceFormOpen:!0})},i.handleTheInput=function(e){var t=e.target.value;i.setState(Object(o.a)({},e.target.id,t))},i.submitEx=function(e){e.preventDefault(),i.setState({experianceList:[].concat(Object(r.a)(i.state.experianceList),[{organization:i.state.organization,position:i.state.poition,start:i.state.start,end:i.state.end,duties:i.state.duties}]),experianceFormOpen:!1,experianceSubmitted:!0})},i.submitInfo=function(e){e.preventDefault(),i.setState({firstName:i.state.firstName,lastName:i.state.lastName,ocupation:i.state.ocupation,email:i.state.email,personalFormOpen:!1,submitted:!0})},i.submitEduForm=function(e){e.preventDefault(),i.setState({institutionName:i.state.institutionName,studyField:i.state.studyField,graduationDate:i.state.graduationDate,degree:i.state.degree,educationFormOpen:!1,eduInfoSubmitted:!0})},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"personalInfo",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Personal information"}),Object(j.jsx)("button",{onClick:this.openTheForm,disabled:this.state.personalFormOpen,children:this.state.submitted?"Edit":"Add"})]}),Object(j.jsxs)("form",{className:this.state.personalFormOpen?"formOpen":"",children:[Object(j.jsxs)("fieldset",{className:"info",children:[Object(j.jsx)("input",{type:"text",id:"firstName",onChange:this.handleTheInput,placeholder:"First Name"}),Object(j.jsx)("input",{type:"text",id:"lastName",onChange:this.handleTheInput,placeholder:"last Name"}),Object(j.jsx)("label",{htmlFor:"birthDate",children:"Date of your birthdat"}),Object(j.jsx)("input",{type:"date",onChange:this.handleTheInput,id:"birthDate"}),Object(j.jsx)("input",{type:"text",onChange:this.handleTheInput,id:"ocupation",placeholder:"Ocupation"}),Object(j.jsx)("input",{type:"email",onChange:this.handleTheInput,id:"email",placeholder:"Email address"})]}),Object(j.jsxs)("fieldset",{className:"action",children:[Object(j.jsx)("button",{type:"submit",onClick:this.submitInfo,children:"Submit"}),Object(j.jsx)("button",{type:"button",onClick:function(){e.setState({personalFormOpen:!1})},children:"Cancel"})]})]}),this.state.submitted?Object(j.jsx)(b,{firstName:this.state.firstName,lastName:this.state.lastName,ocupation:this.state.ocupation,birthday:this.state.birthDate,email:this.state.email}):null]}),Object(j.jsxs)("div",{className:"personalInfo education",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Education"}),Object(j.jsx)("button",{onClick:this.openEduForm,children:this.state.eduInfoSubmitted?"Edit":"Add"})]}),Object(j.jsxs)("form",{className:"eduFrom ".concat(this.state.educationFormOpen?"formOpen":" "),children:[Object(j.jsxs)("fieldset",{className:"info ed-info",children:[Object(j.jsx)("input",{type:"text",onChange:this.handleTheInput,id:"institutionName",placeholder:"Enter the institution name"}),Object(j.jsx)("input",{type:"text",onChange:this.handleTheInput,id:"studyField",placeholder:"Field of study"}),Object(j.jsx)("label",{htmlFor:"degree",children:"The degree you obtained"}),Object(j.jsxs)("select",{onChange:this.handleTheInput,name:"edu-degree",id:"degree",children:[Object(j.jsx)("option",{value:"PHD",children:"Ph.D"}),Object(j.jsx)("option",{value:"MBA",children:"MBA"}),Object(j.jsx)("option",{value:"bachelor",children:"Bachelor"}),Object(j.jsx)("option",{value:"other",children:"Other"})]}),"other"===this.state.degree?Object(j.jsx)("input",{onChange:this.handleTheInput,type:"text",id:"intDegree",placeholde:"Enter the degree"}):null,Object(j.jsx)("label",{htmlFor:"graduationDate",children:"Year of Graduation"}),Object(j.jsx)("input",{onChange:this.handleTheInput,type:"date",id:"graduationDate"})]}),Object(j.jsxs)("fieldset",{className:"action",children:[Object(j.jsx)("button",{type:"submit",onClick:this.submitEduForm,children:"Submit"}),Object(j.jsx)("button",{type:"button",onClick:function(){e.setState({educationFormOpen:!1})},children:"Cancel"})]})]}),this.state.eduInfoSubmitted?Object(j.jsx)(p,{institutionName:this.state.institutionName,studyField:this.state.studyField,degree:this.state.degree,graduation:this.state.graduationDate}):null]}),Object(j.jsxs)("div",{className:"personalInfo experiance",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Professional Experience"}),Object(j.jsx)("button",{onClick:this.openExForm,children:this.state.experianceSubmitted?"Add more":"Add"})]}),Object(j.jsxs)("form",{className:"eduFrom ".concat(this.state.experianceFormOpen?"formOpen":" "),children:[Object(j.jsxs)("fieldset",{className:"info ex-info",children:[Object(j.jsx)("input",{type:"text",onChange:this.handleTheInput,id:"organization",placeholder:"Enter the Organization name"}),Object(j.jsx)("input",{type:"text",onChange:this.handleTheInput,id:"poition",placeholder:"Hold position"}),Object(j.jsx)("label",{htmlFor:"start",children:"Start"}),Object(j.jsx)("input",{type:"date",onChange:this.handleTheInput,id:"start"}),Object(j.jsx)("label",{htmlFor:"end",children:"End"}),Object(j.jsx)("input",{type:"date",onChange:this.handleTheInput,id:"end"}),Object(j.jsx)("textarea",{name:"duties",id:"duties",placeholder:"Please list your achievements"})]}),Object(j.jsxs)("fieldset",{className:"action",children:[Object(j.jsx)("button",{type:"submit",onClick:this.submitEx,children:"Add"}),Object(j.jsx)("button",{type:"button",onClick:function(){e.setState({experianceFormOpen:!1})},children:"Cancel"})]})]}),Object(j.jsx)("div",{className:"ex-container",children:this.state.experianceSubmitted?Object(j.jsx)(x,{list:this.state.experianceList}):null})]})]})}}]),n}(i.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),g()}],[[22,1,2]]]);
//# sourceMappingURL=main.7f331144.chunk.js.map