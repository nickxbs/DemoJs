define("ProdottoViewModel",
    function () {
        //#region Funzioni di servizio
        //#endregion

        //#region Costruttore modello SchedaIpossemica
        var ViewModelConstructor = function (item) {
            var self = this;
            self.Codice = item.ean;
            self.Descrizione = item.descrizione;
            self.Ditta = item.ditta;
            self.Qta = ko.observable(item.qta);

            //#region Funzioni

            //#endregion
        };
        //#endregion

        return ViewModelConstructor;

    });