import { Selector, t } from 'testcafe'

class productsPage {
    constructor() {
        this.productsPageTitle = Selector('.product_label')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.addFirstItem = Selector ('.btn_primary.btn_inventory')
    }
    async addItems(){
        await t
            .click(this.addFirstItem)
            .click(this.addFirstItem)
    }

    
}

export default new productsPage()
