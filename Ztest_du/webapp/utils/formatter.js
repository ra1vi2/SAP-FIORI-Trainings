sap.ui.define([],
    
	function(){
		"use strict";
		return{
			SalesOrder: function(SalesOrder)
			{
				var day = SalesOrder.substring(1,3);
				var month = SalesOrder.substring(3,5);
				var year = SalesOrder.substring(6,10);
				
				var dateformat = day + "/" + month + "/" + year ; 
			 return dateformat; 
			}
		};
	});