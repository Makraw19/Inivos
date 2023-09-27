
var data = require("Data")

Given("user is on landing page", function (){

  Browsers.Item(btEdge).Run(data.valid_url);
});

When("user clicks reward", function (){
  var reward_link = Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount.linkRewards.textnodeRewards;
  // Click the Search button
  reward_link.Click();
  Delay(2000)
  
});

Then("user redirects to login screen", function (){
  Delay(2000)
  var signUp_link = Aliases.browser.pageSignInToYourAccountForTheBes.linkSignUp
  signUp_link.Exists
});

When("user clicks sign up link", function (){
  var signUp_link = Aliases.browser.pageSignInToYourAccountForTheBes.linkSignUp
  signUp_link.Click()
});

Then("user redirects to registration screen", function (){
  var test_text = "Already have an account? Sign in"
  var text = Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.textnodeAlreadyHaveAnAccount;
  text.innerText == test_text
});

Then("user inputs first name", function (){
  Delay(3000)
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.textboxFirstName.SetText(data.valid_first_name)
});

var random_num = Math.floor(Math.random() * 10000);
Then("user inputs last name", function (){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.textboxLastName.SetText(data.valid_last_name)
});

Then("user inputs email address", function (){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.emailinputEmailAddress.SetText("sheikhtashan"+random_num+"@gmail.com")
});

Then("user inputs confirm email address", function (){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.emailinputConfirmEmailAddress.SetText("sheikhtashan"+random_num+"@gmail.com")
});

Then("user inputs create a password", function (){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.passwordboxCreateAPassword.SetText(data.valid_password)
});

Then("user clicks checkbox for terms and conditions", function (){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.labelIAgreeToTheRewardsForLife.checkboxTerms.Click()
});

When("user clicks create an account", function (){
  var btn_create_account = Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.buttonCreateAnAccount;
  btn_create_account.Click();
});

Then("user is registered successfully", function (){
  
 Delay(2000)
 var text = "Account created"
 var text1 = Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.textnodeAccountCreated.innerText
 
 equal(text,text1)
 
 NameMapping.Sys.browser.pageRegisterHollandBarrettTheUkS.linkSignIn.Exists

  
});
