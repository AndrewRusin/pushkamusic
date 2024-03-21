"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectModule = void 0;
const common_1 = require("@nestjs/common");
const select_controller_1 = require("./select.controller");
const select_service_1 = require("./select.service");
const schedule_1 = require("@nestjs/schedule");
const mongoose_1 = require("@nestjs/mongoose");
const select_model_1 = require("./select.model/select.model");
let SelectModule = exports.SelectModule = class SelectModule {
};
exports.SelectModule = SelectModule = __decorate([
    (0, common_1.Module)({
        controllers: [select_controller_1.SelectController],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: select_model_1.SelectModel.name, schema: select_model_1.SelectSchema }]),
            schedule_1.ScheduleModule.forRoot(),
        ],
        providers: [select_service_1.SelectService]
    })
], SelectModule);
//# sourceMappingURL=select.module.js.map