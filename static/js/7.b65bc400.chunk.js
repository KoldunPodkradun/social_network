(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{229:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,"a",function(){return a})},236:function(e,n,t){e.exports=t.p+"static/media/logo.5a0cd208.jpg"},298:function(e,n,t){e.exports={pagination__wrapp:"Pagination_pagination__wrapp__3PXy9",pagination:"Pagination_pagination__1losI",selected:"Pagination_selected__2YFZT",pagination__prev:"Pagination_pagination__prev__1VuQH",pagination__next:"Pagination_pagination__next__ibIfb"}},299:function(e,n,t){e.exports={avatar:"User_avatar__1DfwK",name:"User_name__3ofE7",follow:"User_follow__3fPx5",unfollow:"User_unfollow__1YZfm",user:"User_user__1dIWN",item_left:"User_item_left__2yHjQ",item_right:"User_item_right__KoudQ"}},304:function(e,n,t){"use strict";t.r(n);var a=t(33),r=t(34),o=t(36),i=t(35),l=t(37),s=t(0),u=t.n(s),c=t(23),g=t(78),p=t(229);function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return t}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=t(298),_=t.n(m),w=function(e){for(var n=e.totalItemsCount,t=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,l=Math.ceil(n/t),c=[],g=1;g<=l;g++)c.push(g);var p=Math.ceil(l/i),m=f(Object(s.useState)(1),2),w=m[0],d=m[1],h=(w-1)*i+1,P=w*i;return u.a.createElement("div",{className:_.a.pagination__wrapp},w>1&&u.a.createElement("div",{className:_.a.pagination__prev,onClick:function(){d(w-1)}},"Prev"),u.a.createElement("ul",{className:_.a.pagination},c.filter(function(e){return e>=h&&e<=P}).map(function(e){return u.a.createElement("li",{className:a===e&&_.a.selected,onClick:function(){r(e)}},e)})),p>w&&u.a.createElement("div",{className:_.a.pagination__next,onClick:function(){d(w+1)}},"Next"))},d=t(299),h=t.n(d),P=t(236),v=t.n(P),b=t(9),y=function(e){var n=e.user,t=e.followingInProgress,a=e.follow,r=e.unFollow;return u.a.createElement("div",{className:h.a.user},u.a.createElement("div",{className:h.a.item_left},u.a.createElement(b.b,{to:"/profile/"+n.id},u.a.createElement("img",{className:h.a.avatar,src:null!==n.photos.small?n.photos.small:v.a,alt:"avatar"})),n.followed?u.a.createElement("button",{className:h.a.unfollow,disabled:t.some(function(e){return e===n.id}),onClick:function(){r(n.id)}},"UnFollow"):u.a.createElement("button",{className:h.a.follow,disabled:t.some(function(e){return e===n.id}),onClick:function(){a(n.id)}},"Follow")),u.a.createElement("div",{className:h.a.item_right},u.a.createElement("div",{className:h.a.name},n.name)))},C=function(e){for(var n=e.currentPage,t=e.onPageChanged,a=e.totalUsersCount,r=e.pageSize,o=e.followingInProgress,i=e.follow,l=e.unFollow,s=e.users,c=(Object(p.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","followingInProgress","follow","unFollow","users"]),Math.ceil(a/r)),g=[],f=1;f<=c;f++)g.push(f);return u.a.createElement("div",null,u.a.createElement(w,{currentPage:n,onPageChanged:t,totalItemsCount:a,pageSize:r}),s.map(function(e){return u.a.createElement(y,{user:e,followingInProgress:o,follow:i,unFollow:l,key:e.id})}))},E=t(40),O=t(18),S=function(e){return e.usersPage.users},j=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.totalUsersCount},F=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},N=function(e){return e.usersPage.followingInProgress},k=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(l)))).onPageChanged=function(e){var n=t.props.pageSize;t.props.getUsers(e,n)},t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.pageSize,t=e.currentPage;this.props.getUsers(n,t)}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,this.props.isFetching?u.a.createElement(E.a,null):null,u.a.createElement(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,name:this.props.name,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress}))}}]),n}(u.a.Component);n.default=Object(O.d)(Object(c.b)(function(e){return{users:S(e),pageSize:j(e),totalUsersCount:U(e),currentPage:F(e),isFetching:I(e),followingInProgress:N(e)}},{followSuccess:g.c,unFollowSuccess:g.h,setCurrentPage:g.e,toggleFollowingProgress:g.f,getUsers:g.d,follow:g.b,unFollow:g.g}))(k)}}]);
//# sourceMappingURL=7.b65bc400.chunk.js.map