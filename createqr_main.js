// first prevent browser from page reload
// when submit button is clicked:
let mailForm = document.getElementById("mail_form");
mailForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

let lang = navigator.language || navigator.userLanguage;
if(lang.startsWith("de")) {
    document.getElementById("i18n-create-qrcode").innerHTML = "Einen QR-Code f&uuml;r die M&uuml;lleimer-Entleerung erstellen";
    document.getElementById("i18n-set-position").innerHTML = "Bitte bestimmen Sie durch Klicken oder Ber&uuml;hren in der Karte die Position des M&uuml;lleimers:";
    document.getElementById("i18n-chosen-coord").innerHTML = "Ausgew&auml;hlte Koordinaten (WGS84): Breitengrad: <span id=\"latcoord\">0.0</span>, L&auml;ngengrad: <span id=\"loncoord\">0.0</span>";
    document.getElementById("i18n-provide-email").innerHTML = "Bitte geben Sie die E-Mail-Adresse des Betreibers ein. Dies ist oft eine Abteilung der Stadtverwaltung. Je passgenauer die E-Mail-Adresse ist, desto besser ist es.";
    document.getElementById("i18n-operator-email").innerHTML = "Betreiber-Mail*";
}

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
            text: "https://edgarbutwilowski.github.io/smart-kuebel/index.html?code=" + locCode + "&mail=" + eMailAddressString,
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