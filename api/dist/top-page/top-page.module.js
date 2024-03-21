"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPageModule = void 0;
const common_1 = require("@nestjs/common");
const top_page_service_1 = require("./top-page.service");
const top_page_controller_1 = require("./top-page.controller");
const top_page_model_1 = require("./top-page.model/top-page.model");
const mongoose_1 = require("@nestjs/mongoose");
let TopPageModule = exports.TopPageModule = class TopPageModule {
};
exports.TopPageModule = TopPageModule = __decorate([
    (0, common_1.Module)({
        providers: [top_page_service_1.TopPageService],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: top_page_model_1.TopPageModel.name, schema: top_page_model_1.TopPageShema }])],
        controllers: [top_page_controller_1.TopPageController]
    })
], TopPageModule);
//# sourceMappingURL=top-page.module.js.map