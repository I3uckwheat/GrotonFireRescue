!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=332)}({332:function(e,t,n){"use strict";function r(e){switch(e.message.slice(0,3)){case"413":a("Image filesize too large");break;case"500":a("There has been a server error try again a few times then conatact Briggs");break;default:a(e)}}function a(e){var t=document.createElement("div");t.classList.add("modal");var n=document.createElement("div");t.appendChild(n),n.classList.add("messageBox");var r=document.createElement("p");n.appendChild(r),r.innerText=e;var a=document.createElement("button");n.appendChild(a),a.innerText="OK",a.id="ok",a.addEventListener("click",o),document.querySelector("body").appendChild(t)}function o(e){e.target.removeEventListener("click",o),e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement)}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),document.querySelector("#submit").addEventListener("click",function(e){e.target.setAttribute("disabled",!0),e.target.innerText="Updating...",(t=document.querySelectorAll("input[type=file]"),n=new FormData,t.forEach(function(e,t){n.append(e.files[0]?e.files[0].name:"No Image",t),n.append("images",e.files[0])}),new Promise(function(e,t){var r=new XMLHttpRequest;r.open("POST","/uploadImages"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(201===r.status?e(r.response):t(new Error(r.status+" "+r.statusText)))},r.send(n)})).then(function(){var e,t,n=Array.from(document.querySelectorAll(".formSection")).map(function(e){return{pageTitle:e.querySelector("input").value,content:e.querySelector("textarea").value}});e=n,(t=new XMLHttpRequest).open("POST","/"),t.setRequestHeader("Content-Type","application/json"),t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&(201===t.status?window.location="/":console.log(t.status))},t.send(JSON.stringify(e))}).catch(r);var t,n}),r("test")}});