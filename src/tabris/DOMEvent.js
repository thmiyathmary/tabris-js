var noop = function() {};

export default function DOMEvent(type, eventInitDict) {
  this.type = type;
  this.timeStamp = Date.now();
  if (typeof eventInitDict !== "undefined") {
    if ("bubbles" in eventInitDict) {
      this.bubbles = eventInitDict.bubbles;
    }
    if ("cancelable" in eventInitDict) {
      this.cancelable = eventInitDict.cancelable;
    }
  }
}

DOMEvent.prototype = {
  NONE: 0,
  CAPTURING_PHASE: 1,
  AT_TARGET: 2,
  BUBBLING_PHASE: 3,
  target: null,
  currentTarget: null,
  eventPhase: 0,
  type: "",
  bubbles: false,
  cancelable: false,
  defaultPrevented: false,
  isTrusted: false,
  stopPropagation: noop,
  stopImmediatePropagation: noop,
  preventDefault: noop,
  initEvent: function(type, bubbles, cancelable) {
    this.type = type;
    this.bubbles = bubbles;
    this.cancelable = cancelable;
  }
};

export function addDOMEventTargetMethods(target) {

  if (typeof target.addEventListener === "function") {
    return;
  }

  var listeners;

  target.addEventListener = function(type, listener /*, useCapture*/) {
    if (!listeners) {
      listeners = [];
    }
    if (!(type in listeners)) {
      listeners[type] = [];
    }
    var index = listeners[type].indexOf(listener);
    if (index === -1) {
      listeners[type].push(listener);
    }
    return listeners[type].length === 1;
  };

  target.removeEventListener = function(type, listener /*, useCapture*/) {
    if (listeners && type in listeners) {
      var index = listeners[type].indexOf(listener);
      if (index !== -1) {
        listeners[type].splice(index, 1);
        return listeners[type].length === 0;
      }
    }
    return false;
  };

  target.dispatchEvent = function(event) {
    if (listeners && event.type in listeners) {
      var eventListeners = listeners[event.type];
      event.target = target;
      for (var i = 0; i < eventListeners.length; i++) {
        eventListeners[i].call(this, event);
      }
    }
  };

}
