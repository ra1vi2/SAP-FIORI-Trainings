/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/ra1vi2/ducattest/Ztest_ducat/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});