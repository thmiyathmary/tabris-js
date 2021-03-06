import Proxy from "./Proxy";

export default Proxy.extend({
  _type: "tabris.GestureRecognizer",
  _properties: {
    type: "string",
    target: "proxy",
    fingers: "natural",
    touches: "natural",
    duration: "natural",
    direction: "string"
  },

  _events: {
    gesture: true
  }
});
