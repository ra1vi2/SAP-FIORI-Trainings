sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel , MessageToast) {
	"use strict";

	return Controller.extend("int_test.int_test.controller.View1", {
		onInit: function () {
			//  alert("in initialization");

			/* var oModel = new JSONModel({
			 	dynamicText : "This is dynamic Text" ,
			 	dynamic2 : "this is second",
			 	sjdnc: "sdc"
			 	});*/
           this.getView().setModel();
			var oModel = this.getOwnerComponent().getModel("testdata");
			this.getView().byId("idCombo").setModel(oModel, "oModel");
		    var listModel = this.getOwnerComponent().getModel("listdata");
		
			this.getView().byId("list1").setModel(listModel, "list");
		
		//this.getView().setModel(oModel,"oModel");

		},
		
		onListItemPress: function(oEvent)
		{
			var oSelectedItem = oEvent.getSource();
			var oContext = oSelectedItem.getBindingContext("list");
			var sPath = oContext.getPath();
			
			var oPanel = this.getView().byId("panelid");
			oPanel.bindElement({
				path : sPath,
				model : "listdata"
			});
		},
		
		onPress: function(){
			MessageToast.show("Button Clicked");
		}

	});
});