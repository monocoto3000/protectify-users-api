"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../config/db"));
const updateUserService = (user, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, last_name, second_last_name, email } = user;
    const updateFields = Object.entries(user)
        .filter(([key, value]) => value !== null && key !== 'id')
        .map(([key]) => `${key} = ?`)
        .join(', ');
    const params = Object.values(user)
        .filter(value => value !== null);
    params.push(userId);
    const updateQuery = `UPDATE users SET ${updateFields} WHERE id = ?`;
    yield (yield db_1.default).execute(updateQuery, params);
});
exports.default = updateUserService;
