const { Given, When, Then, Before } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");

const registerPage = require("../pageobjects/register/register.page.kasir");
const SecurePage = require("../pageobjects/secure.page.kasir");
Before(async () => {
  await browser.maximizeWindow();
  await registerPage.open();
});

Given(/^User register on the (\w+) page$/, async (page) => {});
When(
  /^User register with (.*) and (.*) and (.*)$/,
  async (nameshop, email, password) => {
    await registerPage.register(nameshop, email, password);
  }
);

When(
  /^User cannot register with null data (.*) and (.*) and (.*)$/,
  async (nameshop, email, password) => {
    await registerPage.register("", "", "");
  }
);
When(
  /^User cannot register with valid (.*) and null (.*) and valid (.*)$/,
  async (nameshop, email, password) => {
    await registerPage.register(nameshop, "", password);
  }
);
When(
  /^User cannot register with valid (.*) and valid (.*) and null (.*)$/,
  async (nameshop, email, password) => {
    await registerPage.register(nameshop, email, "");
  }
);

Then(
  /^User should enter into login page and see login page title (.*)$/,
  async (message) => {
    await expect(SecurePage.assertionLoginPageTitle).toHaveTextContaining(
      message
    );
  }
);

Then(
  /^User shouldn't enter into login page and see alert name not null(.*)$/,
  async (message) => {
    await expect(SecurePage.assertionRegisNull).toHaveTextContaining(message);
  }
);
Then(
  /^User shouldn't enter into login page and see alert email not null(.*)$/,
  async (message) => {
    await expect(SecurePage.assertionRegisNullEmail).toHaveTextContaining(
      message
    );
  }
);
Then(
  /^User shouldn't enter into login page and see alert password not null(.*)$/,
  async (message) => {
    await expect(SecurePage.assertionRegisNullPassword).toHaveTextContaining(
      message
    );
  }
);
