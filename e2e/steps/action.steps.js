const {Given, Then, When} = require('cucumber');
const BasePage = new (require('../pom/pages/base.page'));
const LoginPage = require('../pom/pages/login.page');
const stepFunctions = require('../steps/utils/stepFunctions');

Given(/^I open the page(?: "(.*)")?$/, async (pageUrl) => {
    if(pageUrl) {
        const url = await stepFunctions.findElement(pageUrl);
        await BasePage.open(url);
    }
    await BasePage.open();
});

Then(/^I should login as ("(.*)") and ("(.*)")$/, async (username, password) => {
    await LoginPage.login(username, password);
});

When(/^(Eventually )?I click ("(.*)")$/, async (eventually, element) => {
    const locator = await stepFunctions.findElement(element);
    if (eventually){
        await BasePage.waitElementBeClickable(locator);
    }
    await locator.click();
});

Then(/^I should wait "(.*)"$/, async (milliseconds) => {
    await browser.pause(milliseconds * 1000)
});

When(/^I enter ("(.*)") on ("(.*)")$/, async (value, element) => {
    const locator = await stepFunctions.findElement(element);
    await locator.setValue(value)
});

Then(/^I should switch Window to "(.*)"$/, async (window) => {
    const url = await stepFunctions.findElement(window);
    await browser.switchWindow(url)
})

