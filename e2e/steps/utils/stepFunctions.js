const pageFactory = require("../../pom/pageFactory");

let findElement = async (locatorName) => {
    const splitLocator = locatorName.split(" -> ");
    const page = splitLocator[0];
    const element = splitLocator[1];
    return await (pageFactory.getPage(page))[element];
};

module.exports = {
    findElement,
};
