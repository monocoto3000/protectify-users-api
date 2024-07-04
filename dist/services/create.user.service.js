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
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = __importDefault(require("../config/db"));
const email_util_1 = require("../utils/email.util");
const password_util_1 = __importDefault(require("../utils/password.util"));
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, last_name, second_last_name, email, password } = user;
    if (yield (0, email_util_1.isEmailTaken)(email)) {
        throw new Error('Email already in use');
    }
    if (yield (0, password_util_1.default)(password)) {
        throw new Error('Password must be 8 characters long');
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    yield (yield db_1.default).execute('INSERT INTO users (name, last_name, second_last_name, email, password) VALUES (?, ?, ?, ?, ?)', [name, last_name, second_last_name, email, hashedPassword]);
});
exports.default = createUserService;
