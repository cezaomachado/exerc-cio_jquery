$(document).ready(function() {
    $('#add-task').on('click', function() {
      addTask();
    });
  
    $('#task-form').submit(function(event) {
      event.preventDefault();
      addTask();
    });
  
    $('#task-list').on('click', '.task-item', function() {
      $(this).toggleClass('completed');
      if ($(this).hasClass('completed')) {
        setTimeout(function() {
          $(this).remove();
        }.bind(this), 2000);
      }
    });
  
    $('#task-list').on('click', '.save-button', function(event) {
      event.stopPropagation();
      $(this).closest('.task-item').toggleClass('completed');
    });
  
    $('#task-list').on('click', '.cancel-button', function(event) {
      event.stopPropagation();
      $(this).closest('.task-item').remove();
    });
  
    function addTask() {
      var taskName = $('#task').val();
      if (taskName.trim() !== '') {
        var listItem = $('<li>').addClass('task-item').text(taskName);
        var saveButton = $('<button>').text('Salvar').addClass('save-button');
        var cancelButton = $('<button>').text('Cancelar').addClass('cancel-button');
  
        var buttonContainer = $('<div>').addClass('task-buttons');
        buttonContainer.append(saveButton);
        buttonContainer.append(cancelButton);
  
        listItem.append(buttonContainer);
  
        $('#task-list').append(listItem);
        $('#task').val('');
      }
    }
  });
  