# 🧠 Dashboard Interaktif Cerdas dengan Klasifikasi K-Nearest Neighbors (KNN)


## 👩‍💼 Tentang Penulis

Halo, saya **Putri Nur Safna**, mahasiswi Digital Business dari **Universitas Negeri Makassar**, angkatan 2022. Saya memiliki ketertarikan yang kuat pada dunia bisnis dan transformasi digital, khususnya bagaimana teknologi dapat digunakan untuk menganalisis perilaku konsumen dan mengembangkan strategi bisnis berbasis data.

Bagi saya, bisnis tidak hanya soal penjualan, tapi juga bagaimana **membangun ekosistem digital** yang cerdas, responsif, dan relevan dengan zaman teknologi saat ini. Melalui proyek ini, saya ingin menunjukkan bagaimana teknologi seperti **machine learning** dan desain sistem interaktif bisa menjadi solusi strategis di era digitalisasi.

> “In the modern world of business, it’s not the big that eat the small… it’s the fast that eat the slow.”  
> — Jason Jennings

📌 **LinkedIn**: [www.linkedin.com/in/putrinursafna](https://www.linkedin.com/in/putrinursafna)  
🎓 **Prodi**: Digital Business  
🏛️ **Kampus**: Universitas Negeri Makassar  
🎓 **Angkatan**: 2022

---

## Ringkasan Proyek

Proyek ini merupakan sistem dashboard multimedia interaktif yang cerdas, dirancang untuk memberikan rekomendasi makanan dan minuman berdasarkan preferensi pengguna secara real-time, sekaligus menampilkan penawaran paket pernikahan eksklusif dari **Saoraja Ballroom, Wisma Kalla**. Sistem ini dibangun dengan pendekatan rekayasa sistem modern menggunakan algoritma klasifikasi **K-Nearest Neighbors (KNN)** dalam kerangka kerja **ROMUSA (Rekayasa Optimasi Multimedia Sistem Aplikasi)**.

---

## 📈 Tujuan Proyek

Proyek ini bertujuan untuk:

1. Mengembangkan sistem rekomendasi sederhana berbasis survei dan KNN.
2. Menyediakan pengalaman pengguna yang ringan, cepat, dan estetis.
3. Mempromosikan integrasi machine learning dalam bisnis digital UMKM.

---

## 💡 Apa itu K-Nearest Neighbors (KNN)?

**K-Nearest Neighbors (KNN)** adalah algoritma pembelajaran mesin (*machine learning*) non-parametrik yang digunakan untuk tugas klasifikasi dan regresi. Prinsip dasarnya adalah bahwa data dengan karakteristik yang serupa akan berada dalam jarak yang berdekatan pada ruang fitur. Untuk menentukan klasifikasi data baru, algoritma akan menghitung jarak terhadap sejumlah tetangga terdekat (*k neighbors*) dan memilih mayoritas label dari tetangga-tetangga tersebut sebagai hasil prediksi.

### 📌 Rumus Euclidean Distance (Jarak Euclidean):

\[
d(p, q) = \sqrt{\sum_{i=1}^{n} (p_i - q_i)^2}
\]

Keterangan:
- \( p \) dan \( q \) adalah vektor fitur
- \( n \) adalah jumlah dimensi
- \( d \) adalah jarak Euclidean

Algoritma KNN dikenal sangat kuat dalam kondisi data non-linear, dan cocok digunakan saat tidak tersedia asumsi distribusi data yang jelas.

---

## 🎯 Fitur Unggulan

### 💍 Showcase Paket Wedding (Saoraja Ballroom)
- Harga: Rp 59.995.000 (500 pax) + Rp 85.000/pax tambahan
- Fasilitas: MC, hiburan, videotron LED, MUA & busana
- F&B: 12 menu pilihan + test food
- Studio foto, photobooth, dan dokumentasi lengkap
- Akses area pre-wedding eksklusif dan kamar pengantin

### 🍽️ Rekomendasi Menu Pintar (Gastros Café)
Sistem ini menyajikan 5 pertanyaan interaktif terkait:
- Preferensi rasa pedas
- Suasana makan (sendiri, berdua, ramai)
- Pilihan rasa (manis atau gurih)
- Jenis minuman (dingin atau panas)
- Jenis makanan (ringan atau berat)

➡️ Berdasarkan jawaban, sistem akan merekomendasikan:
- Makanan utama 🍛
- Minuman pendamping 🧋
- Pilihan dessert 🍰

Proses ini mengadopsi klasifikasi KNN berdasarkan dataset preferensi pengguna terdahulu untuk memberikan rekomendasi personalisasi.

---

## ⚙️ Teknologi yang Digunakan

- `React.js` — Antarmuka frontend dinamis
- `Python (scikit-learn)` — Implementasi model KNN
- `Node.js & Express` — API backend
- `MongoDB` — Penyimpanan data preferensi
- `Lazy loading & Preload` — Optimisasi performa UI
- `ROMUSA` — Standar rekayasa multimedia terstruktur

---

## 🚀 Optimisasi Performa

Sistem ini dirancang ringan namun estetis, menggunakan:
- *Lazy loading* untuk gambar, hanya dimuat saat diperlukan
- *Preload* data penting seperti harga & paket
- *Asset minification* dan caching untuk kecepatan muat
> “Performance is not just about speed. It’s about perception, and good design manipulates that perception.”  
> — *Lara Hogan, Web Performance Expert*

---

## 📂 Struktur Dataset

Dataset yang digunakan mencakup preferensi pengguna anonim, dengan fitur:
- `preferensi_pedas`
- `jumlah_orang`
- `profil_rasa`
- `jenis_minuman`
- `porsi_makanan`

File dataset tersedia di `data/preferences.csv` dan diproses menggunakan `pandas`.

---

## 🧪 Cara Menjalankan Proyek

```bash
# Kloning repositori
git clone https://github.com/username/dashboard-knn.git
cd dashboard-knn

# Install dependencies
npm install

# Jalankan aplikasi
npm start


