//requirejs.config({
//    baseUrl: '../Scripts/ViewModel',
//});

$(document).ready(function () {
    var $txtAggiungiProdotto = $("#txtAggiungiProdotto");
    $("#divAlert").hide();
    $txtAggiungiProdotto.focus();

    $txtAggiungiProdotto.keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            e.preventDefault();
            $("#add").click();
            return false;
        }
    });

    var ordineViewModel = new OrdineViewModel();
    ko.applyBindings(ordineViewModel);
});
