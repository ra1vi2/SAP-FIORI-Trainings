sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"odata_crudOdata_crud/util/db",
	"sap/m/MessageToast"
], function(Controller, db,MessageToast) {
	"use strict";

	return Controller.extend("odata_crudOdata_crud.controller.View1", {

		onInit: function() {

			//var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/Ztes1_srv/"); 
			//this.getView().setModel(oModel);

			this.mandt = "400";

		},
		onLoadData: function() {
			var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/Ztes1_srv/");

			var material = this.getView().byId("idMatnr").getValue();

			var payload = {
				Mandt: "400",
				Matnr: material,
				Ernam: "updated",
				Aenam: "AEupdated ui",
				Vpsta: "Ui updated",
				Pstat: "Psra"
			};

			var sUrl = "/mara_testSet" + "(Mandt='" + this.mandt + "',Matnr='" + material + "')";
			var result = db.dataUpdate(sUrl, payload);
			if (result > 0) {
				alert("success");
			} else {
				alert("error");
			}

			/*	oModel.create("/mara_testSet", payload , 
				{
					success:function()
					{
						alert("insert success");
						
					}, 
					error:function()
					{
						alert("Error in Inserttion");
						
					} 
				}
				) ;*/
		},
		
		onEdit:function(oEvent)
		{
			var oItem = oEvent.getSource().getParent();
			var oTable = this.getView().byId("idProductsTable");
			var oIndex = oTable.indexOfItem(oItem);
			
			this.EditCell(oItem, true) ;
			
		},
		
		EditCell:function(oItem,oFlag)
		{
			var oEditablecell = oItem.getCells();
			$(oEditablecell).each(function(i){
				var oEditable = oEditablecell[i];
				var oMetadata = oEditable.getMetadata();
				var oElement = oMetadata.getElementName();
				if(oElement == "sap.m.Input")
				{
					oEditable.setEditable(true);
				}
			});
		},
		onSaveTableData: function(oEvent)
		{
			if(this.getView().byId("idProductsTable").getModel().hasPendingChanges())
			{
				this.getView().byId("idProductsTable").getModel().submitChanges({
					success:function(oDataBatch){
						MessageToast.show("Data Saved");
						this.getView().byId("idProductsTable").refreshAggregation("items");
					},
					error: function()
					{
						MessageToast.show("Could not update");
					}
				});
			}
		}

	});
});