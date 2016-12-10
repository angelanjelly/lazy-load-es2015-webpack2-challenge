// Listener to fire up Merry Xmas
document.getElementById( 'button' ).addEventListener( 'click', e => {
	require.ensure([], function (require) {
		var MerryXmas = require('./animations').MerryXmas;
		if (!this.merryXmas) {
			this.merryXmas = new MerryXmas( 'effect' );
		}
		this.merryXmas.animate();
	} );
} );

// Timeout to fire up Alert
setTimeout(() => {
	require.ensure([], function (require) {
		var Alert = require('./messaging').Alert;
		new Alert();
	});
}, 5000);