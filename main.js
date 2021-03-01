const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            reviews: []
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        reviewReceived(review) {
            console.log("received review : ", review)
            this.reviews.push(review)
        }
    }
  })
  