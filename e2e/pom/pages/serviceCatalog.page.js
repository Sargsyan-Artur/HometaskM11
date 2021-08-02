const BasePage = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ServiceCatalog extends BasePage {
    constructor() {
        super();
    };

    /**
     * define selectors using getter methods
     */
    get url() {
        return "https://backstage-dev.acedev.4poc.net/catalog?filters%5Buser%5D=all&filters%5Bkind%5D=component"
    }

    get allComponentsMockUrl() {
        return "https://backstage-dev-api.acedev.4poc.net/api/catalog/entities?filter=kind=component"
    }

    get title() {
        return $("//h1[text()='Service Catalog']");
    };

    get serviceCatalogMenuButton() {
        return $("//a[@href='/catalog']");
    }

    get typeDropDown() {
        return $("//span[text()='Type']/following::div[1]");
    }

    get allFilter() {
        return $("//li[text()='All']");
    }

    get docFilter() {
        return $("//li[text()='Documentation']");
    }

    get serviceFilter() {
        return $("//li[text()='Service']");
    }

    get systemFilter() {
        return $("//li[text()='System']");
    }

    get websiteFilter() {
        return $("//li[text()='Website']");
    }

    get createComponentButton() {
        return $("//span[text()='Create Component']")
    }

    get searchInput() {
        return $("//input[@placeholder='Search']")
    }

    get backToServiceCatalog() {
        return $("//span[text()='Back to Service Catalog']")
    }

    get firstComponent() {
        return $("//tbody/tr[1]/td/a/span/span")
    }

    get firstComponentOwnerColumn() {
        return $("//tbody/tr[1]/td[2]/div")
    }

    get firstComponentLifecycleColumn() {
        return $("//tbody/tr[1]/td[3]")
    }

    get firstComponentDescriptionColumn() {
        return $("//tbody/tr[1]/td[4]/div/span")
    }

    get firstComponentGithubIcon() {
        return $("//tbody/tr[1]/td[6]/div/button[1]")
    }

    get firstComponentEditIcon() {
        return $("//tbody/tr[1]/td[6]/div/button[2]")
    }

    get firstComponentStarIcon() {
        return $("//tbody/tr[1]/td[6]/div/button[3]/span[1]/div/*[local-name() = 'svg']")
    }

    get nameSortButton() {
        return $("//div[text()='Name']")
    }

    get ownerSortButton() {
        return $("//div[text()='Owner']")
    }

    get lifecycleSortButton() {
        return $("//div[text()='Lifecycle']")
    }

    get descriptionSortButton() {
        return $("//div[text()='Description']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
}

module.exports = new ServiceCatalog();
