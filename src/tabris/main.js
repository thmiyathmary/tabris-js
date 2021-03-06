import "./load-polyfill.js";
import "./Tabris.js";
import "./Device.js";

import App from "./App";
import UI from "./UI";
import ImageData from "./ImageData";
import {addDOMDocument} from "./DOMDocument";
import {addWindowTimerMethods} from "./WindowTimers";
import ProgressEvent from "./DOMProgressEvent";
import Storage, {create as createStorage} from "./WebStorage";
import XMLHttpRequest from "./XMLHttpRequest";
import Action from "./widgets/Action";
import ActivityIndicator from "./widgets/ActivityIndicator.js";
import Button from "./widgets/Button.js";
import Canvas from "./widgets/Canvas.js";
import CheckBox from "./widgets/CheckBox.js";
import Cell from "./widgets/Cell.js";
import CollectionView from "./widgets/CollectionView.js";
import Composite from "./widgets/Composite.js";
import Crypto from "./Crypto.js";
import Drawer from "./widgets/Drawer.js";
import ImageView from "./widgets/ImageView.js";
import Page from "./widgets/Page.js";
import PageSelector from "./widgets/PageSelector.js";
import Picker from "./widgets/Picker.js";
import ProgressBar from "./widgets/ProgressBar.js";
import Proxy from "./Proxy.js";
import RadioButton from "./widgets/RadioButton.js";
import ScrollView from "./widgets/ScrollView.js";
import SearchAction from "./widgets/SearchAction.js";
import Slider from "./widgets/Slider.js";
import Switch from "./widgets/Switch.js";
import Tab from "./widgets/Tab.js";
import TabFolder from "./widgets/TabFolder.js";
import TextInput from "./widgets/TextInput.js";
import TextView from "./widgets/TextView.js";
import ToggleButton from "./widgets/ToggleButton.js";
import Video from "./widgets/Video.js";
import WebView from "./widgets/WebView.js";

module.exports = global.tabris;
window.ImageData = ImageData;
window.XMLHttpRequest = XMLHttpRequest;
window.ProgressEvent = ProgressEvent;
addDOMDocument(window);
addWindowTimerMethods(window);
tabris.load(function() {
  tabris.app = new App();
  tabris.ui = new UI();
  tabris.Storage = Storage;
  tabris.localStorage = createStorage();
  if (device.platform === "iOS") {
    tabris.secureStorage = createStorage(true);
  }
  window.localStorage = tabris.localStorage;
  if (tabris.secureStorage) {
    window.secureStorage = tabris.secureStorage;
  }
  window.crypto = new Crypto();
});

tabris.Action = Action;
tabris.ActivityIndicator = ActivityIndicator;
tabris.Button = Button;
tabris.Canvas = Canvas;
tabris.Cell = Cell;
tabris.CheckBox = CheckBox;
tabris.CollectionView = CollectionView;
tabris.Composite = Composite;
tabris.Drawer = Drawer;
tabris.ImageView = ImageView;
tabris.Page = Page;
tabris.PageSelector = PageSelector;
tabris.Picker = Picker;
tabris.ProgressBar = ProgressBar;
tabris.Proxy = Proxy;
tabris.RadioButton = RadioButton;
tabris.ScrollView = ScrollView;
tabris.SearchAction = SearchAction;
tabris.Slider = Slider;
tabris.Switch = Switch;
tabris.Tab = Tab;
tabris.TabFolder = TabFolder;
tabris.TextInput = TextInput;
tabris.TextView = TextView;
tabris.ToggleButton = ToggleButton;
tabris.Video = Video;
tabris.WebView = WebView;
