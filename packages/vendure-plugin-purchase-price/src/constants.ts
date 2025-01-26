import {CrudPermissionDefinition} from "@vendure/core";

/** @internal */
export const loggerCtx = "PurchasePricePlugin";
/** @internal */
export const PLUGIN_INIT_OPTIONS = Symbol("PLUGIN_INIT_OPTIONS");

/**
 * This permission gives access to CRUD operations on the Example entity.
 */
export const purchasePricePermission = new CrudPermissionDefinition('Example')