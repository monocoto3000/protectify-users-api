import { Room } from "../../models/room.model";
import connection from '../../config/db';

const createRoomService = async (room: Room): Promise<void> => {
    const { name, created_by } = room;
    await (await connection).execute('INSERT INTO rooms (name, created_by) VALUES (?, ?)', [name, created_by])
}

export default createRoomService;