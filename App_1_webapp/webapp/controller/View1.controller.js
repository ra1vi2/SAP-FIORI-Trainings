sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"int_test/int_test/util/formatter",
	"sap/m/ColumnListItem"
	//"int_test/util/formatter"
], function (Controller, JSONModel , MessageToast,formatter,ColumnListItem) {
	"use strict";

	return Controller.extend("int_test.int_test.controller.View1", {
		formatter : formatter,
		onInit: function () {
			//  alert("in initialization");
			sap.ui.getCore().getMessageManager().registerObject(this.getView(), true) ;
			this.idUserid = this.getView().byId("idUserid");
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
			
			var visibleModel = new JSONModel(
				{
					visible : false ,
					text : "text"
				});
			
			this.getView().setModel(visibleModel,"Local");
			
		//	var oDataModel = new sap.ui.model.odata.v2.ODataModel();
		//	
		//this.getView().byId("list1").setModel(oDataModel);
			
		//	this.getView().byId("idAddress").setModel(hierModel,"hModel");
		//	this.getView().byId("idAdd").setModel(hierModel,"hModel");

			 var oModel_ = new JSONModel({
			 	dynamicText : "1" ,
			 	enabled : true,
			 	dynamic2 : "this is second",
			 	sjdnc: "sdc"
			 	});
          // this.getView().setModel(oModel_,"model");
		//	var oModel = this.getOwnerComponent().getModel("testdata");
	//		this.getView().byId("idCombo").setModel(oModel, "oModel");
		   var listModel = this.getOwnerComponent().getModel("listdata");
	    	this.getView().byId("list1").setModel(listModel, "list");
		
		
		},
		
		onListItemPress: function(oEvent)
		{
			var oSelectedItem = oEvent.getSource();
			var oContext = oSelectedItem.getBindingContext("list");
			var sPath = oContext.getPath();
			var index = sPath.charAt(6);
			
		
	var data = 	this.getOwnerComponent().getModel("listdata").getData() ;
			var text =	data.code[index].text ; 
			
		
		//Routing
		/**
		 * /
		 */
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    	oRouter.navTo("View2" , 
    	{
    		index: text
    	}
    	);
		
		
		/*	
			var oPanel = this.getView().byId("panelid");
			oPanel.bindElement({
				path : sPath,
				model : "listdata"
			}); */
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
    },
    
    onValueHelp:function(oEvent)
    {
    	 var oColModel = this.getOwnerComponent()
        .getModel("user_col");
        
      this.oUserIDmodel = this.getOwnerComponent().getModel("listdata");
      
      this.getView().byId("idUserid")
        .setModel(this.oUserIDmodel);
      var aCols = oColModel.getData()
        .cols;
        this._oValueHelpDialog = sap.ui.xmlfragment("int_test/int_test/fragments/useridValueHelp", this);
      this.getView()
        .addDependent(this._oValueHelpDialog);
        var help_tab = this._oValueHelpDialog.getTable();
    //  this._oValueHelpDialog.getTableAsync()
       // .then(function (oTable) {
          help_tab.setModel(this.oUserIDmodel);
          help_tab.setModel(oColModel, "columns");
          if (help_tab.bindRows) {
            help_tab.bindAggregation("rows", "/code");
          }
          if (help_tab.bindItems) {
            help_tab.bindAggregation("items", "/code", function () {
              return new ColumnListItem({
                cells: aCols.map(function (column) {
                  return new sap.m.Label({
                    text: "{" + column.template + "}"
                  });
                })
              });
            });
          }
          this._oValueHelpDialog.update();
       // }.bind(this));
      
     /* this._oValueHelpDialog.setTokens([
          new sap.m.Token({
            key: this.idUserid.getSelectedKey(),
            text: this.idUserid.getValue()
          })
        ]);*/
       
     this._oValueHelpDialog.setTokens(this.idUserid.getTokens());
      this._oValueHelpDialog.open();
    },
    onValueHelpOkPress: function (oEvent) {
      var aTokens = oEvent.getParameter("tokens");
     this.idUserid.setTokens(aTokens);
	//this.idUserid.setSelectedKey(aTokens[0].getKey());
      this._oValueHelpDialog.close();
    },
   
    selectionchange: function (oEvent) {
      var aTokens = oEvent.getParameter("tokens");
      this.idUserid.setSelectedKey(aTokens[0].getKey());
      this._oValueHelpDialog.close();
    },
    onValueHelpCancelPress: function () {
      this._oValueHelpDialog.close();
    },
    onValueHelpAfterClose: function () {
      this._oValueHelpDialog.destroy();
    },
    
    onSearchTable:function(oEvent)
    {
    	var query = oEvent.getParameter("query");
    	var aFilter = [] ;
    	
    	if(query)
    	{
    	  var sorter = new sap.ui.model.Sorter("text", false);
    	  var filter = new sap.ui.model.Filter("text", sap.ui.model.FilterOperator.Contains ,query );
    	  aFilter.push(filter);
    	}
    	  var list = this.getView().byId("list1");
    	  var listbinding = list.getBinding("items");
    	  
    	  listbinding.filter(aFilter);
    	  //list.refreshAggregation("items");
    	
    },
    
    onListDisp:function()
    {
    	 this.getOwnerComponent().getRouter().navTo("View2");
      	var LocalModel = this.getView().byId("list1").getModel("Local");
    	LocalModel.getData().visible = false;
    	LocalModel.refresh();
        //this.getView().byId("list1_table").setVisible(true);
    },
    onTableDisp:function()
    {
    	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    	oRouter.navTo("View3");
    	 this.getOwnerComponent().getRouter().navTo("View2");
    	//this.getView().byId("list1").setVisible(true);
    	var LocalModel = this.getView().byId("list1").getModel("Local");
    	LocalModel.getData().visible = true;
    	LocalModel.refresh();
    	
    }
    

	});
});