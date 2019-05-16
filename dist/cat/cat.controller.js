"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_service_1 = require("./cat.service");
const cat_1 = require("../models/cat");
const crud_controller_1 = require("../crud/crud.controller");
const passport_1 = require("@nestjs/passport");
class CatController extends crud_controller_1.CrudController(cat_service_1.CatService, 'cat', cat_1.Cat, {
    deleteGuard: passport_1.AuthGuard('jwt'),
}) {
}
exports.CatController = CatController;
//# sourceMappingURL=cat.controller.js.map