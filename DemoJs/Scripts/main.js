requirejs.config({
    baseUrl: '../Scripts/ViewModel',
});

$(document).ready(function () {
    var alertError = $('[id^="txtAlert"]');
    alertError.hide();
    $("#divAlert").hide();

    require(["OrdineViewModel"], function (OrdineViewModel) {
        var ordineViewModel = new OrdineViewModel();
        globalModelloOrdine = ordineViewModel;
        ko.applyBindings(ordineViewModel);
    });
});

//#region Variabili globali
var globalModelloOrdine;
//#endregion
