import { assertBilingual, type T } from './site.ts';

export type ServicePackage = { slug: string; name: T; startingPrice: string };

export type ServiceCategory = 'graphic-design' | 'ui-ux' | 'website';

export type Service = {
	slug: string;
	name: T;
	shortDescription: T;
	/** Exactly as approved in PRD §8. Rupiah notation is kept identical in both languages. */
	startingPrice: string;
	priceUnit?: T;
	/** Machine-readable twins of startingPrice and turnaround. The dashboard filters and draws bars from these. */
	category: ServiceCategory;
	startingPriceValue: number;
	turnaroundDays: { min: number; max: number };
	turnaround: T;
	revisions: T;
	scope: T[];
	deliverables: T[];
	packages?: ServicePackage[];
};

const twoRounds = { id: '2 kali', en: '2 rounds' };

export const services: Service[] = [
	{
		slug: 'social-media',
		name: { id: 'Desain media sosial', en: 'Social media design' },
		shortDescription: {
			id: 'Desain untuk unggahan media sosial, bisa dipesan satuan atau dalam paket.',
			en: 'Designs for social media posts, ordered one at a time or as a package.',
		},
		startingPrice: 'Rp40.000',
		priceUnit: { id: 'per desain', en: 'per design' },
		category: 'graphic-design',
		startingPriceValue: 40000,
		turnaroundDays: { min: 1, max: 2 },
		turnaround: { id: '1 sampai 2 hari', en: '1 to 2 days' },
		revisions: twoRounds,
		scope: [
			{ id: 'Satu desain', en: 'One design' },
			{ id: 'Satu ukuran', en: 'One size' },
		],
		deliverables: [{ id: 'Berkas JPG atau PNG', en: 'JPG or PNG file' }],
		packages: [
			{ slug: 'five', name: { id: 'Lima desain', en: 'Five designs' }, startingPrice: 'Rp175.000' },
			{ slug: 'ten', name: { id: 'Sepuluh desain', en: 'Ten designs' }, startingPrice: 'Rp325.000' },
		],
	},
	{
		slug: 'poster',
		name: { id: 'Desain poster', en: 'Poster design' },
		shortDescription: {
			id: 'Poster dengan satu konsep dalam satu ukuran, dikirim sebagai gambar atau PDF.',
			en: 'A poster with one concept in one size, delivered as an image or PDF.',
		},
		startingPrice: 'Rp75.000',
		category: 'graphic-design',
		startingPriceValue: 75000,
		turnaroundDays: { min: 2, max: 3 },
		turnaround: { id: '2 sampai 3 hari', en: '2 to 3 days' },
		revisions: twoRounds,
		scope: [
			{ id: 'Satu konsep', en: 'One concept' },
			{ id: 'Satu ukuran', en: 'One size' },
		],
		deliverables: [{ id: 'Berkas JPG, PNG, atau PDF', en: 'JPG, PNG, or PDF file' }],
	},
	{
		slug: 'logo',
		name: { id: 'Logo dan identitas visual dasar', en: 'Logo and basic visual identity' },
		shortDescription: {
			id: 'Logo beserta warna dan tipografi, supaya usahamu tampil konsisten.',
			en: 'A logo with colors and typography, so your business looks consistent.',
		},
		startingPrice: 'Rp250.000',
		category: 'graphic-design',
		startingPriceValue: 250000,
		turnaroundDays: { min: 4, max: 7 },
		turnaround: { id: '4 sampai 7 hari', en: '4 to 7 days' },
		revisions: twoRounds,
		scope: [
			{ id: 'Satu konsep', en: 'One concept' },
			{ id: 'Logo', en: 'Logo' },
			{ id: 'Warna', en: 'Colors' },
			{ id: 'Tipografi', en: 'Typography' },
		],
		deliverables: [{ id: 'Berkas PNG, JPG, dan SVG', en: 'PNG, JPG, and SVG files' }],
	},
	{
		slug: 'ui-ux',
		name: { id: 'UI/UX web atau mobile', en: 'Web or mobile UI/UX' },
		shortDescription: {
			id: 'Desain tampilan website atau aplikasi sebelum masuk tahap pengembangan.',
			en: 'Interface design for a website or app before development starts.',
		},
		startingPrice: 'Rp375.000',
		category: 'ui-ux',
		startingPriceValue: 375000,
		turnaroundDays: { min: 5, max: 7 },
		turnaround: { id: '5 sampai 7 hari', en: '5 to 7 days' },
		revisions: twoRounds,
		scope: [{ id: 'Maksimal lima layar', en: 'Up to five screens' }],
		deliverables: [
			{ id: 'Desain high-fidelity', en: 'High-fidelity designs' },
			{ id: 'Prototipe dasar', en: 'Basic prototype' },
		],
	},
	{
		slug: 'landing-page',
		name: { id: 'Landing page', en: 'Landing page' },
		shortDescription: {
			id: 'Website satu halaman untuk mengenalkan produk, layanan, atau kegiatan.',
			en: 'A one-page website that introduces a product, service, or event.',
		},
		startingPrice: 'Rp750.000',
		category: 'website',
		startingPriceValue: 750000,
		turnaroundDays: { min: 5, max: 8 },
		turnaround: { id: '5 sampai 8 hari', en: '5 to 8 days' },
		revisions: twoRounds,
		scope: [{ id: 'Maksimal tujuh bagian', en: 'Up to seven sections' }],
		deliverables: [
			{ id: 'Halaman responsif', en: 'Responsive page' },
			{ id: 'Tombol WhatsApp', en: 'WhatsApp button' },
			{ id: 'SEO dasar', en: 'Basic SEO' },
		],
	},
	{
		slug: 'company-profile',
		name: { id: 'Company profile website', en: 'Company profile website' },
		shortDescription: {
			id: 'Website beberapa halaman untuk memperkenalkan usaha dan cara menghubunginya.',
			en: 'A multi-page website that introduces a business and how to reach it.',
		},
		startingPrice: 'Rp1.500.000',
		category: 'website',
		startingPriceValue: 1500000,
		turnaroundDays: { min: 10, max: 14 },
		turnaround: { id: '10 sampai 14 hari', en: '10 to 14 days' },
		revisions: twoRounds,
		scope: [{ id: 'Maksimal lima halaman', en: 'Up to five pages' }],
		deliverables: [
			{ id: 'Website responsif', en: 'Responsive website' },
			{ id: 'Informasi kontak', en: 'Contact details' },
			{ id: 'SEO dasar', en: 'Basic SEO' },
		],
	},
	{
		slug: 'catalog',
		name: { id: 'Website katalog atau online store sederhana', en: 'Simple catalog website or online store' },
		shortDescription: {
			id: 'Website untuk menampilkan produk atau layanan, dengan pemesanan lewat WhatsApp.',
			en: 'A website that lists products or services, with ordering through WhatsApp.',
		},
		startingPrice: 'Rp2.000.000',
		category: 'website',
		startingPriceValue: 2000000,
		turnaroundDays: { min: 14, max: 21 },
		turnaround: { id: '14 sampai 21 hari', en: '14 to 21 days' },
		revisions: twoRounds,
		scope: [{ id: 'Maksimal 20 produk atau layanan', en: 'Up to 20 products or services' }],
		deliverables: [
			{ id: 'Website katalog', en: 'Catalog website' },
			{ id: 'Pemesanan lewat WhatsApp', en: 'WhatsApp ordering' },
		],
	},
];

/** Services named most relevant in the Customer Experience interview (PRD §10.2). */
export const featuredSlugs = ['social-media', 'poster', 'logo'];

export const terms: T[] = [
	{ id: 'Harga akhir diberikan setelah kebutuhan dan ruang lingkup disepakati.', en: 'The final price is set once we agree on your needs and scope.' },
	{ id: 'DP 50 persen dibayar sebelum pengerjaan dimulai.', en: 'A 50 percent down payment is due before work starts.' },
	{ id: 'Pelunasan dilakukan sebelum berkas akhir diberikan.', en: 'The remaining balance is paid before the final files are delivered.' },
	{ id: 'Dua kali revisi berarti dua putaran pengumpulan masukan.', en: 'Two revisions means two rounds of collected feedback.' },
	{ id: 'Revisi tambahan mulai dari Rp25.000.', en: 'Additional revisions start from Rp25.000.' },
	{ id: 'Pengerjaan prioritas dikenai tambahan 30 persen jika kapasitas tersedia.', en: 'Rush work adds 30 percent, when I have capacity for it.' },
	{ id: 'Domain, hosting, penulisan konten, dan aset berbayar tidak termasuk kecuali disepakati.', en: 'Domain, hosting, copywriting, and paid assets are not included unless agreed.' },
	{ id: 'Kamu menyediakan materi dan informasi yang dibutuhkan.', en: 'You provide the materials and information the work needs.' },
	{ id: 'Perubahan ruang lingkup dapat mengubah harga dan estimasi.', en: 'Changes to the scope can change the price and turnaround.' },
];

/** PRD §13 service process. */
export const processSteps: T[] = [
	{ id: 'Kamu memilih layanan.', en: 'You choose a service.' },
	{ id: 'Kita berkonsultasi lewat WhatsApp.', en: 'We talk it through on WhatsApp.' },
	{ id: 'Kita menyepakati ruang lingkup, harga akhir, dan DP 50 persen.', en: 'We agree on the scope, final price, and 50 percent down payment.' },
	{ id: 'Saya mengerjakan dan mengirimkan hasil untuk kamu tinjau.', en: 'I do the work and send it to you for review.' },
	{ id: 'Kamu memberi masukan sesuai jumlah revisi.', en: 'You give feedback within the included revisions.' },
	{ id: 'Kamu melunasi pembayaran dan menerima berkas akhir.', en: 'You pay the balance and receive the final files.' },
];

assertBilingual({ services, terms, processSteps }, 'services');

// PRD §8 defines seven services. A bad edit must fail the build, not the dashboard.
// Empty localized text, including revisions, is already rejected by assertBilingual above.
if (services.length !== 7) throw new Error(`services: expected seven services, found ${services.length}`);
if (new Set(services.map((service) => service.slug)).size !== services.length) throw new Error('services: duplicate slug');
for (const { slug, startingPriceValue, turnaroundDays, scope, deliverables } of services) {
	if (!Number.isInteger(startingPriceValue) || startingPriceValue <= 0) throw new Error(`services: ${slug} startingPriceValue must be a positive integer`);
	if (!Number.isInteger(turnaroundDays.min) || turnaroundDays.min < 1) throw new Error(`services: ${slug} turnaroundDays.min must be at least 1`);
	if (turnaroundDays.max < turnaroundDays.min) throw new Error(`services: ${slug} turnaroundDays.max is below min`);
	if (!scope.length || !deliverables.length) throw new Error(`services: ${slug} is missing scope or deliverables`);
}
