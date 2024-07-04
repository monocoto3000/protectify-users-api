import { User } from '../../models/user.model';
import connection from '../../config/db';

const getUserByEmailService = async (email: string): Promise<User | null> => {
    const [rows] = await (await connection).execute('SELECT * FROM users WHERE email = ?', [email]);
    const users = rows as User[];
    return users.length ? users[0] : null;
};

export default getUserByEmailService; 