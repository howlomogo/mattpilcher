(this["webpackJsonpredux-prac1"]=this["webpackJsonpredux-prac1"]||[]).push([[0],{32:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),l=a.n(s),o=a(10),i=a(4),c=a(5),u=a(7),d=a(6),m=a(52),p=a(53);function h(e){return function(t){t({type:"USER_DELETE",payload:{userId:e}}),t({type:"LOG_OUT"})}}function f(e,t,a,n){return{type:"USER_UPDATE",payload:{id:e,newDetails:{age:a,fullname:t,home:n}}}}function g(e,t,a){return{type:"HANDLE_FRIEND_REQUEST",payload:{userToAccept:e,userAccepting:t,isAccepted:a}}}var v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"A very basic social networking site, using game of thrones characters"),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,"You can log in as any of the characters or create your own users, search for users"),r.a.createElement("li",null,"You can Add friends with one characters and log in as the added person to add that friend"),r.a.createElement("li",null,"You can comment on walls, delete friends and remove comments you have added"),r.a.createElement("li",null,'All data is stored to local storage and can be reset with the "clear Storage" button to start again'),r.a.createElement("li",null,"List if friend already added or request already sent")))}}]),a}(n.Component),b=a(51),E=a(20),y=a(31);function N(e,t){return e.find((function(e){return e.id===Number(t)}))}var O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=N(this.props.list,this.props.activeUser.userId),a=[];return void 0!==t&&(a=t.friendreq.map((function(t){var a=N(e.props.list,t);return r.a.createElement("div",{className:"text-center",key:t},r.a.createElement(b.a,{className:"mb-2 d-block",to:"".concat("/sites/game-of-thrones-social","/profile/").concat(a.id)},r.a.createElement("img",{src:a.image,className:"nav-profile-img mr-1"}),r.a.createElement("span",{className:"d-inline-block"},a.fullname)),r.a.createElement("button",{onClick:function(){return e.props.dispatch(g(t,e.props.activeUser.userId,!0))},className:"btn btn-success btn-sm mr-2"},"Accept"),r.a.createElement("button",{onClick:function(){return e.props.dispatch(g(t,e.props.activeUser.userId,!1))},className:"btn btn-danger btn-sm"},"Nope"),r.a.createElement("hr",null))}))),r.a.createElement("nav",{className:"mb-4 navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(b.a,{to:"".concat("/sites/game-of-thrones-social","/"),className:"navbar-brand"},"Game of Social Networking"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(b.a,{to:"".concat("/sites/game-of-thrones-social","/about"),className:"nav-item nav-link mr-2"},"About"),r.a.createElement(b.a,{to:"".concat("/sites/game-of-thrones-social","/"),className:"nav-item nav-link mr-2"},"List Users"),this.props.activeUser.userId&&r.a.createElement(b.a,{className:"nav-link nav-item",to:"".concat("/sites/game-of-thrones-social","/profile/").concat(this.props.activeUser.userId)},r.a.createElement("div",{className:"mr-1 d-inline-block",style:{verticalAlign:"middle",backgroundImage:"url(".concat(t.image,")"),borderRadius:"50%",backgroundSize:"cover",backgroundPosition:"center top",paddingTop:"25px",width:"25px"}}),r.a.createElement("span",null,t.username))),r.a.createElement("div",{className:"navbar-nav ml-auto"},this.props.activeUser.loggedIn&&r.a.createElement("div",{className:"navbar-item mr-2"},r.a.createElement(y.a,{trigger:"click",placement:"bottom",overlay:r.a.createElement(E.a,{id:"popover-basic"},r.a.createElement(E.a.Title,{as:"h3"},"Friend Requests"),r.a.createElement(E.a.Content,null,a.length>0?r.a.createElement(r.a.Fragment,null,a):r.a.createElement(r.a.Fragment,null,"No new users have added you :-(")))},r.a.createElement("div",null,r.a.createElement("i",{type:"button",className:"fa fa-users mt-2"}),a.length>0&&r.a.createElement("div",{className:"ml-1 badge badge-danger"},a.length)))),this.props.activeUser.loggedIn?r.a.createElement("div",{className:"nav-item"},r.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.props.dispatch({type:"LOG_OUT"})}},"Log Out")):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{to:"".concat("/sites/game-of-thrones-social","/login"),className:"nav-item nav-link",href:"#"},"Log In"),r.a.createElement(b.a,{to:"".concat("/sites/game-of-thrones-social","/signup"),className:"nav-item nav-link",href:"#"},"Sign Up")))))}}]),a}(n.Component),I=Object(o.b)((function(e){return{activeUser:e.activeUser,list:e.users.list}}))(O),k=a(8);var j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).quickLogin=n.quickLogin.bind(Object(k.a)(n)),n}return Object(c.a)(a,[{key:"quickLogin",value:function(){var e,t;this.props.dispatch({type:"LOG_OUT"}),this.props.dispatch((e=this.props.user.id,t=this.props.list,{type:"QUICK_LOG_IN",payload:{id:e,list:t}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{style:{borderRadius:"50%",backgroundImage:"url(".concat(this.props.user.image,")"),backgroundSize:"cover",backgroundPosition:"center top",height:"160px",width:"160px"},className:"d-inline-block mr-4"}),r.a.createElement("div",{style:{verticalAlign:"top"},className:"d-inline-block"},r.a.createElement("h5",{className:"d-block"},"Name: ",this.props.user.fullname),r.a.createElement("h5",{className:"d-block"},"Username: ",this.props.user.username))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(b.a,{to:"".concat("/sites/game-of-thrones-social","/profile/").concat(this.props.user.id)},r.a.createElement("button",{className:"btn btn-primary u-inline-block mr-2 mb-2"},"View User Profile")),this.props.activeUser.loggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-success d-inline-block mb-2",onClick:function(){return e.props.dispatch((t=e.props.user.id,a=e.props.activeUser.userId,{type:"SEND_FRIEND_REQUEST",payload:{userIdToSendReq:t,activeUserId:a}}));var t,a}},"Add Friend"),r.a.createElement("p",{className:"small"},"(You will need to log into this users account to accept the friend request to be friends)")),r.a.createElement("button",{className:"btn btn-secondary mb-1 d-block",onClick:function(){return e.quickLogin()}},"Quick log in as this user"),r.a.createElement("p",{className:"small"},"(Will be logged out of anyone currently logged in)"))),r.a.createElement("div",null,r.a.createElement("hr",null)))}}]),a}(n.Component),w=Object(o.b)((function(e){return{activeUser:e.activeUser,list:e.users.list}}))(j),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInputChange=n.handleInputChange.bind(Object(k.a)(n)),n.state={searchTerm:"",filteredList:n.props.list},n}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){var t=this.props.list;t=t.filter((function(t){return t.fullname.toLowerCase().includes(e.target.value.toLowerCase())||t.username.toLowerCase().includes(e.target.value.toLowerCase())})),this.setState({filteredList:t,searchTerm:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.filteredList.map((function(t){return r.a.createElement(w,{key:t.id,user:t,userUpdate:e.props.userUpdate})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",null,"User List")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("label",null,"Search For User:"),r.a.createElement("input",{value:this.state.searchTerm,onChange:this.handleInputChange,className:"form-control",type:"text"})))),r.a.createElement("hr",null),r.a.createElement("div",null,t))}}]),a}(n.Component),U=a(16);var S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={username:"",password:"",fullname:"",age:""},e.handleInputChange=e.handleInputChange.bind(Object(k.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(k.a)(e)),e}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.dispatch({type:"USER_ADD",payload:{username:this.state.username,password:this.state.password,fullname:this.state.fullname,age:this.state.age,friends:[],friendreq:[],image:"http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",home:"Earth"}}),this.setState({username:"",password:"",fullname:"",age:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Create A New User"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{name:"username",value:this.state.username,onChange:this.handleInputChange,className:"form-control",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",value:this.state.password,onChange:this.handleInputChange,className:"form-control",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fullname"),r.a.createElement("input",{name:"fullname",value:this.state.fullname,onChange:this.handleInputChange,className:"form-control",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Age"),r.a.createElement("input",{name:"age",value:this.state.age,onChange:this.handleInputChange,className:"form-control",type:"text"})),r.a.createElement("input",{type:"submit",value:"Sign Up",className:"btn btn-success"})))}}]),a}(n.Component),T=Object(o.b)((function(e){return{list:e.users.list}}))(S),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={username:"",password:""},e.handleInputChange=e.handleInputChange.bind(Object(k.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(k.a)(e)),e}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t,a,n;e.preventDefault(),this.props.dispatch((t=this.state.username,a=this.state.password,n=this.props.list,{type:"LOG_IN",payload:{username:t,password:a,list:n}})),this.setState({username:"",password:""})}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.loggedIn?r.a.createElement("h3",null,"Already Logged In"):r.a.createElement("div",null,r.a.createElement("h4",null,"Log In"),r.a.createElement("hr",null),r.a.createElement("form",{className:"form-inline",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{name:"username",value:this.state.username,onChange:this.handleInputChange,className:"form-control",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",value:this.state.password,onChange:this.handleInputChange,className:"form-control",type:"text"})),r.a.createElement("input",{type:"submit",value:"Log In",className:"btn btn-success"})),r.a.createElement("p",{className:"small d-block mt-1 font-italic"},"(Note: ALL existing user passwords are 'password')"),r.a.createElement("hr",null)))}}]),a}(n.Component);var x=Object(o.b)((function(e){return{list:e.users.list,loggedIn:e.activeUser.loggedIn}}))(L),D=a(9);var _=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).logstuff=e.logstuff.bind(Object(k.a)(e)),e}return Object(c.a)(a,[{key:"logstuff",value:function(){console.log(this.props)}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.props.userProfile.friends.length;a++)for(var n=0;n<this.props.list.length;n++)this.props.userProfile.friends[a]===this.props.list[n].id&&t.push(this.props.list[n]);var s=t.map((function(t){return r.a.createElement("div",{style:{width:"180px"},key:t.id,className:"card d-inline-block mr-3 mb-3"},r.a.createElement(b.a,{to:"".concat("/sites/game-of-thrones-social","/profile/").concat(t.id)},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t.image,")"),backgroundSize:"cover",backgroundPosition:"center top",paddingTop:"100%",width:"100%"},className:"card-img-top"}),r.a.createElement("div",{className:"p-2"},r.a.createElement("h6",{className:"card-title mb-0"},t.fullname))),e.props.activeUserProfile&&r.a.createElement("button",{onClick:function(){return e.props.dispatch((a=t.id,n=e.props.userProfile.id,{type:"REMOVE_FRIEND",payload:{user1:a,user2:n}}));var a,n},className:"btn btn-danger profile-friend--delete"},"Delete Friend"))}));return r.a.createElement("div",null,r.a.createElement("h4",{onClick:this.logstuff},"Friends"),s)}}]),a}(n.Component),A=Object(o.b)((function(e){return{list:e.users.list}}))(_);var P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleInputChange=e.handleInputChange.bind(Object(k.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(k.a)(e)),e.state={showInput:!0,commentText:""},e}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){this.setState({commentText:e.target.value})}},{key:"handleSubmit",value:function(e){var t,a,n;e.preventDefault(),this.props.dispatch((t=this.props.userProfile.id,a=this.props.activeUser.userId,n=this.state.commentText,{type:"ADD_COMMENT",payload:{profileId:t,posterId:a,comment:n}})),this.setState({commentText:""})}},{key:"render",value:function(){var e,t,a=this,n=!1;void 0!==this.props.activeUser.userId&&(e=this.props.userProfile.id,t=this.props.activeUser.userId,n=!!this.props.list.find((function(t){return t.id===Number(e)})).friends.find((function(e){return e===Number(t)})));var s={},l=[];void 0!==(s=this.props.comments.find((function(e){return e.user===Number(a.props.userProfile.id)})))&&(l=s.posts.map((function(e){var t=N(a.props.list,e.poster),n=!1;return a.props.activeUser.userId!==a.props.userProfile.id&&a.props.activeUser.userId!==e.poster||(n=!0),r.a.createElement("div",{key:e.id,lass:"container-fluid"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-12 mt-3"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-horizontal"},r.a.createElement("div",{class:"comment-img-wrapper"},r.a.createElement("div",{style:{backgroundImage:void 0!==t?"url(".concat(t.image,")"):"url(https://www.festivalclaca.cat/imgfv/b/72-722963_circular-question-mark-button-question-mark-icon-white.png)",backgroundSize:"cover",backgroundPosition:"center top",paddingTop:"100%",width:"100%",borderTopLeftRadius:"0.25rem",borderBottomLeftRadius:"0.25rem"}})),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title text-muted"},"Posted By:\xa0",void 0!==t?t.fullname:"User Deleted"),r.a.createElement("p",{class:"card-text"},e.post),!0===n&&r.a.createElement("button",{onClick:function(){return a.props.dispatch({type:"DELETE_COMMENT",payload:{commentId:e.id}})},className:"btn btn-danger"},"Delete Comment")))))))})));var o=null;return o=void 0===this.props.activeUser.userId?r.a.createElement("h4",null,"Sign in to add a comment"):n||this.props.activeUser.userId===this.props.userProfile.id?r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("textarea",{value:this.state.commentText,onChange:this.handleInputChange,className:"comments-add-textarea form-control mb-1"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary u-inline-block mr-2"},"Add Comment")):r.a.createElement("h5",null,"You need to be friends to add a comment"),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",null,"Comments")),r.a.createElement("div",{className:"col-md-6"},o)),r.a.createElement("hr",null),l.length>0?l.reverse():r.a.createElement("h4",null,"No Comments"))}}]),a}(n.Component),F=Object(o.b)((function(e){return{list:e.users.list,comments:e.comments,activeUser:e.activeUser}}))(P);var q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this);var r=N(e.list,e.match.params.id);return n.state={inputValues:{name:r.fullname,age:r.age,home:r.home}},n.handleFormChange=n.handleFormChange.bind(Object(k.a)(n)),n}return Object(c.a)(a,[{key:"handleFormChange",value:function(e){this.setState({inputValues:Object(D.a)(Object(D.a)({},this.state.inputValues),{},Object(U.a)({},e.target.id,"age"===e.target.id?Number(e.target.value):e.target.value))})}},{key:"render",value:function(){var e=this,t=N(this.props.list,this.props.match.params.id),a=void 0!==t,n=!1;return a&&(n=t.id===this.props.activeUser.userId),r.a.createElement("div",null,a?r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t.image,")"),backgroundSize:"cover",backgroundPosition:"center top",paddingTop:"100%",width:"100%"}}),n&&r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-danger btn-block u-inline-block mr-2",style:{borderTopLeftRadius:"0px",borderTopRightRadius:"0px"},onClick:function(){return e.props.dispatch(h(e.props.activeUser.userId))}},"Delete Your (Whole) Profile"))),r.a.createElement("div",{className:"col-md-7"},this.props.activeUser.isEditingProfile?r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nameInput"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.inputValues.name,onChange:this.handleFormChange,placeholder:"Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nameInput"},"Age"),r.a.createElement("input",{type:"text",className:"form-control",id:"age",value:this.state.inputValues.age,onChange:this.handleFormChange,placeholder:"Age"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nameInput"},"Home"),r.a.createElement("input",{type:"text",className:"form-control",id:"home",value:this.state.inputValues.home,onChange:this.handleFormChange,placeholder:"Home"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary my-1",onClick:function(t){t.preventDefault(),e.props.dispatch(f(e.props.activeUser.userId,e.state.inputValues.name,e.state.inputValues.age,e.state.inputValues.home)),e.props.dispatch({type:"TOGGLE_PROFILE_EDITING"})}},"Update Details")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Name: ",t.fullname),r.a.createElement("h5",null,"Age: ",t.age),r.a.createElement("h5",null,"Home: ",t.home)),r.a.createElement("hr",null),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-primary u-inline-block",onClick:function(){return e.props.dispatch({type:"TOGGLE_PROFILE_EDITING"})}},this.props.activeUser.isEditingProfile?r.a.createElement("span",null,"Cancel Editing"):r.a.createElement("span",null,"Edit Profile")),r.a.createElement("hr",null)),r.a.createElement(A,{userProfile:t,activeUserProfile:n}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(F,{userProfile:t})))):r.a.createElement("h1",null,"No User Found"))}}]),a}(n.Component),R=Object(o.b)((function(e){return{list:e.users.list,activeUser:e.activeUser}}))(q),M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"clearStorage",value:function(){localStorage.removeItem("socialReduxState")}},{key:"showProps",value:function(){console.log(this.props.props)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("button",{className:"btn btn-primary mr-2",onClick:this.showProps.bind(this)},"Show Props"),r.a.createElement("button",{className:"btn btn-danger mr-2",onClick:this.clearStorage.bind(this)},"Clear Local Storage to restart app data"),r.a.createElement("hr",null))}}]),a}(n.Component);a(42);var G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"userUpdate",value:function(e,t,a){this.props.dispatch(f(e,t,a))}},{key:"userDelete",value:function(e){this.props.dispatch(h(e))}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{exact:!0,path:"".concat("/sites/game-of-thrones-social","/about"),component:v}),r.a.createElement(p.a,{path:"".concat("/sites/game-of-thrones-social","/signup"),component:T}),r.a.createElement(p.a,{path:"".concat("/sites/game-of-thrones-social","/login"),component:x}),r.a.createElement(p.a,{exact:!0,path:"".concat("/sites/game-of-thrones-social","/"),component:function(){return r.a.createElement(C,{list:e.props.list,userUpdate:e.userUpdate.bind(e),userDelete:e.userDelete.bind(e)})}}),r.a.createElement(p.a,{path:"".concat("/sites/game-of-thrones-social","/profile/:id"),component:R}),r.a.createElement(M,{props:this.props}))))}}]),a}(n.Component),W=Object(o.b)((function(e){return{router:e.router,activeUser:e.activeUser,list:e.users.list,comments:e.comments}}))(G),V=a(17),H=a(30),Y=a(18);var z=Object(V.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{list:[{id:1,username:"nstark",password:"password",fullname:"Ned Stark",age:40,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/3/34/Eddard_Stark.jpg/revision/latest/top-crop/width/360/height/360?cb=20190701140812",friends:[3,4],friendreq:[],home:"Winterfell"},{id:2,username:"thehound",password:"password",fullname:"Sandor Clegane",age:38,image:"https://upload.wikimedia.org/wikipedia/en/5/59/The_Hound_in_%27The_Children%27.jpg",friends:[3,4],friendreq:[],home:"Clegane's Keep"},{id:3,username:"jonsnow",password:"password",fullname:"Jon Snow",age:25,image:"https://www.thesun.co.uk/wp-content/uploads/2017/05/jon-snow-and-the-nights-watch-e1494021230137.jpg?strip=all&w=960",friends:[1,2,4,8,9],friendreq:[],home:"Winterfell"},{id:4,username:"astark",password:"password",fullname:"Arya Stark",age:17,image:"http://img.wennermedia.com/920-width/rehost2f20162f92f132-14e00cfc-8e11-467f-90b2-cf60f7461f9a.jpg",friends:[1,2,3,9],friendreq:[],home:"Winterfell"},{id:5,username:"clannister",password:"password",fullname:"Cersei Lannister",age:37,image:"https://i.pinimg.com/originals/e7/41/66/e74166adb8d99e0002fd0ee805c987c6.jpg",friends:[7],friendreq:[6],home:"Kings Landing"},{id:6,username:"littlefinger",password:"password",fullname:"Petyr Baelish",age:40,image:"https://typeset-beta.imgix.net/2016/5/3/littlefinger-helen-sloan-hbo-f51b470f-8cfa-4b20-9055-e102c7df85de.jpeg?w=800&h=800&auto=format&fm=jpg&q=70&fit=crop&crop=faces",friends:[],friendreq:[],home:"The Vale"},{id:7,username:"jdog",password:"password",fullname:"Joffrey Baratheon",age:17,image:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-game-of-thrones-jack-gleeson.jpg",friends:[5],friendreq:[],home:"Kings Landing"},{id:8,username:"dragongirl",password:"password",fullname:"Daenerys Targaryen",age:23,image:"https://meanjin.com.au/wp-content/uploads/2019/05/Screen-Shot-2019-05-15-at-12.41.06-pm.png",friends:[3],friendreq:[],home:"Dragonstone"},{id:9,username:"xcercisucksx",password:"password",fullname:"Tyrion Lannister",age:35,image:"https://media.gq.com/photos/599eeb4460e09b56c787029d/master/pass/tyrion_tout-2.jpg",friends:[4,3],friendreq:[],home:"Kings Landing"}]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_ADD":var a=Math.max.apply(Math,e.list.map((function(e){return e.id}))),n=Object.assign(t.payload,{id:a+1});return Object(D.a)(Object(D.a)({},e),{},{list:[].concat(Object(Y.a)(e.list),[n])});case"USER_DELETE":var r=e.list,s=r.reduce((function(e,a){var n=a;if(a.id!==t.payload.userId){var r=a.friendreq,s=r.indexOf(t.payload.userId);s>-1&&r.splice(s,1),n.friendreq=r,e.push(n)}return e}),[]);return console.log("uul",s),{list:s};case"USER_UPDATE":var l=e.list,o=l.reduce((function(e,a){return a.id===t.payload.id?e.push(Object(D.a)(Object(D.a)({},a),t.payload.newDetails)):e.push(a),e}),[]);return Object(D.a)(Object(D.a)({},e),{},{list:o});case"SEND_FRIEND_REQUEST":var i=function(e){return e===t.payload.activeUserId},c=function(e){return e===t.payload.activeUserId},u=Object(Y.a)(e.list),d=u.find((function(e){return e.id===t.payload.userIdToSendReq}));return d.id!==t.payload.activeUserId?d.friendreq.some(i)?console.log("friend req already sent"):d.friends.some(c)?console.log("Already friends"):d.friendreq=d.friendreq.concat(t.payload.activeUserId):console.log("Cant Add Yourself as a friend"),Object(D.a)(Object(D.a)({},e),{},{list:u});case"HANDLE_FRIEND_REQUEST":var m=Object(Y.a)(e.list),p=m.find((function(e){return e.id===t.payload.userAccepting})),h=m.find((function(e){return e.id===t.payload.userToAccept}));t.payload.isAccepted&&(p.friends=p.friends.concat(t.payload.userToAccept),h.friends=h.friends.concat(t.payload.userAccepting));var f=p.friendreq.indexOf(t.payload.userToAccept);-1!==f&&p.friendreq.splice(f,1);var g=h.friendreq.indexOf(t.payload.userAccepting);return-1!==g&&h.friendreq.splice(g,1),Object(D.a)(Object(D.a)({},e),{},{list:m});case"REMOVE_FRIEND":var v=Object(Y.a)(e.list),b=v.find((function(e){return e.id===t.payload.user1})),E=v.find((function(e){return e.id===t.payload.user2})),y=b.friends.indexOf(t.payload.user2);-1!==y&&b.friends.splice(y,1);var N=E.friends.indexOf(t.payload.user1);return-1!==N&&E.friends.splice(N,1),Object(D.a)(Object(D.a)({},e),{},{list:v})}return e},activeUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedIn:!1,userId:void 0,isEditingProfile:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":var a=t.payload.list.find((function(e){return e.username===t.payload.username&&e.password===t.payload.password}));return void 0===a?{loggedIn:!1,userId:void 0}:{loggedIn:!0,userId:a.id};case"QUICK_LOG_IN":var n=t.payload.list.find((function(e){return e.id===t.payload.id}));return void 0===n?{loggedIn:!1,userId:void 0}:{loggedIn:!0,userId:n.id};case"LOG_OUT":return{loggedIn:!1,userId:void 0,isEditingProfile:!1};case"TOGGLE_PROFILE_EDITING":return Object(D.a)(Object(D.a)({},e),{},{isEditingProfile:!e.isEditingProfile})}return e},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{user:4,posts:[{id:1e3,poster:3,post:"The Dire Wolf Is The Sigil Of Your House. They Were Meant To Have Them."},{id:999,poster:3,post:"First Lesson, Stick 'Em With The Pointy End."},{id:998,poster:4,post:"Finally I've arrived at Braavos!"}]},{user:1,posts:[{id:997,poster:4,post:"Tell them the North remembers."}]},{user:2,posts:[{id:996,poster:3,post:"We Can't Defend The North If Only Half The Population Is Fighting."},{id:995,poster:3,post:"I Swore A Vow... If I Don't Take My Own Words Seriously, What Sort Of Lord Of Winterfell Would I Be?"},{id:994,poster:4,post:"Your on my list!!!"}]},{user:5,posts:[{id:993,poster:7,post:"So you agree... The Starks are enemies?"},{id:992,poster:7,post:"I am the king! I will punish you."}]},{user:7,posts:[{id:991,poster:5,post:"Everyone Who Isn't Us Is An Enemy."}]},{user:3,posts:[{id:990,poster:9,post:"Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you."}]}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENT":var a=e.find((function(e){return e.user===t.payload.profileId})),n={};void 0===a?((n={user:t.payload.profileId,posts:[]}).posts=[],n.posts=n.posts.concat({id:Math.floor(1e6*Math.random()+1),poster:t.payload.posterId,post:t.payload.comment})):(n=Object.assign({},a)).posts=a.posts.concat({id:Math.floor(1e6*Math.random()+1),poster:t.payload.posterId,post:t.payload.comment});var r=e.filter((function(e){return e.user!==t.payload.profileId}));return r=r.concat(n);case"DELETE_COMMENT":var s=e,l=s.reduce((function(e,a){var n=a;return n.posts=a.posts.filter((function(e){return e.id!==t.payload.commentId})),e.push(n),e}),[]);return l}return e}}),B=function(){try{var e=localStorage.getItem("socialReduxState");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Q=Object(V.d)(z,B,Object(V.a)(H.a));Q.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("socialReduxState",t)}catch(a){console.log("Error has occurred: ",a)}}(Q.getState())}));var J=Q;l.a.render(r.a.createElement(o.a,{store:J},r.a.createElement(W,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.85223f9b.chunk.js.map