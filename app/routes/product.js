import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params) {
      var key = config.myApiKey;
      var url = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords' +
    '&SERVICE-VERSION=1.0.0' +
    '&SECURITY-APPNAME=' + key +
    '&RESPONSE-DATA-FORMAT=JSON' +
    '&REST-PAYLOAD' +
    '&keywords=' + params.product;

    var productResponse = Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.findItemsByKeywordsResponse[0].searchResult[0].item;
    });

    return Ember.RSVP.hash({
      search: params.product,
      results: productResponse
    });
  }
});
