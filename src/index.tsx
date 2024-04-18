import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

AddOnSdk.ready.then(() => {
    console.log("addOnUISdk is ready for use.");

    const root = createRoot(document.getElementById("root"));
    root.render(<App AddOnSdk={AddOnSdk} />);
});
