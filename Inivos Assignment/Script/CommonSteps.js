﻿var data = require("Data")

function login()
{
  Delay(1000)
  var email = data.valid_email
  var password = data.valid_password
  Browsers.Item(btEdge).Run('https://auth.hollandandbarrett.com/u/login?state=hKFo2SBIRDFMam9fMW4xOVc2MUYtSEsxTmJWV2pYSWw5NzZfbqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFJXUktSdnV5ckd4MU5UbkFaaHBaRTNBZFJfelpLb2ZQo2NpZNkgSmwzRWF2a010RDNpcjhLOTNSTlM4TldBVVFKcks4bnI');

  Delay(1000)
  Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress.textboxEmailAddress.SetText(email)

  Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress.passwordboxPassword.SetText(password)
  Delay(1000)
  Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress.buttonAction.Click()
  Delay(2000)
}

function clean()
{
  var btn_delete = Aliases.browser.pageBasketHollandBarrett.section.article.button;
   
  while(btn_delete.Exists){
    btn_delete.scrollIntoView(true)
    if(btn_delete.VisibleOnScreen)
    {
      btn_delete.Click()
    }
      
  }

  
  
}

module.exports.valid_login = login
module.exports.clean_up = clean