export default {
  addProductToCart(context, payload) {
    context.commit('addProductToCart', payload);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  }
};