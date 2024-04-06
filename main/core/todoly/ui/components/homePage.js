const { By } = require('selenium-webdriver')
const loggerService= require('../../../utils/loggerService');
const actions = require('../../../../core/selenium/utils/webDriverActions');
const conditions = require('../../../../core/selenium/utils/webDriverConditions');

/**
 *  Creates a workspace class
 */
class HomePage {
/**
   * Sets the locators for the create a workspace
   */
  constructor(){
    this.signUpButtonMain = By.className("HPHeaderSignup")
    this.usernameTextBox = By.id("ctl00_MainContent_SignupControl1_TextBoxFullName");
    this.emailTextBox = By.id("ctl00_MainContent_SignupControl1_TextBoxEmail");
    this.passwordTextBox = By.id("ctl00_MainContent_SignupControl1_TextBoxPassword");
    this.signUpButton = By.id("ctl00_MainContent_SignupControl1_ButtonSignup");
    this.termsOfServiceCheckbox = By.className("HPLoginTerms");
  }

  /**
 * Click on the SingUp button
 */
  async clickSignUpButton() {
    loggerService.info("Clicking Sign Up button from main page")
    await actions.clickOn(this.signUpButtonMain);
  } 
  /**
 * Creates a new user
 * @param create  the name to Workspace
 */
  async fillModal(username, email, password) {
    await actions.setText(this.usernameTextBox, username);
    await actions.setText(this.emailTextBox, email);
    await actions.setText(this.passwordTextBox, password);
    loggerService.info("created");
  }

  /**
 * Click on the SingUp button
 */
  async clickTermsOfService() {
    loggerService.info("Clicking Sign Up button from main page")
    await actions.clickOn(this.termsOfServiceCheckbox);
  }

    /**
 * Click on the SingUp button
 */
  async clickSignUp() {
    await actions.clickOn(this.signUpButton);
      } 
  
}

module.exports = new HomePage;
