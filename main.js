const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
            console.log('cart after addtion : ', this.cart);
        },
        removeFromCart(id) {
            console.log('received id : ', id);
            if (this.cart.length > 0 && this.cart.indexOf(id) != -1) {
                console.log("removing item");
                this.cart.splice(this.cart.indexOf(id), 1)
                console.log('cart after remove : ', this.cart)
            }
        }
    },
    computed: {
        emptyCart() {
            return this.cart.length ? false : true
        }
    }
})
