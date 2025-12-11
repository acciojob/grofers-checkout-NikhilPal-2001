 const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
getSumBtn.addEventListener("click", getsum = ()=>{
let prices = document.querySelectorAll(".price")
let sum = 0;
prices.forEach(value => {
    sum += Number(value.innerText);
});
let table = document.querySelector("table")
let tablerow = document.createElement("tr")
let tabledata = document.createElement("td")
tabledata.colSpan = 2;
tabledata.innerText = "table price = "+sum;
tablerow.appendChild(tabledata)
table.appendChild(tablerow)
});