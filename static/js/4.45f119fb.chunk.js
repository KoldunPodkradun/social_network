(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{225:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return l});var n=a(229),o=a(0),s=a.n(o),r=a(226),i=a.n(r),u=a(105),c=function(t){var e=t.input,a=t.meta,o=a.touched,r=a.error,u=Object(n.a)(t,["input","meta"]),c=o&&r;return s.a.createElement("div",{className:i.a.inputWrapp+" "+(c?i.a.error:"")},s.a.createElement("input",Object.assign({},e,u)),c&&s.a.createElement("span",null,r))},l=function(t,e,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};arguments.length>5&&void 0!==arguments[5]&&arguments[5];return s.a.createElement(u.a,Object.assign({placeholder:t,name:e,component:n,validate:a},o))}},226:function(t,e,a){t.exports={inputWrapp:"FormControl_inputWrapp__3CvUU",error:"FormControl_error__2dCCu"}},228:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"a",function(){return o});var n=function(t){return t?void 0:"Field is required"},o=function(t){return function(e){return e&&e.length>t?"Max length ".concat(t):void 0}}},235:function(t,e,a){"use strict";a.d(e,"a",function(){return f});var n=a(33),o=a(34),s=a(36),r=a(35),i=a(37),u=a(0),c=a.n(u),l=a(21),p=a(23),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(t,this.props):c.a.createElement(l.a,{to:"/login"})}}]),a}(c.a.Component);return Object(p.b)(d)(e)}},236:function(t,e,a){t.exports=a.p+"static/media/logo.5a0cd208.jpg"},294:function(t,e,a){},295:function(t,e,a){t.exports={profile_info:"ProfileInfo_profile_info__G3XXo",content_photo:"ProfileInfo_content_photo__1aKLB",content_info:"ProfileInfo_content_info__1hfYD"}},296:function(t,e,a){t.exports={postInput:"MyPosts_postInput__1nKQp",my_posts:"MyPosts_my_posts__3UCyo",add:"MyPosts_add__14IUk",btn:"MyPosts_btn__2HDxX"}},297:function(t,e,a){t.exports={item:"Post_item__3tmSN",avatar:"Post_avatar__1Z7VY",text:"Post_text__1l_34"}},305:function(t,e,a){"use strict";a.r(e);var n=a(33),o=a(34),s=a(36),r=a(35),i=a(37),u=a(0),c=a.n(u),l=a(23),p=a(294),d=a.n(p),f=a(295),m=a.n(f),h=a(40),b=a(236),_=a.n(b),v=function(t){function e(){var t,a;Object(n.a)(this,e);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(a=Object(s.a)(this,(t=Object(r.a)(e)).call.apply(t,[this].concat(i)))).state={editMode:!1,status:a.props.status},a.activateEditMode=function(){a.setState({editMode:!0})},a.deActivateEditMode=function(){a.setState({editMode:!1}),a.props.updateStatus(a.state.status)},a.onStatusChange=function(t){a.setState({status:t.currentTarget.value})},a}return Object(i.a)(e,t),Object(o.a)(e,[{key:"componentDidUpdate",value:function(t,e){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return c.a.createElement("div",null,!this.state.editMode&&c.a.createElement("span",{onClick:this.activateEditMode.bind(this)},this.props.status),this.state.editMode&&c.a.createElement("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deActivateEditMode.bind(this),value:this.state.status}))}}]),e}(c.a.Component),E=function(t){var e=t.profile,a=t.status,n=t.updateStatus;return e?c.a.createElement("div",{className:m.a.profile_info},c.a.createElement("img",{className:m.a.content_photo,src:null!==e.photos.large?e.photos.large:_.a}),c.a.createElement("div",{className:m.a.content_info},c.a.createElement("div",null,c.a.createElement("span",null,"Name:")," ",e.fullName),c.a.createElement(v,{status:a,updateStatus:n}),null!==e.aboutMe?c.a.createElement("div",null,c.a.createElement("span",null,"About Me:")," ",e.aboutMe):"",c.a.createElement("div",null,c.a.createElement("span",null,"Looking for a job:")," ",1==e.lookingForAJob?"Yes":"no"))):c.a.createElement(h.a,null)},g=a(50),j=a(296),O=a.n(j),y=a(297),P=a.n(y),S=function(t){return c.a.createElement("div",{className:P.a.item},c.a.createElement("img",{className:P.a.avatar,src:"https://cs8.pikabu.ru/post_img/big/2016/07/04/10/146764992311896341.jpg",alt:"#"}),c.a.createElement("p",{className:P.a.text},t.text))},M=a(105),x=a(106),k=a(228),N=a(225),C=c.a.memo(function(t){var e=t.posts.map(function(t){return c.a.createElement(S,{key:t.id,id:t.id,text:t.text,likes:t.likes})});return c.a.createElement("div",{className:O.a.my_posts},e,c.a.createElement(A,{onSubmit:function(e){t.addPost(e.newPostText)}}))}),w=Object(k.a)(10),A=Object(x.a)({form:"MyPostForm"})(function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit,className:O.a.add},c.a.createElement(M.a,{className:O.a.postInput,component:N.a,name:"newPostText",placeholder:"Enter you post",validate:[k.b,w]}),c.a.createElement("button",{className:O.a.btn},"Add"))}),I=C,U=Object(l.b)(function(t){return{posts:t.profileData.posts,newPostText:t.profileData.newPostText}},function(t){return{addPost:function(e){t(Object(g.a)(e))}}})(I),D=function(t){return c.a.createElement("div",{className:d.a.content},c.a.createElement(E,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),c.a.createElement(U,{store:t.store}))},F=a(21),T=a(235),J=a(18),W=function(t){function e(){return Object(n.a)(this,e),Object(s.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return c.a.createElement(D,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(c.a.Component);e.default=Object(J.d)(Object(l.b)(function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authUserId:t.auth.userId,isAuth:t.auth.isAuth}},{getUserProfile:g.c,getUserStatus:g.d,updateStatus:g.e}),F.e,T.a)(W)}}]);
//# sourceMappingURL=4.45f119fb.chunk.js.map