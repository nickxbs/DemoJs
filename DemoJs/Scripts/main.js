$(document).ready(function () {
    riempiCarrello();
});

//#region Variabili globali
var globalModelloOrdine;
var globalModelloCarrello;
var globalModelloProdotti;
//#endregion

//#region Funzioni di servizio
function riempiCarrello() { }
function cercaProdotto() {
    openModalLoading("modalLoading");

    var testoCercato = $.trim($("#txtAggiungiProdotto")[0].value);

    $.ajax({
        url: "../Carrello/GetProdotto?codice=" + testoCercato,
        type: "GET",
        dataType: "json",
        timeout: 30000,
        success: function (prodotti) {
            if (!prodotti.StatusCode) {
                //globalmodelSchedaIpossemica.bind(schedaIpossemica);
            } else {
                alert("Errore");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            closeModalLoading("modalLoading");
            alert((jqXHR.responseText).Message, errorThrown);
        }
    });

    closeModalLoading("modalLoading");
}
//#endregion
