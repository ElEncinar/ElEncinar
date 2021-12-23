var navdata = [];
var locationdata = [];

async function loadNAV() {
    const db = await fetch("https://crelencinar-default-rtdb.europe-west1.firebasedatabase.app/navBar.json");
    const data = await db.json();
    return data;
}

async function loadLOC() {
    const db = await fetch("https://crelencinar-default-rtdb.europe-west1.firebasedatabase.app/location.json");
    const data = await db.json();
    return data;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        navdata = await loadNAV();
        // const tryData = await loadLOC();
        // locationdata = Object.keys(tryData).infoData.map(element=> {
        //     return {id: element, icon: tryData.infoData[element].icon, name: tryData.infoData[element].name}
        // });
        locationdata = await loadLOC();
    } catch (e) {
        console.log("Error");
        console.log(e);
    }

    document.getElementById('page0').innerHTML = navdata.page0;
    document.getElementById('page1').innerHTML = navdata.page1;
    document.getElementById('page2').innerHTML = navdata.page2;
    // document.getElementById('page3').innerHTML = navdata.page3;
    document.getElementById('page4').innerHTML = navdata.page4;
    document.getElementById('logoExp').src = navdata.logo;

    document.getElementById('paragraph').innerHTML = locationdata.paragraph;
    document.getElementById('icon0').innerHTML = locationdata.infoData.element0.icon;
    document.getElementById('icon1').innerHTML = locationdata.infoData.element1.icon;
    document.getElementById('icon2').innerHTML = locationdata.infoData.element2.icon;
    document.getElementById('name0').innerHTML = locationdata.infoData.element0.name;
    document.getElementById('name1').innerHTML = locationdata.infoData.element1.name;
    document.getElementById('name2').innerHTML = locationdata.infoData.element2.name;
});