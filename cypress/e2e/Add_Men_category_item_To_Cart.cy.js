/// <reference types="cypress" />
import { Loginpage } from "./pages/login_page"

const loginPage= new Loginpage();

/*
---------------------------------------------------

Add to Cart (Accessories(T-shirt)) Functionality

---------------------------------------------------
*/
describe('Buying a product from AutomationStore', () => {
    it('Add Men category Item To cart', () => {
        loginPage.navigate('https://automationteststore.com/');
        loginPage.addMenCategoryItemToCart();
      })

})
  