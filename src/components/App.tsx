// To support: theme="express" scale="medium" color="light"
// import these spectrum web components modules:
import "@spectrum-web-components/theme/express/scale-medium.js";
import "@spectrum-web-components/theme/express/theme-light.js";

// To learn more about using "swc-react" visit:
// https://opensource.adobe.com/spectrum-web-components/using-swc-react/
import { Button } from "@swc-react/button";
import { Theme } from "@swc-react/theme";
import React, { useContext, useEffect, useState } from 'react';
import "./App.css";


const App = ({ addOnUISdk }) => {
    const [ccEverywhere, setCcEverywhere] = useState(undefined);

    const CDN_URL = "https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js";

    function loadSdk() {
        const script = document.createElement("script");
        script.src = CDN_URL;
        script.onload = async () => {
            if (!window.CCEverywhere) return;
            try {
                const ccE = await window.CCEverywhere.initialize({
                    clientId: "0fe3e21baf6d44ab8b477175893ea204",
                    appName: "Wix",
                });
                setCcEverywhere(ccE);
            } catch (error) {
                console.log(error);
            }
        };
        document.body.appendChild(script);
    }

    useEffect(() => {
        loadSdk()
    }, [])

    function handleClick() {
        if (ccEverywhere) {
            console.log(ccEverywhere);
            const docConfig = { canvasSize: "Logo" };
            const appConfig = { selectedCategory: "templates", categorySearchText: "logo" }
            ccEverywhere.editor.create(docConfig,appConfig);
        }
    }

    return (
        <Theme theme="express" scale="medium" color="light">
            <div className="container">
                <Button size="m" onClick={handleClick}>
                    Open template
                </Button>
            </div>
        </Theme>
    );
};

export default App;
