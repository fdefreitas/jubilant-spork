'use strict';

/**
 * @ngdoc directive
 * @name runpathAppApp.directive:flickrPhoto
 * @description
 * # flickPhoto
 */
angular.module('runpathAppApp')
  .directive('flickrPhoto', function () {
    return {
      templateUrl: 'partials/flickr-photo.html',
      restrict: 'E',
      scope: {
          'photo': '='
      },
      link: function postLink(scope, element, attrs) {
          if(scope.photo.tags){
              scope.photo.tags = scope.photo.tags.split(' ');   
          }
      }
    };
  });
