"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStatisticsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const player_statistics_entity_1 = require("./player-statistics.entity");
const player_statistics_service_1 = require("./player-statistics.service");
const player_statistics_controller_1 = require("./player-statistics.controller");
let PlayerStatisticsModule = class PlayerStatisticsModule {
};
exports.PlayerStatisticsModule = PlayerStatisticsModule;
exports.PlayerStatisticsModule = PlayerStatisticsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([player_statistics_entity_1.Playerstatistics])
        ],
        controllers: [player_statistics_controller_1.PlayersStatisticsController],
        providers: [player_statistics_service_1.PlayersStatisticsService]
    })
], PlayerStatisticsModule);
//# sourceMappingURL=player-statistics.module.js.map