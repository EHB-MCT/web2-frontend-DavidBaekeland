async function getData(icon)  {
    let resp = await fetch(`http://localhost:8080/icons/${icon}`);
    return await resp.text();
}


async function showPijl()  {
    let pijl = await getData("pijl");
    document.getElementById("pijl").insertAdjacentHTML("beforeend", pijl);
}

async function showMoney()  {
    let money = await getData("money");
    document.getElementById("icons").insertAdjacentHTML("beforeend", money);
}

async function showBuilding()  {
    let building = await getData("building");
    document.getElementById("icons").insertAdjacentHTML("beforeend", building);
}

async function showTravel()  {
    let travel = await getData("travel");
    document.getElementById("icons").insertAdjacentHTML("beforeend", travel);
}

showPijl();
showMoney();
showBuilding();
showTravel();