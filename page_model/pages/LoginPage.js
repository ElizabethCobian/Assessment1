import { Selector, t } from 'testcafe'

class loginPage {
    constructor() {
        this.userNameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3').withText('Epic sadface')
        this.loginLogo = Selector('#login_button_container')
    }
    async doLogin(username, password) {
        await t
            .typeText(this.userNameField, username)
            .typeText(this.passwordField, password)
            .click(this.loginButton)
    }   

}



export default new loginPage()