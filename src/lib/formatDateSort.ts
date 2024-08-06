export function formatDateSort(tanggalInput: string) {
  // Membuat objek Date dari input
  const tanggal = new Date(tanggalInput);

  // Mendapatkan tanggal, bulan, dan tahun
  const tanggalAngka = tanggal.getDate();
  const bulan = tanggal.getMonth() + 1; // getMonth() mengembalikan bulan 0-11
  const tahun = tanggal.getFullYear();

  // Menambahkan '0' di depan jika tanggal atau bulan hanya terdiri dari 1 digit
  const tanggalFormat = (tanggalAngka < 10 ? "0" : "") + tanggalAngka;
  const bulanFormat = (bulan < 10 ? "0" : "") + bulan;

  // Menggabungkan semua bagian dengan pemisah '-'
  return `${tahun}-${bulanFormat}-${tanggalFormat}`;
}
