import { User } from "../../models/user.model";
import connection from "../../config/db";

const getUserByIdService = async (userId: number): Promise<User | null> => {
    const [rows] = await (await connection).execute('SELECT * FROM rooms WHERE id = ?', [userId]);
    const users = rows as User[];
    return users.length > 0 ? users[0] : null;
};

export default getUserByIdService;