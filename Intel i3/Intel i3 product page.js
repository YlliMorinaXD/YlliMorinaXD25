function incrementQuantity() {
  const quantityInput = document.getElementById("quantity");
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrementQuantity() {
  const quantityInput = document.getElementById("quantity");
  if (quantityInput.value > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
}

function selectPayment(method) {
  switch (method) {
    case "cash":
      alert("You selected 'Pay In hand'. Prepare To Pay Upon Delivery.");
      break;
    case "online":
      alert("You selected 'Pay Online'. You Will Be Transfer To The CheckOut Page To Pay Online.");
      break;
    case "bank":
      alert("You selected 'Pay By Bank Transfer'. Bank Details Will Be Provided.");
      break;
    default:
      alert("Please Select A Valid Payment Method.");
  }
}
