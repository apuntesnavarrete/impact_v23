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
exports.SantionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const role_enum_1 = require("../common/role.enum");
const santions_service_1 = require("./santions.service");
let SantionsController = class SantionsController {
    constructor(santionsService) {
        this.santionsService = santionsService;
    }
    async allTeams() {
        try {
            return await this.santionsService.all();
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener equipos');
        }
    }
    async findTeamById(id) {
        if (isNaN(id)) {
            throw new common_1.HttpException('El ID proporcionado no es un número válido.', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.santionsService.get(id);
    }
    async create(teamsData) {
        return await this.santionsService.create(teamsData);
    }
    async updateTeam(id, teamsData) {
        if (isNaN(id)) {
            throw new common_1.HttpException('El ID proporcionado no es un número válido.', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.santionsService.santionsById(id, teamsData);
    }
    async delete(id) {
        if (isNaN(id)) {
            throw new common_1.HttpException('El ID proporcionado no es un número válido.', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.santionsService.delete(id);
    }
    prueba() {
        return "ruta de prueba";
    }
};
exports.SantionsController = SantionsController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./santions.entity").Santions] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SantionsController.prototype, "allTeams", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: [require("./santions.entity").Santions] }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SantionsController.prototype, "findTeamById", null);
__decorate([
    (0, auth_decorators_1.Auth)(role_enum_1.Role.ADMIN),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./santions.entity").Santions }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SantionsController.prototype, "create", null);
__decorate([
    (0, auth_decorators_1.Auth)(role_enum_1.Role.ADMIN),
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SantionsController.prototype, "updateTeam", null);
__decorate([
    (0, auth_decorators_1.Auth)(role_enum_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SantionsController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('upload'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SantionsController.prototype, "prueba", null);
exports.SantionsController = SantionsController = __decorate([
    (0, swagger_1.ApiTags)('Santions'),
    (0, common_1.Controller)('Santions'),
    __metadata("design:paramtypes", [santions_service_1.SantionsService])
], SantionsController);
//# sourceMappingURL=santions.controller.js.map