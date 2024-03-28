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
exports.TeamsTournamentService = void 0;
const common_1 = require("@nestjs/common");
const teams_tournament_entity_1 = require("./entities/teams-tournament.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TeamsTournamentService = class TeamsTournamentService {
    constructor(teamsTournamentRepository) {
        this.teamsTournamentRepository = teamsTournamentRepository;
    }
    async create(createTeamsTournamentDto) {
        const { teamsId, tournamentsId, participantsId } = createTeamsTournamentDto;
        const newTeamsTournament = this.teamsTournamentRepository.create({
            teams: { id: teamsId },
            tournaments: { id: tournamentsId },
            participants: { id: participantsId }
        });
        return await this.teamsTournamentRepository.save(newTeamsTournament);
    }
    async findAll() {
        const santions = await this.teamsTournamentRepository.find({
            relations: ['teams', 'participants', 'tournaments'],
        });
        return santions;
    }
    findOne(id) {
        return `This action returns a #${id} teamsTournament`;
    }
    async update(id, updateTeamsTournamentDto) {
        const data = await this.teamsTournamentRepository.findOne({ where: { id }, relations: ['teams', 'tournaments', 'participants'] });
        if (!data) {
            throw new Error(`TeamsTournament with id ${id} not found`);
        }
        if (updateTeamsTournamentDto.teamsId) {
            data.teams.id = updateTeamsTournamentDto.teamsId;
        }
        if (updateTeamsTournamentDto.participantsId) {
            data.participants.id = updateTeamsTournamentDto.participantsId;
        }
        if (updateTeamsTournamentDto.tournamentsId) {
            data.tournaments.id = updateTeamsTournamentDto.tournamentsId;
        }
        const updateResult = await this.teamsTournamentRepository.update(id, data);
        if (updateResult.affected === 0) {
            throw new Error(`Failed to update TeamsTournament with id ${id}`);
        }
        return data.id;
    }
    async remove(id) {
        const data = await this.teamsTournamentRepository.findOne({ where: { id }, relations: ['teams', 'tournaments', 'participants'] });
        if (!data) {
            throw new Error(`TeamsTournament with id ${id} not found`);
        }
        const deleteResult = await this.teamsTournamentRepository.delete(id);
        if (deleteResult.affected === 0) {
            return false;
        }
        return true;
    }
};
exports.TeamsTournamentService = TeamsTournamentService;
exports.TeamsTournamentService = TeamsTournamentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(teams_tournament_entity_1.TeamsTournament)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeamsTournamentService);
//# sourceMappingURL=teams-tournament.service.js.map