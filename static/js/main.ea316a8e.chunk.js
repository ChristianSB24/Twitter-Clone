(this["webpackJsonptweetme2-web"]=this["webpackJsonptweetme2-web"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),i=(n(15),n.p+"static/media/logo.6ce24c58.svg");n(16);function o(e,t,n,c){var a;c&&(a=JSON.stringify(c));var s=new XMLHttpRequest,r="https://infinite-escarpment-77268.herokuapp.com/api".concat(t);s.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");s.open(e,r),s.setRequestHeader("Content-Type","application/json"),i&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",i)),s.onload=function(){403===s.status&&s.response&&("Authentication credentials were not provided."===s.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(s.response,s.status)},s.onerror=function(e){n({message:"The request was an error"},400)},s.send(a)}function l(e,t){var n="/tweets/feed";null!==t&&void 0!==t&&(n=t.replace("https://infinite-escarpment-77268.herokuapp.com/api","")),o("GET",n,e)}function u(e,t,n){var c="/tweets/";e&&(c="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(c=n.replace("https://infinite-escarpment-77268.herokuapp.com/api","")),o("GET",c,t)}var j=n(0);function d(e){var t=e.tweet,n=e.action,c=e.didPerformAction,a=t.likes?t.likes:0,s=e.className?e.className:"btn btn-primary btn-sm",r=n.display?n.display:"Action",i=function(e,t){console.log(e,t),200!==t&&201!==t||!c||c(e,t)},l="like"===n.type?"".concat(a," ").concat(r):r;return Object(j.jsx)("button",{className:s,onClick:function(e){e.preventDefault(),function(e,t,n){o("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,i)},children:l})}var b=n(8),f=n(3),m=n(2),O=n(10);function p(e){var t=e.username;return Object(j.jsx)("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)},children:e.children})}function w(e){var t=e.user,n=e.includeFullName,c=e.hideLink,s=!0===n?"".concat(t.first_name," ").concat(t.last_name," "):null;return Object(j.jsxs)(a.a.Fragment,{children:[s,!0===c?"@".concat(t.username):Object(j.jsxs)(p,{username:t.username,children:["@",t.username]})]})}function h(e){var t=e.user,n=e.hideLink,c=Object(j.jsx)("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white",children:t.username[0]});return!0===n?c:Object(j.jsx)(p,{username:t.username,children:c})}var x=n(9),v=n.n(x);function g(e){return Object(j.jsx)("span",{className:e.className,children:v()(e.children).format("0a")})}function N(e){var t=e.user,n=e.didFollowToggle,c=e.profileLoading,a=t&&t.is_following?"Unfollow":"Follow";a=c?"Loading...":a;return t?Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{user:t,hideLink:!0}),Object(j.jsx)("p",{children:Object(j.jsx)(w,{user:t,includeFullName:!0,hideLink:!0})}),Object(j.jsxs)("p",{children:[Object(j.jsx)(g,{children:t.follower_count})," ",1===t.follower_count?"follower":"followers"," "]}),Object(j.jsxs)("p",{children:[Object(j.jsx)(g,{children:t.following_count})," following"]}),Object(j.jsx)("p",{children:t.location}),Object(j.jsx)("p",{children:t.bio}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!c&&n(a)},children:a})]}):null}function k(e){var t=e.username,n=Object(c.useState)(!1),a=Object(m.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(null),l=Object(m.a)(i,2),u=l[0],d=l[1],b=Object(c.useState)(!1),f=Object(m.a)(b,2),O=f[0],p=f[1],w=function(e,t){200===t&&d(e)};Object(c.useEffect)((function(){!1===s&&(!function(e,t){o("GET","/profiles/".concat(e,"/"),t)}(t,w),r(!0))}),[t,s,r]);return!1===s?"Loading...":u?Object(j.jsx)(N,{user:u,didFollowToggle:function(e){!function(e,t,n){var c={action:"".concat(t&&t).toLowerCase()};o("POST","/profiles/".concat(e,"/follow"),n,c)}(t,e,(function(e,t){200===t&&d(e),p(!1)})),p(!0)},profileLoading:O}):null}function y(e){var t=e.tweet;return t.parent?Object(j.jsx)(T,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function T(e){var t=e.tweet,n=e.didRetweet,s=e.hideActions,r=e.isRetweet,i=e.retweeter,o=Object(c.useState)(e.tweet?e.tweet:null),l=Object(m.a)(o,2),u=l[0],b=l[1],f=e.className?e.className:"col-10 mx-auto col-md-6";f=!0===r?"".concat(f," p-2 border rounded"):f;var p=window.location.pathname.match(Object(O.a)(/([0-9]+)/,{tweetid:1})),x=p?p.groups.tweetid:-1,v="".concat(t.id)==="".concat(x),g=function(e,t){200===t?b(e):201===t&&n&&n(e)};return Object(j.jsxs)("div",{className:f,children:[!0===r&&Object(j.jsx)("div",{className:"mb-2",children:Object(j.jsxs)("span",{className:"small text-muted",children:["Retweet via ",Object(j.jsx)(w,{user:i})]})}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"",children:Object(j.jsx)(h,{user:t.user})}),Object(j.jsxs)("div",{className:"col-11",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:Object(j.jsx)(w,{includeFullName:!0,user:t.user})}),Object(j.jsx)("p",{children:t.content}),Object(j.jsx)(y,{tweet:t,retweeter:t.user})]}),Object(j.jsxs)("div",{className:"btn btn-group px-0",children:[u&&!0!==s&&Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(d,{tweet:u,didPerformAction:g,action:{type:"like",display:"Likes"}}),Object(j.jsx)(d,{tweet:u,didPerformAction:g,action:{type:"unlike",display:"Unlike"}}),Object(j.jsx)(d,{tweet:u,didPerformAction:g,action:{type:"retweet",display:"Retweet"}})]}),!0===v?null:Object(j.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})]})]})}function S(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),o=Object(m.a)(i,2),l=o[0],d=o[1],b=Object(c.useState)(null),O=Object(m.a)(b,2),p=O[0],w=O[1],h=Object(c.useState)(!1),x=Object(m.a)(h,2),v=x[0],g=x[1];Object(c.useEffect)((function(){var t=Object(f.a)(e.newTweets).concat(s);t.length!==l.length&&d(t)}),[e.newTweets,l,s]),Object(c.useEffect)((function(){if(!1===v){u(e.username,(function(e,t){200===t?(w(e.next),r(e.results),g(!0)):alert("There was an error")}))}}),[s,v,g,e.username]);var N=function(e){var t=Object(f.a)(s);t.unshift(e),r(t);var n=Object(f.a)(l);n.unshift(l),d(n)};return Object(j.jsxs)(a.a.Fragment,{children:[l.map((function(e,t){return Object(j.jsx)(T,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==p&&Object(j.jsx)("button",{onClick:function(t){if(t.preventDefault(),null!==p){u(e.username,(function(e,t){if(200===t){w(e.next);var n=Object(f.a)(l).concat(e.results);r(n),d(n)}else alert("There was an error")}),p)}},className:"btn btn-outline-primary",children:"Load next"})]})}function L(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),o=Object(m.a)(i,2),u=o[0],d=o[1],b=Object(c.useState)(null),O=Object(m.a)(b,2),p=O[0],w=O[1],h=Object(c.useState)(!1),x=Object(m.a)(h,2),v=x[0],g=x[1];Object(c.useEffect)((function(){var t=Object(f.a)(e.newTweets).concat(s);t.length!==u.length&&d(t)}),[e.newTweets,u,s]),Object(c.useEffect)((function(){if(!1===v){l((function(e,t){200===t&&(w(e.next),r(e.results),g(!0))}))}}),[s,v,g,e.username]);var N=function(e){var t=Object(f.a)(s);t.unshift(e),r(t);var n=Object(f.a)(u);n.unshift(u),d(n)};return Object(j.jsxs)(a.a.Fragment,{children:[u.map((function(e,t){return Object(j.jsx)(T,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==p&&Object(j.jsx)("button",{onClick:function(e){if(e.preventDefault(),null!==p){l((function(e,t){if(200===t){w(e.next);var n=Object(f.a)(u).concat(e.results);r(n),d(n)}}),p)}},className:"btn btn-outline-primary",children:"Load next"})]})}function R(e){var t=a.a.createRef(),n=e.didTweet,c=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again."))};return Object(j.jsx)("div",{className:e.className,children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;o("POST","/tweets/create/",c,{content:n}),t.current.value=""},children:[Object(j.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Tweet"})]})})}function E(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),a=n[0],s=n[1],r="false"!==e.canTweet;return Object(j.jsxs)("div",{className:e.className,children:[!0===r&&Object(j.jsx)(R,{didTweet:function(e){var t=Object(f.a)(a);t.unshift(e),s(t)},className:"col-12 mb-3"}),Object(j.jsx)(S,Object(b.a)({newTweets:a},e))]})}function A(e){var t=e.tweetId,n=Object(c.useState)(!1),a=Object(m.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(null),l=Object(m.a)(i,2),u=l[0],d=l[1],b=function(e,t){200===t?d(e):alert("There was an error finding your tweet.")};return Object(c.useEffect)((function(){!1===s&&(!function(e,t){o("GET","/tweets/".concat(e),t)}(t,b),r(!0))}),[t,s,r]),null===u?null:Object(j.jsx)(T,{tweet:u,className:e.className})}var F=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(j.jsxs)("p",{children:["Edit ",Object(j.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(j.jsx)("div",{children:Object(j.jsx)(E,{})}),Object(j.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},q=document.getElementById("root");q&&r.a.render(Object(j.jsx)(F,{}),q);var P=a.a.createElement,D=document.getElementById("tweetme-2");D&&r.a.render(P(E,D.dataset),D);var _=document.getElementById("tweetme-2-feed");_&&r.a.render(P((function(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),a=n[0],s=n[1],r="false"!==e.canTweet;return Object(j.jsxs)("div",{className:e.className,children:[!0===r&&Object(j.jsx)(R,{didTweet:function(e){var t=Object(f.a)(a);t.unshift(e),s(t)},className:"col-12 mb-3"}),Object(j.jsx)(L,Object(b.a)({newTweets:a},e))]})}),_.dataset),_),document.querySelectorAll(".tweetme-2-detail").forEach((function(e){r.a.render(P(A,e.dataset),e)})),document.querySelectorAll(".tweetme-2-profile-badge").forEach((function(e){r.a.render(P(k,e.dataset),e)})),C()}},[[18,1,2]]]);
//# sourceMappingURL=main.ea316a8e.chunk.js.map