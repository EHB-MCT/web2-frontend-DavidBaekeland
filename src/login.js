async function getUser(user)  {
    console.log(user);
    let resp = await fetch(`http://localhost:8080/user`, {
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
    let resp = await fetch(`http://localhost:8080/icons/${icon}`);
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
    // console.log(userData);
    
    let logout = await getIcon("logout");
    // console.log(logout);

    if(!userData.err)  {
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
    let plus2 = `<a id="logout" href="">${plus}</a>`
    document.getElementById("addQuestions").insertAdjacentHTML("beforeend", plus2);

    userData.question.forEach((question, index) => {
        // oneven plaats => even index => rood 
        let html = "";
        if(index % 2 == 0)  {
            console.log(question);
            html = `<div class="red">
            <p>${question}</p>
            </div>`
        }  else  {
            html = `<div class="blue">
            <p>${question}</p>
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
