async function getUser(user)  {
    console.log(user);
    let resp = await fetch(`https://web2-backend-davidbaekeland.herokuapp.com/user`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return await resp.json();
}

async function getIcon(icon)  {
    console.log(icon);
    let resp = await fetch(`https://web2-backend-davidbaekeland.herokuapp.com/icons/${icon}`);
    return await resp.text();
}


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_loc_replace

async function showUser(e)  {
    e.preventDefault();
    console.log(e);



    // https://stackoverflow.com/questions/7077770/window-location-href-and-window-open-methods-in-javascript
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

   
   
    let userData = await getUser(user);
    console.log(userData.question);
    
    let logout = await getIcon("logout");
    // console.log(logout);

    if(!userData.err)  {
        // console.log("dqsfsqsdf" + userData)
        localStorage.setItem("id", userData._id);
        //https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
        // array als json anders kan gewoob tekst
        localStorage.setItem("questions", JSON.stringify(userData.question));
        // console.log(localStorage.id)
        document.getElementById("login").setAttribute('id','login2');
        document.getElementById("account").setAttribute('id','accountActive');
        let html = `<a id="logout" href="">${logout}</a>`
        document.getElementsByTagName("nav")[0].insertAdjacentHTML("beforeend", html);

        account(userData)

        // console.log(userData.question)
    } else  {
        document.getElementById("wrongInput").innerText = userData.err;
    }
    
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// index => array[i]
async function account(userData) {
    let plus = await getIcon("plus");
    // login omgevormd naar in docs login.js -> quesstion.js
    let plus2 = `<a id="plusQuestion" href="../questions.html">${plus}</a>`
    document.getElementById("addQuestions").insertAdjacentHTML("beforeend", plus2);

    userData.question.forEach((questions, index) => {
        // oneven plaats => even index => rood 
        let html = "";
        if(index % 2 == 0)  {
            console.log(questions);
            html = `<div class="red card">
            <p>${questions}</p>
            </div>`
        }  else  {
            html = `<div class="blue card">
            <p>${questions}</p>
            </div>`
        }
        
    document.getElementById("questions").insertAdjacentHTML("beforeend", html);
    })
}


window.onload = init;

//Dev II
function init()  {
    document.getElementById("login").addEventListener("submit", (e) => {showUser(e)})
}
