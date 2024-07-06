class LoginPage {
    get usernameInput() { return $('com.experitest.ExperiBank:id/usernameTextField'); }
    get passwordInput() { return $('com.experitest.ExperiBank:id/passwordTextField'); }
    get loginButton() { return $('com.experitest.ExperiBank:id/loginButton'); }
  
    login(username, password) {
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.loginButton.click();
    }
  }
  
  module.exports = new LoginPage();
  