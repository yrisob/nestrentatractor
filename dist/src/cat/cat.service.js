"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const crud_service_1 = require("../crud/crud.service");
const cat_entity_1 = require("../entities/cat.entity");
let CatService = class CatService extends crud_service_1.CrudService(cat_entity_1.CatEntity) {
    getCatsByName(inner_name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (inner_name) {
                try {
                    const foundCats = yield this.getRepository().find({
                        where: {
                            name: inner_name,
                        },
                    });
                }
                catch (e) {
                    throw new common_1.BadRequestException(e.message);
                }
            }
            else {
                throw new common_1.BadRequestException(`Uncorrect param name=${inner_name}`);
            }
        });
    }
};
CatService = __decorate([
    common_1.Injectable()
], CatService);
exports.CatService = CatService;
//# sourceMappingURL=cat.service.js.map