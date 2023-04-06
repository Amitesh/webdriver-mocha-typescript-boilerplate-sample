// import { expect } from 'chai';

before(() => {
	console.log('in before ====');
});

describe('webdriver.io page', () => {
	it('should have the right title', () => {
		browser.url('https://webdriver.io');
		browser.pause(6000);
		const title = browser.getTitle();
		expect(title).toBe(
			'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO'
		);

		expect('amitesh').toBe('amitesh');
	});
});
