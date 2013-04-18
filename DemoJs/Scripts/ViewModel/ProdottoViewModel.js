define("ProdottoViewModel",
    function () {

        //#region Costruttore modello SchedaIpossemica
        var ViewModelConstructor = function () {
            var self = this;

            //#region Proprietà categoria
            self.Codice = '';
            self.Descrizione = '';
            self.Ditta = '';
            //#region Observable
            self.qta = ko.observable(0);
            //#endregion

            //#endregion

            //#region Computed

            //#endregion

            //#region Funzioni
            self.svuotaProdotto = function () {
            };
            //#endregion
        };

        return ViewModelConstructor;
        //#endregion
    });