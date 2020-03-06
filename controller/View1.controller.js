sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"int_test/int_test/util/formatter"
	//"int_test/util/formatter"
], function (Controller, JSONModel , MessageToast,formatter) {
	"use strict";

	return Controller.extend("int_test.int_test.controller.View1", {
		onInit: function () {
			//  alert("in initialization");
			
			formatter = formatter ; 
			
			sap.ui.getCore().getMessageManager().registerObject(this.getView(), true) ;
			
			var hierModel = new JSONModel({
			fName : "Ravi",
			lName : "Verma",
			enabled : true,
			address : {
				street : "sec",
				city : "noida",
				state : "delhi"
			}
			});
			
		//	var oDataModel = new sap.ui.model.odata.v2.ODataModel();
		//	
		//	this.getView().byId("list1").setModel(oDataModel);
			
			this.getView().byId("idAddress").setModel(hierModel,"hModel");
			this.getView().byId("idAdd").setModel(hierModel,"hModel");

			 var oModel_ = new JSONModel({
			 	dynamicText : "This is dynamic Label" ,
			 	enabled : true,
			 	dynamic2 : "this is second",
			 	sjdnc: "sdc"
			 	});
           this.getView().setModel(oModel_,"model");
			var oModel = this.getOwnerComponent().getModel("testdata");
			this.getView().byId("idCombo").setModel(oModel, "oModel");
		   // var listModel = this.getOwnerComponent().getModel("listdata");
		
		//	this.getView().byId("list1").setModel(listModel, "list");
		
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
		var userid = this.getView().byId("idUserid").getValue().toString();
		
		if(userid == "")
		{
			this.getView().byId("idUserid").setValueState("Error");
			MessageToast.show("Invalid User ID");
		}
		else{
		
			MessageToast.show("Login Success!");
		}
    }
	});
});