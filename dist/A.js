"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * A compononent renders a heading
 */
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        console.info('A component', props);
        return _this;
    }
    /**
     * Returns the ARIA-label text by following priority:
     * 1. ariaLabel property
     * 2. title property
     * 3. innerText
     *
     * @returns {string}
     */
    A.prototype.getAriaLabel = function () {
        var ariaLabel;
        if (this.props.ariaLabel) {
            ariaLabel = this.props.ariaLabel;
        }
        else if (this.props.title) {
            ariaLabel = this.props.title;
        }
        else if (this.props.children && typeof (this.props.children) === 'string') {
            ariaLabel = this.props.children;
        }
        return ariaLabel;
    };
    A.prototype.render = function () {
        return (React.createElement("a", { href: this.props.href, className: this.props.className, "aria-label": this.getAriaLabel(), target: this.props.target, tabIndex: this.props.tabIndex ? this.props.tabIndex : 0, title: this.props.title }, this.props.children));
    };
    return A;
}(React.Component));
exports.default = A;
