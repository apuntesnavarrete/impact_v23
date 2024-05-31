"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const participants_module_1 = require("./participants/participants.module");
const teams_module_1 = require("./teams/teams.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const categories_module_1 = require("./categories/categories.module");
const leagues_module_1 = require("./leagues/leagues.module");
const tournaments_module_1 = require("./tournaments/tournaments.module");
const matches_module_1 = require("./matches/matches.module");
const player_statistics_module_1 = require("./player-statistics/player-statistics.module");
const rosters_module_1 = require("./rosters/rosters.module");
const santions_module_1 = require("./santions/santions.module");
const champions_players_module_1 = require("./champions-players/champions-players.module");
const players_standout_module_1 = require("./players-standout/players-standout.module");
const champions_teams_module_1 = require("./champions-teams/champions-teams.module");
const teams_tournament_module_1 = require("./teams-tournament/teams-tournament.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '..', 'public'),
                serveRoot: '/public',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.HOST,
                port: parseInt(process.env.PORTDB),
                username: 'root',
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
                autoLoadEntities: true,
                synchronize: true
            }),
            participants_module_1.ParticipantsModule,
            teams_module_1.TeamsModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            categories_module_1.CategoriesModule,
            leagues_module_1.LeaguesModule,
            tournaments_module_1.TournamentsModule,
            matches_module_1.MatchesModule,
            player_statistics_module_1.PlayerStatisticsModule,
            rosters_module_1.RostersModule,
            santions_module_1.SantionsModule,
            champions_teams_module_1.ChampionsTeamsModule,
            champions_players_module_1.ChampionsPlayersModule,
            players_standout_module_1.PlayersStandoutModule,
            teams_tournament_module_1.TeamsTournamentModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map