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
exports.ChampionsTeamsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const champions_teams_entity_1 = require("./champions-teams.entity");
const typeorm_2 = require("typeorm");
let ChampionsTeamsService = class ChampionsTeamsService {
    constructor(ChampionsTeamsRepository) {
        this.ChampionsTeamsRepository = ChampionsTeamsRepository;
    }
    async all() {
        const tournaments = await this.ChampionsTeamsRepository.find({
            relations: ['teams', 'tournaments'],
        });
        return tournaments;
    }
    async TournamentsById(id, data) {
        return this.ChampionsTeamsRepository.update(id, data);
    }
    async get(id) {
        return this.ChampionsTeamsRepository.findBy({ id: id });
    }
    async create(data) {
        return this.ChampionsTeamsRepository.save(data);
    }
    async delete(id) {
        return this.ChampionsTeamsRepository.delete(id);
    }
};
exports.ChampionsTeamsService = ChampionsTeamsService;
exports.ChampionsTeamsService = ChampionsTeamsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(champions_teams_entity_1.ChampionsTeams)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChampionsTeamsService);
//# sourceMappingURL=champions-teams.service.js.map