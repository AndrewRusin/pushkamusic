"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleasesShema = exports.ReleasesModel = exports.ReleasesCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var ReleasesCategory;
(function (ReleasesCategory) {
    ReleasesCategory["ReleasesClips"] = "clips";
    ReleasesCategory["ReleasesSongs"] = "songs";
})(ReleasesCategory || (exports.ReleasesCategory = ReleasesCategory = {}));
let ReleasesModel = exports.ReleasesModel = class ReleasesModel {
};
__decorate([
    (0, mongoose_1.Prop)({ enum: ReleasesCategory }),
    __metadata("design:type", String)
], ReleasesModel.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ReleasesModel.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ReleasesModel.prototype, "link", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ReleasesModel.prototype, "background", void 0);
exports.ReleasesModel = ReleasesModel = __decorate([
    (0, mongoose_1.Schema)()
], ReleasesModel);
exports.ReleasesShema = mongoose_1.SchemaFactory.createForClass(ReleasesModel);
//# sourceMappingURL=releases.model.js.map