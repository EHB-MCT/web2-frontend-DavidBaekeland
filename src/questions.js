window.onload = async() => {
    let questions = JSON.parse(localStorage.questions);
    document.getElementById("questionForm").addEventListener("submit", async(e) => {
        e.preventDefault();
        let newQuestion = document.getElementById("question").value;
        console.log(newQuestion)
        // https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
        questions.unshift(newQuestion)
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


