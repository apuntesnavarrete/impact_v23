"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RostersModule = void 0;
const common_1 = require("@nestjs/common");
const rosters_controller_1 = require("./rosters.controller");
const rosters_service_1 = require("./rosters.service");
const typeorm_1 = require("@nestjs/typeorm");
const rosters_entity_1 = require("./rosters.entity");
let RostersModule = class RostersModule {
};
exports.RostersModule = RostersModule;
exports.RostersModule = RostersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([rosters_entity_1.Rosters])
        ],
        controllers: [rosters_controller_1.RostersController],
        providers: [rosters_service_1.RostersService]
    })
], RostersModule);
//# sourceMappingURL=rosters.module.js.map