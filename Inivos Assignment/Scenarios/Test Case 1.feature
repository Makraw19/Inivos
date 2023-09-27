Feature: Registration

  Scenario: Register a user with valid information
    Given user is on landing page
    When user clicks reward
    Then user redirects to login screen
    When user clicks sign up link
    Then user redirects to registration screen
    And user inputs first name
    And user inputs last name
    And user inputs email address
    And user inputs confirm email address
    And user inputs create a password
    And user clicks checkbox for terms and conditions
    When user clicks create an account
    Then user is registered successfully

  
    