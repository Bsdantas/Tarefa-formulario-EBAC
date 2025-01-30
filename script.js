$(document).ready(function () {
    $('#form-tarefa').on('submit', function (event) {
      event.preventDefault();
      const nomeTarefa = $('#nome-tarefa').val();
      if (nomeTarefa.trim() !== '') {
        const novoItem = $('<li>').text(nomeTarefa);
        $('#lista-tarefas').append(novoItem);
        $('#nome-tarefa').val('');
        novoItem.hide().fadeIn(500);
      }
    });
  
    $('#lista-tarefas').on('click', 'li', function () {
      $(this).toggleClass('completed');
      if ($(this).hasClass('completed')) {
        $(this).animate({ opacity: 0.6 }, 200);
      } else {
        $(this).animate({ opacity: 1 }, 200);
      }
    });
  });