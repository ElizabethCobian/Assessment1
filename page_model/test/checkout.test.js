import CheckOut from '../pages/CheckOut'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCart'
import { CREDENTIALS } from '../data/Constants'

fixture('Checkout Test Cases')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.doLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await ProductsPage.addItems()
        await t 
        .click(ShoppingCart.shoppingCartButton)
        .click(ShoppingCart.checkoutButton)
    })

    test('Checkout Info Error Message', async t => {
        
        await t 
            .typeText(CheckOut.firstName, CREDENTIALS.VALID_INFO_USER.NAME)
            .typeText(CheckOut.lastName, CREDENTIALS.VALID_INFO_USER.LAST_NAME)
            .click(CheckOut.continueButton)

        await t.expect(CheckOut.zipCodeErrorMessage.exists).ok()
    })

    test('Checkout Checking Fill Info Correctly', async t => {
        
        await CheckOut.doInfoForm(CREDENTIALS.VALID_INFO_USER.NAME, CREDENTIALS.VALID_INFO_USER.LAST_NAME, CREDENTIALS.VALID_INFO_USER.ZIP_CODE)    
        await t.expect(CheckOut.overviewInfoTitle.exists).ok()
        await t.expect(CheckOut.overviewInfoCorrect.exists).ok()
    })

    test('Complete Purchase', async t => {
        
        await CheckOut.doInfoForm(CREDENTIALS.VALID_INFO_USER.NAME, CREDENTIALS.VALID_INFO_USER.LAST_NAME, CREDENTIALS.VALID_INFO_USER.ZIP_CODE)
        await t.click(ShoppingCart.finishButton)
        await t.expect(CheckOut.finishPurchaseMessage.exists).ok()
    })
        