/// <reference types="cypress" />
import { Loginpage } from "./pages/login_page"

const loginPage= new Loginpage();

/*
---------------------------------------------------

Add to Cart (Accessories(T-shirt)) Functionality

---------------------------------------------------
*/
describe('Buying a product from AutomationStore', () => {
    it('Logging Sale And Out Of Stock Items', () => {
        loginPage.navigate('https://automationteststore.com/');
        loginPage.logItems();
      })

})
  