import { generateTypes } from "../../utils/generate-types";
import path from "path";
import { PurchasePricePlugin } from "./src";

require("dotenv").config({ path: path.join(__dirname, "../dev-server/.env") });

generateTypes(
  {
    plugins: [
      PurchasePricePlugin.init({
        enabled: true,
      }),
    ],
  },
  {
    pluginDir: __dirname,
    e2e: true,
    ui: false,
  },
).then(() => process.exit(0));
