import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    productLookup() {
      var params = {
        product: this.get('product')
      };
      this.sendAction('productLookup', params);
    }
  }
});
