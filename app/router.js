import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('product', {path: '/product/:product'});
  this.route('shopping-cart', {path: '/shopping-cart/:product'});
});

export default Router;
