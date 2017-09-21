$('#sendButton').click(function() {
    console.log($('#utterance').val());
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/response?utterance=` + $('#utterance').val(),
        success: function(data){
          $('<p>')
          .append($('#utterance').val())
          .appendTo('#target')
          .append('<br>')
          .appendTo('#target')
          .append(data)
          .appendTo('#target');
        }
    });
});
