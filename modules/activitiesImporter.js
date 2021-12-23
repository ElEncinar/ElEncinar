var navdata = [];
var actdata = [];

async function loadNAV() {
    const db = await fetch("https://crelencinar-default-rtdb.europe-west1.firebasedatabase.app/navBar.json");
    const data = await db.json();
    return data;
}

async function loadACT() {
    const db = await fetch("https://crelencinar-default-rtdb.europe-west1.firebasedatabase.app/activities.json");
    const data = await db.json();
    return data;
}

function changeBool (bool) {
    return !bool;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const tryData = await loadACT();
        actdata = Object.keys(tryData).map(element=> {
            return {id: element, Title: tryData[element].Title, Description: tryData[element].Description,
                    Link: tryData[element].Link, LinkTitle: tryData[element].LinkTitle, Picture: tryData[element].Picture}
        });
        navdata = await loadNAV();
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

    var left = true;
    const activityItem = document.getElementById('item');
    var prevAct = activityItem;
    if (actdata.length > 0){
        actdata.forEach(function(element){
            var clone = activityItem.cloneNode(true);
            clone.classList.remove('no-show');
            clone.childNodes[1].innerHTML = element.Title;
            clone.childNodes[5].childNodes[1].childNodes[1].src = element.Picture;
            clone.childNodes[5].childNodes[3].childNodes[1].innerHTML = element.Description;
            clone.childNodes[5].childNodes[3].childNodes[3].childNodes[0].href = element.Link;
            clone.childNodes[5].childNodes[3].childNodes[3].childNodes[0].innerHTML = element.LinkTitle;
            if (left){
                clone.classList.add('left');
            } else {
                clone.classList.add('right');
            }
            prevAct.after(clone);
            prevAct = clone;
            left = changeBool(left);
        });
        activityItem.remove();
    }
});
