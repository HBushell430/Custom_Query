// polyfill.js
(function() {
    if (typeof jimuCore !== 'undefined' && !jimuCore.focusElementInKeyboardMode) {
      jimuCore.focusElementInKeyboardMode = function(element) {
        if (element && typeof element.focus === 'function') {
          try {
            element.focus();
          } catch (err) {
            console.warn('Error focusing element:', err);
          }
        }
      };
    }
  })();