sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("int_test.int_test.controller.PanelView", {
	
		    onPanelPress: function(oEvent)
    {
    	MessageToast.show("panel Button Clicked");
    }
		
	});
});