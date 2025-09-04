import React from "react";
import { createPluginStore, PluginProvider } from "react-pluggable";
import ClickMePlugin from "./plugins/ClickMePlugin";
import Root from "./components/Root";
import { PluginStoreWithPlugins } from "./types";

const pluginStore: PluginStoreWithPlugins = createPluginStore();
pluginStore.install(new ClickMePlugin());

function App() {
  return (
    <PluginProvider pluginStore={pluginStore}>
      <Root />
    </PluginProvider>
  );
}

export default App;
