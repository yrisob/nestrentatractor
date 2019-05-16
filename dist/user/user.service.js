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
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findOne(id);
        });
    }
    create(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const insertedUser = {
                name: newUser.name,
                password: newUser.password,
                email: newUser.email,
                phone: newUser.phone,
            };
            yield this.userRepository.save(insertedUser);
        });
    }
    update(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.userRepository.findOne(id);
            if (!foundUser) {
                throw new Error(`User with id=${id} not found`);
            }
            else {
                foundUser.name = updateData.name;
                foundUser.password = updateData.password;
                foundUser.email = updateData.email;
                foundUser.phone = updateData.phone;
                foundUser.confirmedEmail = updateData.confirmedEmail;
                foundUser.confirmedPhone = updateData.confirmedPhone;
                yield this.userRepository.save(foundUser);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const itemForDel = yield this.userRepository.findOne(id);
            if (itemForDel) {
                yield this.userRepository.remove(itemForDel);
            }
            else {
                throw new Error('element not found');
            }
        });
    }
    findOneByEmail(insertEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findOne({ email: insertEmail });
        });
    }
    getUserByLoginData(login) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findOne({
                email: login.email,
                password: login.password,
            });
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map