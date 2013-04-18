define("OrdineViewModel",
    function () {

        //#region Costruttore modello SchedaIpossemica
        var ViewModelConstructor = function () {
            var self = this;

            //#region Proprietà categoria

            //#region Observable
            self.modelCarrello = ko.observable([]);
            //#endregion

            //#endregion

            //#region Computed
            self.IsOrdinabile = ko.computed(function () {
                return self.modelCarrello().IsOrdinabile();
            });
            //#endregion

            //#region Funzioni
            self.bindOrdine = function () {
            };
            self.cercaProdotto = function () {
            };
            self.ordinaCarrello = function() {
            };
           //#endregion
        };

        return ViewModelConstructor;
        //#endregion
    });