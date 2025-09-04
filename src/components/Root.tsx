import * as React from "react";
import { usePluginStore } from "react-pluggable";
import { PluginStoreWithPlugins } from "../types";

const Root = (props: any) => {
  const pluginStore: PluginStoreWithPlugins = usePluginStore();

  //Write pluginStore.executeFunction() and see the effect

  return (
    <>
      <h1>Working</h1>
      <p>
        In components/Test.tsx, write pluginStore.executeFunction() and observer
        the typing
      </p>
      <button
        onClick={() => {
          pluginStore.executeFunction(
            "ClickMe.sendAlert",
            "Typing in Pluggable"
          );
        }}
      >
        Send Alert
      </button>
    </>
  );
};

export default Root;
