$(document).ready(function(){
  var adoptedName = "";
  $('#order-form').hide();
  $('#confirmation').hide();

  $("#order-form").submit(function(e) {
    e.preventDefault();

    $(".ocelot-name").text(adoptedName);

    $('#order-form').hide();
    $('#confirmation').fadeIn();
  });


  $(".ocelot span.btn").click(function(){
    adoptedName = $(this).siblings('h3').text();
    $('#available-ocelots').hide();
    $('#order-form').fadeIn();
  });

});
