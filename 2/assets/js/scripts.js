$(document).ready(function () {
    $('#myTable').DataTable({
        language: {
            search: "Поиск:",
            "lengthMenu": "Показать _MENU_",
            "info": "Страница _PAGE_ из _PAGES_",
            "zeroRecords": "Ничео не найдено",
            "paginate": {
                "next": "Далее",
                "previous": "Назад"
            }
        }

    });
});

