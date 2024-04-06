const { Given , When, Then} = require('@cucumber/cucumber');
const { expect } = require('expect');
const homePage=require('../../../../main/core/todoly/ui/components/homePage');
const loggerService = require('../../../../main/core/utils/loggerService');
const workPage = require('../../../../main/core/todoly/ui/components/workPage');

Given("the user clicks on sign up button", async function () { 
  await homePage.clickSignUpButton();
});

When("the user fills the sign up form with:", async function (table) { 
  const dataTable = table.rowsHash();
  loggerService.info(dataTable.username)
  await homePage.fillModal(dataTable.username, dataTable.email, dataTable.password);
});

When("the user accepts the terms of reference", async function () { 
  await homePage.clickTermsOfService();
  loggerService.info("Succesfully");
})

When("the user clicks on sign up", async function () { 
  await homePage.clickSignUp();
});

Then('the user should see the {string} title', async function (name) {
  const expectedInfo = name;
  const locatedInfo=await workPage.getInfo();
  expect(expectedInfo).toEqual(locatedInfo);
});

