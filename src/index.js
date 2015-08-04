import angular from 'angular';
const ngModuleName = 'azAutofocus';
const ngModule = angular.module(ngModuleName, []);

export default ngModule
  .directive('azAutofocus', azAutofocus)
  .name; // <-- exporting the module name

// @ngInject
function azAutofocus($timeout, $document) {
  return {
    restrict: 'A',
    link: azAutofocusLink
  };

  function azAutofocusLink(scope, element, attrs) {
    let previousEl = null;
    const el = element[0];
    const doc = $document[0];
    attrs.$observe('azAutofocus', function respondToFocusExpressionChange(value) {
      /* eslint no-bitwise:0 */ // I know what I'm doing. I promise...
      if (value === 'true') {
        $timeout(function setElementFocus() {
          previousEl = doc.activeElement;
          el.focus();
        }, ~~attrs.focusWait);
      } else if (value === 'false') {
        if (doc.activeElement === el) {
          el.blur();
          if (attrs.hasOwnProperty('refocus') && previousEl) {
            previousEl.focus();
          }
        }
      }
    });
  }
}
