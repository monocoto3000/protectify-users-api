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
exports.getAllRooms = void 0;
const getAll_room_service_1 = __importDefault(require("../../services/rooms/getAll.room.service"));
const getAllRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created_by = parseInt(req.params.id, 10);
        const rooms = yield (0, getAll_room_service_1.default)(created_by);
        if (rooms) {
            res.status(200).json(rooms);
        }
        else {
            res.status(404).json({ message: 'Rooms not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting rooms', error });
    }
});
exports.getAllRooms = getAllRooms;
