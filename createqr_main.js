// first prevent browser from page reload
// when submit button is clicked:
let mailForm = document.getElementById("mail_form");
mailForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

let locCode = null;

let myMap = new ol.Map({
    target: 'mymap',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([7.4444146525, 46.9592919193]),
        zoom: 1
    })
});

myMap.on("singleclick", (event) => {
    let projCoord = ol.proj.transform(event.coordinate, "EPSG:3857", "EPSG:4326");
    locCode = OpenLocationCode.encode(projCoord[1], projCoord[0]);
    locCode = encodeURIComponent(locCode);
    let latcoord = document.getElementById("latcoord");
    let loncoord = document.getElementById("loncoord");
    loncoord.innerHTML = projCoord[0];
    latcoord.innerHTML = projCoord[1];
});


function createQrCode() {
    let eMailAddressString = document.getElementById("e_mail_address").value;

    if (locCode != null && eMailAddressString != "") {

        let binqr = document.getElementById("binqr");
        binqr.innerHTML = "";

        new QRCode(binqr, {
            text: "" + locCode + "&mail=" + eMailAddressString,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        alert("Bitte geben Sie die Position des Muelleimers " +
            "und die E-Mail-Adresse des Betreibers an.");
    }
}