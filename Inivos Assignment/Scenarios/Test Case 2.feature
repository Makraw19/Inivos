Feature: Add product into the basket

  Scenario: User is able to add product into the basked
    Given user logs in successfully
    And user hovers on vitamin and suppliments tab
    And user selects vitamin C
    And user added any vitamin C product
    And user hovers on food and drink tab
    And user selects vegan food and drink
    And user clicks checkbox for chocolate
    And user added any vegan chocolate product
    When user clicks basket link
    Then user is on basket page
    And product added to the basket correctly
    

    