const backImage = document.getElementById("next");
const paket1 = document.getElementById("paket1");
const paket2 = document.getElementById("paket2");

backImage.addEventListener("click", () => {
  paket1.style.display = "none";
  paket2.style.display = "table";
});
