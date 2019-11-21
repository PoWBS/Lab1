$(document).ready(function () {


    var $roleselect = $('#roleselect'),
        $heroselect = $('#heroselect'),
        $optionsHero = $heroselect.find('option'),
        $mapselect = $('#mapselect'),
        $modeselect = $('#modeselect'),
        $optionsMap = $mapselect.find('option');

    $roleselect.on('change', function () {
        $heroselect.html($optionsHero.filter('[value="' + this.value + '"]'));
    }).trigger('change');

    $modeselect.on('change', function () {
        $mapselect.html($optionsMap.filter('[value="' + this.value + '"]'));
    }).trigger('change');


    var $button = $('#addGameButton'),
        $table = $('#matchTable > tbody');

    $button.on('click', function () {
        $table.prepend
            ('<tr>' +
                '<td>' + $("#modeselect option:selected").text() + '</td>' +
                '<td>' + $("#mapselect option:selected").text() + '</td>' +
                '<td>' + $("#roleselect option:selected").text() + '</td>' +
                '<td>' + $("#heroselect option:selected").text() + '</td>' +
                '<td>' + $("#result option:selected").text() + '</td>' +
                '<td>' + $("#SRating").val() + '</td>' +
                '<td>' + $("#comment").val() + '</td>' +
                //todo add a delete button
                '</tr>')
    })


    /*todo
    calculate average sr
    input initial sr
    calculate win ratio
    show current sr
    maybe input total sr instead and show difference, but complicated
    */
});