(()=>{async function e(e){console.log(e);let t=await fetch(`https://web2-backend-davidbaekeland.herokuapp.com/icons/${e}`);return await t.text()}async function t(){let t;t=localStorage.getItem("id")?{id:localStorage.getItem("id")}:{email:document.getElementById("email").value,password:document.getElementById("password").value};let o=await async function(e){console.log(e);let t=await fetch("https://web2-backend-davidbaekeland.herokuapp.com/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await t.json()}(t);console.log(o.question);let a=await e("logout");if(o.err)document.getElementById("wrongInput").innerText=o.err;else{localStorage.setItem("id",o._id),localStorage.setItem("questions",JSON.stringify(o.question)),document.getElementById("login").setAttribute("id","login2"),document.getElementById("account").setAttribute("id","accountActive");let e=`<a id="logout">${a}</a>`;document.getElementsByTagName("nav")[0].insertAdjacentHTML("beforeend",e),n(o)}}async function n(t){let n=`<a id="plusQuestion" href="questions.html">${await e("plus")}</a>`;document.getElementById("addQuestions").insertAdjacentHTML("beforeend",n),document.getElementById("logout").addEventListener("click",(e=>{e.preventDefault(),console.log("d"),o()}));let a=await e("refresh");t.question.forEach(((e,t)=>{let n="";t%2==0?(console.log(e),n=`<div class="red card">\n            <p>${e}</p>\n            ${a}\n            </div>`):n=`<div class="blue card">\n            <p>${e}</p>\n            ${a}\n            </div>`,document.getElementById("questions").insertAdjacentHTML("beforeend",n)})),document.getElementById("questions").insertAdjacentHTML("beforeend",'<a id="delete">Delete Account</a>'),document.getElementById("delete").addEventListener("click",(e=>{e.preventDefault(),async function(){await async function(e){console.log(e);let t=await fetch(`https://web2-backend-davidbaekeland.herokuapp.com/users/${e}`,{method:"DELETE"});return await t.text()}(localStorage.getItem("id")),o()}()}))}function o(){localStorage.removeItem("id"),localStorage.removeItem("questions"),location.href="login.html"}window.onload=function(){document.getElementById("newAccount").addEventListener("click",(()=>{location.href="newAccount.html"})),localStorage.getItem("id")?t():document.getElementById("login").addEventListener("submit",(e=>{e.preventDefault(),t()}))}})();