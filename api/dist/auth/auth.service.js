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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./auth.model/user.model");
const mongoose_1 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const mongoose_2 = require("@nestjs/mongoose");
const auth_constants_1 = require("./auth.constants");
const jwt_1 = require("@nestjs/jwt");
let AuthService = exports.AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async createUser(dto) {
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const newUser = new this.userModel({
            email: dto.login,
            passwordHash: await (0, bcryptjs_1.hash)(dto.password, salt)
        });
        return newUser.save();
    }
    async findUser(email) {
        return this.userModel.findOne({ email }).exec();
    }
    async validateUser(email, password) {
        const user = await this.findUser(email);
        if (!user) {
            throw new common_1.UnauthorizedException(auth_constants_1.USER_NOT_FOUND_ERROR);
        }
        const isCorrectPassword = await (0, bcryptjs_1.compare)(password, (await user).passwordHash);
        if (!isCorrectPassword) {
            throw new common_1.UnauthorizedException(auth_constants_1.WRONG_PASSWORD_ERROR);
        }
        return { email: (await user).email };
    }
    async login(email) {
        const payload = { email };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_model_1.UserModel.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map