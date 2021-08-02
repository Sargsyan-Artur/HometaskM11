const BasePage = require('./base.page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    constructor() {
        super();
    }

    /**
     * define selectors using getter methods
     */

    get muiSvgIcon() {
        return $('[class="MuiSvgIcon-root jss16"]')
    };

    get singInWindow() {
        return "Sign in to your account"
    };

    get loginName() {
        return $('[name="loginfmt"]')
    };

    get loginButton() {
        return $('[id="idSIButton9"]')
    };

    get pass() {
        return $('[name="passwd"]')
    };

    get submit() {
        return $('[type="submit"]')
    };

    get choferWindow() {
        return "Chofer"
    };


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await (await this.muiSvgIcon).click();
        await browser.pause(5000);
        await browser.switchWindow(this.singInWindow);
        await (await this.loginName).waitForDisplayed();
        await (await this.loginName).setValue(`${username}`);
        await (await this.loginButton).click();
        await (await this.pass).waitForDisplayed();
        await (await this.pass).setValue(password);
        await (await this.submit).click();
        await browser.switchWindow(this.choferWindow);
        await browser.pause(2000);
        await browser.setWindowSize(1920,1080);
        await browser.pause(2000);
    }

}

module.exports = new LoginPage();
