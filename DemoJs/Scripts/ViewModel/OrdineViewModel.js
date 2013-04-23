//define("OrdineViewModel",
//var OrdineViewModel = function() {

//#region Funzioni di servizio
var getIndexProdottoInModelCarrello = function (carrello, codice) {
    var result = -1;
    $.each(carrello, function (index, item) {
        if (item.Codice === codice) {
            result = index;
        }
    });
    return result;
};

var getIndexProdottoInSessionStorage = function (carrello, codice) {
    var index = -1;

    for (var i = 0; i < carrello.length; i++) {
        if (carrello[i][codice] !== undefined) {
            index = i;
        }
    }

    return index;
};

var setStore = function (item, model) {
    item.qta = 1;

    var arrayStorageProdotti = new Array();
    arrayStorageProdotti = JSON.parse(sessionStorage.getItem("ordine"));

    var index = itemAppartieneCarrello(arrayStorageProdotti, item.ean);
    var carrelloJson = "";
    var prodottoViewModel;

    if (index === -1) { //non appartiene al carrello di questo codice autorizzativo - > si inserisce da zero
        var prodottoMinsan = {};
        prodottoMinsan[item.ean] = item;
        if (arrayStorageProdotti === null) {
            arrayStorageProdotti = new Array();
        }
        arrayStorageProdotti.push(prodottoMinsan);
        carrelloJson = JSON.stringify(arrayStorageProdotti);

        prodottoViewModel = new ProdottoViewModel(item);
        model.modelProdotti.push(prodottoViewModel);

    } else { //appartiene appartiene al carrello di questo codice autorizzativo - > incrementare quantità selezionata
        var numeroConfezioniACarrello = arrayStorageProdotti[index][item.ean].qta;
        arrayStorageProdotti[index][item.ean].qta = parseInt(numeroConfezioniACarrello) + 1;
        carrelloJson = JSON.stringify(arrayStorageProdotti);

        var indexInModelCarrello = getIndexProdottoInModelCarrello(model.modelProdotti(), item.ean);
        model.modelProdotti()[indexInModelCarrello].Qta(parseInt(numeroConfezioniACarrello) + 1);
    }
    sessionStorage.setItem("ordine", carrelloJson);
};

var itemAppartieneCarrello = function (carrello, codice) {
    var index = -1;

    if (carrello) {
        for (var i = 0; i < carrello.length; i++) {
            if (carrello[i][codice] !== undefined) {
                index = i;
            }
        }
    }

    return index;
};

var jsonStorage = function () {
    if (sessionStorage["ordine"])
        return JSON.parse(sessionStorage["ordine"]);
    else {
        return [];
    }
};

var setAlert = function (message) {
    var $divAlert = $("#divAlert");

    if (message.type === 'unexpected_token' || message.indexOf("unexpected") >= 0) {
        window.location.reload(true);
    } else {

        $("#txtAlert").text(message).show();
        $divAlert.show();

        setTimeout(function () {
            $divAlert.hide();
        }, 10000);
    }
}

var loadCarrello = function (ordineModel) {
    var carrello = jsonStorage();
    $.each(carrello, function (index, itemCarrello) {
        $.each(itemCarrello, function (index, item) {
            var prodottoViewModel = new ProdottoViewModel(item);
            ordineModel.modelProdotti.push(prodottoViewModel);
        });
    });
};

var evidenziaMinsan = function (codice) {
    var $rigaDaEvidenziare = $("#tab").find(".item" + codice);
    if (!$rigaDaEvidenziare.hasClass('sfondo-blu')) {
        $rigaDaEvidenziare.addClass("sfondo-blu", 200);
        setTimeout(function () {
            $rigaDaEvidenziare.removeClass('sfondo-blu', 1250);
        }, 1250);
    }
};

//#endregion

//#region Costruttore modello SchedaIpossemica
var OrdineViewModel = function () {
    var self = this;
    self.modelProdotti = ko.observableArray([]);

    loadCarrello(self);

    self.cercaProdotto = function () {
        $("#divAlert").hide();
        var $txtAggiungiProdotto = $("#txtAggiungiProdotto")[0];
        var testoCercato = $.trim($txtAggiungiProdotto.value);

        $.ajax({
            url: "api/Carrello/" + testoCercato,
            type: "GET",
            dataType: "json",
            timeout: 30000,
            success: function (prodotto) {
                self.inserisciProdotto(prodotto);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                setAlert('Prodotto non trovato');
                $("#txtAggiungiProdotto").focus();
            }
        });
        $txtAggiungiProdotto.value = '';
    };
    self.inserisciProdotto = function (prodotto) {
        setStore(prodotto, self);
        evidenziaMinsan(prodotto.ean);
    };
    self.totaleQta = ko.computed(function () {
        var result = 0;
        $.each(self.modelProdotti(), function (index, prodotto) {
            result = result + prodotto.Qta();
        });
        return result;
    });
    self.carrelloIsOrdinabile = ko.computed(function () {
        return (self.totaleQta() >= 5 && self.totaleQta() <= 10);
    });
    self.contieneAlmenoUnProdotto = ko.computed(function () {
        return self.totaleQta() > 0;
    });
    self.eseguiOrdine = function () {
        if (self.carrelloIsOrdinabile()) {
            $("#modalConferma").modal('show');
        } else {
            setAlert('Ordine non evadibile: la quantità totale deve essere compresa tra un minimo di 5 e un massimo di 10 unità.');
        }
    };
    self.confermaOrdine = function () {
        $("#modalConferma").modal('hide');
        $("#modalSuccess").modal('show');
        self.svuotaCarrello();
    };
    self.svuotaCarrello = function () {
        sessionStorage.removeItem("ordine");
        self.modelProdotti([]);
    };
    self.eliminaProdotto = function (prodottoDaEliminare) {
        var codiceProdottoDaEliminare = prodottoDaEliminare.Codice;

        var carrello = JSON.parse(sessionStorage.getItem("ordine"));
        var indexInStorage = getIndexProdottoInSessionStorage(carrello, codiceProdottoDaEliminare);
        carrello.splice(indexInStorage, 1);
        sessionStorage.setItem("ordine", JSON.stringify(carrello));

        var indexInModelCarrello = getIndexProdottoInModelCarrello(self.modelProdotti(), codiceProdottoDaEliminare);
        self.modelProdotti.splice(indexInModelCarrello, 1);
    };
};
//#endregion

//    return ViewModelConstructor;
//};

//});