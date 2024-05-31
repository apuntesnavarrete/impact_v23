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
exports.Matches = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const teams_entity_1 = require("../teams/teams.entity");
const tournaments_entity_1 = require("../tournaments/tournaments.entity");
const typeorm_1 = require("typeorm");
let Matches = class Matches {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, date: { required: true, type: () => String }, teamHome: { required: true, type: () => require("../teams/teams.entity").Teams }, matchday: { required: true, type: () => Number }, localgoals: { required: true, type: () => Number }, pointsLocal: { required: true, type: () => Number }, teamAway: { required: true, type: () => require("../teams/teams.entity").Teams }, visitangoals: { required: true, type: () => Number }, pointsVisitan: { required: true, type: () => Number }, tournaments: { required: true, type: () => require("../tournaments/tournaments.entity").Tournaments }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
};
exports.Matches = Matches;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Matches.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 12,
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], Matches.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teams_entity_1.Teams, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'teamHome' }),
    __metadata("design:type", teams_entity_1.Teams)
], Matches.prototype, "teamHome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Matches.prototype, "matchday", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Matches.prototype, "localgoals", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Matches.prototype, "pointsLocal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teams_entity_1.Teams, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'teamAway' }),
    __metadata("design:type", teams_entity_1.Teams)
], Matches.prototype, "teamAway", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Matches.prototype, "visitangoals", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Matches.prototype, "pointsVisitan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tournaments_entity_1.Tournaments, tournaments => tournaments.id),
    __metadata("design:type", tournaments_entity_1.Tournaments)
], Matches.prototype, "tournaments", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Matches.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Matches.prototype, "updatedAt", void 0);
exports.Matches = Matches = __decorate([
    (0, typeorm_1.Entity)()
], Matches);
//# sourceMappingURL=matches.entity.js.map