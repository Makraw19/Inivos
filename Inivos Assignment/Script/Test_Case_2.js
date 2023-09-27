var login = require("CommonSteps")

Given("user hovers on vitamin and suppliments tab", function (){
  var tab_vitamin = Aliases.browser.pageHollandBarrettUkSLeadingHeal.section3For2.nav3For2.linkVitaminsSupplements.panelVitaminsSupplements;
  
  tab_vitamin.HoverMouse()

});

Given("user selects vitamin C", function (){
  
  var vitamin_c = Aliases.browser.pageHollandBarrettUkSLeadingHeal.section3For2.nav3For2.textnodeVitaminsSupplements.panelVitaminC;
  
  vitamin_c.Exists
  
  vitamin_c.Click()


});


Given("user added any vitamin C product", function (){
  btn_add_to_basket = Aliases.browser.pageVitaminCTabletsSupplementsSh.link3For2MixMatch.buttonAddToBasket;
  btn_add_to_basket.Click()
});

Given("user hovers on food and drink tab", function (){
  var tab_food_drink = Aliases.browser.pageVitaminCTabletsSupplementsSh.section3For2.nav3For2.linkFoodDrink.panelFoodDrink;
  
  tab_food_drink.HoverMouse()
});

Given("user selects vegan food and drink", function (){
  Delay(2000)
  var vegan_food = Aliases.browser.pageVitaminCTabletsSupplementsSh.section3For2.nav3For2.textnodeFoodDrink.panelVeganFoodDrink;
  
  vegan_food.Click()
});

Given("user clicks checkbox for chocolate", function (){
  var checkbox = Aliases.browser.pageVeganFoodDrinkHealthyVeganSn.labelChocolate.checkbox;
  
  checkbox.Click()
  
});

Given("user added any vegan chocolate product", function (){
  var btn_add_to_basket = Aliases.browser.pageVeganFoodDrinkHealthyVeganSn.linkHollandBarrettHotSweet.buttonAddToBasket;
  
  btn_add_to_basket.Click()
});

When("user clicks basket link", function (){
  Delay(1000)
  var basket = Aliases.browser.pageVeganFoodDrinkHealthyVeganSn.link4.textnodeBasket

  
  basket.Click()
});

Then("user is on basket page", function (){
  Aliases.browser.pageBasketHollandBarrett.textnodeYourBasket.Exists

});

Then("product added to the basket correctly", function (){
  Aliases.browser.pageBasketHollandBarrett.sectionDoisyDamPeanutDDsVegan.articleDoisyDamPeanutDDsVegan.linkDoisyDamPeanutDDsVegan.textnodeDoisyDamPeanutDDsVegan.Exists
  
  Aliases.browser.pageBasketHollandBarrett.section.article.linkProduct.textnode.Exists
  
  login.clean_up()
  
});


Given("user logs in successfully", function (){

  login.valid_login()
});
