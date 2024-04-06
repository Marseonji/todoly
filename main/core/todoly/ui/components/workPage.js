const { By } = require('selenium-webdriver')
const actions = require('../../../../core/selenium/utils/webDriverActions');

/**
 *  Creates a workspace class
 */
class WorkPage {
/**
   * Sets the locators for the create a workspace
   */
  constructor(){
    this.workTtitle = By.id("CurrentProjectTitle")
  }

  /**
   * Returns the located elements in the dashboard
   */
  async getInfo() {
    return {
      Username: await actions.getText(this.workTtitle),
    };
  }
}

module.exports = new WorkPage;
