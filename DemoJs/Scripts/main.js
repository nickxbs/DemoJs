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
