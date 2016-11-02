import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords' +
   '&SERVICE-VERSION=1.0.0' +
   '&SECURITY-APPNAME=' + key +
   '&RESPONSE-DATA-FORMAT=JSON' +
   '&REST-PAYLOAD' +
   '&keywords=harry%20potter%20phoenix';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON;
    });
  }
});
