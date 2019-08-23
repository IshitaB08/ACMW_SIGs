$('.toggle').click(function() {
    $('#target').show(500);

});

$('.toggle2').click(function() {
    $('#target2').toggle('slow');
    $('#target').toggle('slow');

});

$('.toggle3').click(function() {
    $('#target3').toggle('slow');
    $('#target2').toggle('slow');
});
