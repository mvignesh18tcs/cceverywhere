import "@spectrum-web-components/theme/express/scale-medium.js";
import "@spectrum-web-components/theme/express/theme-light.js";
import { Button } from "@swc-react/button";
import { Theme } from "@swc-react/theme";
import React, { useState } from "react";
import "./App.css";

const App = ({ AddOnSdk }) => {
    const [buttonLabel, setButtonLabel] = useState("Create Video Renditions");

   async function handleClick() {
        setButtonLabel("Creating Renditions");
        const renditions = await AddOnSdk.app.document.createRenditions({range:"currentPage",format:"video/mp4"});
        console.log(renditions);
    }
    return (
        <Theme theme="express" scale="medium" color="light">
            <div className="container">
                <Button size="m" onClick={handleClick}>
                    {buttonLabel}
                </Button>
            </div>
        </Theme>
    );
};

export default App;
