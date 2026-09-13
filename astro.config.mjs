// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://aulia-putri.store',
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Newsreader',
			cssVariable: '--font-heading',
			weights: [500],
			styles: ['normal'],
			fallbacks: ['Georgia', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Source Sans 3',
			cssVariable: '--font-body',
			weights: [400, 600],
			styles: ['normal'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			// Only the 店 glyph is downloaded; the family is listed first in every stack so 店 always uses it.
			provider: fontProviders.google(),
			name: 'Noto Serif SC',
			cssVariable: '--font-dian',
			weights: [700],
			styles: ['normal'],
			fallbacks: [],
			unicodeRange: ['U+5E97'],
			options: { experimental: { glyphs: ['店'] } },
		},
	],
});
