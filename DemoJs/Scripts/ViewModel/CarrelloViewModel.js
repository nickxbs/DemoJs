define("CarrelloViewModel",
    function () {

        //#region Costruttore modello SchedaIpossemica
        var ViewModelConstructor = function () {
            var self = this;

            //#region Proprietà categoria

            //#region Observable
            self.modelProdotti = ko.observableArray([]);
            self.totaleQta = ko.observable(0);
            //#endregion

            //#endregion

            //#region Computed
            self.IsOrdinabile = ko.computed(function () {
                return (self.totaleQta() >= 5 && self.totaleQta() <= 10);
            });
            //#endregion

            //#region Funzioni
            self.svuotaCarrello = function () {
            };
            //#endregion
        };

        return ViewModelConstructor;
        //#endregion
    });