document.getElementById("pengaduanForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let nomorhp = document.getElementById("nomorhp").value;
    let jenisPengaduan = document.getElementById("jenis_pengaduan").value;
    let isiPengaduan = document.getElementById("isi_pengaduan").value;

    let url = "https://script.google.com/macros/s/AKfycbw5X_0KkTZGUxJa-3kBoNF4fEHohZ6LK-ri68TtkTpcoEOQgJqzKCGwMLw6ae9lkZTc/exec"; // Ganti dengan URL Web App dari Google Apps Script Anda

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `nama=${nama}&email=${email}&nomorhp=${nomorhp}&jenis_pengaduan=${jenisPengaduan}&isi_pengaduan=${isiPengaduan}`
    })
    .then(response => response.text())
    .then(result => {
        alert("Pengaduan Anda telah berhasil dikirim!");
        document.getElementById("pengaduanForm").reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Ada masalah dalam pengiriman. Coba lagi nanti.");
    });
});
