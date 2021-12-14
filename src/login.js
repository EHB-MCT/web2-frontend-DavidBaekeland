async function getUser(user)  {
    console.log(user.email);
    let resp = await fetch(`http://localhost:8080/user`, {
        method: "post",
        body: user
    });
    return await resp.text();
}


async function showUser(e)  {
    e.preventDefault();
    console.log(e);


    let user = JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    })

   
    console.log(user)
    let userData = await getUser(user);
    console.log(userData)
}

window.onload = init;

//Dev II
function init()  {
    document.getElementById("login").addEventListener("submit", (e) => {showUser(e)})
}
