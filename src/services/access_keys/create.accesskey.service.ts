import { Access_keys } from "../../models/access.model";
import connection from '../../config/db';

const createdAccessKeyService = async (access_key:Access_keys): Promise<void> => {
    const { name, last_name, second_last_name, created_by } = access_key;
    await (await connection).execute('INSERT INTO access_keys (name, last_name, second_last_name, created_by,created_at) VALUES (?, ?, ?, ?, ?)', [name, last_name, second_last_name, created_by, new Date()])
}
export default createdAccessKeyService;