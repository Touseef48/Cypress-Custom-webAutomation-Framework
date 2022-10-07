/// <reference types="cypress" />
import { Loginpage } from "./pages/login_page"

const loginPage= new Loginpage();

/*
---------------------------------------------------

Add to Cart (Accessories(T-shirt)) Functionality

---------------------------------------------------
*/
describe('Buying a product from AutomationStore', () => {
    it('Add Accessories item to Cart', () => {
        loginPage.navigate('https://automationteststore.com/');
        loginPage.clickAccessories();
        loginPage.clickTshirt();
        loginPage.sortTshirts();
        loginPage.addMediumTshirtToCart();
        loginPage.clickAccessories();
        loginPage.addHighestRatingShoesToCart();
      })

})
  