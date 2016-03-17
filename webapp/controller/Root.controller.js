sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	function(Controller) {
		"use strict";

		return Controller.extend("SAPUI5.controller.Root", {

			onOpenDialog: function() {
				this.getOwnerComponent().helloDialog.open(this.getView());
			}
		});

	});