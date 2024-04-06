@ui @login
Feature: Login
  Test performed on UI, contains test cases related to the Login.

  @uiLogin @functional
  Scenario: Successful login test with correct credentials
    Given the user clicks on login button
    When the user fills the login form with:
       | email    | marseonji@gmail.com|
       | password | 123456789|
    And the user clicks on login
    Then the user should see the "Work" title

  @uiSingUp @acceptance @wip
  Scenario: Verify that is possible to register a new user
    Given the user clicks on sign up button
    When the user fills the sign up form with:
       | username | UserTest |
       | email    | marseonji@gmail.com|
       | password | 123456789|
    And the user accepts the terms of reference
    And the user clicks on sign up
    Then the user should see the Work title

    @imbox @acceptance @wip
  Scenario: Verify that is possible to register a new user
    Given the user clicks on sign up button
    When the user fills the sign up form with:
       | username | UserTest |
       | email    | marseonji@gmail.com|
       | password | 123456789|
    And the user accepts the terms of reference
    And the user clicks on sign up
    Then the user should see the Work title