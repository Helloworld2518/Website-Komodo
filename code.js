count = 0;
const backImage = document.getElementById("back");
var paket = document.getElementsByClassName("paket");
function next() {
  paket[count].style.display = "none";
  paket[count + 1].style.display = "table";
  count++;
  console.log(count);
}

function back() {
  paket[count - 1].style.display = "table";
  paket[count].style.display = "none";
  count--;
}

function send() {
  var nama = document.getElementById("username").value;
  var text = document.getElementById("norek").value;
  var pesan = text;
  var nomor = "+6281353842621";
  var value = "https://wa.me/" + nomor + "?text=" + pesan;
  window.open(value, "_blank").focus();
}
