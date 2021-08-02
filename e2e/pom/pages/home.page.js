const BasePage = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
    constructor() {
        super();
    };

    /**
     * define selectors using getter methods
     */

    get title() {
       return $("//h1[text()='Chofer']");
    };

    get aceTechDocsHeader() {
        return $("//h1[text()='ACE-TECH-DOCS']");
    };

    get publishedBlueprintsTitle() {
        return $("//span[text()='Published Blueprints']");
    };

    get notificationsTitle() {
        return $("//h3[text()='Notifications']");
    };

    get newsAndUpdatesTitle() {
        return $("//h3[text()='News & Updates']");
    };

    get quickLinksTitle() {
        return $("//h5[text()='Quick links']");
    };

    get awsAnnouncementsTitle() {
        return $("//h3[text()='AWS Announcements']");
    };

    get azureAnnouncementsTitle() {
        return $("//h3[text()='AZURE Announcements']");
    };

    get latestTrainingTitle() {
        return $("//h3[text()='Latest Training']");
    };

    get latestPostsTitle() {
        return $("//h3[text()='Latest Posts']");
    };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
}

module.exports = new HomePage();
