'use strict';

window.counter = (function() {

  return { init: init }

  function getElById(id) {
    return document.getElementById(id)
  }

  function init() {
    getElById('count').innerHTML = 0;
    getElById('increment').addEventListener('click', increment);
    getElById('decrement').addEventListener('click', decrement);
  }

  function increment() {
    var specificValue = getElById('specific').value;
    var change = specificValue || specificValue === 0 ? specificValue : 1;
    var count = + getElById('count').innerHTML;
    getElById('count').innerHTML = count + change;
  }

  function decrement() {
    var value = getElById('specific').value;
    var change = value ? value : 1;
    var count = + getElById('count').innerHTML;
    getElById('count').innerHTML = count - change;
  }
})();
