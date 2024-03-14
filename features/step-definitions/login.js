const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $, browser } = require("@wdio/globals");

const LoginPage = require("../pageobjects/login/login.page.kasir");
const SecurePage = require("../pageobjects/secure.page.kasir");

Given(/^User want to login$/, async () => {
  await browser.url("https://kasirdemo.belajarqa.com/");
});
Given(/^User login on the (\w+) page$/, async (page) => {
  await LoginPage.open();
});
When(
  /^User login with input data (.*) and (.*) valid$/,
  async (email, password) => {
    await LoginPage.login(email, password);
  }
);

When(
  /^User login with input null data (.*) and (.*)$/,
  async (email, password) => {
    await LoginPage.login("", "");
  }
);

When(
  /^User login with input data (.*) valid and null (.*)$/,
  async (email, password) => {
    await LoginPage.login(email, "");
  }
);

When(
  /^User login with invalid credentials data (.*) and (.*)$/,
  async (email, password) => {
    await LoginPage.login(email, password);
  }
);

Then(/^User should see alert null data (.*)$/, async (message) => {
  await expect(SecurePage.assertionLoginEmail).toHaveTextContaining(message);
});

Then(/^User should see alert password null data (.*)$/, async (message) => {
  await expect(SecurePage.assertionLoginPassword).toHaveTextContaining(message);
});

Then(/^User should see alert credentials invalid (.*)$/, async (message) => {
  await expect(
    SecurePage.assertionLoginInvalidCredentials
  ).toHaveTextContaining(message);
});
