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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("../config/config");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    registrate(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let status = {
                success: true,
                message: 'user registrated',
            };
            try {
                yield this.userService.create(user);
            }
            catch (error) {
                status = { success: false, message: error };
            }
            return status;
        });
    }
    createToken(user) {
        console.log('get the expiration');
        const expiresIn = config_1.Config.expiresIn;
        console.log('sign the token');
        console.log(user);
        const accessToken = jwt.sign({
            id: user.id,
            email: user.email,
            phone: user.phone,
            name: user.name,
        }, config_1.Config.jwtSecretKey, { expiresIn });
        console.log('return the token');
        console.log(accessToken);
        return {
            expiresIn,
            accessToken,
        };
    }
    validateUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.findById(payload.id);
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map