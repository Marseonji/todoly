const { Given , When} = require('@cucumber/cucumber');
const loginPage=require('../../../../main/core/todoly/ui/components/loginModal');
const loggerService = require('../../../../main/core/utils/loggerService');

Given("the user clicks on login button", async function () { 
  await loginPage.clickLoginButtonMain();
});

When("the user fills the login form with:", async function (table) { 
  const dataTable = table.rowsHash();
  loggerService.info(dataTable.username)
  await loginPage.fillModal(dataTable.email, dataTable.password);
});

When("the user clicks on login", async function () { 
  await loginPage.clickLoginButton();
});



