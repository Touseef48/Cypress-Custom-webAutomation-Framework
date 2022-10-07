/// <reference types="cypress" />
import { Loginpage } from "./pages/login_page"

const loginPage= new Loginpage();

/*
---------------------------------------------------

Add to Cart (Dove Brand Items) Functionality

---------------------------------------------------
*/
describe('Buying a product from AutomationStore', () => {
    it('Add item to Cart', () => {
        loginPage.navigate('https://automationteststore.com/');
        loginPage.selectDoveBrand();
        loginPage.addToCart();
        loginPage.checkCart();
        loginPage.assertCartitems();
      })

})
  