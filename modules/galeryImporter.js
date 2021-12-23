var galerydata = [];
var galerydataII = [];
var navdata = [];

async function load(urlname) {
    const db = await fetch(urlname);
    const data = await db.json();
    return data;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        var tryData = await load("https://crelencinar-default-rtdb.europe-west1.firebasedatabase.app/Galery.json");
        galerydata = Object.keys(tryData).map(element => {
            return {id: element, Description: tryData[element].Description, Picture: tryData[element].Picture}
        });
        tryData = await load("https://crelencinar-default-rtdb.europe-west1.firebasedatabase.app/InnGalery.json");
        galerydataII = Object.keys(tryData).map(element => {
            return {id: element, Description: tryData[element].Description, Picture: tryData[element].Picture}
        });
        navdata = await load("https://crelencinar-default-rtdb.europe-west1.firebasedatabase.app/navBar.json");
    } catch (e) {
        console.log("Error");
        console.log(e);
    }

    document.getElementById('page0').innerHTML = navdata.page0;
    document.getElementById('page1').innerHTML = navdata.page1;
    document.getElementById('page2').innerHTML = navdata.page2;
    document.getElementById('page4').innerHTML = navdata.page4;
    document.getElementById('logoExp').src = navdata.logo;

    createGalery("picture", galerydata);
    createGalery("pictureII", galerydataII);

    function createGalery (name, data = []) {
        const pictureElement = document.getElementById(name);
        pictureElement.id = "picture";
        var prevPic = pictureElement;
        if (data.length > 0){
            data.forEach(function(element){
                var clone = pictureElement.cloneNode(true);
                clone.classList.remove('no-show');
                clone.childNodes[3].innerHTML = element.Description;
                clone.childNodes[1].childNodes[1].src = element.Picture;
                prevPic.after(clone);
                prevPic = clone;
            });
            pictureElement.remove();
        }
    }
});