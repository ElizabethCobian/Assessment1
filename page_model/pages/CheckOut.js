import { Selector, t } from "testcafe"

class checkout {
    constructor() {
        this.firstName = Selector('#first-name')
        this.lastName = Selector('#last-name')
        this.zipCode = Selector('#postal-code')
        this.zipCodeErrorMessage = Selector('h3').withText('Postal Code is required')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.overviewInfoTitle = Selector('.subheader').withText('Checkout: Overview')
        this.overviewInfoCorrect = Selector('.summary_total_label').withText('43.18')
        this.finishPurchaseMessage = Selector('.complete-header')
    }
    
    async doInfoForm(name, lastname, zipcode){
        await t
            .typeText(this.firstName, name)
            .typeText(this.lastName, lastname)
            .typeText(this.zipCode, zipcode)
            .click(this.continueButton)
    }

}

export default new checkout()