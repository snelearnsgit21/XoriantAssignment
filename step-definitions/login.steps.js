const { Given, When, Then } = require('cucumber');
const LoginPage = require('../pages/LoginPage');

Given('I am on the login screen', (app) => {
  // Navigate to the login screen if needed
  app.click('id', 'com.experitest.ExperiBank:id/scrollView1');
});

When('I log in with username {string} and password {string}', (username, password) => {
  LoginPage.login(username, password);
});

Then('I should be logged in successfully', () => {
  // Assertion or validation of successful login
  app.waitUntil(async function() {
    // wait for native_app context to be available
    const contexts = await this.appium.getContexts();
    console.log('Available Contexts:', contexts);
    return contexts.includes('NATIVE_APP');
  })
  .appium.setContext('NATIVE_APP')
  .assert.textEquals('android.widget.TextView', 'EriBank')
  .click({selector: 'com.experitest.ExperiBank:id/logoutButton', locateStrategy: 'id', index: 0});
});
