sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	//"sap/ui/model/resource/ResourceModel",
	"SAPUI5/controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog) { // ResourceModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("SAPUI5.Component", {

		/*metadata: {
			rootView: "SAPUI5.view.Root"
		},*/

		metadata: {
			manifest: "json"
		},

		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// set data model
			var oData = {
				recipient: {
					name: "World",
					lastname: ""
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			/*// set i18n model
			var i18nModel = new ResourceModel({
				bundleName: "SAPUI5.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");*/

			// set dialog
			this.helloDialog = new HelloDialog();
		}
	});
});