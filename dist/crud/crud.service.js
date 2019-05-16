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
function CrudService(typeServiceRepository, typeEntity) {
    class CrudServiceHost {
        create(dto) {
            return __awaiter(this, void 0, void 0, function* () {
                const creatableEntity = validate_class_1.getEntityMadeOfDto(new typeEntity(), dto);
                if (!creatableEntity) {
                    throw new Error('expected data for entity ');
                }
                else {
                    return this.serviceRepository.save(creatableEntity);
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
                    throw new Error(`Entity with id=${id} not found`);
                }
                else {
                    foundEntity = validate_class_1.getEntityMadeOfDto(foundEntity, dto);
                    if (!foundEntity) {
                        throw new Error('expected data for entity ');
                    }
                    else {
                        return this.serviceRepository.save(foundEntity);
                    }
                }
            });
        }
        delete(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const itemForDel = yield this.serviceRepository.findOne(id);
                if (itemForDel) {
                    return this.serviceRepository.remove(itemForDel);
                }
                else {
                    throw new Error('element not found');
                }
                return;
            });
        }
    }
    __decorate([
        common_1.Inject(typeEntity),
        __metadata("design:type", Object)
    ], CrudServiceHost.prototype, "serviceRepository", void 0);
    return CrudServiceHost;
}
exports.CrudService = CrudService;
//# sourceMappingURL=crud.service.js.map