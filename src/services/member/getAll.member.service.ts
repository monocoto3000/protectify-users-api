import connection from "../../config/db";
import { Member } from "../../models/member.model";

const getAllMemberService = async (): Promise<Member[]> => {
    const [rows] = await (await connection).execute('SELECT id,name,last_name,second_last_name,created_by,created_at FROM members');
    return rows as Member[];
}

export default getAllMemberService;