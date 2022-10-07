/// <reference types="cypress" />
import { Loginpage } from "./pages/login_page"

const loginPage= new Loginpage();

/*
---------------------------------------------------

Successfully Login to Swag-Lab

---------------------------------------------------
*/
describe('example SwagLab', () => {
  let data;
  before(() => {
    cy.fixture('testdata').then((fData) => {
        data = fData;
    });
  });

    it('LoginSuccessSwaglab', () => {
      console.log(data.fullName);
      loginPage.navigate('https://www.saucedemo.com/');
      loginPage.enterUsername(data.fullName);
      loginPage.enterpassword("secret_sauce");
      loginPage.clickLogin();
    })

/*
---------------------------------------------------

Un-Successfull Login to Swag-Lab

---------------------------------------------------
*/

    it('LoginFailurSwaglab', () => {
      loginPage.navigate('https://www.saucedemo.com/');
      loginPage.enterUsername("standard_user");
      loginPage.enterpassword("abc");
      loginPage.clickLogin();

    })
  
    
    })