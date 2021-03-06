
/**
 * @ngdoc directive
 * @name ajoslin.scrolly.directive:scrollyScroll
 * @restrict A
 *
 * @description
 * Attaches a {@link #/scrolly.$scroller $scroller} to the given element.
 *
 * ## Example
 * <pre>
 * <ul scrolly-scroll>
 *   <li ng-repeat="i in items">Scroll me! {{i}}</li>
 * </ul>
 * </pre>
 */

angular.module('ajoslin.scrolly.directives', ['ajoslin.scrolly.scroller'])
.directive('scrollyScroll', function($scroller, $document) {
  angular.element(document.body).bind('touchmove', function(e) {
    e.preventDefault();
  });
  return {
    restrict: 'A',
    link: function(scope, elm, attrs) {
      var scroller = new $scroller(elm);
    }
  };
});
