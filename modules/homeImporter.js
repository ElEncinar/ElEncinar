var data = [];
var navdata = [];

async function loadDB() {
    const db = await fetch("https://crelencinar-default-rtdb.europe-west1.firebasedatabase.app/home.json");
    const data = await db.json();
    return data;
}

async function loadNAV() {
    const db = await fetch("https://crelencinar-default-rtdb.europe-west1.firebasedatabase.app/navBar.json");
    const data = await db.json();
    return data;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        data = await loadDB();
        navdata = await loadNAV();
    } catch (e) {
        console.log("Error");
        console.log(e);
    }
    document.getElementById('logo').src = data.Logo;
    document.getElementById('upTitle').innerHTML = data.upTitle;
    document.getElementById('Title').innerHTML = data.Title;
    document.getElementById('Desc').innerHTML = data.Description;
    document.getElementById('page0').innerHTML = navdata.page0;
    document.getElementById('page1').innerHTML = navdata.page1;
    document.getElementById('page2').innerHTML = navdata.page2;
    // document.getElementById('page3').innerHTML = navdata.page3;
    document.getElementById('page4').innerHTML = navdata.page4;
    document.getElementById('logoExp').src = navdata.logo;
});

