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
exports.TeamsTournamentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const teams_tournament_service_1 = require("./teams-tournament.service");
const create_teams_tournament_dto_1 = require("./dto/create-teams-tournament.dto");
const update_teams_tournament_dto_1 = require("./dto/update-teams-tournament.dto");
let TeamsTournamentController = class TeamsTournamentController {
    constructor(teamsTournamentService) {
        this.teamsTournamentService = teamsTournamentService;
    }
    create(createTeamsTournamentDto) {
        console.log(createTeamsTournamentDto);
        return this.teamsTournamentService.create(createTeamsTournamentDto);
    }
    findAll() {
        return this.teamsTournamentService.findAll();
    }
    findOne(id) {
        return this.teamsTournamentService.findOne(+id);
    }
    update(id, updateTeamsTournamentDto) {
        return this.teamsTournamentService.update(+id, updateTeamsTournamentDto);
    }
    remove(id) {
        return this.teamsTournamentService.remove(+id);
    }
};
exports.TeamsTournamentController = TeamsTournamentController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/teams-tournament.entity").TeamsTournament }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teams_tournament_dto_1.CreateTeamsTournamentDto]),
    __metadata("design:returntype", void 0)
], TeamsTournamentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/teams-tournament.entity").TeamsTournament] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeamsTournamentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamsTournamentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teams_tournament_dto_1.UpdateTeamsTournamentDto]),
    __metadata("design:returntype", void 0)
], TeamsTournamentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamsTournamentController.prototype, "remove", null);
exports.TeamsTournamentController = TeamsTournamentController = __decorate([
    (0, common_1.Controller)('teams-tournament'),
    __metadata("design:paramtypes", [teams_tournament_service_1.TeamsTournamentService])
], TeamsTournamentController);
//# sourceMappingURL=teams-tournament.controller.js.map