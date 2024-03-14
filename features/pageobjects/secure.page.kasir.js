const { $ } = require('@wdio/globals')
class SecurePage {
    //assertion register
    get assertionLoginPageTitle () {
        return $('#chakra-toast-manager-top-right');
    }
    get assertionRegisNull () {
        return $('div[role="alert"]');
    }
    get assertionRegisNullEmail () {
        return $("div[role='alert']");
    }
    get assertionRegisNullPassword () {
        return $("div[role='alert']");
    }
    //assertion login
    get assertionHomepageTitle () {
        return $("div[class='css-trlcwy'] div:nth-child(1) div:nth-child(1) dl:nth-child(1) dt:nth-child(1)");
    }
    get assertionLoginEmail () {
        return $("div[role='alert']");
    }
    get assertionLoginPassword () {
        return $("div[role='alert']");
    }
    get assertionLoginInvalidCredentials () {
        return $("div[role='alert']");
    }
}

module.exports = new SecurePage();
