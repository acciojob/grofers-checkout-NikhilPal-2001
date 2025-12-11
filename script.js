const btn = document.getElementById("calc");

btn.addEventListener("click", () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(p => {
    total += Number(p.innerText);
  });

  document.getElementById("ans").innerText = total;
});
