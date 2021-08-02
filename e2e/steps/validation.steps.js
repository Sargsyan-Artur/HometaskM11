const {Given, Then, When} = require('cucumber');
const BasePage = new (require('../pom/pages/base.page'));
const stepFunctions = require('../steps/utils/stepFunctions');
const assert = require('chai').assert;

Then(/^I should navigate to ("(.*)")? page$/, async (pageUrl) => {
    if(pageUrl.includes("->")) {
        const url = await stepFunctions.findElement(pageUrl);
        await BasePage.validatePageUrl(url);
    } else {
        await BasePage.validatePageUrl(pageUrl);
    }
});

Then(/^(Eventually )?The "(.*)" element text should be "(.*)"$/, async (eventually, element, title) => {
    const locator = await stepFunctions.findElement(element);
    if (eventually) {
        await BasePage.waitElementBeEnabled(locator);
    }
    assert.equal(locator.getText(), title);
});

Then(/^I should check ("(.*)") is displayed$/, async (element) => {
    const locator = await stepFunctions.findElement(element);
    await locator.scrollIntoView();
    assert.equal(await locator.isDisplayed(), true);
});

Then(/^(Eventually )?The "(.*)" element should be visible$/, async (eventually, element) => {
    const locator = await stepFunctions.findElement(element);
    if (eventually) {
        await BasePage.waitElementBeEnabled(locator);
    }
});

Then(/^I should check ("(.*)") is clickable$/, async (element) => {
    const locator = await stepFunctions.findElement(element);
    assert.equal(await locator.waitForClickable({timeout: 3000}), true);
});

Then(/^I should see ("(.*)") text on ("(.*)") field$/, async (text, element) => {
    const locator = await stepFunctions.findElement(element);
    const elementText = await locator.getText()
    assert.equal(text.toLowerCase(), elementText.toLowerCase())
});

Then(/^I should see ("(.*)") field is empty$/, async (element) => {
    const locator = await stepFunctions.findElement(element);
    const elementText = await locator.getText()
    assert.equal(elementText, '')
});

Then(/^I should check "([^"]*)" color is "([^"]*)"$/, async (element, color) => {
    const locator = await stepFunctions.findElement(element);
    const elementColor = await locator.getCSSProperty("color")
    assert.equal(elementColor.parsed.hex, color)
})

Then(/^I should check all components type when components filtered by (documentation|service|system|website|)$/, async (type) => {
    const mockUrl = await stepFunctions.findElement("service-catalog -> allComponentsMockUrl");
    const filteredMockUrl = `${mockUrl},spec.type=${type}`

    const mock = await browser.mock(filteredMockUrl, {
        method: 'get'
    })
    await browser.url(filteredMockUrl);
    const allComponentsData = mock.matches[0].body;

    allComponentsData.forEach(component => {
        assert.equal(component.spec.type, type)
    })
    const serviceCatalogUrl = await stepFunctions.findElement("service-catalog -> url");
    await  browser.url(serviceCatalogUrl)
})

Then(/^I get last component "([^"]*)" and change (name|owner|lifecycle|description|) to empty string$/, async (mockUrl, sortedBy) => {
    const url = await stepFunctions.findElement(mockUrl);
    const mock = await browser.mock(url, {
        method: 'get'
    })

    await browser.url(url);
    const allComponentsData = mock.matches[0].body;
    const lastComponent = allComponentsData[allComponentsData.length - 1];

    if(sortedBy === "name" || sortedBy === "description") {
        lastComponent.metadata[sortedBy] = "";
    }

    if(sortedBy === "lifecycle") {
        lastComponent.spec[sortedBy] = "";
    }

    if(sortedBy === "owner") {
        lastComponent.relations[0].target.name = "";
    }

    mock.respondOnce(allComponentsData, {statusCode: 200, fetchResponse: true})
    const serviceCatalogUrl = await stepFunctions.findElement("service-catalog -> url");
    await  browser.url(serviceCatalogUrl)
})

