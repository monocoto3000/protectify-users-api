import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import getUserByEmailService from './getByEmail.user.service';
import * as dotenv from 'dotenv';

dotenv.config();

const loginService = async (email: string, password: string): Promise<any> => {
  const user = await getUserByEmailService(email);
  if (!user) {
    throw new Error('Credenciales invalidas');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Credenciales invalidas');
  }
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, { expiresIn: '24h' });
  return ({token, user})
};

export default loginService;
