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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcryptjs = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register({ name, email, password, role }) {
        const user = await this.userService.findOnebyEmail(email);
        if (user) {
            throw new common_1.BadRequestException('User already exist');
        }
        await this.userService.create({
            name,
            password: await bcryptjs.hash(password, 10),
            email,
            role
        });
        return {
            name, email
        };
    }
    async login({ email, password }) {
        const user = await this.userService.findOnebyEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('email is wrong');
        }
        const isPassworrdValid = await bcryptjs.compare(password, user.password);
        if (!isPassworrdValid) {
            throw new common_1.UnauthorizedException('pasword is wrong');
        }
        console.log(user.email);
        const payload = { email: user.email, role: user.role };
        const token = await this.jwtService.signAsync(payload);
        return {
            token,
            email
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map