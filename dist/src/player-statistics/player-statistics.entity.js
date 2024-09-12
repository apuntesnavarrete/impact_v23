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
exports.Playerstatistics = void 0;
const openapi = require("@nestjs/swagger");
const matches_entity_1 = require("../matches/matches.entity");
const participants_entity_1 = require("../participants/participants.entity");
const teams_entity_1 = require("../teams/teams.entity");
const typeorm_1 = require("typeorm");
let Playerstatistics = class Playerstatistics {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, teams: { required: true, type: () => require("../teams/teams.entity").Teams }, matches: { required: true, type: () => require("../matches/matches.entity").Matches }, participants: { required: true, type: () => require("../participants/participants.entity").Participants }, annotations: { required: true, type: () => Number }, attendance: { required: true, type: () => Boolean } };
    }
};
exports.Playerstatistics = Playerstatistics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Playerstatistics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teams_entity_1.Teams, teams => teams.id),
    __metadata("design:type", teams_entity_1.Teams)
], Playerstatistics.prototype, "teams", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matches_entity_1.Matches, matches => matches.id),
    __metadata("design:type", matches_entity_1.Matches)
], Playerstatistics.prototype, "matches", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participants_entity_1.Participants, participants => participants.id),
    __metadata("design:type", participants_entity_1.Participants)
], Playerstatistics.prototype, "participants", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Playerstatistics.prototype, "annotations", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Playerstatistics.prototype, "attendance", void 0);
exports.Playerstatistics = Playerstatistics = __decorate([
    (0, typeorm_1.Entity)()
], Playerstatistics);
//# sourceMappingURL=player-statistics.entity.js.map