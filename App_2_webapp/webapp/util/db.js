sap.ui.define([], function() {
	"use strict";
	return {
		dataUpdate: function(sPath, data) {

			var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/Ztes1_srv/");
			oModel.update(sPath, data, {
				success: function() {
					return 1;
				},
				error: function() {
					return 0;
				}
			});

			return 0;
		}

	};
});