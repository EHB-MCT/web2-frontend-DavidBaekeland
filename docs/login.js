window.onload=function(){document.getElementById("login").addEventListener("submit",(e=>{!async function(e){e.preventDefault(),console.log(e);let o={email:document.getElementById("email").value,password:document.getElementById("password").value},t=await async function(e){console.log(e);let o=await fetch("http://localhost:8080/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await o.json()}(o);console.log(t._id),localStorage.setItem("id",t._id),console.log(localStorage.id)}(e)}))};