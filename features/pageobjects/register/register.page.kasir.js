const { $ } = require('@wdio/globals')
class registerPage {

    async open(){
        return browser.url('https://kasirdemo.belajarqa.com/')
    }

    get linkRegis () {
        return $('a[href="/register"]')
    }
    get inputNameShop () {
        return $('#name');
    }

    get inputEmail () {
        return $('#email');
    }
    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async register (nameshop, email, password) {
        await this.linkRegis.click()
        await this.inputNameShop.setValue(nameshop);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}

module.exports = new registerPage();
