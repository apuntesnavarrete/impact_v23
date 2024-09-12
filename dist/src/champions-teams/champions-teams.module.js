"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionsTeamsModule = void 0;
const common_1 = require("@nestjs/common");
const champions_teams_service_1 = require("./champions-teams.service");
const typeorm_1 = require("@nestjs/typeorm");
const champions_teams_entity_1 = require("./champions-teams.entity");
const champions_teams_controller_1 = require("./champions-teams.controller");
let ChampionsTeamsModule = class ChampionsTeamsModule {
};
exports.ChampionsTeamsModule = ChampionsTeamsModule;
exports.ChampionsTeamsModule = ChampionsTeamsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([champions_teams_entity_1.ChampionsTeams])
        ],
        controllers: [champions_teams_controller_1.ChampionsTeamsController],
        providers: [champions_teams_service_1.ChampionsTeamsService]
    })
], ChampionsTeamsModule);
//# sourceMappingURL=champions-teams.module.js.map