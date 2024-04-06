const { By } = require('selenium-webdriver')
const loggerService= require('../../../utils/loggerService');
const actions = require('../../../../core/selenium/utils/webDriverActions');

/**
 *  Creates a workspace class
 */
class Imbox {
/**
   * Sets the locators for the create a workspace
   */
  constructor(){
    this.imboxButtom = By.className("LiDiv BaseFilterLiDiv LeftLiDiv ProjectSelected")
    this.addImboxText = By.id("NewItemContentInput");
    this.addImboxButton = By.id("NewItemAddButton");
  }

}

module.exports = new Imbox;
