const priceCells=document.querySelectorAll(".prices");
let total=0;
priceCells.forEach(cell=>{
total+=Number(cell.innerText);
});
const table=document.querySelector("table");
const tr=document.createElement("tr");
const td=document.createElement("td");
td.colSpan=2;
td.innerText="Total Price: "+total;
tr.appendChild(td);
table.appendChild(tr);