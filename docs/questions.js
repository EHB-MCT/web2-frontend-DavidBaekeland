window.onload=()=>{let e=JSON.parse(localStorage.questions);document.getElementById("questionForm").addEventListener("submit",(t=>{t.preventDefault();let o=document.getElementById("question").value;e.push(o),console.log(e),async function(e){let t=await fetch("https://web2-backend-davidbaekeland.herokuapp.com/question",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});await t.text()}({id:localStorage.getItem("id"),setQuestions:e})}))};