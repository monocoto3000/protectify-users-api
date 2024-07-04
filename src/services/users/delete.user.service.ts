import { User } from "../../models/user.model";
import connection from "../../config/db";

const deleteUserService = async (userId: number): Promise<void> => {
    await (await connection).execute('DELETE FROM users WHERE id = ?', [userId]);
};

export default deleteUserService;