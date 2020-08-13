$(document).ready(function(){
    $(".list-item").on('click', (event) => {
      $(event.currentTarget).toggleClass('active');
      $(event.currentTarget).siblings('.list-item').slideToggle(200);
      $(event.currentTarget).children('.popout').slideToggle(200);
    });
  });