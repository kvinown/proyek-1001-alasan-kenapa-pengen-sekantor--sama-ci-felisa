import React, { useState, useMemo, useEffect } from "react";
// Tidak perlu import 'App.css' atau 'tailwind.css',
// asumsikan Tailwind sudah di-setup di proyek Vite kamu.

// --- FASE 3: PENGISIAN KONTEN ---
// --- DIHAPUS ---
// const db = { ... };
// Data sekarang diambil dari public/data.json
// -----------------------------------------------------------------

/**
 * Halaman 1: Landing Page (Jembatan "Kode")
 * Sesuai Canvas Poin #7
 * @param {object} props - Props komponen
 * @param {function} props.onNavigate - Fungsi untuk pindah ke halaman 'hub'
 */
const LandingPage = ({ onNavigate }) => {
	// --- PERUBAHAN GABUNGAN ---
	// Kita tetap pakai layout lama (gelap, tengah), tapi mengganti
	// blockquote dengan simulasi chat WA.
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center p-4 md:p-6 bg-gray-900 text-white animate-fadeIn">
			{/* Container utama (mengikuti screenshot image_a984ca.png) */}
			<div className="w-full max-w-2xl">
				<h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">Proyek Ini Dimulai Dari Satu Pertanyaan...</h1>

				{/* --- INI BAGIAN YANG DIGANTI --- */}
				{/* Sebelumnya: blockquote monoton */}
				{/* Sekarang: Simulasi chat WA (mengikuti image_a9854e.png) */}
				<div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl p-4 md:p-8 mb-8">
					<div className="space-y-4">
						{/* Bubble 1: Felisa [11:10] */}
						<div className="flex justify-start">
							<div className="bg-emerald-700 text-white p-3 rounded-lg shadow-md max-w-xs lg:max-w-md text-left">
								<span className="font-bold block text-emerald-200">Felisa</span>
								<p className="text-lg">kenapa pengen sekantor sm gw?</p>
								<span className="block text-xs text-emerald-100 text-right mt-1">11:10</span>
							</div>
						</div>

						{/* Bubble 2: Kevin [13:37] --- NAMA DITAMBAHKAN --- */}
						<div className="flex justify-end">
							<div className="bg-gray-600 text-white p-3 rounded-lg shadow-md max-w-xs lg:max-w-md text-left">
								<span className="font-bold block text-gray-300">Kevin</span>
								<p className="text-lg">Cici butuh berapa alasann wkwkwk</p>
								<span className="block text-xs text-gray-400 text-right mt-1">13:37</span>
							</div>
						</div>

						{/* Bubble 3: Kevin [13:50] --- NAMA DITAMBAHKAN --- */}
						<div className="flex justify-end">
							<div className="bg-gray-600 text-white p-3 rounded-lg shadow-md max-w-xs lg:max-w-md text-left">
								<span className="font-bold block text-gray-300">Kevin</span>
								<p className="text-lg">1? 10? 100? Wkkwk</p>
								<span className="block text-xs text-gray-400 text-right mt-1">13:50</span>
							</div>
						</div>

						{/* Bubble 4: Felisa [14:00] */}
						<div className="flex justify-start">
							<div className="bg-emerald-700 text-white p-3 rounded-lg shadow-md max-w-xs lg:max-w-md text-left">
								<span className="font-bold block text-emerald-200">Felisa</span>
								<p className="text-lg">1000</p>
								<span className="block text-xs text-emerald-100 text-right mt-1">14:00</span>
							</div>
						</div>


					</div>
				</div>
				{/* --- AKHIR BAGIAN YANG DIGANTI --- */}

				{/* Teks "Kode" - Sesuai Canvas (Tetap dipertahankan) */}
				<p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
					Ci Fel minta 1000 alasan?
					<br />
					Ternyata, 1000 alasan masih terlalu sedikit untuk menjawab pertanyaan sederhana itu.
          <br />
          Akan ku berikan lebih, yaitu
					<span className="font-bold text-blue-300"> 1001 hal</span> yang membuat ku ingin sekali bersama Ci Felisa.
				</p>

				{/* Tombol CTA (Call to Action) - Sesuai Canvas */}
				<button
					onClick={onNavigate}
					className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-xl
                     hover:bg-blue-500 transition-all duration-300 shadow-lg
                     transform hover:scale-105">
					Lihat Kajian Proyek 1001
				</button>
			</div>
		</div>
	);
};
// --- AKHIR PERUBAHAN ---

/**
 * Halaman 2: Hub / Daftar Isi (The "Thesis")
 * Sesuai Canvas Poin #7
 * @param {object} props - Props komponen
 * @param {function} props.onSelectBab - Fungsi untuk memilih Bab dan pindah ke halaman 'bab'
 * @param {Array} props.daftarBab - Data semua bab dari JSON
 */
const HubPage = ({ onSelectBab, daftarBab }) => {
	// ... (Isi komponen HubPage sedikit berubah untuk menerima props 'daftarBab') ...
	return (
		<div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 animate-fadeIn">
			<div className="max-w-4xl mx-auto">
				{/* Fitur 1: Alasan Utama (#1001) - Sesuai Canvas */}
				<div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl mb-10 border-l-4 border-blue-500">
					<h2 className="text-xl font-semibold text-blue-300 mb-2">Alasan Utama <br /> (One and the Only One)</h2>
					<p className="text-3xl md:text-4xl font-bold text-white">"Karena itu Ci Felisa, bukan orang lain."</p>
				</div>

				{/* Fitur 2: Daftar 10 Bab - Sesuai Canvas */}
				<div>
					<h3 className="text-2xl font-semibold mb-6 text-gray-200">Dan ini 1000 alasan pendukungnya, terbagi dalam 10 Bab:</h3>

					{/* Kita render 10 tombol Bab secara dinamis dari props 'daftarBab' */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{daftarBab.map((bab) => (
							<button
								key={bab.id}
								onClick={() => onSelectBab(bab)}
								className="w-full bg-gray-700 text-white p-5 rounded-lg text-left
                           hover:bg-gray-600 transition-all duration-300 shadow-md
                           transform hover:-translate-y-1">
								<span className="font-bold text-blue-300">{bab.judul.split(":")[0]}</span>
								<span className="block text-gray-100 text-lg">{bab.judul.split(":").slice(1).join(":")}</span>
								<span className="text-sm text-gray-400">{bab.alasan.length > 0 ? `${bab.alasan.length} alasan ditemukan` : "Masih dalam investigasi..."}</span>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

/**
 * Halaman 3-12: Halaman "Bab" (The Content)
 * Sesuai Canvas Poin #7
 * @param {object} props - Props komponen
 * @param {object} props.bab - Data Bab yang dipilih
 * @param {function} props.onBack - Fungsi untuk kembali ke halaman 'hub'
 * @param {object} props.prevBab - Data Bab sebelumnya (atau null)
 * @param {object} props.nextBab - Data Bab selanjutnya (atau null)
 * @param {function} props.onNavigateBab - Fungsi untuk pindah ke Bab lain
 */
const BabPage = ({ bab, onBack, prevBab, nextBab, onNavigateBab }) => {
	// ... (Isi komponen BabPage tidak berubah sama sekali) ...
	// State HANYA untuk halaman ini: melacak halaman pagination
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10; // Sesuai Canvas, kita tampilkan 10 per halaman

	// Logika untuk Pagination
	const { totalPages, currentAlasan } = useMemo(() => {
		// ... (Logika pagination tidak berubah) ...
		const total = Math.ceil(bab.alasan.length / itemsPerPage);
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		const alasan = bab.alasan.slice(startIndex, endIndex);
		return { totalPages: total, currentAlasan: alasan };
	}, [bab.alasan, currentPage]);

	// *** PERUBAHAN: Reset currentPage ke 1 setiap kali 'bab' berubah ***
	useEffect(() => {
		setCurrentPage(1);
	}, [bab]);

	return (
		<div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 animate-fadeIn">
			<div className="max-w-4xl mx-auto">
				{/* Tombol Kembali */}
				<button
					onClick={onBack}
					className="mb-6 bg-gray-700 text-white py-2 px-4 rounded-lg
                     hover:bg-gray-600 transition-all duration-300">
					&larr; Kembali ke Daftar Bab
				</button>

				{/* Judul Bab */}
				<h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{bab.judul.split(":")[0]}</h1>
				<h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8">{bab.judul.split(":").slice(1).join(":")}</h2>

				{/* Konten (Daftar Alasan) */}
				{bab.alasan.length === 0 ? (
					<p className="text-gray-400 italic text-lg">(Masih dalam proses investigasi oleh Kvinown... Ditunggu ya, Ci!)</p>
				) : (
					<div>
						<ul className="space-y-3 mb-8">
							{currentAlasan.map((alasan, index) => (
								<li
									key={alasan.id}
									className="bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
									<span className="text-blue-400 font-semibold text-lg mr-3">
										{/* Hitung nomor alasan berdasarkan halaman */}#{(currentPage - 1) * itemsPerPage + index + 1}
									</span>
									<p className="text-gray-100 text-lg">{alasan.teks}</p>
								</li>
							))}
						</ul>

						{/* Fitur 3: Pagination - Sesuai Canvas */}
						{totalPages > 1 && (
							<div className="flex flex-wrap justify-center items-center space-x-2">
								{/* Tombol Prev */}
								<button
									onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
									disabled={currentPage === 1}
									className="py-2 px-4 bg-gray-700 rounded-lg disabled:opacity-50 my-2">
									&larr; Prev
								</button>

								{/* Tombol Halaman Angka */}
								{[...Array(totalPages).keys()].map((num) => (
									<button
										key={num + 1}
										onClick={() => setCurrentPage(num + 1)}
										className={`my-2 py-2 px-4 rounded-lg 
                              ${currentPage === num + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}>
										{num + 1}
									</button>
								))}

								{/* Tombol Next */}
								<button
									onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
									disabled={currentPage === totalPages}
									className="my-2 py-2 px-4 bg-gray-700 rounded-lg disabled:opacity-50">
									Next &rarr;
								</button>
							</div>
						)}
					</div>
				)}

				{/* --- PENAMBAHAN FITUR: TOMBOL NAVIGASI BAB --- */}
				<div className="mt-12 pt-6 border-t border-gray-700 flex justify-between items-center">
					{/* Tombol Prev Bab */}
					{prevBab ? (
						<button
							onClick={() => onNavigateBab(prevBab)}
							className="bg-gray-700 text-white py-3 px-4 md:px-6 rounded-lg
                         hover:bg-gray-600 transition-all duration-300 flex items-center">
							<span className="mr-2 text-lg">&larr;</span>
							<div>
								<span className="text-xs text-gray-400 block">Bab Sebelumnya</span>
								<span className="font-semibold hidden md:block">{prevBab.judul.split(":")[0]}</span>
								<span className="font-semibold md:hidden">Prev</span>
							</div>
						</button>
					) : (
						<div></div> // Placeholder untuk menjaga 'Next' tetap di kanan
					)}

					{/* Tombol Next Bab */}
					{nextBab ? (
						<button
							onClick={() => onNavigateBab(nextBab)}
							className="bg-blue-600 text-white py-3 px-4 md:px-6 rounded-lg
                         hover:bg-blue-500 transition-all duration-300 flex items-center text-right">
							<div>
								<span className="text-xs text-blue-200 block">Bab Selanjutnya</span>
								<span className="font-semibold hidden md:block">{nextBab.judul.split(":")[0]}</span>
								<span className="font-semibold md:hidden">Next</span>
							</div>
							<span className="ml-2 text-lg">&rarr;</span>
						</button>
					) : (
						<div></div> // Placeholder
					)}
				</div>
				{/* --- AKHIR PENAMBAHAN FITUR --- */}
			</div>
		</div>
	);
};

/**
 * Komponen Utama (Induk)
 * Ini adalah "otak" aplikasi yang mengontrol halaman mana yang tampil.
 */
export default function App() {
	// --- PERUBAHAN: State untuk Data ---
	// State untuk menyimpan data dari data.json
	const [data, setData] = useState(null);
	// State untuk melacak status loading
	const [isLoading, setIsLoading] = useState(true);
	// State untuk menyimpan error jika terjadi
	const [error, setError] = useState(null);

	// State untuk URL hash (tetap sama)
	const [hash, setHash] = useState(window.location.hash);

	// --- PERUBAHAN: useEffect untuk Fetch Data ---
	// Ini akan mengambil data dari data.json saat komponen pertama kali mount
	useEffect(() => {
		// URL ke file JSON di folder 'public'
		fetch("/data.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Gagal mengambil data. Cek apakah file data.json ada di folder /public.");
				}
				return response.json();
			})
			.then((jsonData) => {
				setData(jsonData); // Simpan data di state
				setIsLoading(false); // Selesai loading
			})
			.catch((err) => {
				setError(err); // Simpan error
				setIsLoading(false); // Selesai loading (walau gagal)
			});
	}, []); // [] = hanya dijalankan sekali saat mount

	// --- Listener untuk URL Hash (tetap sama) ---
	useEffect(() => {
		const handleHashChange = () => {
			setHash(window.location.hash);
		};

		window.addEventListener("hashchange", handleHashChange);

		// Cleanup function saat komponen di-unmount
		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []); // [] = hanya dijalankan sekali saat mount

	// --- PERUBAHAN: Fungsi Navigasi (tetap sama) ---
	const handleNavigateToHub = () => {
		window.location.hash = "#hub";
	};

	const handleSelectBab = (bab) => {
		window.location.hash = `#bab/${bab.id}`; // Contoh: #bab/1
	};

	const handleBackToHub = () => {
		window.location.hash = "#hub";
	};

	// --- PERUBAHAN: Logika Render ---

	// Tampilkan status Loading
	if (isLoading) {
		return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-2xl">Memuat Proyek 1001...</div>;
	}

	// Tampilkan status Error
	if (error) {
		return <div className="min-h-screen bg-gray-900 text-red-400 flex items-center justify-center text-2xl p-8 text-center">Error: {error.message}</div>;
	}

	// Tampilkan aplikasi jika data sudah ada
	if (data) {
		// Logika untuk Halaman Bab
		if (hash.startsWith("#bab/")) {
			const babId = parseInt(hash.replace("#bab/", ""));

			const currentBabIndex = data.bab.findIndex((b) => b.id === babId);
			const currentBab = data.bab[currentBabIndex];
			const prevBab = currentBabIndex > 0 ? data.bab[currentBabIndex - 1] : null;
			const nextBab = currentBabIndex < data.bab.length - 1 ? data.bab[currentBabIndex + 1] : null;

			if (currentBab) {
				return (
					<BabPage
						bab={currentBab}
						onBack={handleBackToHub}
						prevBab={prevBab}
						nextBab={nextBab}
						onNavigateBab={handleSelectBab}
					/>
				);
			}
		}

		// Logika untuk Halaman Hub
		if (hash === "#hub") {
			return (
				<HubPage
					onSelectBab={handleSelectBab}
					daftarBab={data.bab}
				/>
			);
		}
	}

	// Logika untuk Halaman Landing (Default)
	return (
		<div className="bg-gray-900">
			<LandingPage onNavigate={handleNavigateToHub} />
		</div>
	);
}

// Catatan:
// 1. Pastikan kamu sudah `npm install react`
// ... (sisa catatan tidak berubah) ...
