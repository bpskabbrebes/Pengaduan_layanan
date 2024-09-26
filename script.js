document.getElementById("pengaduanForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Mencegah reload halaman setelah submit

    // Mengambil data dari form
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let nomorhp = document.getElementById("nomorhp").value;
    let jenisPengaduan = document.getElementById("jenis_pengaduan").value;
    let isiPengaduan = document.getElementById("isi_pengaduan").value;

    // URL Web App dari Google Apps Script Anda
    let url = "https://script.google.com/macros/s/AKfycbw5X_0KkTZGUxJa-3kBoNF4fEHohZ6LK-ri68TtkTpcoEOQgJqzKCGwMLw6ae9lkZTc/exec";  // Ganti dengan URL Web App Anda

    // Data yang akan dikirimkan
    let data = new URLSearchParams();
    data.append("nama", nama);
    data.append("email", email);
    data.append("nomorhp", nomorhp);
    data.append("jenis_pengaduan", jenisPengaduan);
    data.append("isi_pengaduan", isiPengaduan);

    // Kirim data ke Google Apps Script menggunakan Fetch API
    fetch(url, {
        method: 'POST',
        body: data,
    })
    .then(response => response.text())
    .then(result => {
        alert("Pengaduan Anda telah berhasil dikirim!");
        document.getElementById("pengaduanForm").reset();  // Reset form setelah submit berhasil
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Terjadi kesalahan. Silakan coba lagi nanti.");
    });
});
