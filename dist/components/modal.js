"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./modal.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Modal(_ref) {
  let {
    children,
    show,
    closeCallback,
    style
  } = _ref;
  const ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const dialog = ref.current;
    if (show) {
      dialog.removeAttribute("open");
      dialog.showModal();
    } else {
      dialog.close();
    }
    const close = e => {
      if (e.key === "Escape") {
        closeCallback();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [closeCallback, show]);
  return /*#__PURE__*/_react.default.createElement("dialog", {
    ref: ref,
    style: style,
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, children), /*#__PURE__*/_react.default.createElement("a", {
    href: "#close-modal",
    className: "close-modal",
    onClick: closeCallback
  }, "Close"));
}
var _default = Modal;
exports.default = _default;