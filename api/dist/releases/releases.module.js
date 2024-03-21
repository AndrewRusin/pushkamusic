"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleasesModule = void 0;
const common_1 = require("@nestjs/common");
const releases_controller_1 = require("./releases.controller");
const releases_service_1 = require("./releases.service");
const mongoose_1 = require("@nestjs/mongoose");
const releases_model_1 = require("./releases.model/releases.model");
let ReleasesModule = exports.ReleasesModule = class ReleasesModule {
};
exports.ReleasesModule = ReleasesModule = __decorate([
    (0, common_1.Module)({
        controllers: [releases_controller_1.ReleasesController],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: releases_model_1.ReleasesModel.name, schema: releases_model_1.ReleasesShema }])],
        providers: [releases_service_1.ReleasesService]
    })
], ReleasesModule);
//# sourceMappingURL=releases.module.js.map