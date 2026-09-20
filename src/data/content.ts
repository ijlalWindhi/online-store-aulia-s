import { assertBilingual, type PageKey, type T } from './site.ts';

export const meta: Record<PageKey, { title: T; description: T }> = {
	home: {
		title: { id: 'Aulia’s 店 | Jasa Desain dan Website dengan Harga yang Jelas', en: 'Aulia’s 店 | Design and Website Services with Clear Prices' },
		description: {
			id: 'Jasa desain dan website yang dikerjakan langsung oleh Aulia untuk mahasiswa, individu, dan UMKM. Harga mulai Rp40.000, pesan lewat WhatsApp.',
			en: 'Design and website services made directly by Aulia for students, individuals, and MSMEs. Prices start from Rp40.000, ordered via WhatsApp.',
		},
	},
	about: {
		title: { id: 'Tentang Aulia’s 店 dan Arti 店 | Aulia’s 店', en: 'About Aulia’s 店 and the Meaning of 店 | Aulia’s 店' },
		description: {
			id: 'Kenali Aulia Putri Ramadhani, asal nama Aulia’s, arti karakter 店, makna logo, tujuan usaha, serta visi dan misi Aulia’s 店.',
			en: 'Meet Aulia Putri Ramadhani and learn where the name Aulia’s comes from, what 店 means, the logo, and the vision and mission.',
		},
	},
	services: {
		title: { id: 'Layanan dan Harga | Aulia’s 店', en: 'Services and Prices | Aulia’s 店' },
		description: {
			id: 'Tujuh layanan desain dan website lengkap dengan harga mulai, cakupan, estimasi, revisi, hasil, dan tombol pesan lewat WhatsApp.',
			en: 'Seven design and website services with starting prices, scope, turnaround, revisions, deliverables, and WhatsApp ordering.',
		},
	},
	dashboard: {
		title: { id: 'Dashboard Layanan | Aulia’s 店', en: 'Service Dashboard | Aulia’s 店' },
		description: {
			id: 'Bandingkan tujuh layanan Aulia’s 店 menurut jenis pekerjaan dan batas harga mulai, lengkap dengan estimasi, revisi, cakupan, dan hasil.',
			en: 'Compare the seven Aulia’s 店 services by type of work and starting-price limit, with turnaround, revisions, scope, and deliverables.',
		},
	},
	portfolio: {
		title: { id: 'Portofolio Concept Project | Aulia’s 店', en: 'Concept Project Portfolio | Aulia’s 店' },
		description: {
			id: 'Tiga Concept Project: identitas visual UMKM kuliner, konten media sosial kegiatan mahasiswa, dan landing page usaha lokal.',
			en: 'Three Concept Projects: a culinary MSME visual identity, student event social media content, and a local business landing page.',
		},
	},
	customerExperience: {
		title: { id: 'Customer Experience: Hasil Wawancara | Aulia’s 店', en: 'Customer Experience: Interview Findings | Aulia’s 店' },
		description: {
			id: 'Ringkasan wawancara tentang kebutuhan, faktor kepercayaan, fitur penting, keunggulan, dan penilaian harga Aulia’s 店.',
			en: 'An interview summary covering needs, trust factors, key features, perceived strengths, and how Aulia’s 店 prices were judged.',
		},
	},
	brandExperience: {
		title: { id: 'Brand Experience: Empat Dimensi | Aulia’s 店', en: 'Brand Experience: Four Dimensions | Aulia’s 店' },
		description: {
			id: 'Penerapan dimensi sensorik, afektif, intelektual, dan perilaku dalam brand experience Aulia’s 店.',
			en: 'How Aulia’s 店 applies the sensory, affective, intellectual, and behavioral dimensions of brand experience.',
		},
	},
	contact: {
		title: { id: 'Kontak | Aulia’s 店', en: 'Contact | Aulia’s 店' },
		description: {
			id: 'Hubungi Aulia’s 店 lewat WhatsApp, email, atau Instagram. Layanan online dari Kabupaten Nganjuk, Jawa Timur.',
			en: 'Contact Aulia’s 店 via WhatsApp, email, or Instagram. Online services from Nganjuk Regency, East Java.',
		},
	},
};

export const ogImageAlt: T = {
	id: 'Logo Aulia’s 店 dengan tagline Desain yang Pas untuk Langkahmu',
	en: 'The Aulia’s 店 logo with the tagline Design That Fits Your Next Step',
};

export const footer = {
	summary: {
		id: 'Jasa desain dan website yang dikerjakan langsung oleh Aulia secara online dari Kabupaten Nganjuk, Jawa Timur.',
		en: 'Design and website services made directly by Aulia, working online from Nganjuk Regency, East Java.',
	},
};

export const home = {
	intro: {
		id: 'Saya Aulia, dan saya mengerjakan sendiri setiap desain dan website di Aulia’s 店. Harga mulai, estimasi, dan revisi sudah tertulis di halaman layanan, jadi kamu bisa menimbang dulu sebelum menghubungi saya.',
		en: 'I am Aulia, and I make every design and website at Aulia’s 店 myself. Starting prices, turnaround, and revisions are listed on the services page, so you can weigh your options before contacting me.',
	},
	audience: { id: 'Untuk mahasiswa, individu, dan UMKM.', en: 'For students, individuals, and MSMEs.' },
	seeServices: { id: 'Lihat layanan dan harga', en: 'See services and prices' },
	featured: {
		heading: { id: 'Tiga layanan untuk memulai', en: 'Three services to start with' },
		intro: {
			id: 'Responden wawancara Customer Experience saya menilai tiga layanan ini paling relevan.',
			en: 'The respondent in my Customer Experience interview named these three services as the most relevant.',
		},
		interviewLink: { id: 'Baca ringkasan wawancara', en: 'Read the interview summary' },
		more: {
			id: 'Saya juga mengerjakan UI/UX, landing page, company profile website, dan website katalog.',
			en: 'I also design UI/UX and build landing pages, company profile websites, and catalog websites.',
		},
		moreLink: { id: 'Lihat ketujuh layanan', en: 'See all seven services' },
	},
	reasons: {
		heading: { id: 'Yang sudah jelas sebelum kamu memesan', en: 'What you know before you order' },
		items: [
			{
				title: { id: 'Harga mulai tertulis', en: 'Starting prices are listed' },
				text: {
					id: 'Setiap layanan mencantumkan harga mulai. Harga akhir saya sampaikan setelah kebutuhan dan ruang lingkup disepakati.',
					en: 'Every service shows a starting price. I confirm the final price once we agree on your needs and scope.',
				},
			},
			{
				title: { id: 'Estimasi dan revisi jelas', en: 'Turnaround and revisions are clear' },
				text: {
					id: 'Estimasi pengerjaan dan dua putaran revisi tercantum di setiap layanan, sebelum kamu menghubungi saya.',
					en: 'Each service lists its turnaround and two revision rounds before you contact me.',
				},
			},
			{
				title: { id: 'Langsung dengan saya', en: 'You work with me directly' },
				text: {
					id: 'Konsultasi, pengerjaan, dan revisi saya tangani sendiri, jadi kamu tahu siapa yang mengerjakan desainmu.',
					en: 'I handle the consultation, the work, and the revisions myself, so you know who is making your design.',
				},
			},
			{
				title: { id: 'Pesan WhatsApp sudah terisi', en: 'The WhatsApp message is ready' },
				text: {
					id: 'Tombol pemesanan membuka WhatsApp dengan nama layanan, paket, dan harga mulai yang sudah tertulis.',
					en: 'Order buttons open WhatsApp with the service, package, and starting price already written.',
				},
			},
		],
	},
	projects: {
		heading: { id: 'Tiga Concept Project', en: 'Three Concept Projects' },
		intro: {
			id: 'Saya membuat ketiga karya ini untuk menunjukkan kemampuan saya. Nama usaha dan kegiatannya fiktif, dan tidak ada yang merupakan proyek pelanggan.',
			en: 'I made these three pieces to show what I can do. The business and event names are fictional, and none of them is client work.',
		},
		link: { id: 'Lihat tujuan dan proses', en: 'See the goal and process' },
	},
	process: { heading: { id: 'Alur pemesanan', en: 'How ordering works' } },
	cta: {
		heading: { id: 'Ceritakan kebutuhanmu lewat WhatsApp', en: 'Tell me what you need on WhatsApp' },
		text: {
			id: 'Kirim pesan, lalu saya bantu memilih layanan dan ruang lingkup yang sesuai.',
			en: 'Send a message and I will help you choose the right service and scope.',
		},
		contactLink: { id: 'Lihat semua kontak', en: 'See all contact options' },
	},
};

export const about = {
	title: { id: 'Tentang Aulia’s 店', en: 'About Aulia’s 店' },
	intro: {
		id: 'Halo, saya Aulia Putri Ramadhani. Saya pemilik Aulia’s 店 dan orang yang mengerjakan setiap layanannya, dari desain media sosial sampai website.',
		en: 'Hi, I am Aulia Putri Ramadhani. I own Aulia’s 店 and I am the person who carries out every service, from social media designs to websites.',
	},
	location: {
		id: 'Saya melayani secara online dari Kabupaten Nganjuk, Jawa Timur.',
		en: 'I work online from Nganjuk Regency, East Java.',
	},
	name: {
		heading: { id: 'Asal nama', en: 'Where the name comes from' },
		text: {
			id: 'Aulia’s berasal dari nama saya, Aulia Putri Ramadhani. Nama ini menandakan bahwa usaha ini personal: kamu berkomunikasi langsung dengan orang yang mengerjakan desainmu.',
			en: 'Aulia’s comes from my name, Aulia Putri Ramadhani. It signals that this is a personal business: you talk directly with the person making your design.',
		},
	},
	dian: {
		heading: { id: 'Arti 店', en: 'What 店 means' },
		meaning: { id: 'toko', en: 'shop' },
		text: {
			id: '店 adalah karakter Mandarin yang dibaca diàn dan berarti toko. Karakter ini selalu ditulis dalam bentuk aslinya, di halaman Indonesia maupun Inggris, karena menjadi bagian dari nama usaha.',
			en: '店 is a Mandarin character read as diàn, meaning shop. It keeps its original form on both the Indonesian and English pages because it is part of the business name.',
		},
	},
	study: {
		heading: { id: 'Kenapa bahasa Mandarin', en: 'Why Mandarin' },
		text: {
			id: 'Saya ingin melanjutkan studi S2 di Tiongkok setelah menyelesaikan S1, dan saat ini saya sedang belajar bahasa Mandarin. Karena itu saya memakai 店 di nama usaha.',
			en: 'I plan to pursue a master’s degree in China after finishing my bachelor’s degree, and I am currently learning Mandarin. That is why I chose 店 for the business name.',
		},
	},
	logo: {
		heading: { id: 'Makna logo', en: 'What the logo means' },
		text: [
			{
				id: 'Logo Aulia’s 店 berbentuk wordmark. Aulia’s ditulis dengan huruf serif editorial, lalu 店 ditempatkan dalam modul geometris berwarna vermilion.',
				en: 'The Aulia’s 店 logo is a wordmark. Aulia’s is set in an editorial serif, and 店 sits inside a vermilion geometric module.',
			},
			{
				id: 'Sudut kanan atas modul dipotong seperti label harga, sebagai pengingat bahwa harga di Aulia’s 店 ditulis secara terbuka.',
				en: 'The top right corner of the module is clipped like a price tag, a reminder that prices at Aulia’s 店 are stated openly.',
			},
		],
		full: { id: 'Logo lengkap', en: 'Full logo' },
		mark: { id: 'Modul 店 untuk favicon dan ikon media sosial', en: '店 module for the favicon and social media icon' },
		mono: { id: 'Versi satu warna untuk media yang hanya memakai satu tinta', en: 'One-color version for single-ink use' },
	},
	goal: {
		heading: { id: 'Tujuan usaha', en: 'Why this business exists' },
		text: {
			id: 'Saya ingin mahasiswa, individu, dan UMKM bisa mendapatkan desain dan website dengan harga masuk akal, informasi yang jelas, dan komunikasi langsung. Untuk saat ini saya fokus pada proyek berskala kecil sambil membangun portofolio.',
			en: 'I want students, individuals, and MSMEs to get design and website work at a reasonable price, with clear information and direct communication. For now I focus on smaller projects while I build my portfolio.',
		},
	},
	visionMission: { id: 'Visi dan misi', en: 'Vision and mission' },
	vision: {
		heading: { id: 'Visi', en: 'Vision' },
		text: {
			id: 'Menjadi studio kreatif digital yang dikenal sebagai pilihan terjangkau dan dapat diandalkan bagi mahasiswa, individu, dan UMKM.',
			en: 'To build a digital creative studio known as an accessible and dependable choice for students, individuals, and MSMEs.',
		},
	},
	mission: {
		heading: { id: 'Misi', en: 'Mission' },
		items: [
			{
				id: 'Mengerjakan desain dan website berdasarkan kebutuhan serta ruang lingkup yang disepakati bersama pelanggan.',
				en: 'Create designs and websites based on the needs and scope agreed with each customer.',
			},
			{
				id: 'Menyampaikan harga, estimasi pengerjaan, dan ketentuan revisi secara jelas sebelum pekerjaan dimulai.',
				en: 'Explain prices, turnaround, and revision terms clearly before work begins.',
			},
			{
				id: 'Memudahkan konsultasi dan pemesanan melalui komunikasi langsung.',
				en: 'Make consultation and ordering easy through direct communication.',
			},
			{
				id: 'Terus meningkatkan kemampuan dan kualitas karya agar dapat melayani kebutuhan pelanggan yang lebih luas.',
				en: 'Keep improving my skills and the quality of my work to serve a wider range of customer needs.',
			},
		] as T[],
	},
};

export const servicesPage = {
	title: { id: 'Layanan dan harga', en: 'Services and prices' },
	intro: {
		id: 'Semua harga di halaman ini adalah harga mulai. Harga akhir saya sampaikan setelah kebutuhan dan ruang lingkup kita sepakati lewat WhatsApp.',
		en: 'Every price on this page is a starting price. I confirm the final price after we agree on your needs and scope on WhatsApp.',
	},
	summaryHeading: { id: 'Ringkasan harga', en: 'Price overview' },
	orderNote: {
		id: 'Tombol pemesanan membuka WhatsApp dengan pesan yang sudah berisi layanan, paket, dan harga mulai.',
		en: 'Order buttons open WhatsApp with a message that already includes the service, package, and starting price.',
	},
	fallback: {
		id: 'Jika WhatsApp tidak terbuka, nomor, email, dan Instagram saya ada di halaman Kontak.',
		en: 'If WhatsApp does not open, my number, email, and Instagram are on the Contact page.',
	},
	fallbackLink: { id: 'Buka halaman Kontak', en: 'Open the Contact page' },
	packagesHeading: { id: 'Paket', en: 'Packages' },
	termsHeading: { id: 'Ketentuan harga dan pembayaran', en: 'Pricing and payment terms' },
};

export const portfolioPage = {
	title: { id: 'Portofolio', en: 'Portfolio' },
	intro: {
		id: 'Semua karya di halaman ini adalah Concept Project. Saya membuatnya untuk menunjukkan kemampuan saya, bukan untuk pelanggan, dan nama usaha serta kegiatan di dalamnya fiktif.',
		en: 'Every piece on this page is a Concept Project. I made them to show my skills, not for clients, and the business and event names in them are fictional.',
	},
	notClient: { id: 'Nama fiktif, bukan proyek pelanggan.', en: 'Fictional name, not client work.' },
	workType: { id: 'Jenis pekerjaan', en: 'Type of work' },
	goal: { id: 'Tujuan', en: 'Goal' },
	process: { id: 'Proses singkat', en: 'Short process' },
	result: { id: 'Hasil visual', en: 'Visual result' },
};

export type Project = {
	slug: string;
	/** Fictional name. Always shown next to the Concept Project label. */
	name: string;
	image: { src: string; width: number; height: number; alt: T };
	work: T;
	summary: T;
	goal: T;
	process: T[];
	result: T;
};

export const projects: Project[] = [
	{
		slug: 'dapur-kenanga',
		name: 'Dapur Kenanga',
		image: {
			src: '/portfolio/dapur-kenanga.svg',
			width: 1200,
			height: 900,
			alt: {
				id: 'Papan identitas Concept Project Dapur Kenanga: logo bunga kenanga kuning di atas hijau tua, empat warna identitas, contoh huruf Young Serif dan Plus Jakarta Sans, serta nasi kotak dengan sleeve hijau dan stiker bulat.',
				en: 'Dapur Kenanga Concept Project identity board: a yellow kenanga flower logo on deep green, four identity colors, Young Serif and Plus Jakarta Sans type samples, and a rice box with a green sleeve and a round sticker.',
			},
		},
		work: { id: 'Logo dan identitas visual dasar untuk UMKM kuliner', en: 'Logo and basic visual identity for a culinary MSME' },
		summary: {
			id: 'Identitas untuk warung makan rumahan fiktif yang menjual nasi kotak dan sambal.',
			en: 'An identity for a fictional home-style eatery that sells rice boxes and sambal.',
		},
		goal: {
			id: 'Menunjukkan cara membangun identitas usaha kecil yang konsisten, dari logo sampai kemasan.',
			en: 'Show how a small business identity stays consistent, from the logo to the packaging.',
		},
		process: [
			{ id: 'Menentukan karakter usaha: hangat, rumahan, dan mudah dikenali di kemasan kecil.', en: 'Define the business character: warm, homely, and easy to recognize on small packaging.' },
			{ id: 'Menggambar logo dari bentuk bunga kenanga dan menyusun palet empat warna.', en: 'Draw the logo from the kenanga flower and build a four-color palette.' },
			{ id: 'Memilih pasangan huruf untuk nama usaha dan informasi menu.', en: 'Choose a type pairing for the business name and menu information.' },
			{ id: 'Menerapkan identitas pada sleeve nasi kotak dan stiker penutup.', en: 'Apply the identity to a rice box sleeve and a seal sticker.' },
		],
		result: {
			id: 'Papan identitas berisi logo, palet warna, tipografi, dan penerapan pada kemasan.',
			en: 'An identity board with the logo, color palette, typography, and packaging application.',
		},
	},
	{
		slug: 'pekan-literasi',
		name: 'Pekan Literasi Mahasiswa',
		image: {
			src: '/portfolio/pekan-literasi.svg',
			width: 1200,
			height: 900,
			alt: {
				id: 'Tiga materi Concept Project Pekan Literasi Mahasiswa berwarna biru tua dan oranye: poster utama, unggahan feed persegi, dan story vertikal dengan judul, tanggal, tempat, dan cara mendaftar yang sama.',
				en: 'Three Pekan Literasi Mahasiswa Concept Project pieces in navy and orange: a main poster, a square feed post, and a vertical story sharing the same title, date, venue, and sign-up details.',
			},
		},
		work: { id: 'Poster dan konten media sosial untuk kegiatan mahasiswa', en: 'Poster and social media content for a student event' },
		summary: {
			id: 'Materi publikasi untuk kegiatan literasi mahasiswa fiktif.',
			en: 'Publicity materials for a fictional student literacy event.',
		},
		goal: {
			id: 'Menunjukkan hierarki informasi yang jelas dan visual yang tetap konsisten di beberapa ukuran.',
			en: 'Show a clear information hierarchy and visuals that stay consistent across several sizes.',
		},
		process: [
			{ id: 'Mengurutkan informasi dari yang paling penting: nama kegiatan, tanggal, tempat, lalu cara mendaftar.', en: 'Order the information by importance: event name, date, venue, then how to sign up.' },
			{ id: 'Menyusun poster utama dengan satu bentuk grafis buku terbuka yang mudah diulang.', en: 'Build the main poster around one open-book shape that is easy to repeat.' },
			{ id: 'Mengadaptasi poster menjadi unggahan feed persegi dan story vertikal.', en: 'Adapt the poster into a square feed post and a vertical story.' },
		],
		result: {
			id: 'Poster utama, unggahan feed 1:1, dan story 9:16 dengan informasi yang sama.',
			en: 'A main poster, a 1:1 feed post, and a 9:16 story with the same information.',
		},
	},
	{
		slug: 'rumah-jahit-asri',
		name: 'Rumah Jahit Asri',
		image: {
			src: '/portfolio/rumah-jahit-asri.svg',
			width: 1200,
			height: 900,
			alt: {
				id: 'Concept Project landing page Rumah Jahit Asri dalam tampilan desktop dan seluler: judul, tombol WhatsApp, daftar layanan jahit, dan alur pemesanan tiga langkah.',
				en: 'Rumah Jahit Asri Concept Project landing page in desktop and mobile views: headline, WhatsApp button, tailoring service list, and a three-step ordering flow.',
			},
		},
		work: { id: 'UI/UX dan pengembangan landing page untuk usaha lokal', en: 'UI/UX and landing page development for a local business' },
		summary: {
			id: 'Landing page untuk usaha jahit dan permak pakaian fiktif.',
			en: 'A landing page for a fictional tailoring and clothing alteration shop.',
		},
		goal: {
			id: 'Menunjukkan cara mengubah informasi usaha menjadi halaman yang mudah digunakan.',
			en: 'Show how business information becomes a page that is easy to use.',
		},
		process: [
			{ id: 'Mengelompokkan informasi usaha menjadi layanan, alur pemesanan, dan kontak.', en: 'Group the business information into services, ordering steps, and contact.' },
			{ id: 'Merancang tampilan seluler lebih dulu agar tombol WhatsApp mudah dijangkau.', en: 'Design the mobile view first so the WhatsApp button is easy to reach.' },
			{ id: 'Menyesuaikan susunan yang sama untuk layar desktop.', en: 'Adapt the same structure for desktop screens.' },
		],
		result: {
			id: 'Tampilan desktop dan seluler untuk halaman yang sama.',
			en: 'Desktop and mobile views of the same page.',
		},
	},
];

export const customerExperience = {
	title: { id: 'Customer Experience', en: 'Customer Experience' },
	intro: {
		id: 'Halaman ini merangkum wawancara saya dengan seorang calon pengguna Aulia’s 店. Isinya adalah temuan riset, bukan testimoni pelanggan.',
		en: 'This page summarizes my interview with a potential user of Aulia’s 店. It reports research findings, not a customer testimonial.',
	},
	respondent: {
		heading: { id: 'Responden', en: 'Respondent' },
		rows: [
			{ term: { id: 'Nama', en: 'Name' }, value: { id: 'Ijlal', en: 'Ijlal' } },
			{
				term: { id: 'Status', en: 'Status' },
				value: { id: 'Mahasiswa dan menjalankan bisnis di bidang teknologi', en: 'University student who runs a technology business' },
			},
			{
				term: { id: 'Hubungan dengan produk', en: 'Relation to the product' },
				value: {
					id: 'Calon pengguna yang termasuk target mahasiswa serta individu atau UMKM',
					en: 'A potential user within the student and individual or MSME target groups',
				},
			},
		],
	},
	method: {
		heading: { id: 'Metode', en: 'Method' },
		text: {
			id: 'Wawancara dengan satu responden. Temuannya dikelompokkan menjadi kebutuhan, faktor kepercayaan, fitur penting, keunggulan yang dirasakan, dan penilaian harga.',
			en: 'An interview with one respondent. The findings are grouped into needs, trust factors, important features, perceived strengths, and price assessment.',
		},
	},
	findingsHeading: { id: 'Temuan wawancara', en: 'Interview findings' },
	findings: [
		{
			heading: { id: 'Kebutuhan', en: 'Needs' },
			text: {
				id: 'Layanan yang paling relevan bagi responden adalah desain konten media sosial, poster, serta logo dan identitas visual dasar.',
				en: 'The most relevant services for the respondent were social media content design, posters, and logo and basic visual identity.',
			},
		},
		{
			heading: { id: 'Faktor kepercayaan', en: 'Trust factors' },
			text: {
				id: 'Kepercayaan terbentuk setelah responden memeriksa email, Instagram, dan WhatsApp yang menggunakan identitas pemilik secara konsisten. Temuan ini berasal dari pemeriksaan pada kanal kontak tersebut. Website ini tidak menampilkan foto profil Aulia.',
				en: 'Trust formed after the respondent checked the email, Instagram, and WhatsApp accounts and found that they use the owner’s identity consistently. This finding comes from checking those contact channels. This website does not show a profile photo of Aulia.',
			},
		},
		{
			heading: { id: 'Fitur penting', en: 'Important features' },
			text: {
				id: 'Informasi paket dan harga, estimasi pengerjaan, alur yang jelas, dan pesan WhatsApp otomatis membantu responden mengambil keputusan.',
				en: 'Package and price information, turnaround estimates, a clear process, and the pre-filled WhatsApp message helped the respondent decide.',
			},
		},
		{
			heading: { id: 'Keunggulan yang dirasakan', en: 'Perceived strengths' },
			text: {
				id: 'Harga yang kompetitif, estimasi yang cepat, dan jumlah revisi menjadi keunggulan menurut responden.',
				en: 'The respondent saw competitive prices, quick turnaround, and the number of revisions as strengths.',
			},
		},
		{
			heading: { id: 'Penilaian harga', en: 'Price assessment' },
			text: {
				id: 'Kisaran harga dinilai masuk akal bagi mahasiswa dan UMKM, tidak terlalu murah dan tidak terlalu mahal.',
				en: 'The price range was judged reasonable for students and MSMEs, neither too cheap nor too expensive.',
			},
		},
	],
	conclusion: {
		heading: { id: 'Kesimpulan', en: 'Conclusion' },
		text: {
			id: 'Responden membutuhkan layanan desain dasar dengan harga yang masuk akal, dan keputusannya dibantu oleh informasi yang jelas serta identitas pemilik yang konsisten. Karena itu website ini menampilkan harga mulai, estimasi, dan revisi di setiap layanan, menyiapkan pesan WhatsApp yang sudah terisi, dan menampilkan WhatsApp, email, serta Instagram bersama di halaman Kontak.',
			en: 'The respondent needs basic design services at a reasonable price, and the decision was helped by clear information and a consistent owner identity. That is why this website shows the starting price, turnaround, and revisions for every service, prepares a pre-filled WhatsApp message, and lists WhatsApp, email, and Instagram together on the Contact page.',
		},
	},
};

export const brandExperience = {
	title: { id: 'Brand Experience', en: 'Brand Experience' },
	intro: {
		id: 'Brand experience Aulia’s 店 dibentuk lewat empat dimensi: sensorik, afektif, intelektual, dan perilaku. Berikut penerapannya di website ini.',
		en: 'The Aulia’s 店 brand experience is shaped through four dimensions: sensory, affective, intellectual, and behavioral. Here is how each one appears on this website.',
	},
	applied: { id: 'Di website ini', en: 'On this website' },
	sensory: {
		heading: { id: 'Sensorik', en: 'Sensory' },
		text: {
			id: 'Ivory, vermilion, dan charcoal membentuk pengalaman visual seperti media cetak modern. Tipografi editorial dipadukan dengan elemen geometris dari 店. Karya ditampilkan jelas tanpa dekorasi yang tidak mendukung isi.',
			en: 'Ivory, vermilion, and charcoal create a visual experience like modern print media. Editorial typography is paired with the geometric 店 module. Work is shown clearly, without decoration that does not support the content.',
		},
		colors: [
			{ name: { id: 'Ivory, latar', en: 'Ivory, background' }, hex: '#F6F0E7' },
			{ name: { id: 'Charcoal, teks utama', en: 'Charcoal, main text' }, hex: '#211C18' },
			{ name: { id: 'Teks sekunder', en: 'Secondary text' }, hex: '#625950' },
			{ name: { id: 'Vermilion, aksen', en: 'Vermilion, accent' }, hex: '#B23A2B' },
		],
		type: [
			{ family: 'Newsreader', role: { id: 'Judul', en: 'Headings' } },
			{ family: 'Source Sans 3', role: { id: 'Isi dan antarmuka', en: 'Body and interface' } },
			{ family: 'Noto Serif SC', role: { id: 'Karakter 店', en: 'The 店 character' } },
		],
	},
	affective: {
		heading: { id: 'Afektif', en: 'Affective' },
		text: {
			id: 'Website diarahkan untuk membuat pengunjung merasa tenang, dekat dengan pemilik usaha, dan yakin karena harga serta proses dijelaskan sejak awal.',
			en: 'The website aims to make visitors feel calm, close to the business owner, and confident because prices and the process are explained from the start.',
		},
		points: [
			{ id: 'Bahasa yang personal, memakai kata saya dan bukan kami.', en: 'Personal wording that speaks as one person, never as a company.' },
			{ id: 'Harga mulai, DP, dan ketentuan revisi tertulis sebelum pengunjung menghubungi saya.', en: 'Starting prices, the down payment, and revision terms are written out before visitors contact me.' },
		] as T[],
	},
	intellectual: {
		heading: { id: 'Intelektual', en: 'Intellectual' },
		text: {
			id: 'Pengunjung dapat memahami perbedaan layanan melalui cakupan, harga awal, estimasi, revisi, dan hasil yang akan diterima.',
			en: 'Visitors can understand how the services differ through scope, starting price, turnaround, revisions, and deliverables.',
		},
		points: [
			{ id: 'Setiap layanan memakai susunan informasi yang sama agar mudah dibandingkan.', en: 'Every service uses the same information layout so the services are easy to compare.' },
			{ id: 'Concept Project menjelaskan tujuan dan proses, bukan hanya gambar akhir.', en: 'Concept Projects explain the goal and process, not only the final image.' },
		] as T[],
	},
	behavioral: {
		heading: { id: 'Perilaku', en: 'Behavioral' },
		text: {
			id: 'Pengunjung melihat layanan, membandingkan pilihan, memeriksa proyek konsep, dan memulai percakapan WhatsApp dengan konteks layanan yang sudah tersedia.',
			en: 'Visitors browse the services, compare options, check the concept projects, and start a WhatsApp conversation with the service context already in place.',
		},
		steps: [
			{ page: 'services', label: { id: 'Lihat layanan', en: 'Browse the services' } },
			{ page: 'services', label: { id: 'Bandingkan harga, estimasi, dan revisi', en: 'Compare prices, turnaround, and revisions' } },
			{ page: 'portfolio', label: { id: 'Periksa Concept Project', en: 'Check the Concept Projects' } },
			{ page: 'contact', label: { id: 'Mulai percakapan WhatsApp', en: 'Start a WhatsApp conversation' } },
		] as { page: PageKey; label: T }[],
	},
};

export const contactPage = {
	title: { id: 'Kontak', en: 'Contact' },
	intro: {
		id: 'Konsultasi dan pemesanan saya layani lewat WhatsApp. Kamu juga bisa menghubungi saya lewat email atau Instagram.',
		en: 'I handle consultations and orders on WhatsApp. You can also reach me by email or on Instagram.',
	},
	online: {
		id: 'Semua layanan dikerjakan secara online. Konsultasi berlangsung lewat WhatsApp dan hasil pekerjaan dikirim secara digital.',
		en: 'All services are carried out online. Consultation happens on WhatsApp and finished work is delivered digitally.',
	},
	ctaHeading: { id: 'Mulai konsultasi', en: 'Start a consultation' },
	ctaText: {
		id: 'Tombol ini membuka WhatsApp dengan pesan pembuka yang sudah terisi.',
		en: 'This button opens WhatsApp with an opening message already filled in.',
	},
	fallback: {
		id: 'Jika tombol WhatsApp tidak terbuka, simpan nomor di atas lalu kirim pesan secara manual, atau hubungi saya lewat email.',
		en: 'If the WhatsApp button does not open, save the number above and send a message manually, or email me instead.',
	},
};

export const dashboardPage = {
	eyebrow: { id: 'Perbandingan layanan', en: 'Service comparison' },
	title: { id: 'Bandingkan layanan sesuai kebutuhanmu', en: 'Compare services for your needs' },
	intro: {
		id: 'Semua layanan saya ada di satu halaman ini, lengkap dengan harga mulai, estimasi pengerjaan, jumlah revisi, cakupan, dan berkas yang kamu terima. Saring menurut jenis pekerjaan dan batas harga mulai, lalu lanjutkan ke WhatsApp.',
		en: 'Every service I offer sits on this one page, with its starting price, turnaround estimate, revision rounds, scope, and the files you receive. Filter by type of work and a starting-price limit, then continue on WhatsApp.',
	},
	filterHeading: { id: 'Saring layanan', en: 'Filter services' },
	categoryLabel: { id: 'Jenis pekerjaan', en: 'Type of work' },
	budgetLabel: { id: 'Batas harga mulai', en: 'Starting price limit' },
	categories: {
		all: { id: 'Semua jenis', en: 'All types' },
		'graphic-design': { id: 'Desain grafis', en: 'Graphic design' },
		'ui-ux': { id: 'UI/UX', en: 'UI/UX' },
		website: { id: 'Website', en: 'Website' },
	},
	budgetAll: { id: 'Tanpa batas', en: 'No limit' },
	/** Thresholds sit between the real PRD §8 starting prices so every step changes the result. */
	budgetOptions: [
		{ value: 100000, label: { id: 'Sampai Rp100.000', en: 'Up to Rp100.000' } },
		{ value: 500000, label: { id: 'Sampai Rp500.000', en: 'Up to Rp500.000' } },
		{ value: 1000000, label: { id: 'Sampai Rp1.000.000', en: 'Up to Rp1.000.000' } },
		{ value: 2000000, label: { id: 'Sampai Rp2.000.000', en: 'Up to Rp2.000.000' } },
	],
	count: {
		one: { id: 'Menampilkan {n} layanan dari {total}.', en: 'Showing {n} service of {total}.' },
		other: { id: 'Menampilkan {n} layanan dari {total}.', en: 'Showing {n} services of {total}.' },
	},
	priceFigure: {
		title: { id: 'Perbandingan harga mulai', en: 'Starting price comparison' },
		text: {
			id: 'Panjang batang mengikuti harga mulai setiap layanan. Angka lengkapnya tertulis di sebelahnya.',
			en: 'Each bar follows the starting price of a service. The exact figure is written beside it.',
		},
	},
	turnaroundFigure: {
		title: { id: 'Perbandingan estimasi pengerjaan', en: 'Turnaround comparison' },
		text: {
			id: 'Batang menunjukkan rentang hari tercepat sampai terlama, dihitung sejak materi dan DP saya terima.',
			en: 'Each bar shows the fastest to longest day range, counted from the moment I receive your materials and down payment.',
		},
	},
	ledger: {
		title: { id: 'Rincian setiap layanan', en: 'Every service in detail' },
		details: { id: 'Lihat cakupan dan hasil', en: 'See the scope and deliverables' },
		servicesLink: { id: 'Lihat halaman Layanan untuk paket dan ketentuan', en: 'Open the Services page for packages and terms' },
	},
	empty: {
		title: { id: 'Belum ada layanan yang cocok', en: 'No service fits yet' },
		text: {
			id: 'Kombinasi jenis pekerjaan dan batas harga ini belum ada isinya. Naikkan batas harganya, atau tanyakan kebutuhanmu lewat WhatsApp.',
			en: 'Nothing sits inside this combination of work type and price limit. Raise the limit, or tell me what you need on WhatsApp.',
		},
		reset: { id: 'Tampilkan semua layanan', en: 'Show every service' },
	},
	next: {
		text: {
			id: 'Setelah memilih layanan, percakapan berlanjut lewat WhatsApp dengan nama layanan dan harga mulai yang sudah terisi.',
			en: 'Once you pick a service, the conversation continues on WhatsApp with the service name and starting price already filled in.',
		},
	},
};

export const notFound = {
	title: { id: 'Halaman tidak ditemukan', en: 'Page not found' },
	text: {
		id: 'Alamat ini tidak ada di Aulia’s 店. Mungkin tautannya salah ketik atau halamannya sudah dipindahkan.',
		en: 'This address does not exist on Aulia’s 店. The link may have a typo, or the page may have moved.',
	},
	links: { id: 'Coba halaman ini', en: 'Try these pages' },
	description: {
		id: 'Halaman tidak ditemukan. Kembali ke beranda Aulia’s 店.',
		en: 'Page not found. Go back to the Aulia’s 店 home page.',
	},
};

assertBilingual(
	{ meta, ogImageAlt, footer, home, about, servicesPage, portfolioPage, projects, customerExperience, brandExperience, contactPage, dashboardPage, notFound },
	'content',
);
