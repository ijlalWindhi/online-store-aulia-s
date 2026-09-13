import type { APIRoute } from 'astro';
import { langs, routes } from '../data/site.ts';

export const GET: APIRoute = ({ site }) => {
	const url = (path: string) => new URL(path, site).href;
	const entries = Object.values(routes).flatMap((paths) =>
		langs.map(
			(lang) =>
				`<url><loc>${url(paths[lang])}</loc>` +
				langs.map((alt) => `<xhtml:link rel="alternate" hreflang="${alt}" href="${url(paths[alt])}"/>`).join('') +
				`<xhtml:link rel="alternate" hreflang="x-default" href="${url(paths.id)}"/></url>`,
		),
	);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
