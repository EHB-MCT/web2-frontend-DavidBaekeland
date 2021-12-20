window.onload = () => {
    let questions = JSON.parse(localStorage.questions);
    document.getElementById("questionForm").addEventListener("submit", e => {
        e.preventDefault();
        let newQuestion = document.getElementById("question").value;
        questions.push(newQuestion)
        console.log(questions)


        let id =  localStorage.getItem("id");

        const question = {
            "id": id,
            "setQuestions": questions
        }

        let test = putQuestions(question)
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


