import { Selector } from 'testcafe' 

class shoppingCart {
    constructor() {
        this.shoppingCartButton = Selector('#shopping_cart_container')
        this.shoppingCartTitle = Selector('.subheader').withText('Your Cart')
        this.firstItemAdded = Selector('.cart_quantity')
        this.secondItemAdded = Selector('.inventory_item_name').withText('Sauce Labs Bike Light')
        this.checkoutButton = Selector('.btn_action.checkout_button')
        this.finishButton = Selector('.btn_action.cart_button')

    }
}

export default new shoppingCart()