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
exports.Participants = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let Participants = class Participants {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, birthDate: { required: false, type: () => String }, Curp: { required: false, type: () => String, minLength: 18, pattern: "/^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9]{2}$/" }, Photo: { required: false, type: () => String }, Email: { required: false, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
};
exports.Participants = Participants;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Participants.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Participants.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Participants.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 18,
        nullable: true
    }),
    (0, class_validator_1.Length)(18),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9]{2}$/, { message: 'El CURP no es válido' }),
    __metadata("design:type", String)
], Participants.prototype, "Curp", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: true,
        default: 'default_jugador.jpg'
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Participants.prototype, "Photo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: true,
        unique: true
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Participants.prototype, "Email", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Participants.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Participants.prototype, "updatedAt", void 0);
exports.Participants = Participants = __decorate([
    (0, typeorm_1.Entity)()
], Participants);
//# sourceMappingURL=participants.entity.js.map