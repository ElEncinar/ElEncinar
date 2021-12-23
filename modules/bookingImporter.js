var navdata = [];
var formdata = [];

async function loadNAV() {
    const db = await fetch("https://crelencinar-default-rtdb.europe-west1.firebasedatabase.app/navBar.json");
    const data = await db.json();
    return data;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        navdata = await loadNAV();
    } catch (e) {
        console.log("Error");
        console.log(e);
    }
    document.getElementById('page0').innerHTML = navdata.page0;
    document.getElementById('page1').innerHTML = navdata.page1;
    document.getElementById('page2').innerHTML = navdata.page2;
    document.getElementById('page4').innerHTML = navdata.page4;
    document.getElementById('logoExp').src = navdata.logo;
});

function sendEmail() {
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var subject = 'Reserva%20Casa%20Rural%20'
    console.log(name);
    console.log("a");
    if (name.length > 0 && message.length > 0){
        window.location.href = 'mailto:elencinar2002@gmail.com?subject=' + subject + name + '&body=' + message;
    }  
};

