  // "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const URL =`https://v6.exchangerate-api.com/v6/a930cefb408d578d51add93e/latest/${fromCurr.value}`;

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "BDT") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
// for(let i=0; i<dropdowns.length; i++){
//   for(currCode in countryList){
//     let selected;
//     if(i==0){
//       selected = currCode=="USD"?"selected":"";
//     }else if(i==1){
//       selected= currCode=="INR"?"selected":"";
//     }
//     let optionTag = `<option value = "${currCode}" ${selected} > ${selected} > ${currCode}</option>`;
//     dropdowns[i].insertAdjacentHTML("beforeend",optionTag);
//   }
// }

select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

function updateExchangeRate(){
  const amount = document.querySelector(".amount input");
  const amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  msg.innerHTML = "Getting exchange rate... "
  // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  fetch(URL).then(response => response.json()).then(result =>{
    let exchangeRate = result.conversion_rates[toCurr.value];
    let totalExchangeRate = (amtVal*exchangeRate);
    console.log(totalExchangeRate);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${totalExchangeRate} ${toCurr.value}`;
});
}
  // let response = await fetch(URL);
  // console.log(response.conversion_rates[toCurr.value]);
  // let data = await response.json();
  // let rate = data[toCurr.value.toLowerCase()];
  // let rate = result.conversion_rates[toCurr.value.toLowerCase()];

  // let finalAmount = amtVal * rate;
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});
}
