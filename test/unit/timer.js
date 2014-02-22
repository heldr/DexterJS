QUnit.module( 'Timer', {
    tearDown: function() {
        Dexter.restore();
    }
});

QUnit.test( 'defined function', function( assert ) {
    assert.equal( typeof Dexter.timer, 'function' );

    var ticker = Dexter.timer();
    assert.equal( typeof ticker.tick, 'function' );
});

QUnit.test( 'setTimeout function callback', function( assert ) {
    var timer = Dexter.timer(),
        ticked = false;

    setTimeout(function() {
        ticked = true;
    }, 2000 );

    timer.tick( 2000 );

    assert.strictEqual( ticked, true );
});

QUnit.test( 'setTimeout string callback', function( assert ) {
    var timer = Dexter.timer(),
        ticked = false;

    /* jshint evil:true */
    setTimeout('ticked = true', 2000 );

    timer.tick( 2000 );

    assert.strictEqual( ticked, true );
});

QUnit.test( 'setInterval function callback', function( assert ) {
    var timer = Dexter.timer(),
        ticked = 0;

    setInterval(function() {
        ticked++;
    }, 2000 );

    timer.tick( 2000 );

    assert.strictEqual( ticked, 1 );
});

QUnit.test( 'setInterval string callback', function( assert ) {
    var timer = Dexter.timer(),
        ticked = 0;

    /* jshint evil:true */
    setInterval('ticked++', 2000 );

    timer.tick( 2000 );

    assert.strictEqual( ticked, 1 );
});