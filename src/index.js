async function getData(icon)  {
    let resp = await fetch(`https://web2-backend-davidbaekeland.herokuapp.com/icons/${icon}`);
    return await resp.text();
}


async function showPijl()  {
    let pijl = await getData("pijl");
    let html = `<a id="pijl2" href="#blue">${pijl}</a>`
    document.getElementById("pijl").insertAdjacentHTML("beforeend", html);
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