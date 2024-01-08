"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionsPlayersModule = void 0;
const common_1 = require("@nestjs/common");
const champions_players_controller_1 = require("./champions-players.controller");
const typeorm_1 = require("@nestjs/typeorm");
const champions_players_entity_1 = require("./champions-players.entity");
const champions_players_service_1 = require("./champions-players.service");
let ChampionsPlayersModule = class ChampionsPlayersModule {
};
exports.ChampionsPlayersModule = ChampionsPlayersModule;
exports.ChampionsPlayersModule = ChampionsPlayersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([champions_players_entity_1.ChampionsPlayers])
        ],
        controllers: [champions_players_controller_1.ChampionsPlayersController],
        providers: [champions_players_service_1.ChampionsPlayersService]
    })
], ChampionsPlayersModule);
//# sourceMappingURL=champions-players.module.js.map