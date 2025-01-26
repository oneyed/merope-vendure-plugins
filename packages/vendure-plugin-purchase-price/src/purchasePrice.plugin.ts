import { PluginCommonModule, VendurePlugin, LanguageCode } from "@vendure/core";

import {purchasePricePermission, PLUGIN_INIT_OPTIONS} from "./constants";
import { PurchasePriceOptions } from "./types";

/**
 * This is an example plugin that you can use as the basis for your own custom plugin.
 *
 * @category Plugin
 */
@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [
    {
      provide: PLUGIN_INIT_OPTIONS,
      useFactory: () => PurchasePricePlugin.options,
    },
  ],
  shopApiExtensions: {
  },
  adminApiExtensions: {
  },
  configuration: config => {
    config.authOptions.customPermissions.push(purchasePricePermission);
    config.customFields.ProductVariantPrice.push({
      name: 'PurchasePriceVariant',
      type: 'int',
      public: true,
      nullable: false,
      defaultValue:0,
      label: [
        {
          languageCode: LanguageCode.en,
          value: 'Purchase Price',
        },
        {
          languageCode: LanguageCode.fr,
          value: "Prix d'achat",
        },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value:
            'Setting this field will add a purchase price to the variant',
        },
      ],
      ui: { component: 'currency-form-input' },
    });
    return config;
  },
  compatibility: '>=3.0.0'
})
export class PurchasePricePlugin {
  /** @internal */
  static options: PurchasePriceOptions;

  /**
   * The static `init()` method is called with the options to
   * configure the plugin.
   *
   * @example
   * ```ts
   * ExamplePlugin.init({
   *     enabled: true,
   * }),
   * ```
   */
  static init(options: PurchasePriceOptions) {
    this.options = options;
    return PurchasePricePlugin;
  }
}
