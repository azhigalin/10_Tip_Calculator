const amount = document.querySelector("#amount");
const guests = document.querySelector("#guest");
const aquality = document.querySelector("#quality");
const tipAmount = document.querySelector("#tip_amount");

calculate = () => {
  const tip = ((amount.value * quality.value) / guests.value).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";
  if (tip === "Nan") {
    tipAmount.innerHTML = "Tip $0 each";
    showTipAmount();
  } else {
    tipAmount.innerHTML = `Tip $ ${tip} each`;
    showTipAmount();
  }
};

let showTipAmount = () => {
  let x = tipAmount;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};
