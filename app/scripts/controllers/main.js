'use strict';

/**
 * @ngdoc function
 * @name runpathAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the runpathAppApp
 */
angular.module('runpathAppApp')
  .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = ['flickrService'];
  function MainCtrl(flickrService) {
    var tagModes = ["all", "any"];
    var vm = this;
    angular.extend(vm, {
        tagModes: tagModes,
        tagMode: tagModes[0],
        tagsInput: null,
        photos: [],
        strings: {
            'LABEL_TAGS': 'Tags',
            'PLACEHOLDER_TAGS': 'Type in your tags separated by commas',
            'EMPTY_RESULTS': 'No items matched your query'
        },
        getFeed: getFeed,
    });
    
    _activate();
    
    /* Exposed Methods */
    
    function getFeed(){
        var tags = vm.tagsInput? vm.tagsInput : null;
        flickrService.getPhotoFeed(tags, vm.tagMode).then(success, error);
        
        function success(photos){
            vm.photos = photos;
            console.log(vm.photos);
        }
        
        function error(response){
            console.error('Error obtaining pictures from Flickr:', response);
        }
    }
    
    /* Internal Methods */
    
    function _activate(){
        getFeed();   
    }
    
  }
