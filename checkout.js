const submitButton = document.getElementById('submit');
submitButton.addEventListener("click", function() {
  alert("Thank you. The form information has been received");

  let clientName = document.getElementById('name');
  let clientEmail = document.getElementById('email');
  let clientAddress = document.getElementById('address');
  let clientCity = document.getElementById('city');
  let clientState = document.getElementById('state');
  let clientZip = document.getElementById('zip');
  let firstTime = document.querySelector('input[name="first-time"]:checked').value;
  let pickup = document.getElementById('pickup');

  console.log("Buyer's name: " + clientName.value);
  console.log("Email: " + clientEmail.value);
  console.log("Address: " + clientAddress.value);
  console.log("City: " + clientCity.value);
  console.log('State: ' + clientState.value);
  console.log("Zip: " + clientZip.value);
  console.log("First time adopter?: " + firstTime);
  console.log("Pickup location: " + pickup.value);
});
