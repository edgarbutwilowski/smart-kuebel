let i18n_bin_is_full ="Hallo, der M&uuml;lleimer ist &uuml;berf&uuml;llt? Sie m&ouml;chten das an den Betreiber melden?";
let i18n_right_place ="Dann sind Sie hier genau richtig!";
let i18n_opens_mail = "Der folgende Knopf &ouml;ffnet eine vorgefertigte E-Mail in Ihrer E-Mail-App. Sie m&uuml;ssen dann nur noch die E-Mail absenden, um die &Uuml;berf&uuml;llung zu melden.";

let lang = navigator.language || navigator.userLanguage;
if(lang.startsWith("de")) {
    document.getElementById("i18n-title").innerHTML = "Einen &uuml;berf&uuml;llten M&uuml;lleimer melden";


}
