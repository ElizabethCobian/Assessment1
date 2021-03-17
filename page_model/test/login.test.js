import LoginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'


fixture('Login TestCases')
    .page `https://www.saucedemo.com/`

    test('User logging succesfully', async t => {
        await LoginPage.doLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t.expect(productsPage.productsPageTitle.exists).ok()
    })
    test('User logging Error', async t => {
        await t
            .typeText(LoginPage.userNameField, CREDENTIALS.INVALID_USER.USERNAME)
            .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
            .click(LoginPage.loginButton)

        await t.expect(LoginPage.errorMessage.exists).ok()
    })
    test('User logout Successfully', async t => {
            
        await LoginPage.doLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t
            .click(productsPage.menuButton)
            .click(productsPage.logoutButton)

        await t.expect(LoginPage.loginLogo.exists).ok()
            
    })