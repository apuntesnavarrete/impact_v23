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
exports.ChampionsPlayers = void 0;
const openapi = require("@nestjs/swagger");
const participants_entity_1 = require("../participants/participants.entity");
const teams_entity_1 = require("../teams/teams.entity");
const tournaments_entity_1 = require("../tournaments/tournaments.entity");
const typeorm_1 = require("typeorm");
let ChampionsPlayers = class ChampionsPlayers {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, teams: { required: true, type: () => require("../teams/teams.entity").Teams }, tournaments: { required: true, type: () => require("../tournaments/tournaments.entity").Tournaments }, participants: { required: true, type: () => require("../participants/participants.entity").Participants } };
    }
};
exports.ChampionsPlayers = ChampionsPlayers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ChampionsPlayers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teams_entity_1.Teams, teams => teams.id),
    __metadata("design:type", teams_entity_1.Teams)
], ChampionsPlayers.prototype, "teams", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tournaments_entity_1.Tournaments, tournaments => tournaments.id),
    __metadata("design:type", tournaments_entity_1.Tournaments)
], ChampionsPlayers.prototype, "tournaments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participants_entity_1.Participants, participants => participants.id),
    __metadata("design:type", participants_entity_1.Participants)
], ChampionsPlayers.prototype, "participants", void 0);
exports.ChampionsPlayers = ChampionsPlayers = __decorate([
    (0, typeorm_1.Entity)()
], ChampionsPlayers);
//# sourceMappingURL=champions-players.entity.js.map