import ShoppingCart from '../pages/ShoppingCart'
import loginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'


fixture('Shopping Cart')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await loginPage.doLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

    test('Navigating on the Shopping Card', async t => {
        
        await t.click(ShoppingCart.shoppingCartButton)
        await t.expect(ShoppingCart.shoppingCartTitle.exists).ok()

    })

    test('Add One Item', async t => {
        
        await t
            .click(ProductsPage.addFirstItem)
            .click(ShoppingCart.shoppingCartButton)

        await t.expect(ShoppingCart.firstItemAdded.exists).ok()

    })

    test('Add a Second Item', async t => {
        
        await ProductsPage.addItems()
        await t.click(ShoppingCart.shoppingCartButton)

            await t.expect(ShoppingCart.firstItemAdded.exists).ok()
            await t.expect(ShoppingCart.secondItemAdded.exists).ok()

    })

