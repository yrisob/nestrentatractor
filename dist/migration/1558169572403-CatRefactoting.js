"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class CatRefactoting1558169572403 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.addColumn('cat', new typeorm_1.TableColumn({
                name: 'createdDate',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
            }));
            queryRunner.addColumn('cat', new typeorm_1.TableColumn({
                name: 'updatedDate',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
                onUpdate: 'CURRENT_TIMESTAMP',
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.dropColumn('cat', 'createdDate');
            queryRunner.dropColumn('cat', 'updatedDate');
        });
    }
}
exports.CatRefactoting1558169572403 = CatRefactoting1558169572403;
//# sourceMappingURL=1558169572403-CatRefactoting.js.map