/**
 * Pure filter shared by the dashboard tests and the browser enhancement.
 * Kept free of DOM access so it runs under `node --test`.
 */

/** Select values arrive as strings, and the unlimited option has an empty value. */
function toLimit(value) {
	const limit = Number(value);
	return value === '' || value === null || value === undefined || !Number.isFinite(limit) ? Infinity : limit;
}

export function filterServices(services, { category = 'all', maxBudget = Infinity } = {}) {
	const limit = toLimit(maxBudget);
	return services.filter((service) => {
		const categoryMatches = !category || category === 'all' || service.category === category;
		return categoryMatches && service.startingPriceValue <= limit;
	});
}
