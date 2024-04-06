const DriverManager = require("../driverManager");
const loggerService = require("./../../utils/loggerService");
const conditions = require("./webDriverConditions");
const screenShot = require("./screenshot")

/**
   * Creates a web driver actions class
   */
class WebDriverActions {
/**
 * Constructor that receives an object with an attach function
 */
  constructor({attach}){
    this.attach = attach;
  }

  /**
    * Returns the captures a screenshot with Webdriver
    */
  static async takeScreenshot() {
    try {
      const screenshotData = await screenShot(DriverManager.driver);
      loggerService.info("Screenshot");
      return screenshotData;
    } catch (error) {
      loggerService.error('Error:', error);
    }
  }

  /**
   * Returns a web element to perform other actions
   * @param locator
   */
  static async getWebElement(locator) {
    loggerService.debug(`Getting element: "${locator}"`);
    await conditions.waitUntilElementIsLocated(locator);
    await conditions.waitUntilElementIsVisible(locator);
    return await DriverManager.driver.findElement(locator);
  }
  /**
   * Returns a web element to perform other actions
   * @param locator
   */
  static async getWebElements(locator) {
    loggerService.debug(`Getting elements by: "${locator}"`);
    await conditions.waitUntilElementIsLocated(locator);
    await conditions.waitUntilElementIsVisible(locator);
    return await DriverManager.driver.findElements(locator);
  }
  /**
   * Executes click on an element
   * @param locator
   */
  static async clickOn(locator) {
    //loggerService.debug(`Clicking on: "${locator.toString()}" `);
    const element = await WebDriverActions.getWebElement(locator);
    await element.click();
  }
  /**
   * Gets text from a locator
   * @param locator
   */
  static async getText(locator) {
    const element = await WebDriverActions.getWebElement(locator);
    return await element.getText();
  }
  /**
   * Adds a new value in an input
   * @param locator
   * @param value
   */
  static async setText(locator, value) {
    loggerService.debug(`Setting "${value}" text on: "${locator.toString()}"`);
    const element = await WebDriverActions.getWebElement(locator);
    await element.clear();
    await element.sendKeys(value);
  }
  
}

module.exports = WebDriverActions;