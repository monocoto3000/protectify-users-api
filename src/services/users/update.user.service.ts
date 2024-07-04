import { User } from "../../models/user.model";
import connection from "../../config/db";

const updateUserService = async (user: User, userId: number): Promise<void> => {
    const { name, last_name, second_last_name, email } = user;
    const updateFields = Object.entries(user)
        .filter(([key, value]) => value !== null && key !== 'id')
        .map(([key]) => `${key} = ?`)
        .join(', ');
    const params = Object.values(user)
        .filter(value => value !== null);
    params.push(userId);
    const updateQuery = `UPDATE users SET ${updateFields} WHERE id = ?`;
    await (await connection).execute(updateQuery, params);
};

export default updateUserService;
