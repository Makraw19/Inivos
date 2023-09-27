﻿var login = require("CommonSteps")

Given("user added first vitamin C product", function (){
  
  btn_add_to_basket = Aliases.browser.pageVitaminCTabletsSupplementsSh.link3For2MixMatch.buttonAddToBasket;
  btn_add_to_basket.Click()
  
  
});

Given("user added second vitamin C product", function (){
  Delay(1000)
  Aliases.browser.pageVitaminCTabletsSupplementsSh.link3For2MixMatch.buttonAddToBasket.Click();
});

Given("user added first vegan chocolate product", function (){
  var btn_add_to_basket = Aliases.browser.pageVeganFoodDrinkHealthyVeganSn.linkHollandBarrettHotSweet.buttonAddToBasket;
  
  btn_add_to_basket.Click()

});

Given("user added second vegan chocolate product", function (){
  Delay(1000)
  var btn_add_to_basket = Aliases.browser.pageVeganFoodDrinkHealthyVeganSn.linkHollandBarrettHotSweet.buttonAddToBasket;
  
  btn_add_to_basket.Click()
});

Given("user added third vegan chocolate product", function (){
  Delay(1000)
  var btn_add_to_basket = Aliases.browser.pageVeganFoodDrinkHealthyVeganSn.linkHollandBarrettHotSweet.buttonAddToBasket;
  
  btn_add_to_basket.Click()
  
});

Then("subtotal is verified", function (){
  
  
  var num1 = Aliases.browser.pageBasketHollandBarrett.section.articleNomoVeganCaramelFilledCho.panel074.innerText;
  num1 = aqString.Replace(num1,'£','');
  
  var num2 = Aliases.browser.pageBasketHollandBarrett.section.articleDoisyDamDDsVeganDark.panel225.innerText;
  num2 = aqString.Replace(num2,'£','');
  
  var num3 = Aliases.browser.pageBasketHollandBarrett.sectionDoisyDamPeanutDDsVegan.articleDoisyDamPeanutDDsVegan.panel2252.innerText;
  num3 = aqString.Replace(num3,'£','');
  
  var num4 = Aliases.browser.pageBasketHollandBarrett.section.article2.panel349.innerText;
  num4 = aqString.Replace(num4,'£','');
  
  var num5 = Aliases.browser.pageBasketHollandBarrett.section.article.panel1249.innerText;
  num5 = aqString.Replace(num5,'£','');
  
  var saving = Aliases.browser.pageBasketHollandBarrett.panel025.innerText;
  saving = aqString.Replace(saving,'-£','');
  
  var total = Aliases.browser.pageBasketHollandBarrett.panel2147.innerText;
  total = aqString.Replace(total,'£','');
  Log.Message(total);
  
  var subtotal = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5) + parseFloat(saving);
  Log.Message(subtotal);
  
  equal(total,subtotal)
  
  login.clean_up()
  
  
  
  

});
