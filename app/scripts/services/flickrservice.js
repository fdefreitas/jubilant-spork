'use strict';
/* global angular: false */

/**
 * @ngdoc service
 * @name runpathAppApp.flickrService
 * @description
 * # flickrService
 * Service in the runpathAppApp.
 */
angular.module('runpathAppApp')
  .service('flickrService', flickrService);
  
  flickrService.$inject = ['$q', '$http'];
  function flickrService($q, $http) {
    var apiUrl = "https://api.flickr.com/services/feeds/photos_public.gne";
    var service = {
        getPhotoFeed: getPhotoFeed
    };
    
    return service;
    
    function getPhotoFeed(tags, tagMode){
        var deferred = $q.defer();
        var config = {
            "params": {
                "format": "json",
                "jsoncallback": "JSON_CALLBACK"
            }
        };
        console.log(tagMode);
        if(tags){
            config.params.tags = tags;
            config.params.tagmode = tagMode;
        }
        
        $http.jsonp(apiUrl, config).then(success, error);
        return deferred.promise;
        
        function success(response){
            deferred.resolve(response.data.items);
        }
        
        function error(response){
            deferred.reject(response.data);
        }
    }
  }
