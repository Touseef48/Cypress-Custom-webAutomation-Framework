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
    assert_Sort='//div[@class="oneprice"]'
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
-----------------------------------------------------------
    Scenario 4
-----------------------------------------------------------
*/

    click_contact_us='.info_links_footer > :nth-child(5) > a'
    enter_first_name='#ContactUsFrm_first_name'
    enter_email='#ContactUsFrm_email'
    enter_enquiry='#ContactUsFrm_enquiry'
    go_back_to_home_page=':nth-child(1) > .active'
    click_facebook_option='.header_block > .social_icons > .facebook'
/*
-----------------------------------------------------------
    add on sale fragrance to cart
-----------------------------------------------------------
*/

    click_Fragrance_nav='//a[@href="https://automationteststore.com/index.php?rt=product/category&path=49"]'
    on_sale_frag='//a[@title="Acqua Di Gio Pour Homme"]'
    add_frag_to_cart='//a[@class="cart"]'
    assert_frag='//a[@href="https://automationteststore.com/index.php?rt=product/product&product_id=80&key=80:d8601ba52a1351d969c41c14fd8dd827"]'

/*
-----------------------------------------------------------
    Scenario 6 & 7
-----------------------------------------------------------
*/
    select_skincare='//a[@href="https://automationteststore.com/index.php?rt=product/category&path=43"]'
    select_product1='//a[@title="Absolue Eye Precious Cells"]'
    quantity='//input[@id="product_quantity"]'
    add_prod_to_cart='//a[@class="cart"]'
    select_product2='//a[@title="Fiorella Purple Peep Toes"]'
    click_cart='//a[@href="https://automationteststore.com/index.php?rt=checkout/cart"]'
    change_curr='.block_6 > .nav > .dropdown > .dropdown-toggle'
    select_Euro='//ul[@class="dropdown-menu currency"]'
    delete_item='//a[@href="https://automationteststore.com/index.php?rt=checkout/cart&remove=115:9decaced08ca7c307cce3840afceda7f"]'
    assertion='//span[@class="bold totalamout"]'
    enter_coupen='//input[@id="coupon_coupon"]'
    apply_copen_btn='//button[@id="apply_coupon_btn"]'
    remove_coupen='//i[@class="fa fa-remove"]'
    click_checkout='//a[@id="cart_checkout2"]'
    select_guest_checkout='#accountFrm > fieldset > :nth-child(2) > label'
    click_continue_btn='//button[@title="Continue"]'
    enter_chkout_username='//input[@id="guestFrm_firstname"]'
    enter_chkout_lastname='//input[@id="guestFrm_lastname"]'
    enter_chkout_email='//input[@id="guestFrm_email"]'
    enter_chkout_address='//input[@id="guestFrm_address_1"]'
    enter_chkout_city='//input[@id="guestFrm_city"]'
    select_chkout_region='//select[@id="guestFrm_zone_id"]'
    enter_chkout_postalcode='//input[@id="guestFrm_postcode"]'
    click_confirm_order='//button[@id="checkout_btn"]'
    asser_success='//span[@class="maintext"]'
/*
-----------------------------------------------------------
    Scenario 8
-----------------------------------------------------------
*/   
    click_facebook_icon='//a[@title="Facebook"]'
    click_signup_btn='//a[@class="_42ft _4jy0 signup_btn _4jy4 _4jy2 selected _51sy"]'

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
        cy.get(this.css_selector_Sortitems).select('Price Low > High');
    }

    assertSortedItems(){
        cy.xpath(this.assert_Sort)
      .then($items => {
        return $items.map((index, html) => Cypress.$(html).text()).get()
      })
      .should()
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
    contactUs(){
        cy.get(this.click_contact_us).click();
        cy.get(this.enter_first_name).type('Ali');
        cy.get(this.enter_email).type('Ali123@gmail.com');
        cy.get(this.enter_enquiry).type('we are herrrererre');
        cy.get(this.go_back_to_home_page).click();
        cy.get(this.click_facebook_option).invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://www.facebook.com/')
    }
    /*
    --------------------------------------------------------------------
    Add on sale frageance to cart 
    --------------------------------------------------------------------
    */
    
    selectFragranceNav(){
        cy.xpath(this.click_Fragrance_nav).click();
        cy.xpath(this.on_sale_frag).click();
        cy.xpath(this.add_frag_to_cart).click();
        cy.xpath(this.assert_frag).should('include.text','Acqua Di Gio Pour Homme');
    }
    /*
    --------------------------------------------------------------------
    Change currency to euro & Apply for coupen and checkout
    --------------------------------------------------------------------
    */

    changeCurrency(){
        cy.xpath(this.select_skincare).click();
        cy.xpath(this.select_product1).click();
        cy.xpath(this.quantity).clear().type('2');
        cy.xpath(this.add_prod_to_cart).click();
        cy.get(this.css_slector_selectAccessories).click();
        cy.xpath(this.select_product2).click();
        cy.xpath(this.add_prod_to_cart).click();
        cy.get(this.change_curr).click();
        cy.xpath(this.select_Euro).children().first().click();
        cy.xpath(this.delete_item).click();
        cy.xpath(this.assertion).should('include.text', '168.94€')
        cy.xpath(this.enter_coupen).click().type('ABY54327')
        cy.xpath(this.apply_copen_btn).click();
        cy.xpath(this.remove_coupen).click();
        cy.xpath(this.click_checkout).click();
        cy.get(this.select_guest_checkout).click();
        cy.xpath(this.click_continue_btn).click();
        cy.xpath(this.enter_chkout_username).click().type('Usman');
        cy.xpath(this.enter_chkout_lastname).click().type('Ali');
        cy.xpath(this.enter_chkout_email).click().type('usman123@gmail.com');
        cy.xpath(this.enter_chkout_address).click().type('sdsdsdsds');
        cy.xpath(this.enter_chkout_city).click().type('Jhelum');
        cy.xpath(this.select_chkout_region).select('Aberdeen');
        cy.xpath(this.enter_chkout_postalcode).click().type('49600');
        cy.xpath(this.click_continue_btn).click();
        cy.xpath(this.click_confirm_order).click();
        cy.xpath(this.asser_success).should('include.text', ' Your Order Has Been Processed!');
    }
    /*
    --------------------------------------------------------------------
    Facebook registration
    --------------------------------------------------------------------
    */
    facebook_registration(){
        cy.xpath(this.click_facebook_icon).first().invoke('removeAttr', 'target').click();
        cy.window().then(win => {
            cy.stub(win, 'open').as('open')
          })
        cy.xpath(this.click_signup_btn).click();
    }
}