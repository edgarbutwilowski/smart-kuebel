
let lang = navigator.language || navigator.userLanguage;
if(lang.startsWith("de")) {
    document.getElementById("i18n-title").innerHTML = "Einen &uuml;berf&uuml;llten M&uuml;lleimer melden";
    document.getElementById("i18n-bin-is-full").innerHTML = "Hallo, der M&uuml;lleimer ist &uuml;berf&uuml;llt? Sie m&ouml;chten das an den Betreiber melden?";
    document.getElementById("i18n-right-place").innerHTML = "Dann sind Sie hier genau richtig!";
    document.getElementById("i18n-opens-mail").innerHTML = "Der folgende Knopf &ouml;ffnet eine vorgefertigte E-Mail in Ihrer E-Mail-App. Sie m&uuml;ssen dann nur noch die E-Mail absenden, um die &Uuml;berf&uuml;llung zu melden.";
}
