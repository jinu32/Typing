import { PluginStore } from "react-pluggable";
import { PluginStoreClickMe } from "./plugins/ClickMePlugin";

export type PluginStoreWithPlugins = PluginStore & PluginStoreClickMe;
