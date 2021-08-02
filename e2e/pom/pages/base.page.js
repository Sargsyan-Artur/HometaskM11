const baseUrl = require("../../wdio.conf").config.baseUrl;
const assert = require('chai').assert;
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class BasePage {
    open(url = `${baseUrl}`) {
        browser.url(url);
    };

    async validatePageUrl(url) {
        await browser.pause(1000)
        expect(browser).toHaveUrlContaining(url)
    };

    async waitElementBeClickable(locator) {
        await (locator).waitForClickable({timeout: 10000, timeoutMsg: `Element ${locator.selector} is not enable`});
    };
};
