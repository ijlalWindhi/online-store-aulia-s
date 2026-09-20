import test from 'node:test';
import assert from 'node:assert/strict';
import { filterServices } from '../src/lib/dashboard-filter.mjs';

/** Shape mirrors the seven real services in src/data/services.ts. */
const fixture = [
	{ slug: 'social-media', category: 'graphic-design', startingPriceValue: 40000 },
	{ slug: 'poster', category: 'graphic-design', startingPriceValue: 75000 },
	{ slug: 'logo', category: 'graphic-design', startingPriceValue: 250000 },
	{ slug: 'ui-ux', category: 'ui-ux', startingPriceValue: 375000 },
	{ slug: 'landing-page', category: 'website', startingPriceValue: 750000 },
	{ slug: 'company-profile', category: 'website', startingPriceValue: 1500000 },
	{ slug: 'catalog', category: 'website', startingPriceValue: 2000000 },
];

const slugs = (result) => result.map((service) => service.slug);

test('all categories and an unlimited budget return every service', () => {
	assert.equal(filterServices(fixture, { category: 'all', maxBudget: Infinity }).length, 7);
	assert.equal(filterServices(fixture, {}).length, 7);
});

test('a category returns only its services', () => {
	assert.deepEqual(slugs(filterServices(fixture, { category: 'graphic-design' })), ['social-media', 'poster', 'logo']);
	assert.deepEqual(slugs(filterServices(fixture, { category: 'ui-ux' })), ['ui-ux']);
	assert.deepEqual(slugs(filterServices(fixture, { category: 'website' })), ['landing-page', 'company-profile', 'catalog']);
});

test('a maximum budget keeps services at or below it', () => {
	assert.deepEqual(slugs(filterServices(fixture, { maxBudget: 100000 })), ['social-media', 'poster']);
	assert.deepEqual(slugs(filterServices(fixture, { maxBudget: 40000 })), ['social-media']);
});

test('category and budget are combined with logical AND', () => {
	assert.deepEqual(slugs(filterServices(fixture, { category: 'graphic-design', maxBudget: 250000 })), ['social-media', 'poster', 'logo']);
	assert.deepEqual(slugs(filterServices(fixture, { category: 'website', maxBudget: 750000 })), ['landing-page']);
});

test('website within Rp500.000 returns no service', () => {
	assert.deepEqual(filterServices(fixture, { category: 'website', maxBudget: 500000 }), []);
});

test('select values arrive as strings and are normalized', () => {
	assert.deepEqual(slugs(filterServices(fixture, { maxBudget: '100000' })), ['social-media', 'poster']);
	assert.equal(filterServices(fixture, { maxBudget: '' }).length, 7);
	assert.equal(filterServices(fixture, { maxBudget: 'not a number' }).length, 7);
	assert.equal(filterServices(fixture, { category: '' }).length, 7);
});

test('the source array and its services are not mutated', () => {
	const snapshot = JSON.parse(JSON.stringify(fixture));
	const result = filterServices(fixture, { category: 'website', maxBudget: 1500000 });
	assert.notEqual(result, fixture);
	assert.deepEqual(fixture, snapshot);
});
