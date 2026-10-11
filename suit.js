let mode = "jawa";

function ambilNama(angka, a, b, c) {
  if (angka == 0) {
    return a;
  } else if (angka == 1) {
    return b;
  } else {
    return c;
  }
}

function cekHasil(pilihanU, marcel) {
  if (pilihanU == marcel) {
    return "seri";
  } else if (
    (pilihanU == 0 && marcel == 1) ||
    (pilihanU == 1 && marcel == 2) ||
    (pilihanU == 2 && marcel == 0)
  ) {
    return "menang";
  } else {
    return "kalah";
  }
}

function tampilHasil(namaU, namaMarcel, hasil) {
  document.getElementById("pilihan-kamu").innerHTML = "Pilihan u : " + namaU;
  document.getElementById("pilihan-marcel").innerHTML = "Pilihan KING MARCEL 👑 : " + namaMarcel;

  if (hasil == "seri") {
    document.getElementById("hasil").innerHTML = "Draw";
    document.getElementById("hasil").style.color = "orange";
    alert("Draw wak");
  } else if (hasil == "menang") {
    document.getElementById("hasil").innerHTML = "Hoki lu mpruy";
    document.getElementById("hasil").style.color = "green";
    alert("menang cuk Kelaz banged cuk");
  } else {
    document.getElementById("hasil").innerHTML = "CUPU!";
    document.getElementById("hasil").style.color = "red";
    alert("lu kalah mpruyy");
  }
}

function suitBatuGuntingKertas(pilihanU) {
  let marcel = Math.floor(Math.random() * 3);
  let namaU = ambilNama(pilihanU, "✊ Batu", "✌️ Gunting", "✋ Kertas");
  let namaMarcel = ambilNama(marcel, "✊ Batu", "✌️ Gunting", "✋ Kertas");
  tampilHasil(namaU, namaMarcel, cekHasil(pilihanU, marcel));
}

function suitGajahOrangSemut(pilihanU) {
  let marcel = Math.floor(Math.random() * 3);
  let namaU = ambilNama(pilihanU, "🐘 Gajah", "🧍 Orang", "🐜 Semut");
  let namaMarcel = ambilNama(marcel, "🐘 Gajah", "🧍 Orang", "🐜 Semut");
  tampilHasil(namaU, namaMarcel, cekHasil(pilihanU, marcel));
}

function suitJari(pilihanU) {
  let marcel = Math.floor(Math.random() * 3);
  let namaU = ambilNama(pilihanU, "👍 Jempol", "☝️ Telunjuk", "🤙 Kelingking");
  let namaMarcel = ambilNama(marcel, "👍 Jempol", "☝️ Telunjuk", "🤙 Kelingking");
  tampilHasil(namaU, namaMarcel, cekHasil(pilihanU, marcel));
}

function main(pilihanU) {
  if (mode == "jepang") {
    suitBatuGuntingKertas(pilihanU);
  } else if (mode == "jawa") {
    suitGajahOrangSemut(pilihanU);
  } else {
    suitJari(pilihanU);
  }
}

function aturTampilan(judul, a, b, c) {
  document.getElementById("nama-mode").innerHTML = judul;
  document.getElementById("aturan").innerHTML = a + " > " + b + " > " + c + " > " + a;
  document.getElementById("tombol0").innerHTML = a;
  document.getElementById("tombol1").innerHTML = b;
  document.getElementById("tombol2").innerHTML = c;

  document.getElementById("pilihan-kamu").innerHTML = "Pilihan u : -";
  document.getElementById("pilihan-marcel").innerHTML = "Pilihan KING MARCEL 👑 : -";
  document.getElementById("hasil").innerHTML = "pilih jagoan u";
  document.getElementById("hasil").style.color = "black";
}

function pilihMode(m) {
  mode = m;

  if (m == "jepang") {
    aturTampilan("Suit Jepang", "✊ Batu", "✌️ Gunting", "✋ Kertas");
  } else if (m == "jawa") {
    aturTampilan("Suit Jawa", "🐘 Gajah", "🧍 Orang", "🐜 Semut");
  } else {
    aturTampilan("Suit Jari", "👍 Jempol", "☝️ Telunjuk", "🤙 Kelingking");
  }
}

pilihMode("jawa");