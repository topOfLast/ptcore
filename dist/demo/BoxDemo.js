"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var BoxDemo = /** @class */ (function (_super) {
    __extends(BoxDemo, _super);
    function BoxDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxDemo.prototype.render = function () {
        return react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(ink_1.Box, { flexDirection: "column" },
                react_1["default"].createElement(ink_1.Box, null,
                    react_1["default"].createElement(ink_1.Box, { borderStyle: "single", marginRight: 2 },
                        react_1["default"].createElement(ink_1.Text, null, "single")),
                    react_1["default"].createElement(ink_1.Box, { borderStyle: "double", marginRight: 2 },
                        react_1["default"].createElement(ink_1.Text, null, "double")),
                    react_1["default"].createElement(ink_1.Box, { borderStyle: "round", marginRight: 2 },
                        react_1["default"].createElement(ink_1.Text, null, "round")),
                    react_1["default"].createElement(ink_1.Box, { borderStyle: "bold" },
                        react_1["default"].createElement(ink_1.Text, null, "bold"))),
                react_1["default"].createElement(ink_1.Box, { marginTop: 1 },
                    react_1["default"].createElement(ink_1.Box, { borderStyle: "singleDouble", marginRight: 2 },
                        react_1["default"].createElement(ink_1.Text, null, "singleDouble")),
                    react_1["default"].createElement(ink_1.Box, { borderStyle: "doubleSingle", marginRight: 2 },
                        react_1["default"].createElement(ink_1.Text, null, "doubleSingle")),
                    react_1["default"].createElement(ink_1.Box, { borderStyle: "classic" },
                        react_1["default"].createElement(ink_1.Text, null, "classic")))),
            react_1["default"].createElement(ink_1.Box, { borderStyle: "round", borderColor: "green", width: 20 },
                react_1["default"].createElement(ink_1.Text, null, "Green Rounded Box")));
    };
    return BoxDemo;
}(react_1["default"].Component));
exports["default"] = BoxDemo;
