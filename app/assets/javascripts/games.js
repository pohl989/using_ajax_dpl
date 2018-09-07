var currentGame = {};
var showForm = false;

$(document).ready(function() {
  $('.game-item').on('click', function(){
    currentGame.id = this.dataset.id
    currentGame.name = this.dataset.name
    $.ajax({
      url: /games/ + currentGame.id + '/characters',
      method: 'GET',
      datatype: 'JSON',
    }).done( function(characters) {
      $('#game').text('Characters in ' + currentGame.name)
      var list = $('#characters')
      list.empty()
      characters.forEach( function(character) {
        var li = '<li data-character-id="' + character.id + '">' + character.name + '-' + character.power + '</li>'
        list.append(li)
      })
    })
  })

  $('#toggle').on('click', function() {
    showForm = !showForm
    $('#game-form').remove()
    $('#games-list').toggle()

    if(showForm) {
      $.ajax({
        url: '/game_form',
        method: 'GET'
      }).done( function(html) {
        $('#toggle').after(html)
      })
    }
  })

  $(document).on('submit'), '#game-form form', function(e) {
    e.preventDefault()
    var data = $(this).serializeArray()
    $.ajaz({
      url: '/games',
      type: 'POST',
      dataType: 'JSON',
      data: data
    }).done( function(game) {
      var g = '<li class="game-item" data-id="' + game.id + '" data-name="' + game.name + '">' + game.name + '-' + game.description + '</li>';
      ('#games-list').append(g)
    }).fail( function(err) {
      alert(err.responseJSON.errors)
    })
  }


})
