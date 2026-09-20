// Post-build check of dist/ against the PRD. Run `pnpm build && pnpm verify`.
// The expected WhatsApp messages and prices are written out here on purpose, independent of the site code.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { langs, routes, contact } from '../src/data/site.ts';
import { services } from '../src/data/services.ts';
import { projects } from '../src/data/content.ts';

const SITE = 'https://aulia-putri.store';
const dist = new URL('../dist/', import.meta.url);
const failures = [];
const check = (ok, message) => ok || failures.push(message);

const fileFor = (path) => new URL(path === '/' ? 'index.html' : `${path.replace(/^\/|\/$/g, '')}/index.html`, dist);
const read = (path) => readFileSync(fileFor(path), 'utf8');
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'g')) ?? [];
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');

const PRD_PRICES = {
	'social-media': 'Rp40.000',
	poster: 'Rp75.000',
	logo: 'Rp250.000',
	'ui-ux': 'Rp375.000',
	'landing-page': 'Rp750.000',
	'company-profile': 'Rp1.500.000',
	catalog: 'Rp2.000.000',
};
const PRD_PACKAGES = { five: 'Rp175.000', ten: 'Rp325.000' };

/** Opening line of an order message, used to separate order CTAs from the general consultation link. */
const opener = { id: 'Halo Aulia, saya tertarik memesan', en: 'Hello Aulia, I am interested in ordering' };

const template = {
	id: (service, price, pkg) =>
		[`Halo Aulia, saya tertarik memesan ${service} dari Aulia’s 店.`, pkg && `Paket: ${pkg}`, `Harga mulai: ${price}`, 'Mohon informasi mengenai proses konsultasi selanjutnya. Terima kasih.'],
	en: (service, price, pkg) =>
		[`Hello Aulia, I am interested in ordering ${service} from Aulia’s 店.`, pkg && `Package: ${pkg}`, `Starting price: ${price}`, 'Please let me know the next consultation step. Thank you.'],
};

const titles = new Set();
const descriptions = new Set();

for (const [page, paths] of Object.entries(routes)) {
	for (const lang of langs) {
		const path = paths[lang];
		if (!existsSync(fileFor(path))) {
			failures.push(`${path}: missing build output`);
			continue;
		}
		const html = read(path);
		const other = lang === 'id' ? 'en' : 'id';

		check(html.includes(`<html lang="${lang}"`), `${path}: html lang is not ${lang}`);
		check(html.includes(`<link rel="canonical" href="${SITE}${path}">`), `${path}: canonical`);
		for (const l of langs) check(html.includes(`hreflang="${l}" href="${SITE}${paths[l]}"`), `${path}: hreflang ${l}`);
		check(html.includes(`hreflang="x-default" href="${SITE}${paths.id}"`), `${path}: hreflang x-default`);
		check(!html.includes('—'), `${path}: contains an em dash`);

		const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
		const description = attr(tags(html, 'meta').find((t) => t.includes('name="description"')) ?? '', 'content');
		check(title && !titles.has(title), `${path}: missing or duplicate title`);
		check(description && !descriptions.has(description), `${path}: missing or duplicate description`);
		titles.add(title);
		descriptions.add(description);

		const anchors = tags(html, 'a');
		const switcher = anchors.find((t) => attr(t, 'hreflang') === other);
		check(switcher && attr(switcher, 'href') === paths[other], `${path}: language switcher does not open ${paths[other]}`);

		for (const a of anchors) {
			const href = decode(attr(a, 'href') ?? '');
			check(href && href !== '#', `${path}: link without destination`);
			if (attr(a, 'target') === '_blank') check(/noopener/.test(attr(a, 'rel') ?? ''), `${path}: target=_blank without noopener`);
			if (href.startsWith('/')) {
				const [target, hash] = href.split('#');
				if (!existsSync(fileFor(target))) {
					failures.push(`${path}: dead internal link ${href}`);
				} else if (hash) {
					check(read(target).includes(`id="${hash}"`), `${path}: missing anchor ${href}`);
				}
			} else if (href.startsWith('https://wa.me/')) {
				check(href.startsWith(`https://wa.me/${contact.whatsapp}`), `${path}: WhatsApp link to wrong number ${href}`);
			}
		}

		// Both pages must open the same approved message for every service, so they are checked the same way.
		if (page === 'services' || page === 'dashboard') {
			const messages = anchors
				.map((a) => decode(attr(a, 'href') ?? ''))
				.filter((href) => href.startsWith('https://wa.me/6281334666364?text='))
				.map((href) => decodeURIComponent(href.split('?text=')[1]));
			for (const service of services) {
				check(service.startingPrice === PRD_PRICES[service.slug], `${service.slug}: price differs from PRD`);
				const price = service.priceUnit ? `${PRD_PRICES[service.slug]} ${service.priceUnit[lang]}` : PRD_PRICES[service.slug];
				const expected = template[lang](service.name[lang], price).filter(Boolean).join('\n');
				check(messages.includes(expected), `${path}: no WhatsApp CTA with message for ${service.slug}`);
				if (page === 'services') {
					for (const pkg of service.packages ?? []) {
						check(pkg.startingPrice === PRD_PACKAGES[pkg.slug], `${pkg.slug}: package price differs from PRD`);
						const expectedPkg = template[lang](service.name[lang], PRD_PACKAGES[pkg.slug], pkg.name[lang]).join('\n');
						check(messages.includes(expectedPkg), `${path}: no WhatsApp CTA for package ${pkg.slug}`);
					}
				}
			}
			const orders = messages.filter((message) => message.startsWith(opener[lang]));
			const expectedOrders = page === 'services' ? 9 : services.length;
			check(orders.length === expectedOrders, `${path}: expected ${expectedOrders} order CTAs, found ${orders.length}`);
		}

		if (page === 'dashboard') {
			// Filters and the empty state must not be visible before the script runs.
			check(/<fieldset[^>]*id="dashboard-filters"[^>]*\shidden/.test(html), `${path}: filters are not hidden in the static output`);
			check(/id="dashboard-empty"[^>]*\shidden/.test(html), `${path}: empty state is not hidden in the static output`);
			for (const service of services) {
				const marks = html.match(new RegExp(`data-service="${service.slug}"`, 'g')) ?? [];
				check(marks.length === 3, `${path}: ${service.slug} has ${marks.length} filterable representations, expected 3`);
				check(
					html.includes(`data-service="${service.slug}" data-category="${service.category}" data-price="${service.startingPriceValue}"`),
					`${path}: ${service.slug} comparison data attributes do not match the service data`,
				);
				check(html.includes(service.startingPrice), `${path}: ${service.slug} starting price is not printed`);
				check(html.includes(service.turnaround[lang]), `${path}: ${service.slug} turnaround is not printed`);
				check(html.includes(service.revisions[lang]), `${path}: ${service.slug} revisions are not printed`);
			}
		}

		if (page === 'home' || page === 'portfolio') {
			for (const project of projects) {
				const at = html.indexOf(`>${project.name}<`);
				check(at > 0 && html.lastIndexOf('Concept Project', at) > html.lastIndexOf('</li>', at), `${path}: ${project.name} is not labeled Concept Project`);
			}
		}

		if (page === 'contact') {
			check(html.includes(`href="mailto:auliarmdnii1910@gmail.com"`), `${path}: email link`);
			check(html.includes(`href="https://www.instagram.com/auliarmdnii/"`), `${path}: Instagram link`);
			check(html.includes('href="https://wa.me/6281334666364"') && html.includes('+62 813-3466-6364'), `${path}: visible WhatsApp number`);
		}
	}
}

for (const file of ['404.html', 'sitemap.xml', 'robots.txt', 'favicon.svg', 'favicon.ico', 'og.png']) {
	check(existsSync(new URL(file, dist)), `dist/${file} is missing`);
}
// The dashboard hides rows with the hidden attribute, which a class that sets display would beat.
const css = readdirSync(new URL('_astro/', dist))
	.filter((file) => file.endsWith('.css'))
	.map((file) => readFileSync(new URL(`_astro/${file}`, dist), 'utf8'))
	.join('');
check(/\[hidden\]\{display:none!important\}/.test(css), 'global.css must keep [hidden] { display: none !important }');

const routeCount = Object.keys(routes).length * langs.length;
const sitemap = readFileSync(new URL('sitemap.xml', dist), 'utf8');
check((sitemap.match(/<loc>/g) ?? []).length === routeCount, `sitemap.xml should list ${routeCount} URLs`);

if (failures.length) {
	console.error(`verify: ${failures.length} failure(s)\n- ${failures.join('\n- ')}`);
	process.exit(1);
}
console.log(`verify: ${routeCount} routes, 404, sitemap, links, hreflang, switchers, and ${services.length} services with packages passed`);
