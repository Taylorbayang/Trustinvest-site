function calculateReturn() {
  const amount = parseInt(document.getElementById("amount").value);
  const returnDisplay = document.getElementById("returnDisplay");
  let returnValue = "";

  switch (amount) {
    case 20000:
      returnValue = "Vous recevrez 230 000 F CFA";
      break;
    case 30000:
      returnValue = "Vous recevrez 430 000 F CFA";
      break;
    case 50000:
      returnValue = "Vous recevrez 550 000 F CFA";
      break;
    case 100000:
      returnValue = "Vous recevrez 1 200 000 F CFA";
      break;
    default:
      returnValue = "";
  }

  returnDisplay.textContent = returnValue;
}

function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const country = document.getElementById("country").value;
  const amount = document.getElementById("amount").value;

  if (!amount) {
    alert("Veuillez sélectionner un montant.");
    return;
  }

  const message = Merci ${name} !\nVotre demande d’investissement de ${amount} F a été reçue.\nNous vous contacterons au ${phone}.;

  alert(message);
  document.getElementById("investmentForm").reset();
  document.getElementById("returnDisplay").textContent = "";
}
