async function getData()  {
    let resp = await fetch("http://localhost:8080/icons/pijl");
    return await resp.text();
}


async function showPijl()  {
    let pijl = await getData();
    document.getElementById("test").insertAdjacentHTML("beforeend", pijl);
}

showPijl();