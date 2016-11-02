import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params) {
    console.log(params);
    var key = config.myApiKey;
    var url = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords' +
   '&SERVICE-VERSION=1.0.0' +
   '&SECURITY-APPNAME=' + key +
   '&RESPONSE-DATA-FORMAT=JSON' +
   '&REST-PAYLOAD' +
   '&keywords=' + params.product;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.findItemsByKeywordsResponse[0].searchResult[0].item);
      return responseJSON.findItemsByKeywordsResponse[0].searchResult[0].item;
    });
  }
});
