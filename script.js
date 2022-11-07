"use strict";

let lrd = document.querySelector("#lrdInput");
let vrd = document.querySelector("#vrdInput");
let btnAdd = document.querySelector("button");
let perc = document.querySelector(".vLPercentage");
let total = document.querySelector(".total");
let comLrd = document.querySelector("#lrdPercentage");
let comVrd = document.querySelector("#vrdPercentage");
let finalPo = document.querySelector(".final-payout");

function formatMoney(number) {
  return number.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
}

btnAdd.addEventListener("click", () => {
  // input figures
  perc = (parseFloat(vrd.value) / parseFloat(lrd.value)) * 100;
  perc.toFixed(2);
  document.querySelector(".vLPercentage").innerText = perc.toFixed(2) + "%";
  total = parseFloat(vrd.value) + parseFloat(lrd.value);
  document.querySelector(".total").innerText = formatMoney(total);

  // commission figures from inputted figures
  comLrd = (lrd.value / 100) * 1;
  parseFloat(comLrd);
  Number(comLrd);
  document.querySelector("#lrdPercentage").innerText = formatMoney(comLrd);
  comVrd = (vrd.value / 100) * 1;

  if (total < 49999.99 && perc > 0) {
    comVrd = (vrd.value / 100) * 1;
    Number(comVrd);
    finalPo = comLrd + comVrd;
    document.querySelector("#vrdPercentage").innerText = formatMoney(comVrd);
    Number(finalPo);
    document.querySelector(".final-payout").innerText =
      "£0 ... Total Target Not Hit ☹️  ";
    document.querySelector(".final-payout").style.color = "#B2222";
  } else if (total >= 50000 && perc >= 70) {
    comVrd = (vrd.value / 100) * 1.15;
    Number(comVrd);
    finalPo = comLrd + comVrd;
    document.querySelector("#vrdPercentage").innerText = formatMoney(comVrd);
    Number(finalPo);
    document.querySelector(".final-payout").innerText = formatMoney(finalPo);
    document.querySelector(".final-payout").style.color = "#60b347";
  } else if (total >= 50000 && perc >= 65 && perc < 69.99) {
    comVrd = (vrd.value / 100) * 1;
    Number(comVrd);
    finalPo = comLrd + comVrd;
    document.querySelector("#vrdPercentage").innerText = formatMoney(comVrd);
    Number(finalPo);
    document.querySelector(".final-payout").innerText = formatMoney(finalPo);
    document.querySelector(".final-payout").style.color = "#60b347";
  } else if (total >= 50000 && perc >= 56 && perc < 64.99) {
    comVrd = (vrd.value / 100) * 0.8;
    Number(comVrd);
    finalPo = comLrd + comVrd;
    document.querySelector("#vrdPercentage").innerText = formatMoney(comVrd);
    Number(finalPo);
    document.querySelector(".final-payout").innerText = formatMoney(finalPo);
    document.querySelector(".final-payout").style.color = "#60b347";
  } else if (total >= 50000 && perc < 55.99) {
    comVrd = (vrd.value / 100) * 0.5;
    Number(comVrd);
    finalPo = comLrd + comVrd;
    document.querySelector("#vrdPercentage").innerText = formatMoney(comVrd);
    Number(finalPo);
    document.querySelector(".final-payout").innerText = formatMoney(finalPo);
    document.querySelector(".final-payout").style.color = "#60b347";
  }
});

// <!-- This project was created for work, a commission calculator that has many variable based on different inputs. Correct results used using various if statment.  -->
