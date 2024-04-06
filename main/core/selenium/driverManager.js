/* eslint-disable require-jsdoc */
const getFiles = require("../utils/getFiles");
const DriverFactory = require("./driverFactory");
const loggerService=require('../utils/loggerService');
/**
   * Creates a new driver manager 
   */
class DriverManager {
  /**
   * Sets the session state and configuration file
   */
  constructor() {
    this.configuration = getFiles.config;
    this.enviroment = getFiles.environment;
    this.sessionExists=false;
  }
  /**
   * Creates a new driver instance
   */
  async getDriver() {
    let capabilities = this.configuration.capabilities;
    let browserName = this.configuration.browser;
    let instance = await DriverFactory.getDriver(browserName, capabilities);
    return instance;
  }
  async init() {
    if (!this.sessionExists) {
      loggerService.info("New session created");
      this.driver = await this.getDriver();
      
      const uiUrl = this.enviroment['ui-url'];
      await this.driver.get(uiUrl);
  
      this.sessionExists = true;
    } else {
      loggerService.warn("A session already exists");
    }
    loggerService.info(
      "Session ID:",
      (await this.driver.getSession()).getId()
    );
  }
  
}
 
module.exports = new DriverManager();