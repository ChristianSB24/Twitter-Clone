(this["webpackJsonptweetme2-web"]=this["webpackJsonptweetme2-web"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),r=n.n(s),i=(n(14),n.p+"static/media/logo.6ce24c58.svg");n(15);function o(e,t,n,c){var a;c&&(a=JSON.stringify(c));var s=new XMLHttpRequest,r="http://localhost:8000/api".concat(t);s.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");s.open(e,r),s.setRequestHeader("Content-Type","application/json"),i&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",i)),s.onload=function(){403===s.status&&s.response&&("Authentication credentials were not provided."===s.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(s.response,s.status)},s.onerror=function(e){n({message:"The request was an error"},400)},s.send(a)}function l(e,t){var n="/tweets/feed";null!==t&&void 0!==t&&(n=t.replace("http://localhost:8000/api","")),o("GET",n,e)}function u(e,t,n){var c="/tweets/";e&&(c="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),o("GET",c,t)}var j=n(0);function d(e){var t=e.tweet,n=e.action,c=e.didPerformAction,a=t.likes?t.likes:0,s=e.className?e.className:"btn btn-primary btn-sm",r=n.display?n.display:"Action",i=function(e,t){console.log(e,t),200!==t&&201!==t||!c||c(e,t)},l="like"===n.type?"".concat(a," ").concat(r):r;return Object(j.jsx)("button",{className:s,onClick:function(e){e.preventDefault(),function(e,t,n){o("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,i)},children:l})}var b=n(8),m=n(3),f=n(2),O=n(9);function w(e){var t=e.username;return Object(j.jsx)("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)},children:e.children})}function p(e){var t=e.user,n=!0===e.includeFullName?"".concat(t.first_name," ").concat(t.last_name," "):null;return Object(j.jsxs)(a.a.Fragment,{children:[n,Object(j.jsxs)(w,{username:t.username,children:["@",t.username]})]})}function h(e){var t=e.user;return Object(j.jsx)(w,{username:t.username,children:Object(j.jsx)("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white",children:t.username[0]})})}function x(e){var t=e.tweet;return t.parent?Object(j.jsx)(v,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function v(e){var t=e.tweet,n=e.didRetweet,s=e.hideActions,r=e.isRetweet,i=e.retweeter,o=Object(c.useState)(e.tweet?e.tweet:null),l=Object(f.a)(o,2),u=l[0],b=l[1],m=e.className?e.className:"col-10 mx-auto col-md-6";m=!0===r?"".concat(m," p-2 border rounded"):m;var w=window.location.pathname.match(Object(O.a)(/([0-9]+)/,{tweetid:1})),v=w?w.groups.tweetid:-1,g="".concat(t.id)==="".concat(v),N=function(e,t){200===t?b(e):201===t&&n&&n(e)};return Object(j.jsxs)("div",{className:m,children:[!0===r&&Object(j.jsx)("div",{className:"mb-2",children:Object(j.jsxs)("span",{className:"small text-muted",children:["Retweet via ",Object(j.jsx)(p,{user:i})]})}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"",children:Object(j.jsx)(h,{user:t.user})}),Object(j.jsxs)("div",{className:"col-11",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:Object(j.jsx)(p,{includeFullName:!0,user:t.user})}),Object(j.jsx)("p",{children:t.content}),Object(j.jsx)(x,{tweet:t,retweeter:t.user})]}),Object(j.jsxs)("div",{className:"btn btn-group px-0",children:[u&&!0!==s&&Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(d,{tweet:u,didPerformAction:N,action:{type:"like",display:"Likes"}}),Object(j.jsx)(d,{tweet:u,didPerformAction:N,action:{type:"unlike",display:"Unlike"}}),Object(j.jsx)(d,{tweet:u,didPerformAction:N,action:{type:"retweet",display:"Retweet"}})]}),!0===g?null:Object(j.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})]})]})}function g(e){var t=Object(c.useState)([]),n=Object(f.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),o=Object(f.a)(i,2),l=o[0],d=o[1],b=Object(c.useState)(null),O=Object(f.a)(b,2),w=O[0],p=O[1],h=Object(c.useState)(!1),x=Object(f.a)(h,2),g=x[0],N=x[1];Object(c.useEffect)((function(){var t=Object(m.a)(e.newTweets).concat(s);t.length!==l.length&&d(t)}),[e.newTweets,l,s]),Object(c.useEffect)((function(){if(!1===g){u(e.username,(function(e,t){200===t?(p(e.next),r(e.results),N(!0)):alert("There was an error")}))}}),[s,g,N,e.username]);var y=function(e){var t=Object(m.a)(s);t.unshift(e),r(t);var n=Object(m.a)(l);n.unshift(l),d(n)};return Object(j.jsxs)(a.a.Fragment,{children:[l.map((function(e,t){return Object(j.jsx)(v,{tweet:e,didRetweet:y,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==w&&Object(j.jsx)("button",{onClick:function(t){if(t.preventDefault(),null!==w){u(e.username,(function(e,t){if(200===t){p(e.next);var n=Object(m.a)(l).concat(e.results);r(n),d(n)}else alert("There was an error")}),w)}},className:"btn btn-outline-primary",children:"Load next"})]})}function N(e){var t=Object(c.useState)([]),n=Object(f.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),o=Object(f.a)(i,2),u=o[0],d=o[1],b=Object(c.useState)(null),O=Object(f.a)(b,2),w=O[0],p=O[1],h=Object(c.useState)(!1),x=Object(f.a)(h,2),g=x[0],N=x[1];Object(c.useEffect)((function(){var t=Object(m.a)(e.newTweets).concat(s);t.length!==u.length&&d(t)}),[e.newTweets,u,s]),Object(c.useEffect)((function(){if(!1===g){l((function(e,t){200===t&&(p(e.next),r(e.results),N(!0))}))}}),[s,g,N,e.username]);var y=function(e){var t=Object(m.a)(s);t.unshift(e),r(t);var n=Object(m.a)(u);n.unshift(u),d(n)};return Object(j.jsxs)(a.a.Fragment,{children:[u.map((function(e,t){return Object(j.jsx)(v,{tweet:e,didRetweet:y,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==w&&Object(j.jsx)("button",{onClick:function(e){if(e.preventDefault(),null!==w){l((function(e,t){if(200===t){p(e.next);var n=Object(m.a)(u).concat(e.results);r(n),d(n)}}),w)}},className:"btn btn-outline-primary",children:"Load next"})]})}function y(e){var t=a.a.createRef(),n=e.didTweet,c=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again."))};return Object(j.jsx)("div",{className:e.className,children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;o("POST","/tweets/create/",c,{content:n}),t.current.value=""},children:[Object(j.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Tweet"})]})})}function T(e){var t=Object(c.useState)([]),n=Object(f.a)(t,2),a=n[0],s=n[1],r="false"!==e.canTweet;return Object(j.jsxs)("div",{className:e.className,children:[!0===r&&Object(j.jsx)(y,{didTweet:function(e){var t=Object(m.a)(a);t.unshift(e),s(t)},className:"col-12 mb-3"}),Object(j.jsx)(g,Object(b.a)({newTweets:a},e))]})}function k(e){var t=e.tweetId,n=Object(c.useState)(!1),a=Object(f.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(null),l=Object(f.a)(i,2),u=l[0],d=l[1],b=function(e,t){200===t?d(e):alert("There was an error finding your tweet.")};return Object(c.useEffect)((function(){!1===s&&(!function(e,t){o("GET","/tweets/".concat(e),t)}(t,b),r(!0))}),[t,s,r]),null===u?null:Object(j.jsx)(v,{tweet:u,className:e.className})}var S=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(j.jsxs)("p",{children:["Edit ",Object(j.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(j.jsx)("div",{children:Object(j.jsx)(T,{})}),Object(j.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},A=document.getElementById("root");A&&r.a.render(Object(j.jsx)(S,{}),A);var E=a.a.createElement,C=document.getElementById("tweetme-2");C&&r.a.render(E(T,C.dataset),C);var F=document.getElementById("tweetme-2-feed");F&&r.a.render(E((function(e){var t=Object(c.useState)([]),n=Object(f.a)(t,2),a=n[0],s=n[1],r="false"!==e.canTweet;return Object(j.jsxs)("div",{className:e.className,children:[!0===r&&Object(j.jsx)(y,{didTweet:function(e){var t=Object(m.a)(a);t.unshift(e),s(t)},className:"col-12 mb-3"}),Object(j.jsx)(N,Object(b.a)({newTweets:a},e))]})}),F.dataset),F),document.querySelectorAll(".tweetme-2-detail").forEach((function(e){r.a.render(E(k,e.dataset),e)})),R()}},[[17,1,2]]]);
//# sourceMappingURL=main.aea99343.chunk.js.map