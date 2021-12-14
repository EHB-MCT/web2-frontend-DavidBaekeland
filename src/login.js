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


async function showUser(e)  {
    e.preventDefault();
    console.log(e);


    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

   
    let userData = await getUser(user);
    console.log(userData._id)
    localStorage.setItem("id", userData._id)
}

window.onload = init;

//Dev II
function init()  {
    document.getElementById("login").addEventListener("submit", (e) => {showUser(e)})
}
