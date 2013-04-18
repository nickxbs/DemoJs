function openModalLoading(idModalLoading) {
    $("#" + idModalLoading).modal('show');
}

function closeModalLoading(idModalLoading) {
    setTimeout(function () {
        $("#" + idModalLoading).modal('hide');
    }, 500);
}

function closeModalLoading(idModalLoading, func) {
    setTimeout(function () {
        $("#" + idModalLoading).modal('hide');
        if (func) {
            func();
        }
    }, 500);
}
