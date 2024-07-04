import { User } from '../../models/user.model';
import bcrypt from 'bcrypt';
import connection from '../../config/db';
import { isEmailTaken } from '../../utils/email.util';
import isPasswordValid from '../../utils/password.util';

const createUserService = async (user: User): Promise<void> => {
    const { name, last_name, second_last_name, email, password } = user;
    if (await isEmailTaken(email)) {
        throw new Error('Email already in use')
    }
    if (await isPasswordValid(password)) {
        throw new Error('Password must be 8 characters long')
    }
    const hashedPassword = await bcrypt.hash(password, 10); 
    await (await connection).execute('INSERT INTO users (name, last_name, second_last_name, email, password) VALUES (?, ?, ?, ?, ?)', [name, last_name, second_last_name, email, hashedPassword]);
};

export default createUserService; 