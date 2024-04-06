const { By } = require('selenium-webdriver')
const loggerService= require('../../../utils/loggerService');
const actions = require('../../../../core/selenium/utils/webDriverActions');

/**
 *  Creates a workspace class
 */
class LoginModal {
/**
   * Sets the locators for the create a workspace
   */
  constructor(){
    this.loginButtonMain = By.className("HPHeaderLogin");
    this.emailTextBox = By.id("ctl00_MainContent_LoginControl1_TextBoxEmail");
    this.passwordTextBox = By.id("ctl00_MainContent_LoginControl1_TextBoxPassword");
    this.loginButton = By.id("ctl00_MainContent_LoginControl1_ButtonLogin");
  }

  /**
 * Click on the SingUp button
 */
  async clickLoginButtonMain() {
    loggerService.info("Clicking Sign Up button from main page")
    await actions.clickOn(this.loginButtonMain);
  } 
  /**
 * Click on the SingUp button
 */
  async clickLoginButton() {
    loggerService.info("Clicking Sign Up button from main page")
    await actions.clickOn(this.loginButton);
  } 
  /**
 * Creates a new user
 * @param create  the name to Workspace
 */
  async fillModal(email, password) {
    await actions.setText(this.emailTextBox, email);
    await actions.setText(this.passwordTextBox, password);
    loggerService.info("logged");
  }
}

module.exports = new LoginModal;
