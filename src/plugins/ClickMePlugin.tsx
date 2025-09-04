import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";

class ClickMePlugin implements IPlugin {
  namespace = "ClickMe";

  pluginStore!: PluginStore;

  getPluginName(): string {
    return `${this.namespace}@1.1.0`;
  }
  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.addFunction(
      `${this.namespace}.sendAlert`,
      (msg: string) => {
        alert(msg);
      }
    );

    this.pluginStore.addFunction(
      `${this.namespace}.add`,
      (a: number, b: number) => {
        console.log(a + b);
      }
    );
  }

  deactivate(): void {
    this.pluginStore.removeFunction(`${this.namespace}.sendAlert`);
  }
}
export default ClickMePlugin;

export type PluginStoreClickMe = {
  executeFunction(functionName: `ClickMe.sendAlert`, msg: string): void;
  executeFunction(functionName: `ClickMe.add`, a: number, b: number): void;
};
