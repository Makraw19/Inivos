Feature: Add multiple product into the basket
    
  Scenario: add multiple items to the cart
    Given user logs in successfully
    And user hovers on vitamin and suppliments tab
    And user selects vitamin C
    And user added first vitamin C product
    And user added second vitamin C product
    And user hovers on food and drink tab
    And user selects vegan food and drink
    And user clicks checkbox for chocolate   
    And user added first vegan chocolate product
    And user added second vegan chocolate product
    And user added third vegan chocolate product
    When user clicks basket link
    Then user is on basket page
    And subtotal is verified
    
    