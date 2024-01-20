console.log("connected");

const balanceInput = document.querySelector("#balance");
const mainBalance = document.querySelector("#mainBalance");
const currencySelector = document.querySelector("#currencySelector");
const formatSelector = document
  .querySelector("#currencySelector")
  .getAttribute("data-format");
let currency = "IDR";
let dataFormat = "jp-JP";
let balance = balanceInput.value;
let value;
mainBalance.innerHTML = "Rp.0";

balanceInput.addEventListener("keyup", (e) => {
  balance = balanceInput.value;
  value = rupiah(balance, currency);
  console.log(value);

  mainBalance.innerHTML = value;
});

// rupiah formatter
const rupiah = (balance, currency, dataFormat) => {
  return new Intl.NumberFormat(dataFormat, {
    style: "currency",
    currency: currency,
  }).format(balance);
};

currencySelector.addEventListener("change", () => {
  console.log(dataFormat);
  value = rupiah(balance, currencySelector.value, dataFormat);
  currency = currencySelector.value;

  console.log("selected");
  mainBalance.innerHTML = value;
});
