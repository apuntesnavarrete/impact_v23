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
exports.Santions = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const matches_entity_1 = require("../matches/matches.entity");
const participants_entity_1 = require("../participants/participants.entity");
const typeorm_1 = require("typeorm");
let Santions = class Santions {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, matches: { required: true, type: () => require("../matches/matches.entity").Matches }, participants: { required: true, type: () => require("../participants/participants.entity").Participants }, description: { required: true, type: () => String }, dateStart: { required: true, type: () => String }, state: { required: true, type: () => Boolean } };
    }
};
exports.Santions = Santions;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Santions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matches_entity_1.Matches, matches => matches.id),
    __metadata("design:type", matches_entity_1.Matches)
], Santions.prototype, "matches", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participants_entity_1.Participants, participants => participants.id),
    __metadata("design:type", participants_entity_1.Participants)
], Santions.prototype, "participants", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Santions.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 12,
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], Santions.prototype, "dateStart", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Santions.prototype, "state", void 0);
exports.Santions = Santions = __decorate([
    (0, typeorm_1.Entity)()
], Santions);
//# sourceMappingURL=santions.entity.js.map