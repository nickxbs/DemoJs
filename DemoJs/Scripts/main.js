$(document).ready(function () {
    var $add = $("#add");
    var $code = $("#code");

    $code.keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            e.preventDefault();
            $add.click();
            return false;
        }
        return true;
    });

    $add.click(function (event) {
        //If this method is called, the default action of the event will not be triggered.
        event.preventDefault();
        $.ajax({
            url: "api/Carrello/" + $code.val(),
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 30000,
            success: function (data) {

                var $dataCodice = $("td[data-codice='" + data.ean + "']");
                if ($dataCodice.length > 0) {
                    var qta = parseInt($dataCodice.text());
                    $dataCodice.text(qta + 1);
                } else {
                    $("#tabBody")
                        .append("<tr>" +
                                "<td>" + data.ean + "</td>" +
                                "<td>" + data.descrizione + "</td>" +
                                "<td>" + data.ditta + "</td>" +
                                "<td data-codice=" + data.ean + ">" + "1" + "</td>"
                            + "</tr>");
                }

                var $totale = $("#totale");
                var intTotale = parseInt($totale.text());
                $totale.text(intTotale + 1);
                $code.val("");

                if (parseInt($totale.text()) < 5) {
                    $("#btnConferma").removeClass("btn-success");
                    $("#btnConferma").removeClass("btn-danger");
                } else {
                    if (parseInt($totale.text()) > 10) {
                        $("#btnConferma").addClass("btn-danger");
                        $("#btnConferma").removeClass("btn-success");

                    } else {
                        $("#btnConferma").addClass("btn-success");
                        $("#btnConferma").removeClass("btn-danger");
                    }
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Prodotto non trovato");
            }
        });

    });


    $("#btnAnnulla").click(function (event) {
        event.preventDefault();

        if (confirm("Confermi eliminazione?")) {
            window.location.reload();
        }

    });

    var $btnConferma = $("#btnConferma");

    $btnConferma.click(function (event) {
        event.preventDefault();
        if ($btnConferma.hasClass("btn-danger")) {
            alert("Quantità massima superata");
            return;
        }

        if ($btnConferma.hasClass("btn-success")) {
            if (confirm("Voui inviare l'ordine?")) {
                alert("Ordine inviato con successo.");
                window.location.reload();
            }
            return;
        }

        alert("Quatità minima non raggiunta. Inserire almeno 5 pezzi.");
    });
});
