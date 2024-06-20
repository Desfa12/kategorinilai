function determineAgeCategory() {
  const age = document.getElementById("ageInput").value;
  let category = "";

  if (age < 0 || age > 200) {
    category = "Usia tidak valid";
  } else if (age <= 1) {
    category = "Bayi";
  } else if (age <= 12) {
    category = "Anak-anak";
  } else if (age <= 17) {
    category = "Remaja";
  } else if (age <= 59) {
    category = "Dewasa";
  } else if (age <= 74) {
    category = "Tua";
  } else {
    category = "Lanjut Usia";
  }

  document.getElementById("result").innerText = "Kategori: " + category;
}
