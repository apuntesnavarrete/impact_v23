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
exports.Teams = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const participants_entity_1 = require("../participants/participants.entity");
const typeorm_1 = require("typeorm");
let Teams = class Teams {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, participants: { required: true, type: () => require("../participants/participants.entity").Participants }, logo: { required: true, type: () => String }, Date: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
};
exports.Teams = Teams;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Teams.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], Teams.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participants_entity_1.Participants, participants => participants.id),
    __metadata("design:type", participants_entity_1.Participants)
], Teams.prototype, "participants", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: true,
        default: 'default_equipo.jpg'
    }),
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], Teams.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Teams.prototype, "Date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Teams.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Teams.prototype, "updatedAt", void 0);
exports.Teams = Teams = __decorate([
    (0, typeorm_1.Entity)()
], Teams);
//# sourceMappingURL=teams.entity.js.map