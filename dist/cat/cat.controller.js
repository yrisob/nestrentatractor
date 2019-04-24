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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cat_service_1 = require("./cat.service");
const cat_1 = require("../models/cat");
const passport_1 = require("@nestjs/passport");
let CatController = class CatController {
    constructor(catSetvice) {
        this.catSetvice = catSetvice;
    }
    create(createCat) {
        return __awaiter(this, void 0, void 0, function* () {
            this.catSetvice.create(createCat);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.catSetvice.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.catSetvice.findById(id);
        });
    }
    update(id, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCat = this.catSetvice.update(+id, newData);
            if (updatedCat) {
                return updatedCat;
            }
            else {
                throw new common_1.NotFoundException(`Cat with the id=${id} not found`);
            }
        });
    }
};
__decorate([
    common_1.Post(),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cat_1.Cat]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "create", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "findById", null);
__decorate([
    common_1.Patch(':id'),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cat_1.Cat]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "update", null);
CatController = __decorate([
    common_1.Controller('cat'),
    __metadata("design:paramtypes", [cat_service_1.CatService])
], CatController);
exports.CatController = CatController;
//# sourceMappingURL=cat.controller.js.map