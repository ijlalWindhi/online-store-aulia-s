export const langs = ['id', 'en'] as const;
export type Lang = (typeof langs)[number];
/** Every user-facing string exists in both languages. */
export type T = Record<Lang, string>;

export const brand = 'Aulia’s 店';

export const contact = {
	whatsapp: '6281334666364',
	whatsappDisplay: '+62 813-3466-6364',
	email: 'auliarmdnii1910@gmail.com',
	instagram: '@auliarmdnii',
	instagramUrl: 'https://www.instagram.com/auliarmdnii/',
	region: { id: 'Kabupaten Nganjuk, Jawa Timur, Indonesia', en: 'Nganjuk Regency, East Java, Indonesia' },
};

export type PageKey = 'home' | 'about' | 'services' | 'dashboard' | 'portfolio' | 'customerExperience' | 'brandExperience' | 'contact';

export const routes: Record<PageKey, T> = {
	home: { id: '/', en: '/en/' },
	about: { id: '/tentang', en: '/en/about' },
	services: { id: '/layanan', en: '/en/services' },
	dashboard: { id: '/dashboard', en: '/en/dashboard' },
	portfolio: { id: '/portofolio', en: '/en/portfolio' },
	customerExperience: { id: '/customer-experience', en: '/en/customer-experience' },
	brandExperience: { id: '/brand-experience', en: '/en/brand-experience' },
	contact: { id: '/kontak', en: '/en/contact' },
};

export type NavLink = { page: PageKey; label: T };
export type NavGroup = { label: T; children: NavLink[] };

export const nav: (NavLink | NavGroup)[] = [
	{ page: 'home', label: { id: 'Beranda', en: 'Home' } },
	{ page: 'about', label: { id: 'Tentang', en: 'About Us' } },
	{ page: 'services', label: { id: 'Layanan', en: 'Services' } },
	{ page: 'dashboard', label: { id: 'Dashboard', en: 'Dashboard' } },
	{ page: 'portfolio', label: { id: 'Portofolio', en: 'Portfolio' } },
	{
		label: { id: 'Experience', en: 'Experience' },
		children: [
			{ page: 'customerExperience', label: { id: 'Customer Experience', en: 'Customer Experience' } },
			{ page: 'brandExperience', label: { id: 'Brand Experience', en: 'Brand Experience' } },
		],
	},
	{ page: 'contact', label: { id: 'Kontak', en: 'Contact Us' } },
];

export const ui = {
	skip: { id: 'Langsung ke konten utama', en: 'Skip to main content' },
	menu: { id: 'Menu', en: 'Menu' },
	mainNav: { id: 'Navigasi utama', en: 'Main navigation' },
	otherLanguage: { id: 'English', en: 'Bahasa Indonesia' },
	home: { id: 'beranda', en: 'home' },
	tagline: { id: 'Desain yang Pas untuk Langkahmu', en: 'Design That Fits Your Next Step' },
	consult: { id: 'Konsultasi lewat WhatsApp', en: 'Consult via WhatsApp' },
	order: { id: 'Pesan lewat WhatsApp', en: 'Order via WhatsApp' },
	packageLabel: { id: 'paket', en: 'package' },
	conceptProject: { id: 'Concept Project', en: 'Concept Project' },
	startingPrice: { id: 'Harga mulai', en: 'Starting price' },
	from: { id: 'mulai', en: 'from' },
	turnaround: { id: 'Estimasi', en: 'Turnaround' },
	revisions: { id: 'Revisi', en: 'Revisions' },
	scope: { id: 'Cakupan', en: 'Scope' },
	deliverables: { id: 'Hasil', en: 'Deliverables' },
	contactHeading: { id: 'Kontak', en: 'Contact' },
	region: { id: 'Wilayah operasional', en: 'Service area' },
	serviceModel: { id: 'Model layanan', en: 'Service model' },
};

const whatsappText = {
	order: { id: 'Halo Aulia, saya tertarik memesan {service} dari Aulia’s 店.', en: 'Hello Aulia, I am interested in ordering {service} from Aulia’s 店.' },
	package: { id: 'Paket: {package}', en: 'Package: {package}' },
	price: { id: 'Harga mulai: {price}', en: 'Starting price: {price}' },
	consult: { id: 'Halo Aulia, saya ingin berkonsultasi tentang layanan Aulia’s 店.', en: 'Hello Aulia, I would like to ask about Aulia’s 店 services.' },
	next: { id: 'Mohon informasi mengenai proses konsultasi selanjutnya. Terima kasih.', en: 'Please let me know the next consultation step. Thank you.' },
};

export type Order = { service: string; package?: string; price: string };

/** Static wa.me link with the PRD §12 message. Without an order it opens a general consultation. */
export function whatsappUrl(lang: Lang, order?: Order): string {
	const w = whatsappText;
	const lines = order
		? [
				w.order[lang].replace('{service}', order.service),
				order.package ? w.package[lang].replace('{package}', order.package) : '',
				w.price[lang].replace('{price}', order.price),
				w.next[lang],
			]
		: [w.consult[lang], w.next[lang]];
	return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`;
}

/**
 * PRD §20: the build fails when a translation is missing, so Indonesian text never
 * silently appears on an English page. Also rejects the em dash in any copy.
 */
export function assertBilingual(value: unknown, path = 'content'): void {
	if (Array.isArray(value)) return value.forEach((item, i) => assertBilingual(item, `${path}[${i}]`));
	if (typeof value === 'string') {
		if (value.includes('—')) throw new Error(`Em dash found at ${path}`);
		return;
	}
	if (!value || typeof value !== 'object') return;
	const record = value as Record<string, unknown>;
	if ('id' in record || 'en' in record) {
		for (const lang of langs) {
			const text = record[lang];
			if (typeof text !== 'string' || !text.trim()) throw new Error(`Missing "${lang}" text at ${path}`);
			assertBilingual(text, `${path}.${lang}`);
		}
		return;
	}
	for (const [key, item] of Object.entries(record)) assertBilingual(item, `${path}.${key}`);
}

assertBilingual({ contact, routes, nav, ui, whatsappText }, 'site');
