const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function() {
  const inputValue = this.value;

  // Misalnya, ubah warna font menjadi merah saat diketik
  if (inputValue.length > 0) {
    this.style.color = "#9d8250";
  } else {
    this.style.color = "#9d8250"; // Warna font awal saat tidak ada teks
  }
});