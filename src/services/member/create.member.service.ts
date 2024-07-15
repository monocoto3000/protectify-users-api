import { Member } from "../../models/member.model";
import connection from '../../config/db';

const createdMemberService = async (member:Member,created_by:number): Promise<void> => {
    const { name, last_name, second_last_name } = member;
    await (await connection).execute('INSERT INTO members (name, last_name, second_last_name, created_by,created_at) VALUES (?, ?, ?, ?, ?)', [name, last_name, second_last_name, created_by, new Date()])
}
export default createdMemberService;