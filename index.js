import React from "react";
import { registerRootComponent } from "expo";
import { Provider as PaperProvider } from "react-native-paper";

import App from "./App";

const renderApp = () => (
	<PaperProvider>
		<App />
	</PaperProvider>
);

registerRootComponent(renderApp);
