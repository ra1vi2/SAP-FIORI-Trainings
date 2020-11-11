sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"com/ra1vi2/ducattest/Ztest_ducat/utils/formatter"
], function (Controller,JSONModel,MessageToast,formatter) {
	"use strict";

	return Controller.extend("com.ra1vi2.ducattest.Ztest_ducat.controller.View1", {
		formatter: formatter,
		
		onInit: function () {
          /* var oModel = new JSONModel({
			enabled: true
		}); */
		
	/*	this.getView().byId("check").setModel(oModel,"mod");
		this.getView().byId("productInput_").setModel(oModel);
		
		var jsonModel = this.getOwnerComponent().getModel("deposition_code");
		this.getView().byId("idCode1").setModel(jsonModel,"DataModel");*/
		
		},
		onBeforeRendering: function()
		{
		MessageToast.show("Before Rendering");	
		},
		
		
		onAfterRendering:function()
		{
			MessageToast.show("After rendering");
		},
		onpress:function(oEvent)
		{
		//MessageToast.show("Button Clicked")	;
	//	var oRouter = sap.ui.getcore.UIComponent.getRouterFor(this);
        // oRouter.navTo("View2");
       var in_value =  this.getView().byId("productInput").getValue().toString();
       //console.log(in_value);
        this.getOwnerComponent().getRouter().navTo("View2",
        {
        	in_text : in_value    
        }
        );
		
		},
		
		 onValueHelpRequested: function () {
		 	MessageToast.show("value help requested");
     /* var oColModel = this.getOwnerComponent()
        .getModel("so_col");
        
     // this.oProductsModel = new sap.ui.model.json.JSONModel("code", false);
    this.oProductsModel =   new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZSOCDS_SRV/", false); 
      this.getView().byId("filter_id")
        .setModel(this.oProductsModel);
      var aCols = oColModel.getData()
        .cols;
      this._oValueHelpDialog = sap.ui.xmlfragment("com.sopra.smart.sopra_smart_table..view.valuehelp_id", this);
      this.getView()
        .addDependent(this._oValueHelpDialog);
       // var mat_help_tab = this._oValueHelpDialog.getTable();
      this._oValueHelpDialog.getTableAsync()
      .then(function (mat_help_tab) {
          mat_help_tab.setModel(this.oProductsModel);
          mat_help_tab.setModel(oColModel, "columns");
          if (mat_help_tab.bindRows) {
            mat_help_tab.bindAggregation("rows", "/SEPM_I_SalesOrder_E");
          }
          if (mat_help_tab.bindItems) {
            mat_help_tab.bindAggregation("items", "/SEPM_I_SalesOrder_E", function () {
              return new ColumnListItem({
                cells: aCols.map(function (column) {
                  return new Label({
                    text: "{" + column.template + "}"
                  });
                })
              });
            });
          }
          this._oValueHelpDialog.update();
        }.bind(this));
      
        this._oValueHelpDialog.setTokens([
          new Token({
            key: this._oInput.getSelectedKey(),
            text: this._oInput.getValue()
          })
        ]);
        
      //this._oValueHelpDialog.setValue(this._oInput_mat.getValue());
   //   this._oInput_mat.setValue(this._oValueHelpDialog.getSelectedKey());
      this._oValueHelpDialog.open();*/
    },
    onValueHelpOkPress: function (oEvent) {
      var aTokens = oEvent.getParameter("tokens");
     // this._oInput_mat.setTokens(aTokens);
     this._oInput.setValue(aTokens[0].getKey());
      this._oValueHelpDialog.close();
    },
    selectionchange: function (oEvent) {
      var aTokens = oEvent.getParameter("tokens");
      this._oInput.setSelectedKey(aTokens[0].getKey());
      this._oValueHelpDialog.close();
    },
    onValueHelpCancelPress: function () {
      this._oValueHelpDialog.close();
    },
    onValueHelpAfterClose: function () {
      this._oValueHelpDialog.destroy();
    }
		
	});
});