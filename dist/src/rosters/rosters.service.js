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
exports.RostersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rosters_entity_1 = require("./rosters.entity");
let RostersService = class RostersService {
    constructor(RostersRepository) {
        this.RostersRepository = RostersRepository;
    }
    async all() {
        const tournaments = await this.RostersRepository.find({
            relations: ['tournaments', 'participants', 'teams'],
        });
        return tournaments;
    }
    async rostersById(id, data) {
        return this.RostersRepository.update(id, data);
    }
    async get(id) {
        return this.RostersRepository.findBy({ id: id });
    }
    async create(data) {
        return this.RostersRepository.save(data);
    }
    async delete(id) {
        return this.RostersRepository.delete(id);
    }
};
exports.RostersService = RostersService;
exports.RostersService = RostersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rosters_entity_1.Rosters)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RostersService);
//# sourceMappingURL=rosters.service.js.map