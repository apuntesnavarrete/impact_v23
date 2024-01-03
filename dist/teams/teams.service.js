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
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const teams_entity_1 = require("./teams.entity");
const typeorm_2 = require("typeorm");
const cache_manager_1 = require("@nestjs/cache-manager");
let TeamsService = class TeamsService {
    constructor(TeamsRepository, cacheManager) {
        this.TeamsRepository = TeamsRepository;
        this.cacheManager = cacheManager;
    }
    async all() {
        const key = 'teams-find-all';
        let teams = await this.cacheManager.get(key);
        if (!teams) {
            console.log('Data not found in cache. Fetching from source.');
            teams = await this.TeamsRepository.find({
                relations: ['participants'],
            });
            await this.cacheManager.set(key, teams, 6000 * 10);
            console.log('Storing data in cache.');
        }
        else {
            console.log('Returning cached data.');
        }
        return teams;
    }
    async teamById(id, data) {
        return this.TeamsRepository.update(id, data);
    }
    async get(id) {
        return this.TeamsRepository.findBy({ id: id });
    }
    async create(data) {
        return this.TeamsRepository.save(data);
    }
    async delete(id) {
        return this.TeamsRepository.delete(id);
    }
};
exports.TeamsService = TeamsService;
exports.TeamsService = TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(teams_entity_1.Teams)),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object])
], TeamsService);
//# sourceMappingURL=teams.service.js.map