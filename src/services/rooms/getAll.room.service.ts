import { Room } from "../../models/room.model";
import connection from "../../config/db";

const getAllRoomsService = async (created_by: number): Promise<Room[] | null> => {
    const [rows] = await (await connection).execute('SELECT * FROM rooms WHERE created_by = ?', [created_by]);
    const users = rows as Room[];
    return users.length > 0 ? users : [];
};

export default getAllRoomsService;