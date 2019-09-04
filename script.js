$(function () {
    $('#area1').click(function () {
        $('#datetimepicker1').data("DateTimePicker").clear();
    });
    $('#datetimepicker1').datetimepicker({
        format: 'DD_MM_YYYY'
    });
});

$(function () {
    $('#area2').click(function () {
        $('#datetimepicker2').data("DateTimePicker").clear();
    });
    $('#datetimepicker2').datetimepicker({
            format: 'DD_MM_YYYY',
    });


});



// $(function () {
//     $('#datetimepicker2').datetimepicker();
//     $('.glyphicon-remove').click(function () {
//         $('#datetimepicker2').data("DateTimePicker").clear();
//     });
// });