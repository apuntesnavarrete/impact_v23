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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tournaments = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const categories_entity_1 = require("../categories/categories.entity");
const leagues_entity_1 = require("../leagues/leagues.entity");
const typeorm_1 = require("typeorm");
let Tournaments = class Tournaments {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, idName: { required: true, type: () => String }, description: { required: true, type: () => String }, date_fundation: { required: true, type: () => String }, leagues: { required: true, type: () => require("../leagues/leagues.entity").Leagues }, categories: { required: true, type: () => require("../categories/categories.entity").Categories }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
};
exports.Tournaments = Tournaments;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tournaments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Tournaments.prototype, "idName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Tournaments.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 4,
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], Tournaments.prototype, "date_fundation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => leagues_entity_1.Leagues, leagues => leagues.id),
    __metadata("design:type", leagues_entity_1.Leagues)
], Tournaments.prototype, "leagues", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categories_entity_1.Categories, categories => categories.id),
    __metadata("design:type", categories_entity_1.Categories)
], Tournaments.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tournaments.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Tournaments.prototype, "updatedAt", void 0);
exports.Tournaments = Tournaments = __decorate([
    (0, typeorm_1.Entity)()
], Tournaments);
//# sourceMappingURL=tournaments.entity.js.map