/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int_test/int_test/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});