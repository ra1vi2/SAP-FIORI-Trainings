sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History"
], function (Controller,JSONModel,MessageToast,History) {
	"use strict";

	return Controller.extend("com.ra1vi2.ducattest.Ztest_ducat.controller.View2", {
		onInit: function () {
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        var rChangeItem = oRouter.getRoute("View2");
        rChangeItem.attachPatternMatched(this.onObjectMatched, this);
       //  this.getOwnerComponent().getRouter().getRoute("View1").getParameter("text");
		},
		
		onObjectMatched: function (evt) {


var argu = evt.getParameter("arguments");
var text = argu.in_text;

var new_model = sap.ui.model.json.JSONModel({
	text: text
});
this.getView().byId("text_field").setModel(new_model);
  


		},
		
		
		onNavBack: function(){
			// route to view1 logic 
			window.history.go(-1);
		//
		
		
		
		//var oHistory = History.getInstance();
		//	var sPreviousHash = oHistory.getPreviousHash();

		//	if (sPreviousHash !== undefined) {
				
		//	} else {
			//	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//	oRouter.navTo("View2", true);
			
		//	this.getOwnerComponent().getRouter().navTo("View2", true);
		//	}
		}
		
	});
});