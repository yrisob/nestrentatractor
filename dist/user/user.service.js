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
let UserService = class UserService {
    constructor() {
        this.users = [
            {
                id: 1,
                name: 'Yura Sobolev',
                email: 'yrisob@gmail.com',
                phone: '79216570158',
                password: '1234',
                confirmedEmail: true,
                confirmedPhone: true,
            },
            {
                id: 2,
                name: 'Natalia Sobolev',
                email: 'natyakov@gmail.com',
                phone: '79216551396',
                password: 'qwerty',
                confirmedEmail: true,
                confirmedPhone: true,
            },
        ];
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find(usr => usr.id === id);
        });
    }
    create(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let newId = 0;
            const count = this.users.length;
            if (count >= 0) {
                newId = this.users[count - 1].id;
            }
            this.users.push({
                id: newId + 1,
                name: newUser.name,
                password: newUser.password,
                email: newUser.email,
                phone: newUser.phone,
                confirmedEmail: newUser.confirmedEmail,
                confirmedPhone: newUser.confirmedPhone,
            });
        });
    }
    update(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = this.users.find(usr => usr.id === id);
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
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.users.findIndex(usr => usr.id === id);
            if (index > -1) {
                this.users.splice(index, 1);
            }
            else {
                throw new Error('element not found');
            }
        });
    }
    findOneByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find(usr => usr.email === email);
        });
    }
    getUserByLoginData(login) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find(usr => usr.email === login.email && usr.password === login.password);
        });
    }
};
UserService = __decorate([
    common_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map