$('.button').mouseover(function() {
  $(this).css('box-shadow', '5px 5px 2px #000')
})
.mouseout(function() {
  $(this).css('box-shadow', '0px 0px 0px #000')
})

// update the checkout total
$("#checkout-total").text("$0")

let total = 0;
$('.button').click(function() {
  total += 123.45
  $("#checkout-total").text(total)
})

