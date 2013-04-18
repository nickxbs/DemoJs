<<<<<<< HEAD
﻿
$(document).ready(function () {
    $("#add").click(function (event) {
        //If this method is called, the default action of the event will not be triggered.
        event.preventDefault();
        var $code = $("#code");
        $.ajax({
            url: "Carrello/Prodotto/" + $code[0].value,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 30000,
            success: function (data) {
                $("#tabBody")
                    .append("<tr>")
                    .append("<td>" + data.ean)
                    .append("</td>")
                    .append("<td>" + data.descrizione)
                    .append("</td>")
                    .append("<td>" + data.ditta)
                    .append("</td>")
                    .append("<td>"+ "1")
                    .append("</td>")
                    .append("</tr>");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error");
            }
        });

    });
});

var articoli = [];
articoli['1001'] = { ean: '1001', articolo: 'SOFFISOF PANN RETT C/BARRI 30P', ditta: 'SILC SpA' };
articoli['1002'] = { ean: '1002', articolo: 'RENILON 4.0 ALBICOCCA 6X125ML', ditta: 'NUTRICIA ITALIA SpA' };
articoli['1003'] = { ean: '1003', articolo: 'BIAGLUT PANCARRE 250G', ditta: 'BIAGLUT (HEINZ ITALIA SpA)' };
articoli['1004'] = { ean: '1004', articolo: 'TENA PANTS DISCREET PANN L10PZ', ditta: 'SCA HYGIENE PRODUCTS SpA' };
articoli['1005'] = { ean: '1005', articolo: 'TENA PANTS DISCREET PANN L12PZ', ditta: 'SCA HYGIENE PRODUCTS SpA' };
articoli['1006'] = { ean: '1006', articolo: 'COLOPLAST DREN STER MINI 2210', ditta: 'COLOPLAST SpA' };
articoli['1007'] = { ean: '1007', articolo: 'BUONAPASTA FARFALLE 500G', ditta: 'KI GROUP SpA' };
articoli['1008'] = { ean: '1008', articolo: 'CATETERE NELATON MASC CH10 30P', ditta: 'SAFETY SpA' };
articoli['1009'] = { ean: '1009', articolo: 'HOLLI CATET ISTANT D CH14 30PZ', ditta: 'HOLLISTER SpA' };
articoli['1010'] = { ean: '1010', articolo: 'ALTERNA MIO MAXI TR RIT 46326', ditta: 'COLOPLAST SpA' };
articoli['1011'] = { ean: '1011', articolo: 'ALTERNA SAC SCAR 40MM 30 12834', ditta: 'COLOPLAST SpA' };
articoli['1012'] = { ean: '1012', articolo: 'EASIFLEX SET PRO SAC CH TNT 50', ditta: 'COLOPLAST SpA' };
articoli['1013'] = { ean: '1013', articolo: 'BD MICROFINE+ LANC G30 200PZ', ditta: 'COLOPLAST SpA' };
articoli['1014'] = { ean: '1014', articolo: 'EASIFLEX SET PRO MX CH TNT 50', ditta: 'COLOPLAST SpA' };
articoli['1015'] = { ean: '1015', articolo: 'EASIFLEX SET PRO MX CH TR15/50', ditta: 'COLOPLAST SpA' };
=======
﻿
>>>>>>> e290e92fccdc39ffcab1f35f9bd5fffd2dec6cca
