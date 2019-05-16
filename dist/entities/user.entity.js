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
const typeorm_1 = require("typeorm");
const versionbase_entity_1 = require("./versionbase.entity");
var UserRole;
(function (UserRole) {
    UserRole[UserRole["customer"] = 0] = "customer";
    UserRole[UserRole["operator"] = 1] = "operator";
    UserRole[UserRole["manager"] = 2] = "manager";
    UserRole[UserRole["administrator"] = 3] = "administrator";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let User = class User extends versionbase_entity_1.VersionBase {
};
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 150, primary: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 12, primary: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: UserRole, default: UserRole.customer }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    typeorm_1.Column('boolean', { default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "confirmedEmail", void 0);
__decorate([
    typeorm_1.Column('boolean', { default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "confirmedPhone", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map