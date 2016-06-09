'use strict';

function getElById(id) {
  return document.getElementById(id)
}

describe('counter', function() {
  beforeEach(function() {
    fixture.base = 'public';
    fixture.load('index.html');
    window.counter.init();
  });

  afterEach(function() {
    fixture.cleanup(); 
  })

  var controls = {
    get count() {
      return +getElById('count').innerHTML;
    },
    get messageBox() {
      return getElById('messageBox').innerHTML;
    },
    set specific(val) {
      document.getElementById('specific').value = val;
    },
    increment: function() {
      getElById('increment').click();
    },
    decrement: function() {
      getElById('decrement').click();
    }
  }

  it('should have initial value of 0', function() {
    controls.count.should.equal(0)
  })

  it('should increment', function() {
    controls.increment();
    controls.count.should.equal(1)
  })

  it('should decrement', function() {
    controls.decrement();
    controls.count.should.equal(-1);
  })

  it('should handle multiple increments and decrements', function() {
    controls.decrement();
    controls.decrement();
    controls.decrement();

    controls.increment();
    controls.increment();
    controls.increment();
    // count = 0 now
    controls.increment();
    controls.increment();
    controls.increment();
    controls.increment();
    controls.increment();
    controls.count.should.equal(5);
  })

  it('should be able to handle specific increments', function() {
    controls.specific = 5;
    controls.increment();
    controls.count.should.equal(5);
  })
  
  it('should be able to handle specific decrements', function() {
    controls.specific = 3;
    controls.decrement();
    controls.count.should.equal(-3);
  })

  it('should be able to add 0 to increment', function() {
    controls.specific = 0;
    controls.increment();
    controls.increment();
    controls.decrement();
    controls.count.should.equal(0);
  })
});
