// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Move the keyboard focus to the next element that can be focused.
 * @returns {Promise.<void>}
 */
export async function FocusNext() {
	// BEGIN USER CODE
    const { focusNext } = require("./FocusHelper");
    focusNext();
    return Promise.resolve();
	// END USER CODE
}
