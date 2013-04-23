//define("ProdottoViewModel",
//var ProdottoViewModel = function() {
    //#region Costruttore modello SchedaIpossemica
    var ProdottoViewModel = function (item) {
        var self = this;
        self.Codice = item.ean;
        self.Descrizione = item.descrizione;
        self.Ditta = item.ditta;
        self.Qta = ko.observable(item.qta);
    };
    //#endregion

    //return ViewModelConstructor;
//};
    //});