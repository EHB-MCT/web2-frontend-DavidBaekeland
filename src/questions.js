window.onload = async() => {
    let questions = JSON.parse(localStorage.questions);
    document.getElementById("questionForm").addEventListener("submit", async(e) => {
        e.preventDefault();
        let newQuestion = document.getElementById("question").value;
        console.log(newQuestion)
        questions.push(newQuestion)
        console.log(questions)


        let id =  localStorage.getItem("id");

        const question = {
            "id": id,
            "setQuestions": questions
        }

        let test = await putQuestions(question)

        // https://www.codegrepper.com/code-examples/javascript/forward+to+new+page+onclick+js
        location.href = "assets/login.html";
    })
    
    //console.log(questions[2]);
    
    
    
    async function putQuestions(question)  {
        let resp = await fetch(`https://web2-backend-davidbaekeland.herokuapp.com/question`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(question)
        });
        return await resp.text();
    }
}


