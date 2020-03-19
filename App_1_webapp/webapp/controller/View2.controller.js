sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History"
	], function (Controller, JSONModel , History) {
	"use strict";

	return Controller.extend("int_test.int_test.controller.View2", {
		
			onInit: function () {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				var changeItem = oRouter.getRoute("View2");
				changeItem.attachMatched(this.onRouteMatched,this);
				
				var oModel = new JSONModel();
			//	var oText = oModel.get 
		
			},
		onNavBack:function(oEvent)
		{
			var oHistory = History.getInstance();
			var oPreviousHash = oHistory.getPreviousHash();
			
			if((oPreviousHash !== undefined) || (oPreviousHash !== ""))
			{
					window.history.go(-1);
			}
			else {
				this.getOwnerComponent.getRouter().navTo("View1",false);
			}
			
			
			
		},
		onRouteMatched:function(oEvent)
		{
			var argu = oEvent.getParameter("arguments");
			this.index = argu.index ;
			this.getView().byId("idSelectedText").setText(this.index);
			
		/*	var data = this.getOwnerComponent().getModel("listdata").getData() ;
			var text =	data.code[this.index].text ; 
				this.getView().byId("idSelectedText").setText(text);*/
		}
	});
});