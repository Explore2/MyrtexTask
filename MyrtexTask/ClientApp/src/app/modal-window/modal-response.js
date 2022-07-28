"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalResult = exports.ModalType = exports.ModalResponse = void 0;
var ModalResponse = /** @class */ (function () {
    function ModalResponse() {
    }
    ;
    return ModalResponse;
}());
exports.ModalResponse = ModalResponse;
var ModalType;
(function (ModalType) {
    ModalType[ModalType["delete"] = 0] = "delete";
    ModalType[ModalType["edit"] = 1] = "edit";
    ModalType[ModalType["add"] = 2] = "add";
    ModalType[ModalType["close"] = 3] = "close";
})(ModalType = exports.ModalType || (exports.ModalType = {}));
var ModalResult;
(function (ModalResult) {
    ModalResult[ModalResult["confirm"] = 0] = "confirm";
    ModalResult[ModalResult["close"] = 1] = "close";
})(ModalResult = exports.ModalResult || (exports.ModalResult = {}));
//# sourceMappingURL=modal-response.js.map