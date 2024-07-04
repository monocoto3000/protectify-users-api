import { User } from "../../models/user.model";
import connection from "../../config/db";

const getAllUsersService = async (): Promise<User[] | null> => {
    const [rows] = await (await connection).execute('SELECT * FROM users');
    const users = rows as User[];
    return users.length > 0 ? users : [];
};

export default getAllUsersService;