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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const validate_class_1 = require("../utils/validate.class");
function CrudService(typeEntity) {
    let CrudServiceHost = class CrudServiceHost {
        constructor(connection) {
            this.connection = connection;
            this.serviceRepository = connection.getRepository(typeEntity);
        }
        getRepository() {
            return this.serviceRepository;
        }
        create(dto) {
            return __awaiter(this, void 0, void 0, function* () {
                const someEntity = new typeEntity();
                const creatableEntity = validate_class_1.getEntityMadeOfDto(someEntity, dto);
                if (!creatableEntity) {
                    throw new common_1.BadRequestException('expected data for entity');
                }
                else {
                    try {
                        const result = yield this.serviceRepository.save(creatableEntity);
                        return result;
                    }
                    catch (e) {
                        throw new common_1.BadRequestException(e.message);
                    }
                }
            });
        }
        findAll() {
            return __awaiter(this, void 0, void 0, function* () {
                return this.serviceRepository.find();
            });
        }
        findById(id) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.serviceRepository.findOne(id);
            });
        }
        update(id, dto) {
            return __awaiter(this, void 0, void 0, function* () {
                let foundEntity = yield this.serviceRepository.findOne(id);
                if (!foundEntity) {
                    throw new common_1.NotFoundException(`Entity with id=${id} not found`);
                }
                else {
                    foundEntity = validate_class_1.getEntityMadeOfDto(foundEntity, dto);
                    if (!foundEntity) {
                        throw new common_1.BadRequestException('expected data for entity');
                    }
                    else {
                        try {
                            const savedEntity = yield this.serviceRepository.save(foundEntity);
                            return savedEntity;
                        }
                        catch (e) {
                            throw new common_1.BadRequestException({
                                statusCode: 400,
                                error: e.message,
                            });
                        }
                    }
                }
            });
        }
        delete(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const itemForDel = yield this.serviceRepository.findOne(id);
                if (itemForDel) {
                    try {
                        const removedEntity = yield this.serviceRepository.remove(itemForDel);
                        return removedEntity;
                    }
                    catch (e) {
                        throw new common_1.BadRequestException(e.message);
                    }
                }
                else {
                    throw new common_1.NotFoundException(`element with id=${id} not found`);
                }
                return;
            });
        }
    };
    CrudServiceHost = __decorate([
        __param(0, typeorm_1.InjectConnection('default')),
        __metadata("design:paramtypes", [typeorm_2.Connection])
    ], CrudServiceHost);
    return CrudServiceHost;
}
exports.CrudService = CrudService;
//# sourceMappingURL=crud.service.js.map