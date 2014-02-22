(function() {
	function Timer() {
		if ( !this instanceof Timer ) {
			return new Timer();
		}

		var setTimeout = Dexter.fake

	}

	Timer.prototype = {
		tick : function( n ) {
			return n;
		}
	};

	Dexter.timer = Timer;
}());