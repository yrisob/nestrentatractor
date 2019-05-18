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
const validate_class_1 = require("../utils/validate.class");
const default_guard_1 = require("./default_settings/default.guard");
function CrudController(service, prefix, typeDto, { findAllGuard, findByIDGuard, createGuard, updateGuard, deleteGuard, } = {}) {
    let CrudControllerHost = class CrudControllerHost {
        getService() {
            return this.crudService;
        }
        findAll() {
            return __awaiter(this, void 0, void 0, function* () {
                return this.crudService.findAll();
            });
        }
        findById(id) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.crudService.findById(id);
            });
        }
        create(dto) {
            return __awaiter(this, void 0, void 0, function* () {
                const validationResult = validate_class_1.validateClasses(new typeDto(), dto);
                if (!validationResult) {
                    return this.crudService.create(dto);
                }
                else {
                    throw new common_1.BadRequestException({ error: validationResult }, 'bad request');
                }
            });
        }
        update(id, dto) {
            return __awaiter(this, void 0, void 0, function* () {
                const validationResult = validate_class_1.validateClasses(new typeDto(), dto);
                if (!validationResult) {
                    return this.crudService.update(id, dto);
                }
                else {
                    throw new common_1.BadRequestException({ error: validationResult }, 'bad request');
                }
            });
        }
        delete(id) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.crudService.delete(id);
            });
        }
    };
    __decorate([
        common_1.Inject(service),
        __metadata("design:type", Object)
    ], CrudControllerHost.prototype, "crudService", void 0);
    __decorate([
        common_1.Get(),
        common_1.UseGuards(findAllGuard ? findAllGuard : default_guard_1.DefaultGuard),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CrudControllerHost.prototype, "findAll", null);
    __decorate([
        common_1.Get(':id'),
        common_1.UseGuards(findByIDGuard ? findByIDGuard : default_guard_1.DefaultGuard),
        __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CrudControllerHost.prototype, "findById", null);
    __decorate([
        common_1.Post(),
        common_1.UseGuards(createGuard ? createGuard : default_guard_1.DefaultGuard),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CrudControllerHost.prototype, "create", null);
    __decorate([
        common_1.Patch(':id'),
        common_1.UseGuards(updateGuard ? updateGuard : default_guard_1.DefaultGuard),
        __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], CrudControllerHost.prototype, "update", null);
    __decorate([
        common_1.Delete(':id'),
        common_1.UseGuards(deleteGuard ? deleteGuard : default_guard_1.DefaultGuard),
        __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CrudControllerHost.prototype, "delete", null);
    CrudControllerHost = __decorate([
        common_1.Controller(prefix)
    ], CrudControllerHost);
    return CrudControllerHost;
}
exports.CrudController = CrudController;
//# sourceMappingURL=crud.controller.js.map