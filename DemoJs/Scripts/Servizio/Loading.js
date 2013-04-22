function openModalLoading(idModalLoading) {
    $("#" + idModalLoading).modal('show');
}

function closeModalLoading(idModalLoading) {
    setTimeout(function () {
        $("#" + idModalLoading).modal('hide');
    }, 500);
}
