const { browser, $ } = require('@wdio/globals')
class LoginPage {
    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async open () {
        return browser.url('https://kasirdemo.belajarqa.com/');
    }
}

module.exports = new LoginPage();
