const HomePage = require('./pages/home.page');
const LoginPage = require('./pages/login.page');
const ServiceCatalogPage = require('./pages/serviceCatalog.page');

class PageFactory {
    static getPage(pageName) {
        switch (pageName.toLowerCase()) {
            case 'login':
                return LoginPage;
            case 'home':
                return HomePage;
            case 'service-catalog':
                return ServiceCatalogPage;
            default:
                break;
        }
    }
}

module.exports = PageFactory;
