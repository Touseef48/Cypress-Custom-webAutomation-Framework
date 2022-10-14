/// <reference types="cypress" />
import { Loginpage } from "./pages/login_page"

const loginPage= new Loginpage();

/*
---------------------------------------------------------

Scenario 4 : Contact Us

---------------------------------------------------------
*/
describe('contct us', () => {
    it('contact us', () => {
        loginPage.navigate('https://automationteststore.com/');
        loginPage.contactUs();
      })

})