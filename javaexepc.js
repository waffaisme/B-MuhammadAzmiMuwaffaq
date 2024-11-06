function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}
setInterval(setTime, 3000);
console.log("Program Finish");

function divideNumbers(a, b) {
  try {
    // Memeriksa apakah kedua input adalah angka
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input harus berupa angka.");
    }

    // Memeriksa apakah pembagi bukan nol
    if (b === 0) {
      throw new Error("Pembagian dengan nol tidak diperbolehkan.");
    }

    // Melakukan pembagian
    const result = a / b;
    return result;
  } catch (error) {
    return `Kesalahan: ${error.message}`;
  }
}

// Contoh penggunaan fungsi
console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(10, 0)); // Output: Kesalahan: Pembagian dengan nol tidak diperbolehkan.
console.log(divideNumbers(10, "a")); // Output: Kesalahan: Input harus berupa angka.
