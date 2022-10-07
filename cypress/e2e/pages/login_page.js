export class Loginpage{
/*
-----------------------
locators for login
-----------------------
*/
    loginpage_username='[data-test="username"]'
    loginpage_pass='[data-test="password"]'
    loginpage_loginButton='[data-test="login-button"]'
/*
-------------------------------------------------------
locators for Add Dove Brand items to cart using X-path
-------------------------------------------------------
*/
    loginpage_selectDove_Brand='//img[@alt="Dove"]'
    loginpage_select_newestItem='//div[@class="thumbnail"]/a'
    loginpage_select_Cart='//a[@class="cart"]'
    loginpage_assert_item='//a[@href="https://automationteststore.com/index.php?rt=product/product&product_id=76&key=76"]'
    loginpage_assert_quantity='//*[@id="cart_quantity76"]'
    loginpage_assert_price='/html/body/div[1]/div[2]/div/div/div/form/div/div[1]/table/tbody/tr[2]/td[4]'
/*
-----------------------------------------------------------
locators for Adding Men medium T-shirt using CSS Selectors
-----------------------------------------------------------
*/

    css_slector_selectAccessories='[href="https://automationteststore.com/index.php?rt=product/category&path=68"]'
    css_selector_selectTshirt=':nth-child(2) > .mt10 > a'
    css_selector_Sortitems='#sort'
    css_selector_selectShirt=':nth-child(6) > .thumbnail > :nth-child(1) > img'
    css_selector_selectMediumSize='#option351'
    css_selector_addToCart='.cart'
    css_selector_clickShoes=':nth-child(1) > .mt10 > a'
    css_selector_selectShoe=':nth-child(1) > .thumbnail > :nth-child(1) > img'
    css_selector_itemQuantity='#product_quantity'
    css_selector_assert_item1='.table > tbody > :nth-child(2) > :nth-child(2) > a'
    css_selector_assert_item2='tbody > :nth-child(3) > :nth-child(2) > a'
    css_Selector_assertShoesQuantity='#cart_quantity1159decaced08ca7c307cce3840afceda7f'
/*
-----------------------------------------------------------
locators for Adding Men catagory item that ends with M
-----------------------------------------------------------
*/
    xpath_select_Men_category='//a[@href="https://automationteststore.com/index.php?rt=product/category&path=58"]'
    xpath_select_item_end_with_M='//a[@title="ck IN2U Eau De Toilette Spray for Him"]'
    xpath_select_Add_To_Cart='//a[@class="cart"]'
    xpath_select_assert_item='//a[@href="https://automationteststore.com/index.php?rt=product/product&product_id=78&key=78:08d50be7efed8dd74bfcc27df4d70570"]'
/*
-----------------------------------------------------------
locators for Logging Sales And Out Of Stock Items
-----------------------------------------------------------
*/
    selectSkincareSection='//a[@href="https://automationteststore.com/index.php?rt=product/category&path=43"]'
    checkOnSalesItems='//span[@class="sale"]'
    checkOutOfStockItems='//span[@class="nostock"]]'
    addSalesItemsToCart='//a[@class="productcart"]]'
    viewCart='//a[@href="https://automationteststore.com/index.php?rt=checkout/cart"]'


/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

    navigate(Url){
        cy.visit(Url);
    }

    enterUsername(UN){
        cy.get(this.loginpage_username).type(UN);
    }

    enterpassword(Pass){
        cy.get(this.loginpage_pass).type(Pass);
    }

    clickLogin(){
        cy.get(this.loginpage_loginButton).click();
    }

    /*
    -------------------------------------------------
    Add Dove Brand (Newest) item to cart using Xpath
    -------------------------------------------------
    */

    selectDoveBrand(){
        cy.xpath(this.loginpage_selectDove_Brand).click();
    }

    addToCart(){
        cy.xpath(this.loginpage_select_newestItem).first().click();
    }

    checkCart(){
        cy.xpath(this.loginpage_select_Cart).click();
    }

    assertCartitems(){
        cy.xpath(this.loginpage_assert_item).should('include.text', 'Men+Care Clean Comfort Deodorant')
        cy.xpath(this.loginpage_assert_quantity).should('include.value', '1')
        cy.xpath(this.loginpage_assert_price).should('include.text', '$7.20')
    }

    /*
    ---------------------------------------------------------
    Add Accessories T-shirt item to cart using CSS-Selectors
    ---------------------------------------------------------
    */

    clickAccessories(){
        cy.get(this.css_slector_selectAccessories).click();
    }

    clickTshirt(){
        cy.get(this.css_selector_selectTshirt).click();
    }

    sortTshirts(){
        cy.get(this.css_selector_Sortitems).select(3);
    }

    addMediumTshirtToCart(){
        cy.get(this.css_selector_selectShirt).click();
        cy.get(this.css_selector_selectMediumSize).select('Medium');
        cy.get(this.css_selector_addToCart).click();
    }

    addHighestRatingShoesToCart(){
        cy.get(this.css_selector_clickShoes).click();
        cy.get(this.css_selector_Sortitems).select('Rating Highest');
        cy.get(this.css_selector_selectShoe).click();
        cy.get(this.css_selector_itemQuantity).clear().type('2');
        cy.get(this.css_selector_addToCart).click();
        cy.get(this.css_selector_assert_item1).should('include.text', 'Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie');
        cy.get(this.css_selector_assert_item2).should('include.text', 'Fiorella Purple Peep Toes');
        cy.get(this.css_Selector_assertShoesQuantity).should('include.value', '2');
    }

    /*
    --------------------------------------------------------------------
    Add Men Category Item to cart (name end with letter M) Using x-Path
    --------------------------------------------------------------------
    */

    addMenCategoryItemToCart(){
        cy.xpath(this.xpath_select_Men_category).click();
        cy.xpath(this.xpath_select_item_end_with_M).click();
        cy.xpath(this.xpath_select_Add_To_Cart).click();
        cy.xpath(this.xpath_select_assert_item).should('include.text','ck IN2U Eau De Toilette Spray for Him');
    }

}