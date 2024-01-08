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
exports.PlayersStandoutService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const players_standout_entity_1 = require("./players-standout.entity");
let PlayersStandoutService = class PlayersStandoutService {
    constructor(PlayersStandoutRepository) {
        this.PlayersStandoutRepository = PlayersStandoutRepository;
    }
    async all() {
        const tournaments = await this.PlayersStandoutRepository.find({
            relations: ['teams', 'tournaments', 'participants'],
        });
        return tournaments;
    }
    async TournamentsById(id, data) {
        return this.PlayersStandoutRepository.update(id, data);
    }
    async get(id) {
        return this.PlayersStandoutRepository.findBy({ id: id });
    }
    async create(data) {
        return this.PlayersStandoutRepository.save(data);
    }
    async delete(id) {
        return this.PlayersStandoutRepository.delete(id);
    }
};
exports.PlayersStandoutService = PlayersStandoutService;
exports.PlayersStandoutService = PlayersStandoutService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(players_standout_entity_1.PlayersStandout)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlayersStandoutService);
//# sourceMappingURL=players-standout.service.js.map