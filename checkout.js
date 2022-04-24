$("#submit").click(function() {
  alert("Thank you. The form information has been received");
  console.log("Buyer's name: " + $("#name").val())
  console.log("Email: " + $("#email").val())
  console.log("Address: " + $("#address").val())
  console.log("City: " + $("#city").val())
  console.log("State: " + $("#state").val())
  console.log("Zip: " + $("#zip").val())
  console.log("First time adopter? " + $("input[name='first-time']:checked").val())
  console.log("Pickup location: " + $("#pickup").val())
})
