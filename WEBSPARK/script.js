$(function(){
    $('#date_to').daterangepicker({
        singleDatePicker: true,
        locale: {
            format: 'DD_MM_YYYY'
        }
    });
    $('#date_from').daterangepicker({
        singleDatePicker: true,
        // autoUpdateInput: false,
        locale: {
            // cancelLabel: 'Clear',
            format: 'DD_MM_YYYY'
        }
    });
});
