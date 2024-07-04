import connection from "../config/db";

interface CountResult {
    count: number;
}

export const isEmailTaken = async (email: string): Promise<boolean> => {
    const [rows] = await (await connection).execute('SELECT COUNT(*) as count FROM users WHERE email = ?', [email]);
    const result = rows as CountResult[];
    const count = result[0].count;
    return count > 0;
};

export default isEmailTaken;