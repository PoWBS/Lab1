(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    };



}(jQuery));


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


    var $buttonAdd = $('#addGameButton'),
        $table = $('#matchTable'),
        $tableBody = $('#matchTable > tbody');









    $buttonAdd.on('click', function () {
        $tableBody.append
            ('<tr class="customRow">' +
                '<td class="modeCol">' + $('#modeselect option:selected').text() + '</td>' +
                '<td class="mapCol">' + $('#mapselect option:selected').text() + '</td>' +
                '<td class="roleCol">' + $('#roleselect option:selected').text() + '</td>' +
                '<td class="heroCol">' + $('#heroselect option:selected').text() + '</td>' +
                '<td class="resultCol">' + $('#result option:selected').text() + '</td>' +
                '<td class="SRCol">' + $('#SRating').val() + '</td>' +
                '<td class="commentCol">' + $('#comment').val() + '</td>' +
                '<td>' +
                '<button type="button" class="removebtn btn btn-secondary">Delete</button>' +
                '</td>' +
                '</tr>');

    })

    $table.on('click', '.removebtn', function () {
        $(this).closest('tr').remove();
    })



    $('#SRating').inputFilter(function (value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 5000);
    });



    $('#calculateStuff').on('click', function () {
        $('#currentSR').text('Current SR: ' + $('td.SRCol:last').text());
        $('#SRdifference').text('SR gain: ' +
            srDiff($('td.SRCol:first'), $('td.SRCol:last')));
        $('#ratio').text('Win ratio: ' + winRatio());
    })

    function winRatio() {
        var wins = $('.resultCol:contains("Victory")').length,
            games = $('.resultCol:contains("Defeat")').length + wins,
            ratio = parseFloat(wins / games).toFixed(2);
        return ratio;
    }

    function srDiff($first, $last) {
        return parseInt($last.text() - $first.text());
    }



});


