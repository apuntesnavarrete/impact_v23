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
exports.ParticipantsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const participants_service_1 = require("./participants.service");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ParticipantsController = class ParticipantsController {
    constructor(participantSevice) {
        this.participantSevice = participantSevice;
    }
    async allParticipant() {
        try {
            return this.participantSevice.all();
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener Jugadores');
        }
    }
    async createParticipant(file, participantData) {
        participantData.Photo = file.filename;
        return this.participantSevice.create(participantData);
    }
    async getParticipant(id) {
        if (isNaN(id)) {
            throw new common_1.HttpException('El ID proporcionado no es un número válido.', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.participantSevice.get(id);
    }
    async updateParticipant(id, data) {
        if (isNaN(id)) {
            throw new common_1.HttpException('El ID proporcionado no es un número válido.', common_1.HttpStatus.BAD_REQUEST);
        }
        const updatedParticipant = await this.participantSevice.update(id, data);
        if (updatedParticipant.affected === 0) {
            throw new common_1.NotFoundException(`No fields updated for participant with id ${id} , check you put a valid id`);
        }
        return updatedParticipant;
    }
    async deleteParticipant(id) {
        if (isNaN(id)) {
            throw new common_1.HttpException('El ID proporcionado no es un número válido.', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.participantSevice.delete(id);
    }
};
exports.ParticipantsController = ParticipantsController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./participants.entity").Participants] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParticipantsController.prototype, "allParticipant", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './upload/players',
            filename: (_, file, callback) => {
                callback(null, file.originalname);
            }
        }),
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
                return callback(new Error('invalid format'), false);
            }
            callback(null, true);
        }
    })),
    openapi.ApiResponse({ status: 201, type: require("./participants.entity").Participants }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ParticipantsController.prototype, "createParticipant", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: [require("./participants.entity").Participants] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ParticipantsController.prototype, "getParticipant", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ParticipantsController.prototype, "updateParticipant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    openapi.ApiResponse({ status: 204 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ParticipantsController.prototype, "deleteParticipant", null);
exports.ParticipantsController = ParticipantsController = __decorate([
    (0, swagger_1.ApiTags)('participants'),
    (0, common_1.Controller)('participants'),
    __metadata("design:paramtypes", [participants_service_1.ParticipantsService])
], ParticipantsController);
//# sourceMappingURL=participants.controller.js.map